function setMaximumValue(number: number, maxValue: number): string {
	if (number >= maxValue) {
		number = maxValue;
	}

	return String(number);
}

export default setMaximumValue;
