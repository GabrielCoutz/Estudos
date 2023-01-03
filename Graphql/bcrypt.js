import { sign, verify } from "jsonwebtoken";

const SECRET_KEY = "abcdefghijklmnopqrstuvwxyz";

(async () => {
  const token = sign(
    {
      userId: "123",
    },
    SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );
  console.log(verify(token, SECRET_KEY));
})();
