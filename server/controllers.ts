import UserA from "./schema";
import { Request, Response } from "express";


export async function validateUser(req:Request, res:Response){
    const email = (req.body as any)?.email;
    const password = (req.body as any)?.password;
    console.log(req.body);
    
    try {
        const user =await UserA.findOne({email: email, password: password});
        if(user){
            console.log("user found "+user);
            res.json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        res.status(500).send(error);
    }
   
}

export async  function createUser(req:Request, res:Response){
    const firstName = (req.body as any)?.firstName;
    const lastName = (req.body as any)?.lastName;
    const email = (req.body as any)?.email;
    const password = (req.body as any)?.password;
    console.log(req.body);
    try {
        const user = await UserA.findOne({email: email});
        if(user!=null){
            console.log("user already exists");
            res.status(200).send({msg:"user already exists"});
        } else {
            
        const user = new UserA({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        await user.save();
        res.status(201).send(user);
        
        }
    } catch (error) {
        res.status(500).send(error);
    }
}