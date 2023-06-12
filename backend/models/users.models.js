import Connection from "../config/Database.js";

//async query
// const runQuery = (query, params) => {
//   return new Promise((resolve, reject) => {
//     Connection.query(query, params, (err, result) => {
//       if (err) {
//         console.log("gagal terhubung ke database!");
//         reject(err);
//       } else {
//         console.log("Terhubung ke Database!");
//         resolve(result);
//       }
//     });
//   });
// };

//read
export const tampilData = (callback) => {
  const queryData = "SELECT * FROM rekom_ditpa";
  Connection.query(queryData, callback);
};

//read by id
export const tampilDataID = (id, callback) => {
  const queryData = "SELECT * FROM rekom_ditpa WHERE id = ?";
  Connection.query(queryData, id, callback);
};

//Insert data baru
export const postData = (user, callback) => {
  const queryData = "INSERT INTO rekom_ditpa SET ?";
  Connection.query(queryData, user, callback);
};

//Update data
export const updateData = (id, updatedUser, callback) => {
  const queryData = "UPDATE rekom_ditpa SET ? WHERE id = ?";
  Connection.query(queryData, [updatedUser, id], callback);
};

//Delete data
export const deleteData = (id, callback) => {
  const queryData = "DELETE FROM rekom_ditpa WHERE id = ?";
  Connection.query(queryData, id, callback);
};
