"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { signIn } from "next-auth/react";

import { Input, InputPassword } from "./Input";

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
import { useSearchParams } from "next/navigation";

const FormLogin = ({ title, subTitle, data }: FormLoginPropsType) => {
	const { register, handleSubmit } = useForm<IFormValues>();

	const searchParams = useSearchParams();
	const getparamsError = searchParams.get("error");

	const getTitleHeader = title && title;
	const getSubTitle = subTitle && subTitle;
	const getInputEmail = data && data.emailInput;
	const getInputPassword = data && data.passwordInput;
	const getForgetpasswordLink = data && data.forgetpasswordLink;
	const getLoginButtonName = data && data.loginButtonName;
	const getCreateNewAccountNameLink = data && data.createNewAccountNameLink;
	const getCreateNewAccountTextBeforeLink = data && data.createNewAccountTextBeforeLink;
	const getAddLinkToRegister = data && data.addLinkToRegister;
	const addLinkToForgotPassword = data && data.addLinkToForgotPassword;
	const getErrorMessage = data && data.errorMessage;

	const onSubmit: SubmitHandler<IFormValues> = async (data) => {
		try {
			await signIn("credentials", {
				email: data.email,
				password: data.password,
				redirect: true,
				callbackUrl: "/dashboard",
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<FormElementHeader>
				<FormElementTitle>{getTitleHeader}</FormElementTitle>
				<FormElementSubTitle>{getSubTitle}</FormElementSubTitle>
			</FormElementHeader>

			{getparamsError && <ErrorMessage>{getErrorMessage}</ErrorMessage>}

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

				<InputPassword
					label={getInputPassword}
					labelRegister="password"
					placeholder={getInputPassword}
					register={register}
					bgColor="light"
					required
				/>

				<FormElementForgetPassword>
					<FormElementSingInAccountLink href={addLinkToForgotPassword}>
						{getForgetpasswordLink}
					</FormElementSingInAccountLink>
				</FormElementForgetPassword>

				<FormElementSubmit type="submit">{getLoginButtonName}</FormElementSubmit>

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
