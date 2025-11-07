// Length Conversion Functions
async function convertMilimeter({ value, fromUnit, toUnit }) {
  if (fromUnit === "milimeter") {
    switch (toUnit) {
      case "centimeter":
        return value / 10;
      case "meter":
        return value / 1000;
      case "kilometer":
        return value / 1e6;
      case "inch":
        return value / 25.4;
      case "foot":
        return value / 304.8;
      case "yard":
        return value / 914.4;
      case "mile":
        return value / 1.609e6;
      default:
        return value;
    }
  }
}

async function convertCentimeter({ value, fromUnit, toUnit }) {
  if (fromUnit === "centimeter") {
    switch (toUnit) {
      case "milimeter":
        return value * 10;
      case "meter":
        return value / 100;
      case "kilometer":
        return value / 1e5;
      case "inch":
        return value / 2.54;
      case "foot":
        return value / 30.48;
      case "yard":
        return value / 91.44;
      case "mile":
        return value / 160934;
      default:
        return value;
    }
  }
}

async function convertMeter({ value, fromUnit, toUnit }) {
  if (fromUnit === "meter") {
    switch (toUnit) {
      case "milimeter":
        return value * 1000;
      case "centimeter":
        return value * 100;
      case "kilometer":
        return value / 1000;
      case "inch":
        return value / 0.0254;
      case "foot":
        return value / 0.3048;
      case "yard":
        return value / 0.9144;
      case "mile":
        return value / 1609.34;
      default:
        return value;
    }
  }
}

async function convertKilometer({ value, fromUnit, toUnit }) {
  if (fromUnit === "kilometer") {
    switch (toUnit) {
      case "milimeter":
        return value * 1000000;
      case "centimeter":
        return value * 100000;
      case "meter":
        return value * 1000;
      case "inch":
        return value * 39370.0787;
      case "foot":
        return value * 3280.8399;
      case "yard":
        return value * 1093.6133;
      case "mile":
        return value * 0.621371;
      default:
        return value;
    }
  }
}

async function convertInch({ value, fromUnit, toUnit }) {
  if (fromUnit === "inch") {
    switch (toUnit) {
      case "milimeter":
        return value * 25.4;
      case "centimeter":
        return value * 2.54;
      case "meter":
        return value * 0.0254;
      case "kilometer":
        return value * 0.0000254;
      case "foot":
        return value / 12;
      case "yard":
        return value / 36;
      case "mile":
        return value / 63360;
      default:
        return value;
    }
  }
}

async function convertFoot({ value, fromUnit, toUnit }) {
  if (fromUnit === "foot") {
    switch (toUnit) {
      case "millimeter":
        return value * 304.8;
      case "centimeter":
        return value * 30.48;
      case "meter":
        return value * 0.3048;
      case "kilometer":
        return value * 0.0003048;
      case "inch":
        return value * 12;
      case "yard":
        return value / 3;
      case "mile":
        return value / 5280;
      default:
        return value;
    }
  }
}

async function convertYard({ value, fromUnit, toUnit }) {
  if (fromUnit === "yard") {
    switch (toUnit) {
      case "millimeter":
        return value * 914.4;
      case "centimeter":
        return value * 91.44;
      case "meter":
        return value * 0.9144;
      case "kilometer":
        return value * 0.0009144;
      case "inch":
        return value * 36;
      case "foot":
        return value * 3;
      case "mile":
        return value / 1760;
      default:
        return value;
    }
  }
}

async function convertMile({ value, fromUnit, toUnit }) {
  if (fromUnit === "mile") {
    switch (toUnit) {
      case "millimeter":
        return value * 1609344;
      case "centimeter":
        return value * 160934.4;
      case "meter":
        return value * 1609.344;
      case "kilometer":
        return value * 1.609344;
      case "inch":
        return value * 63360;
      case "foot":
        return value * 5280;
      case "yard":
        return value * 1760;
      default:
        return value;
    }
  }
}

// Weight Conversion Functions
async function convertMiligram({ value, fromUnit, toUnit }) {
  if (fromUnit === "milligram") {
    switch (toUnit) {
      case "gram":
        return value / 1000;
      case "kilogram":
        return value / 1000000;
      case "ounce":
        return value / 28349.523125;
      case "pound":
        return value / 453592.37;
      case "ton":
        return value / 1000000000;
      default:
        return value;
    }
  }
}

async function convertGram({ value, fromUnit, toUnit }) {
  if (fromUnit === "gram") {
    switch (toUnit) {
      case "milligram":
        return value * 1000;
      case "kilogram":
        return value / 1000;
      case "ounce":
        return value / 28.349523125;
      case "pound":
        return value / 453.59237;
      case "ton":
        return value / 1000000;
      default:
        return value;
    }
  }
}

async function convertOunce({ value, fromUnit, toUnit }) {
  if (fromUnit === "ounce") {
    switch (toUnit) {
      case "milligram":
        return value * 28349.523125;
      case "gram":
        return value * 28.349523125;
      case "kilogram":
        return value * 0.028349523125;
      case "pound":
        return value / 16;
      case "ton":
        return value / 35274;
      default:
        return value;
    }
  }
}

async function convertPound({ value, fromUnit, toUnit }) {
  if (fromUnit === "pound") {
    switch (toUnit) {
      case "milligram":
        return value * 453592.37;
      case "gram":
        return value * 453.59237;
      case "kilogram":
        return value * 0.45359237;
      case "ounce":
        return value * 16;
      case "ton":
        return value / 2204.6226218;
      default:
        return value;
    }
  }
}

async function convertTon({ value, fromUnit, toUnit }) {
  if (fromUnit !== "ton") {
    switch (toUnit) {
      case "milligram":
        return value * 1000000000;
      case "gram":
        return value * 1000000;
      case "kilogram":
        return value * 1000;
      case "ounce":
        return value * 35273.96195;
      case "pound":
        return value * 2204.6226218;
      default:
        return value;
    }
  }
}

// Temperature Conversion Functions

async function convertCelsius({ value, fromUnit, toUnit }) {
  if (fromUnit === "celsius") {
    switch (toUnit) {
      case "fahrenheit":
        return (value * 9) / 5 + 32;
      case "kelvin":
        return value + 273.15;
      default:
        return value;
    }
  }
}

async function convertFahrenheit({ value, fromUnit, toUnit }) {
  if (fromUnit === "fahrenheit") {
    switch (toUnit) {
      case "celsius":
        return ((value - 32) * 5) / 9;
      case "kelvin":
        return ((value - 32) * 5) / 9 + 273.15;
      default:
        return value;
    }
  }
}

async function convertKelvin({ value, fromUnit, toUnit }) {
  if (fromUnit === "kelvin") {
    switch (toUnit) {
      case "celsius":
        return value - 273.15;
      case "fahrenheit":
        return ((value - 273.15) * 9) / 5 + 32;
      default:
        return value;
    }
  }
}

// Main Conversion Functions

export async function convertLengthModel({ value, fromUnit, toUnit }) {
  switch (fromUnit) {
    case "milimeter":
      return await convertMilimeter({ value, fromUnit, toUnit });
    case "centimeter":
      return await convertCentimeter({ value, fromUnit, toUnit });
    case "meter":
      return await convertMeter({ value, fromUnit, toUnit });
    case "kilometer":
      return await convertKilometer({ value, fromUnit, toUnit });
    case "inch":
      return await convertInch({ value, fromUnit, toUnit });
    case "foot":
      return await convertFoot({ value, fromUnit, toUnit });
    case "yard":
      return await convertYard({ value, fromUnit, toUnit });
    case "mile":
      return await convertMile({ value, fromUnit, toUnit });
    default:
      return value;
  }
}

export async function convertWeightModel({ value, fromUnit, toUnit }) {
  switch (fromUnit) {
    case "milligram":
      return await convertMiligram({ value, fromUnit, toUnit });
    case "gram":
      return await convertGram({ value, fromUnit, toUnit });
    case "kilogram":
      return await convertKilogram({ value, fromUnit, toUnit });
    case "ounce":
      return await convertOunce({ value, fromUnit, toUnit });
    case "pound":
      return await convertPound({ value, fromUnit, toUnit });
    case "ton":
      return await convertTon({ value, fromUnit, toUnit });
    default:
      return value;
  }
}

export async function convertTemperatureModel({ value, fromUnit, toUnit }) {
  switch (fromUnit) {
    case "celsius":
      return await convertCelsius({ value, fromUnit, toUnit });
    case "fahrenheit":
      return await convertFahrenheit({ value, fromUnit, toUnit });
    case "kelvin":
      return await convertKelvin({ value, fromUnit, toUnit });
    default:
      return value;
  }
}