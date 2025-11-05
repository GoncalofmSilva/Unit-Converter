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
    const { value, fromUnit, toUnit} = req.body
  convertLengthModel();
};

export const convertWeight = async (req, res) => {
    const { value, fromUnit, toUnit} = req.body
  convertWeightModel();
};

export const convertTemperature = async (req, res) => {
    const { value, fromUnit, toUnit} = req.body
  convertTemperatureModel();
};
