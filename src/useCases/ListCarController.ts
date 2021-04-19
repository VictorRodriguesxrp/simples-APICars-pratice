import { Request, Response } from "express";
import { CarsRepository } from "../repositories/CarsRepository"


export class ListCarController {
  async execute(request: Request, response: Response) {
  const { color } = request.params;

  const carsRepository = new CarsRepository();

  const allCars = await carsRepository.listCarByColor(color);

  return response.status(200).json(allCars);
  }
}