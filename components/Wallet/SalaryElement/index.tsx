import type SalaryElementType from "./SalaryElement.types";

import {
	SalaryContainer,
	SalaryCalculation,
	SalaryCalculationColumn,
	SalaryCalculationColumnHeader,
	SalaryCalculationColumnValue,
} from "./SalaryElement.styled";

const SalaryElement = ({
	valueOfSalary,
	valueOfBills,
	valueOfRest,
	children,
}: SalaryElementType) => {
	return (
		<SalaryContainer>
			<SalaryCalculation>
				<SalaryCalculationColumn>
					<SalaryCalculationColumnHeader>
						Przychód
					</SalaryCalculationColumnHeader>
					<SalaryCalculationColumnValue>
						{valueOfSalary} <sub>PLN</sub>
					</SalaryCalculationColumnValue>
				</SalaryCalculationColumn>
				<SalaryCalculationColumn>
					<SalaryCalculationColumnHeader>Wydatki</SalaryCalculationColumnHeader>
					<SalaryCalculationColumnValue $red>
						{valueOfBills} <sub>PLN</sub>
					</SalaryCalculationColumnValue>
				</SalaryCalculationColumn>
				<SalaryCalculationColumn>
					<SalaryCalculationColumnHeader>Reszta</SalaryCalculationColumnHeader>
					<SalaryCalculationColumnValue>
						{valueOfRest} <sub>PLN</sub>
					</SalaryCalculationColumnValue>
				</SalaryCalculationColumn>
			</SalaryCalculation>

			{children}
		</SalaryContainer>
	);
};

export default SalaryElement;
