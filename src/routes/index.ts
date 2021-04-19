import { Router } from "express";

import { carsRouter } from "./CreateCar.routes"
import { listCarsRouter } from "./ListCarsByColor.routes"


const router = Router();

router.use("/cars", carsRouter);
router.use("/cars/list", listCarsRouter)


export { router }