import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Auth = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  // Simpan informasi pengguna yang valid di sini
  const validUser = {
    username: "user",
    password: "password123", // Anda harus mengganti ini dengan pengaturan yang aman
  };

  const { username, password } = req.body;

  // Periksa apakah kredensial valid
  if (
    username === validUser.username &&
    (await bcrypt.compare(password, validUser.password))
  ) {
    // Buat token JWT
    const token = jwt.sign({ username: validUser.username }, "secret-key", {
      expiresIn: "1h",
    });

    // Simpan token di cookie
    res.setHeader("Set-Cookie", `token=${token}; HttpOnly`);

    return res.status(200).json({ message: "Login berhasil" });
  } else {
    return res.status(401).json({ message: "Kredensial tidak valid" });
  }
};

export default Auth;
