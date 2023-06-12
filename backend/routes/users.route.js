import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUsersId,
  updateUser,
} from "../controllers/users.controller.js";
const Router = express.Router();

Router.get("/users", getUsers);
Router.get("/users/:id", getUsersId);
Router.post("/users", createUser);
Router.put("/users/:id", updateUser);
Router.delete("/users/:id", deleteUser);

export default Router;
