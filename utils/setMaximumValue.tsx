function setMaximumValue(number: number, maxValue: number): string {
  if (number >= maxValue) {
    number = maxValue;
  }

  return number + " PLN";
}

export default setMaximumValue;