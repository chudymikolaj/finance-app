"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import createTabAssetItemAxios from "@/utils/fetch/createTabAssetItemAxios";
import refreshTabAssetsItems from "@/utils/fetch/refreshTabAssetsItems";

import { type FormAddAssetListTabItemPropsType, type IFormValues } from "./Form.types";

import { useSession } from "next-auth/react";
import ButtonSVG from "../Buttons/ButtonSvg";
import { FormElement, FormElementHeader, FormElementSubmit, FormElementTitle } from "./Form.styled";
import { Input } from "./Input";

const FormAddAssetListTabItem = ({ categoryId, closePopup }: FormAddAssetListTabItemPropsType) => {
	const { data: session } = useSession();
	const { updateAssetListTabs } = useAppContext();
	const { register, handleSubmit } = useForm<IFormValues>();

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		const userID = (session as any)?.id;
		const userJWT = (session as any)?.jwt;

		const addAssetItem: {
			name: string;
			value: number;
			assets_tab: { connect: number[] };
			users_permissions_user: { connect: number[] };
		} = {
			name: data.name,
			value: Number(data.value),
			assets_tab: {
				connect: [categoryId],
			},
			users_permissions_user: {
				connect: [userID],
			},
		};

		createTabAssetItemAxios(addAssetItem, userJWT, "/api/tab-assets");
		refreshTabAssetsItems(session, updateAssetListTabs);

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
