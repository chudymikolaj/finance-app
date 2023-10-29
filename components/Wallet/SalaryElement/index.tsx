import SalaryElementType from "./SalaryElement.types"

import {
  SalaryContainer,
  SalaryCalculation,
  SalaryCalculationColumn,
  SalaryCalculationColumnLine,
  SalaryCalculationColumnHeader,
  SalaryCalculationColumnValue,
} from "./SalaryElement.styled"

const SalaryElement = ({ valueOfSalary, valueOfBills, valueOfRest, children }: SalaryElementType) => {
  return (
    <SalaryContainer>
      <SalaryCalculation>
        <SalaryCalculationColumn>
          <SalaryCalculationColumnHeader>Przychód</SalaryCalculationColumnHeader>
          <SalaryCalculationColumnValue>{valueOfSalary}</SalaryCalculationColumnValue>
        </SalaryCalculationColumn>
        <SalaryCalculationColumnLine />
        <SalaryCalculationColumn>
          <SalaryCalculationColumnHeader>Wydatki</SalaryCalculationColumnHeader>
          <SalaryCalculationColumnValue $red>{valueOfBills}</SalaryCalculationColumnValue>
        </SalaryCalculationColumn>
        <SalaryCalculationColumnLine />
        <SalaryCalculationColumn>
          <SalaryCalculationColumnHeader>Reszta</SalaryCalculationColumnHeader>
          <SalaryCalculationColumnValue>{valueOfRest}</SalaryCalculationColumnValue>
        </SalaryCalculationColumn>
      </SalaryCalculation>

      {children}
    </SalaryContainer>
  )
}

export default SalaryElement