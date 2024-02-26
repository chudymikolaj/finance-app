"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import ButtonSVG from "../Buttons/ButtonSvg";
import { NumberInput } from "./Input";

import { type FormChangeWalletProportionsPropsType, type IFormValues } from "./Form.types";

import { FormElement, FormElementHeader, FormElementSubmit, FormElementTitle, ErrorMessage } from "./Form.styled";

const FormChangeWalletProportions = ({ closePopup }: FormChangeWalletProportionsPropsType) => {
	const { register, handleSubmit, setValue } = useForm<IFormValues>();
	const { budget_options, changeBudgetAllocations } = useAppContext();
	const [sumOfPercentage, setSumOfPercentage] = useState(false);
	const isBudgetAllocations = budget_options.length > 0;

	useEffect(() => {
		budget_options.map(({ id, share }) => setValue(String(id), String(share * 100)));
	}, [budget_options]);

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
					budget_options.map(({ id, title }) => (
						<NumberInput
							key={id}
							label={title}
							labelRegister={String(id)}
							placeholder={title}
							type="number"
							min={0}
							max={100}
							register={register}
							percentage
						/>
					))}

				<FormElementSubmit type="submit">Zmień proporcje</FormElementSubmit>
				{sumOfPercentage && <ErrorMessage>Zmniejsz sumę proporcji poniżej 100%</ErrorMessage>}
			</FormElement>
		</>
	);
};

export default FormChangeWalletProportions;
