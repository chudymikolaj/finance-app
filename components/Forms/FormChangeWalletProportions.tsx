import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import ButtonSVG from "../Buttons/ButtonSvg";
import Input from "./Input";

import {
	type FormChangeWalletProportionsPropsType,
	type IFormValues,
} from "./Form.types";

import {
	FormElement,
	FormElementHeader,
	FormElementSubmit,
	FormElementTitle,
	ErrorMessage,
} from "./Form.styled";
import { useEffect, useState } from "react";

const FormChangeWalletProportions = ({
	closePopup,
}: FormChangeWalletProportionsPropsType) => {
	const { register, handleSubmit, setValue } = useForm<IFormValues>();
	const { budgetAllocations, changeBudgetAllocations } = useAppContext();
	const [sumOfPercentage, setSumOfPercentage] = useState(false);
	const isBudgetAllocations = budgetAllocations.length > 0;

	useEffect(() => {
		budgetAllocations.map(({ id, share }) => setValue(id, String(share * 100)));
	}, [budgetAllocations]);

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		const ConvertToArrayPercentage = Object.entries(data);
		let sum = 0;

		// calculate sum using forEach() method
		ConvertToArrayPercentage.forEach((num) => {
			sum += Number(num[1]);
		});

		if (sum <= 100) {
			setSumOfPercentage(false);
			changeBudgetAllocations(data);
			closePopup();
		} else {
			setSumOfPercentage(true);
		}
	};

	return (
		<>
			<FormElementHeader>
				<FormElementTitle>Zmień proporcje budżetu</FormElementTitle>
				<ButtonSVG
					svgUrl="remove.svg"
					onClick={closePopup}
				/>
			</FormElementHeader>
			<FormElement onSubmit={handleSubmit(onSubmit)}>
				{isBudgetAllocations &&
					budgetAllocations.map(({ id, title }) => (
						<Input
							key={id}
							label={title}
							labelRegister={id}
							placeholder={title}
							type="number"
							min={0}
							max={100}
							register={register}
							required
							percentage
						/>
					))}

				<FormElementSubmit type="submit">Zmień proporcje</FormElementSubmit>
				{sumOfPercentage && (
					<ErrorMessage>Zmniejsz sumę proporcji poniżej 100%</ErrorMessage>
				)}
			</FormElement>
		</>
	);
};

export default FormChangeWalletProportions;
