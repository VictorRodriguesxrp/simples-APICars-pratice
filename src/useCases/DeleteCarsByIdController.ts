import { Request, Response } from "express";
import { CarsRepository } from "../repositories/CarsRepository"

export class DeleteCarsByIdController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;

    const carsRepository = CarsRepository.getInstance();

    await carsRepository.deleteCarById(id);
    
    return response.status(200);
  }
}