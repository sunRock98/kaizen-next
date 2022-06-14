import User, { UserType } from "../../models/User";
// import { verifyPassword } from "./passwordUtils";
import { serialize } from "cookie";
import { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import jwt from "jsonwebtoken";

export interface LoginParams {
  email: string;
  password: string;
}

const JWT_TOKEN_KEY = process.env.TOKEN_SECRET;

export const cookieOptions = {
  httpOnly: true,
  maxAge: 2592000,
  path: "/",
  sameSite: "Strict",
  secure: process.env.NODE_ENV === "production",
};

export function setCookie(
  res: any,
  name: string,
  value: string,
  options: Record<string, unknown> = {}
): void {
  const stringValue =
    typeof value === "object" ? `j:${JSON.stringify(value)}` : String(value);

  res.setHeader("Set-Cookie", serialize(name, stringValue, options));
}

export async function userFromRequest(
  req: IncomingMessage & { cookies: NextApiRequestCookies }
): Promise<UserType | undefined> {
  const { auth: token } = req.cookies;
  console.log({ token });

  if (!token) return undefined;

  try {
    const { email } = jwt.verify(token, JWT_TOKEN_KEY);
    console.log({ email });

    if (!email) return undefined;

    const user = await User.findOne({
      email,
    });
    console.log({ user });

    if (user) user.password = "";

    return user;
  } catch (error) {
    return undefined;
  }
}
