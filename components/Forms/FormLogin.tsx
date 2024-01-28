"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import Input from "./Input";

import { type FormLoginPropsType, type IFormValues } from "./Form.types";

import {
	FormElement,
	FormElementHeader,
	FormElementTitle,
	FormElementSubTitle,
	FormElementForgetPassword,
	FormElementSingInAccount,
	FormElementSubmit,
	FormElementSingInAccountLink,
	ErrorMessage,
} from "./Form.styled";

const FormLogin = ({ title, subTitle, data }: FormLoginPropsType) => {
	const router = useRouter();
	const [errorLogin, setErrorLogin] = useState(false);
	const { register, handleSubmit } = useForm<IFormValues>();

	const getTitleHeader = title && title;
	const getSubTitle = subTitle && subTitle;
	const getInputEmail = data && data.emailInput;
	const getInputPassword = data && data.passwordInput;
	const getForgetpasswordLink = data && data.forgetpasswordLink;
	const getLoginButtonName = data && data.loginButtonName;
	const getCreateNewAccountNameLink = data && data.createNewAccountNameLink;
	const getCreateNewAccountTextBeforeLink =
		data && data.createNewAccountTextBeforeLink;
	const getAddLinkToRegister = data && data.addLinkToRegister;
	const addLinkToForgotPassword = data && data.addLinkToForgotPassword;
	const getErrorMessage = data && data.errorMessage;

	const onSubmit: SubmitHandler<IFormValues> = async (data) => {
		setErrorLogin(false);

		const res = await signIn("credentials", {
			redirect: false,
			email: data.email,
			password: data.password,
		});

		if (res!.ok) {
			router.replace("/dashboard");
		}

		if (res!.status === 401) {
			setErrorLogin(true);
		}
	};

	return (
		<>
			<FormElementHeader>
				<FormElementTitle>{getTitleHeader}</FormElementTitle>
				<FormElementSubTitle>{getSubTitle}</FormElementSubTitle>
			</FormElementHeader>

			{errorLogin && <ErrorMessage>{getErrorMessage}</ErrorMessage>}

			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<Input
					label={getInputEmail}
					labelRegister="email"
					placeholder={getInputEmail}
					type="text"
					register={register}
					bgColor="light"
					required
				/>
				<Input
					label={getInputPassword}
					labelRegister="password"
					placeholder={getInputPassword}
					type="password"
					register={register}
					bgColor="light"
					required
				/>

				<FormElementForgetPassword>
					<FormElementSingInAccountLink href={addLinkToForgotPassword}>
						{getForgetpasswordLink}
					</FormElementSingInAccountLink>
				</FormElementForgetPassword>

				<FormElementSubmit type="submit">
					{getLoginButtonName}
				</FormElementSubmit>

				<FormElementSingInAccount>
					<p>
						<span>{getCreateNewAccountTextBeforeLink} </span>

						<FormElementSingInAccountLink href={getAddLinkToRegister}>
							{getCreateNewAccountNameLink}
						</FormElementSingInAccountLink>
					</p>
				</FormElementSingInAccount>
			</FormElement>
		</>
	);
};

export default FormLogin;
