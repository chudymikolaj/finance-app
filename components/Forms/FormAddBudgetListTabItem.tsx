import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { type IFormValues, type FormPropsType } from "./Form.types";
import ButtonSVG from "../Buttons/ButtonSvg";
import Input from "./Input";
import {
	FormElement,
	FormElementHeader,
	FormElementTitle,
	FormElementSubmit,
} from "./Form.styled";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

const FormAddBudgetListTabItem = ({
	categoryId,
	closePopup,
}: FormPropsType) => {
	const { register, handleSubmit } = useForm<IFormValues>();
	const { addBudgetListTabItem } = useAppContext();

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		const addAsset: { id: string; title: string; value: number } = {
			id: uuidv4(),
			title: data.name,
			value: Number(data.value),
		};

		addBudgetListTabItem(categoryId, addAsset);
	};

	return (
		<>
			<FormElementHeader>
				<FormElementTitle>Dodaj nowe aktywo</FormElementTitle>
				<ButtonSVG
					svgUrl="remove.svg"
					onClick={closePopup}
				/>
			</FormElementHeader>
			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Podaj nazwę"
					labelRegister="name"
					placeholder="Wpisz nazwę aktywa"
					type="text"
					register={register}
					required
				/>
				<Input
					label="Podaj wartość"
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

export default FormAddBudgetListTabItem;
