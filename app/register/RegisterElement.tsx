"use client";

import Image from "next/image";

import { FormRegister } from "@/components/Forms";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

import { type RegisterElementPropsType } from "./register.types";
import { RegisterPageFormWrapper, RegisterPageImage } from "./register.styled";

const API_CMS = process.env.NEXT_PUBLIC_STRAPI_URL;

const RegisterElement = ({ data, global }: RegisterElementPropsType) => {
	const { darkMode } = useAppContext();

	const darkImage = global.darkImage;
	const lightImage = global.lightImage;
	const welcomeTitle = data.welcomeTitle;
	const titlePage = data.titlePage;
	const registerForm = data.registerForm;
	const urlRegisterPageImage = darkMode ? darkImage : lightImage;

	return (
		<>
			<RegisterPageFormWrapper>
				<FormRegister
					title={welcomeTitle}
					subTitle={titlePage}
					data={registerForm}
				/>
			</RegisterPageFormWrapper>
			<RegisterPageImage>
				<Image
					src={`${API_CMS}${urlRegisterPageImage}`}
					alt="background"
					fill
					sizes="100%"
					priority={true}
				/>
			</RegisterPageImage>
		</>
	);
};

export default RegisterElement;
