// Recursion

import { logger } from "Utils/log";

export const factorial: (value: number) => number = (value: number) => {
  return value === 1 ? value : value * factorial(value - 1);
};

logger(factorial(3));
