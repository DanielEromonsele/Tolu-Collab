import express, { Application, Request, Response } from "express"
import router from "./router/userRouter"


export const mainApp = (app: Application)=>{
    app.use("/api/v1/", router)
    try {
        app.get("/", (req: Request, res: Response)=>{
            try {
                return res.status(200).json({
                    message: "Ready to work..."
                })
            } catch (error) {
                res.status(404).json({
                    message: "Error"
                })
            }
        })
    } catch (error) {
        console.log(error);
        
    }
}