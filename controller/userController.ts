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
