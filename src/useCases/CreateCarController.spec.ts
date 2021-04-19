import request from "supertest"
import { Connection, createConnection, getConnectionOptions } from "typeorm";
import { app } from "../app"


let connection: Connection;


describe("Create car controller", () => {
  beforeAll(async () => {
    const defaultOptions = await getConnectionOptions();

    connection = await createConnection(
      Object.assign(defaultOptions, {
        database: "db_test"
      })
    )

    await connection.runMigrations();
  })

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close;
  })

  it("should be able to create a new car", async () => {
    const response = await request(app)
      .post("/cars")
      .send({
        description : "Descrição de carro teste",
        license_plate: "100",
        amount: 18000,
        color: "black"
      })
      
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      
  })
})