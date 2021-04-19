import { getRepository, Repository } from "typeorm";
import { Cars } from "../entities/Cars";
import { ICreateCarsDTO } from "../useCases/ICreateCarsDTO";
import { ICarsRepository } from "./ICarsRepository";

//singleton

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Cars>;

  private static INSTANCE: CarsRepository;

  private constructor() {
    this.repository = getRepository(Cars);
  }

  public static getInstance(): CarsRepository {
    if (!CarsRepository.INSTANCE) {
      CarsRepository.INSTANCE = new CarsRepository();
    }
    return CarsRepository.INSTANCE;
  }

  async create({description, license_plate, amount, color}: ICreateCarsDTO): Promise<Cars> {
    const car = this.repository.create({
      description,
      license_plate,
      amount,
      color
    })

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate (license_plate: string): Promise<Boolean>  {
    const car = await this.repository.findOne({
      license_plate
    })

    if (!car) {
      return false; 
    } 
    
    return true;
  }

  async listCarByColor (color: string) : Promise<Cars[]> {
    const returnedCars = await this.repository.find({
      color
    });

    return returnedCars;
  }

  async deleteCarById (car_id: string): Promise<void> {
    await this.repository.delete({
      id: car_id
    })
  }
}