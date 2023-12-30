import { SubmitHandler, useForm } from "react-hook-form";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import ButtonSVG from "../Buttons/ButtonSvg";
import Input from "./Input";

import {
	type FormEditBudgetListTabItemPropsType,
	type IFormValues,
} from "./Form.types";

import {
	FormElement,
	FormElementHeader,
	FormElementSubmit,
	FormElementTitle,
} from "./Form.styled";
import { useEffect } from "react";

const FormEditBudgetListTabItem = ({
	categoryId,
	data,
	closePopup,
}: FormEditBudgetListTabItemPropsType) => {
	const { register, handleSubmit, setValue } = useForm<IFormValues>();
	const { modifyBudgetListTabItem } = useAppContext();
	const { id, title, value } = data;

	useEffect(() => {
		setValue("name", title);
		setValue("value", value);
	}, [title, value]);

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		const editAsset: { id: string; title: string; value: number } = {
			id: id,
			title: data.name,
			value: Number(data.value),
		};

		modifyBudgetListTabItem(categoryId, id, editAsset);
		closePopup();
	};

	return (
		<>
			<FormElementHeader>
				<FormElementTitle>Edytujesz - {title}</FormElementTitle>
				<ButtonSVG
					svgUrl="remove.svg"
					onClick={closePopup}
				/>
			</FormElementHeader>
			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Zmień nazwę"
					labelRegister="name"
					placeholder="Wpisz nazwę aktywa"
					type="text"
					register={register}
					required
				/>
				<Input
					label="Zmień wartość"
					labelRegister="value"
					placeholder="Wpisz wartość aktywa"
					type="number"
					register={register}
					required
				/>

				<FormElementSubmit type="submit">Dodaj aktywo</FormElementSubmit>
			</FormElement>
		</>
	);
};

export default FormEditBudgetListTabItem;
