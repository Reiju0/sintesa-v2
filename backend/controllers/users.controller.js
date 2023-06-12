import {
  deleteData,
  postData,
  tampilData,
  tampilDataID,
  updateData,
} from "../models/users.models.js";

//controller request all data
export const getUsers = (req, res) => {
  tampilData((err, result) => {
    if (err) {
      console.log("Request Data Error! : ", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json(result);
    }
  });
};

//controller request data by id
export const getUsersId = (req, res) => {
  const userId = req.params.id;
  tampilDataID(userId, (err, result) => {
    if (err) {
      console.log("Request Data Error!", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(404).json({ message: "User not found" });
        console.log("response error ");
      }
    }
  });
};

//controller insert data
export const createUser = (req, res) => {
  const user = req.body;
  postData(user, (err, result) => {
    if (err) {
      console.log("Push Data Gagal!", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      console.log("Push Data Berhasil!");
      res.status(201).json({ message: "User created successfully" });
    }
  });
};

//controller update data
export const updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  updateData(userId, updatedUser, (err, result) => {
    if (err) {
      console.log("gagal update data!", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "User updated successfully" });
      } else {
        console.log("data tidak ditemukan");
        res.status(404).json({ message: "User not found" });
      }
    }
  });
};

//Controller delete data
export const deleteUser = (req, res) => {
  const userId = req.params.id;
  deleteData(userId, (err, result) => {
    if (err) {
      console.log("gagal delete data!", err);
      res.status(500).json({ msg: "Internal server error" });
    } else {
      if (result.affectedRows > 0) {
        res.status(200).json({ msg: "User successfully deleted!" });
      } else {
        console.log("data tidak ditemukan");
        res.status(404).json({ msg: "User not found!" });
      }
    }
  });
};
