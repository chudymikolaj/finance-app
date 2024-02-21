"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import ButtonSVG from "../Buttons/ButtonSvg";
import { Input } from "./Input";

import { type FormEditAssetListTabItemPropsType, type IFormValues } from "./Form.types";

import { FormElement, FormElementHeader, FormElementSubmit, FormElementTitle } from "./Form.styled";
import { useSession } from "next-auth/react";

const FormEditBudgetListTabItem = ({ categoryId, data, closePopup }: FormEditAssetListTabItemPropsType) => {
	const { data: sessions } = useSession();
	const { register, handleSubmit, setValue } = useForm<IFormValues>();
	const { modifyAssetListTabItem } = useAppContext();
	const { id, idAssetItem, title, value } = data;

	useEffect(() => {
		setValue("name", title);
		setValue("value", String(value));
	}, [title, value]);

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		const getUserJWT = (sessions as any)?.jwt;
		const editAsset: { id: number; id_asset_item: string; name: string; value: number } = {
			id: id,
			id_asset_item: data.id_asset_item,
			name: data.name,
			value: Number(data.value),
		};

		modifyAssetListTabItem(id, getUserJWT, categoryId, idAssetItem, editAsset);
		closePopup();
	};

	return (
		<>
			<FormElementHeader>
				<FormElementTitle>Edytujesz - {title}</FormElementTitle>
				<ButtonSVG
					name="Cofnij"
					svgUrl="back.svg"
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

				<FormElementSubmit type="submit">Zmień wartość</FormElementSubmit>
			</FormElement>
		</>
	);
};

export default FormEditBudgetListTabItem;
