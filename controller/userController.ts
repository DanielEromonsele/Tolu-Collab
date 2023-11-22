import { Request, Response } from "express";
import userModel from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { companyName, email, password } = req.body;

    const user = await userModel.create({ companyName, email, password });

    return res.status(201).json({
      msg: "User created",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error creating",
    });
  }
};

export const viewUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    return res.status(201).json({
      msg: "Viewing users",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error creating",
    });
  }
};
export const viewOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.body;

    const user = await userModel.findById(userID);

    return res.status(201).json({
      msg: "Viewing users",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error creating",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.body;

    const user = await userModel.findById(userID);

    return res.status(201).json({
      msg: "Viewing users",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: "Error creating",
    });
  }
};
