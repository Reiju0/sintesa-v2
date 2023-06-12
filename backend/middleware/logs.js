export const LogUsers = (req, res, next) => {
  console.log("Terjadi Request ke PATH : ", req.path);
  next();
};
