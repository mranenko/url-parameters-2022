import URL from "./base/URL.js";

document.addEventListener("DOMContentLoaded", () => {
  const parameterKeys = [
    'amount',
    'currency',
    'location',
    'shape'
  ];

  const parameters = URL.getParameters(...parameterKeys);

  Object.entries(parameters).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    document.write(`${key}: ${value}<br/>`);
  });
});
