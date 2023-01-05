import { UserInputError, ValidationError } from "apollo-server";
import bcrypt from "bcrypt";

export async function createUserFn(data, dataSource) {
  const userInfo = await createUserInfo(data, dataSource);
  return await dataSource.post("", { ...userInfo });
}

function validateUserPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,30}$/;
  if (!password.match(regex))
    throw new UserInputError(
      "Password must contain at least: One lower case letter, One uppercase letter and one number"
    );
}

async function createUserInfo(data, dataSource) {
  const { firstName, lastName, password } = data;
  let passwordHash;

  if (!firstName || !lastName || !password)
    throw new ValidationError(
      "You have to send firstName, lastName and password."
    );

  validateUserPassword(password);

  const indexRefUser = await dataSource.get("", {
    _limit: 1,
    _sort: "indexRef",
    _order: "desc",
  });
  const indexRef = +indexRefUser[0].indexRef + 1;

  if (password && !data.passwordHash) {
    passwordHash = await bcrypt.hash(password, 12);
    delete data["password"];
  }

  return {
    firstName,
    lastName,
    userName: `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
    indexRef,
    createdAt: new Date().toISOString(),
    passwordHash,
  };
}

export function updateUserFn(id, data, dataSource) {
  if (!id) throw new ValidationError("Missing id");

  return dataSource.patch(id, { ...data });
}

export function deleteUserFn(id, dataSource) {
  if (!id) throw new ValidationError("Missing id");

  const deleted = dataSource.delete(id);
  return !!deleted;
}
