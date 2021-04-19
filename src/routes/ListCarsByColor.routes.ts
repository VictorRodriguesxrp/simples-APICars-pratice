import { Router } from "express";

import { ListCarController } from "../useCases/ListCarController"

const listCarsRouter = Router();
const listCarController = new ListCarController();


listCarsRouter.get("/:color", listCarController.execute);

export { listCarsRouter }