import { Router } from "express";
import { Hobbies } from "../models/Hobbies";

export const hobbyRouter = Router();

hobbyRouter.post('/', async(req, res, next)=>{
    try {
        const hobby = await Hobbies.create(req.body);
        res.status(201).json(hobby);
    } catch (error) {
        next(error);
    }
});


hobbyRouter.get('', async(req, res, next)=>{
    try {
        res.json(await Hobbies.scope(req.query['scope']).findAll());
    } catch (error) {
        
    }
})