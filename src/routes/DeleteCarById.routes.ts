import { Router } from "express";

import { DeleteCarsByIdController } from "../useCases/DeleteCarsByIdController";

const deleteCarsRoutes = Router();
const deleteCarsByIdController = new DeleteCarsByIdController();

deleteCarsRoutes.delete("/:id", deleteCarsByIdController.execute)

export { deleteCarsRoutes }