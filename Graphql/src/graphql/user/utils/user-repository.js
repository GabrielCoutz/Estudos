import { ValidationError } from "apollo-server";

export async function createUserFn(data, dataSource) {
  const userInfo = await createUserInfo(data, dataSource);

  return await dataSource.post("", { ...userInfo });
}

async function createUserInfo(data, dataSource) {
  const { firstName, lastName } = data;

  if (!firstName || !lastName)
    throw new ValidationError("You have to send firstName and lastName.");

  const indexRefUser = await dataSource.get("", {
    _limit: 1,
    _sort: "indexRef",
    _order: "desc",
  });
  const indexRef = +indexRefUser[0].indexRef + 1;

  return {
    firstName,
    lastName,
    userName: `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
    indexRef,
    createdAt: new Date().toISOString(),
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
