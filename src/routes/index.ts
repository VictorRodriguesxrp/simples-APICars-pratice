import { Router } from "express";

import { carsRouter } from "./CreateCar.routes"
import { listCarsRouter } from "./ListCarsByColor.routes"
import { deleteCarsRoutes } from "./DeleteCarById.routes"

const router = Router();

router.use("/cars", carsRouter);
router.use("/cars/list", listCarsRouter)
router.use("/cars/delete", deleteCarsRoutes)


export { router }