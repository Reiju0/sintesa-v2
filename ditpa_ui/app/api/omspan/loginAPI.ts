import axios from "axios";

const Login = async () => {
  const username = "dpa_api";
  const password = "AksesDpa23";
  const tahun = "2023";

  try {
    const response = await axios.post(
      "https://spanint.kemenkeu.go.id/apitkd/api/auth/login",
      {
        username: username,
        password: password,
        thang: tahun,
      }
    );
    return response.data.token;
  } catch (error) {
    console.log(error);
  }
};

export default Login;
