import { Request, Response } from "express";
import {
  generateDublinWeatherData,
  generateLondonWeatherData,
  generateBudapestWeatherData,
  generateLiverpoolWeatherData,
  generateLondonWeatherDailyData,
  generateDublinWeatherDailyData,
  generateBudapestWeatherDailyData,
  generateLiverpoolWeatherDailyData
} from "../services/weatherService.js";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req: Request, res: Response) => {
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(city);

    // We will create a variable with a type of WeatherData
    let finalWeatherData: WeatherData;

    // We will use an if statement to check which city was passed in
    if (city === "london") {
      console.log(generateLondonWeatherData());
      finalWeatherData = generateLondonWeatherData();
    } else if (city === "dublin") {
      console.log(generateDublinWeatherData());
      finalWeatherData = generateDublinWeatherData();
    } else if (city === "budapest") {
      console.log(generatebudapestWeatherData());
      finalWeatherData = generateBudapestWeatherData();
    } else if (city === "liverpool") {
      console.log(generateLiverpoolWeatherData());
      finalWeatherData = generateLiverpoolWeatherData();
    } else {
      //If the city is not london or dublin, budapest or liverpool we will throw an error
      res.status(404).send("City not found");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalWeatherData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching weather data");
  }
};

export const getWeatherDailyData = async (req: Request, res: Response) => {
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(city);

    // We will create a variable with a type of WeatherData
    let finalWeatherDailyData: WeatherDailyData;

    // We will use an if statement to check which city was passed in
    if (city === "london") {
      console.log(generateLondonWeatherDailyData());
      finalWeatherDailyData = generateLondonWeatherDailyData();
    } else if (city === "dublin") {
      console.log(generateDublinWeatherDailyData());
      finalWeatherDailyData = generateDublinWeatherDailyData();
    } else if (city === "budapest") {
      console.log(generateNigeriaWeatherDailyData());
      finalWeatherDailyData = generateNigeriaWeatherDailyData();
    } else if (city === "liverpool") {
      console.log(generateFranceWeatherDailyData());
      finalWeatherDailyData = generateFranceWeatherDailyData();
    } else {
      // If the city is not london or dublin, budapest or liverpool we will throw an error
      res.status(404).send("City not found");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalWeatherDailyData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching weather data");
  }
};
