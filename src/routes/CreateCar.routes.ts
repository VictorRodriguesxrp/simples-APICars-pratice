import { Router } from "express";

import { CreateCarsController } from "../useCases/CreateCarController"

const carsRouter = Router();
const createCarsController = new CreateCarsController();


carsRouter.post("/", createCarsController.execute);

export { carsRouter }