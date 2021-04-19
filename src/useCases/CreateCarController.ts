import { Request, Response } from "express";
import { CarsRepository } from "../repositories/CarsRepository"


export class CreateCarsController {
  async execute(request: Request, response: Response) {
  const { description, license_plate, amount, color } = request.body;

  // const carsRepository = new CarsRepository();

  const carsRepository = CarsRepository.getInstance();
  const carAlreadyExists = await carsRepository.findByLicensePlate(license_plate);

  if (carAlreadyExists) {
    return response.status(401).json({
      message: "Car already exists!"
    })
  }

  const cars = await carsRepository.create({ 
    description, 
    license_plate, 
    amount,
    color 
  })

  return response.status(201).json(cars);
  }
}