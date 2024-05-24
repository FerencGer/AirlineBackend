import { faker } from "@faker-js/faker";
import { storeMotorBikeData } from "../helpers/helpers.js"

export const generateHondaData = (): MotorBikesData => {
  const generatedMotorbikeData: MotorBikesData = {
    manufacturer: 'Honda',
    model: 'i8',
    year: faker.number.int({ min: new Date().getFullYear() - 20, max: new Date().getFullYear() }),
    color: faker.vehicle.color(),
    fuelType: 'Gasoline',
    mileage: faker.number.int({ min: 10000, max: 200000 }),
    price: faker.number.int({ min: 1000, max: 100000 }),
    dateAdded: faker.number.int({ min: new Date().getFullYear() - 5, max: new Date().getFullYear() })
  };
  storeMotorBikeData(generatedMotorbikeData).catch(console.error);

  return generatedMotorbikeData;
};



export const generateYamahaData = (): MotorBikesData => {
  const generatedMotorbikeData: MotorBikesData = {
    manufacturer: 'Yamaha',
    model: 'R3',
    year: faker.number.int({ min: new Date().getFullYear() - 20, max: new Date().getFullYear() }),
    color: faker.vehicle.color(),
    fuelType: 'Gasoline',
    mileage: faker.number.int({ min: 10000, max: 200000 }),
    price: faker.number.int({ min: 1000, max: 100000 }),
    dateAdded: faker.number.int({ min: new Date().getFullYear() - 5, max: new Date().getFullYear() })
  };
   storeMotorBikeData(generatedMotorbikeData).catch(console.error);

  return generatedMotorbikeData;
};

export const generateHarleyDivisionData = (): MotorBikesData => {
  const generatedMotorbikeData: MotorBikesData = {
    manufacturer: 'HarleyDivision',
    model: 'Street Glide',
    year: faker.number.int({ min: new Date().getFullYear() - 10, max: new Date().getFullYear() }),
    color: faker.vehicle.color(),
    fuelType: 'Diesel',
    mileage: faker.number.int({ min: 1000, max: 50000 }),
    price: faker.number.int({ min: 100000, max: 500000 }),
    dateAdded: faker.number.int({ min: new Date().getFullYear() - 5, max: new Date().getFullYear() })
  };
    storeMotorBikeData(generatedMotorbikeData).catch(console.error);

  return generatedMotorbikeData;
};

export const generateBugattiData = (): MotorBikesData => {
  const generatedMotorbikeData: MotorBikesData = {
    manufacturer: 'Bugatti',
    model: 'Diavel V4',
    year: faker.number.int({ min: new Date().getFullYear() - 10, max: new Date().getFullYear() }),
    color: faker.vehicle.color(),
    fuelType: 'Gasoline',
    mileage: faker.number.int({ min: 0, max: 10000 }),
    price: faker.number.int({ min: 1000000, max: 3000000 }),
    dateAdded: faker.number.int({ min: new Date().getFullYear() - 5, max: new Date().getFullYear() })
  };
    storeMotorBikeData(generatedMotorbikeData).catch(console.error);

  return generatedMotorbikeData;
};
