const passport = require("passport");

export const authIsAdmin = (req: any, res: any, next: any) => {
  return passport.authenticate("jwt",{ session: false, }, (err: any, user: any) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (user.role === "ADMIN") {
        req.user = user;
        return next();
      }
      res.status(401).json({ error: "Not Admin, not auth" });
    }
  )(req, res, next);
};
