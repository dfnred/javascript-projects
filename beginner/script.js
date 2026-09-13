"use strict";

// Temeperature Converter
// A temperature widget needs two conversion helpers
// and one formatting helper
// Keep the math seperate from the display test
// So eaach function has one clear job.

//Formula: (C * 1.8) + 32
function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

//Formula: (F - 32) / 1.8
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8
}

function formatTemperature(value, unit) {
  return `${value} ${unit}`
}

const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, 'F'));
// 77 F

const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, 'C'));
// 20 C

const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, 'F'));
// 32 F

const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, 'C'));
// 0 C