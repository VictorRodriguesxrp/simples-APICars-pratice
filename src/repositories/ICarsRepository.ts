import { Cars } from "../entities/Cars"
import { ICreateCarsDTO } from "../useCases/ICreateCarsDTO"

export interface ICarsRepository {
  create: (data: ICreateCarsDTO) => Promise<Cars>;
  findByLicensePlate: (license_plate : string) => Promise<Boolean> ;
  listCarByColor: (color: string) => Promise<Cars[]>;
}