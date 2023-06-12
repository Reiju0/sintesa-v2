import { createConnection } from "mysql";

const Connection = createConnection({
  host: "localhost",
  user: "root",
  password: "admin1234",
  database: "db_server",
});

// connection
// Connection.connect((err) => {
//   if (err) {
//     console.log("gagal terhubung ke database!");
//   } else {
//     console.log("Terhubung ke Database!");
//   }
// });

//async connection

export default Connection;
