import jwt from "jsonwebtoken";

const AuthMiddleware = (handler) => {
  async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: "Token tidak ada!" });
    }
    try {
      const decoded = jwt.verify(token, "secret-key"); // Pastikan kunci yang digunakan sama dengan yang di login.js
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ message: "Token tidak valid" });
    }
  };
};

export default AuthMiddleware;
