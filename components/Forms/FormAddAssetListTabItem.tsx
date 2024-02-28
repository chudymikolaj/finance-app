"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import ButtonSVG from "../Buttons/ButtonSvg";
import { Input } from "./Input";

import { type FormAddAssetListTabItemPropsType, type IFormValues } from "./Form.types";

import { FormElement, FormElementHeader, FormElementSubmit, FormElementTitle } from "./Form.styled";
import { useSession } from "next-auth/react";

const FormAddAssetListTabItem = ({ newId, categoryId, closePopup }: FormAddAssetListTabItemPropsType) => {
	const { data: session } = useSession();
	const { register, handleSubmit } = useForm<IFormValues>();
	const { addAssetListTabItem } = useAppContext();

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		const userID = (session as any)?.id;
		const userJWT = (session as any)?.jwt;
		const addAssetItem: { id: number; name: string; value: number } = {
			id: newId,
			name: data.name,
			value: Number(data.value),
		};

		addAssetListTabItem(userID, userJWT, categoryId, addAssetItem);
		closePopup();
	};

	return (
		<>
			<FormElementHeader>
				<FormElementTitle>Dodaj nowe aktywo</FormElementTitle>
				<ButtonSVG
					name="Cofnij"
					svgUrl="back.svg"
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

export default FormAddAssetListTabItem;
