import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  console.log('runing token', req.cookies)
  

  const token = req.cookies.access_token;
  console.log(' token ', token)
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_SECREAT_KEY, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    console.log('continue')
    req.user = user;
    next()
  });
};
