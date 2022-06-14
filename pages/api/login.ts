import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { validateLogin } from "../../helpers/validation";
import { cookieOptions, setCookie } from "../../lib/auth";
import dbConnect from "../../lib/dbConnect";
import User, { UserType } from "../../models/User";

export default async function handler(req, res) {
  const error = validateLogin(req.body);
  console.log({ error });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  await dbConnect();

  console.log(req.body);

  //check if email  exists in DB
  const user = await User.findOne<UserType>({
    email: req.body.email.toLowerCase(),
  });

  if (!user) {
    console.log("could not find user");

    return res.status(400).json({ message: "Email или пароль неверный." });
  }

  console.log("user found in DB");

  //password checking
  const validPass: boolean = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!validPass) {
    console.log("password is wrong");

    return res.status(400).json({ message: "Неверный пароль" });
  }
  user.password = "";

  console.log("password check pass");

  //create and assign JSOn token
  const secret = process.env.TOKEN_SECRET;

  const token = jwt.sign({ email: user.email }, secret);

  setCookie(res, "auth", token, cookieOptions);

  res.json(user);

  console.log("token assigned");
}
