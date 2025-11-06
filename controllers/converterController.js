// Different sections (Length, Weight, Temperature) and their units
// Length: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.
// Weight: milligram, gram, kilogram, ounce, pound, ton.
// Temperature: celsius, fahrenheit, kelvin.

import {
  convertLengthModel,
  convertWeightModel,
  convertTemperatureModel,
} from "../models/converterModel.js";

export const convertLength = async (req, res) => {
  try {
    const { value, fromUnit, toUnit } = req.body;
    const converter = await convertLengthModel({ value, fromUnit, toUnit });
    res.status(201).json(converter);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error converting Length", details: error.message });
  }
};

export const convertWeight = async (req, res) => {
  try {
    const { value, fromUnit, toUnit } = req.body;
    const converter = await convertWeightModel({ value, fromUnit, toUnit });
    res.status(201).json(converter);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error converting Weight", details: error.message });
  }
};

export const convertTemperature = async (req, res) => {
  try {
    const { value, fromUnit, toUnit } = req.body;
    const converter = await convertTemperatureModel({ value, fromUnit, toUnit });
    res.status(201).json(converter);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error converting Temperature", details: error.message });
  }
};