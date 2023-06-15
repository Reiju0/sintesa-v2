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

//test tampil join table
export const tampilOlah = (callback) => {
  const queryData =
    "SELECT NO_ND,TANGGAL_ND, NO_SP2D, TGL_SP2D, nd_ditpa, DATE_FORMAT(tgl_nd_ditpa, '%d-%m-20%y') as tanggal_nd_ditpa, DATEDIFF(CONCAT(right(TGL_SP2D, 4),'-', month(STR_TO_DATE(TGL_SP2D, '%d-%m-%y')),'-', day(STR_TO_DATE(TGL_SP2D, '%d-%m-%y'))), rekom_ditpa.tgl_nd_ditpa) AS SELISIH from Table_DAU  LEFT JOIN rekom_ditpa ON Table_DAU.NO_ND = rekom_ditpa.nd_djpk;";
  Connection.query(queryData, callback);
};

//test tampil distinct
export const distinctReff = (callback) => {
  const queryData = "SELECT distinct NO_ND FROM Table_DAU;";
  Connection.query(queryData, callback);
};
