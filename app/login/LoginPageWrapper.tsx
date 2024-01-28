"use client";

import Image from "next/image";

import { FormLogin } from "@/components/Forms";
import { useAppContext } from "@/lib/ThemeProviderContext/actions";

import { type LoginPagePropsType } from "./login.types";
import { LoginPageFormWrapper, LoginPageImage } from "./login.styled";

const API_CMS = process.env.NEXT_PUBLIC_STRAPI_URL;

const LoginPage = ({ data, global }: LoginPagePropsType) => {
	const { darkMode } = useAppContext();

	const darkImage = global.darkImage;
	const lightImage = global.lightImage;
	const welcomeTitle = data.welcomeTitle;
	const titlePage = data.titlePage;
	const loginForm = data.loginForm;

	const urlLoginPageImage = darkMode ? darkImage : lightImage;

	return (
		<>
			<LoginPageFormWrapper>
				<FormLogin
					title={welcomeTitle}
					subTitle={titlePage}
					data={loginForm}
				/>
			</LoginPageFormWrapper>
			<LoginPageImage>
				<Image
					src={`${API_CMS}${urlLoginPageImage}`}
					alt="background"
					fill
					sizes="100%"
					priority={true}
				/>
			</LoginPageImage>
		</>
	);
};

export default LoginPage;
