import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { validateReg } from "../../helpers/validation";
import { cookieOptions, setCookie } from "../../lib/auth";
import dbConnect from "../../lib/dbConnect";
import User, { UserType } from "../../models/User";

export type RegisterationData = {
  name?: string;
  workPlace?: string;
  email?: string;
  password?: string;
};

export default async function handler(req, res) {
  console.log("someone trying to register");

  const error = validateReg(req.body as RegisterationData);

  if (error) {
    console.log(error.details[0].message);
    return res.status(400).json({ message: error.details[0].message });
  }

  //check if user already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).json({
      message:
        "Такой Email уже зарегистрирован. Обратитесь в отдел контроля качества.",
    });

  //Hash password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create user in DB
  const user = new User({
    name: req.body.name,
    email: req.body.email.toLowerCase(),
    password: hashedPassword,
    workPlace: req.body.workPlace,
  });

  try {
    await user.save();

    user.password = "";

    //create and assign JSOn token
    const secret = process.env.TOKEN_SECRET;

    const token = jwt.sign({ email: user.email }, secret);

    setCookie(res, "auth", token, cookieOptions);

    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
