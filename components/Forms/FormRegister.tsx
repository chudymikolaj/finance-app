"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { registerUser } from "@/utils/auth";
import { Input, InputPassword } from "./Input";

import { type FormRegisterPropsType, type IFormValues } from "./Form.types";

import {
	ErrorMessage,
	FormElement,
	FormElementHeaderAuth,
	FormElementSingInAccount,
	FormElementSingInAccountLink,
	FormElementHeaderAuthSubTitle,
	FormElementSubmit,
	FormElementHeaderAuthTitle,
} from "./Form.styled";

const FormRegister = ({ title, subTitle, data }: FormRegisterPropsType) => {
	const router = useRouter();
	const [errorRegisterEmail, setErrorRegisterEmail] = useState(false);
	const [errorLoginEmailUsername, setErrorRegisterEmailUsername] = useState(false);
	const [errorMinLengthPassword, setErrorMinLengthPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>();

	const getTitleHeader = title && title;
	const getSubTitle = subTitle && subTitle;
	const getUsernameInput = data && data.usernameInput;
	const getInputEmail = data && data.emailInput;
	const getInputPassword = data && data.passwordInput;
	const getregisterButtonName = data && data.registerButtonName;
	const getLoginAccountLink = data && data.loginAccountLink;
	const getLoginAccountNameLink = data && data.loginAccountNameLink;
	const getLoginAccountBeforeLink = data && data.loginAccountBeforeLink;

	const getErrorMessage400 = data && data.errorMessage400;
	const getErrorMessagePassword = data && data.errorMessagePassword;
	const getErrorMessageEmail = data && data.errorMessage;
	const errorTypeEmailType = errors?.email?.type;
	const errorTypePasswordType = errors?.password?.type;

	const onSubmit: SubmitHandler<IFormValues> = async (data) => {
		setErrorRegisterEmailUsername(false);
		setErrorRegisterEmail(false);
		setErrorMinLengthPassword(false);

		await registerUser({
			username: data.username,
			email: data.email,
			password: data.password,
		})
			.then(function (response) {
				// handle success
				router.replace("/login");
			})
			.catch((error) => {
				const errorResponseDataUsed = error.response.data.error;
				const errorResponseDataDetailsEmail = error.response.data.error?.details.errors[0].path[0];
				const errorResponseDataDetailsPassword = error.response.data.error?.details.errors[0].path[0];

				if (errorResponseDataDetailsEmail === "email") setErrorRegisterEmail(true);

				if (errorResponseDataDetailsPassword === "password") setErrorMinLengthPassword(true);

				if (errorResponseDataUsed.name === "ApplicationError") setErrorRegisterEmailUsername(true);
			});
	};

	return (
		<>
			<FormElementHeaderAuth>
				<FormElementHeaderAuthTitle>{getTitleHeader}</FormElementHeaderAuthTitle>
				<FormElementHeaderAuthSubTitle>{getSubTitle}</FormElementHeaderAuthSubTitle>
			</FormElementHeaderAuth>

			{errorLoginEmailUsername && <ErrorMessage>{getErrorMessage400}</ErrorMessage>}

			{errorRegisterEmail && <ErrorMessage>{getErrorMessageEmail}</ErrorMessage>}

			{errorMinLengthPassword && <ErrorMessage>{getErrorMessagePassword}</ErrorMessage>}

			<FormElement onSubmit={handleSubmit(onSubmit)}>
				<Input
					label={getUsernameInput}
					labelRegister="username"
					placeholder={getUsernameInput}
					type="text"
					register={register}
					bgColor="light"
					required
				/>

				<Input
					label={getInputEmail}
					labelRegister="email"
					type="text"
					placeholder={getInputEmail}
					register={register}
					pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
					error="pattern"
					errorType={errorTypeEmailType}
					errorsMessages={getErrorMessageEmail}
					bgColor="light"
					required
				/>

				<InputPassword
					label={getInputPassword}
					labelRegister="password"
					placeholder={getInputPassword}
					register={register}
					min={6}
					error="minLength"
					errorType={errorTypePasswordType}
					errorsMessages={getErrorMessagePassword}
					bgColor="light"
					required
				/>

				<FormElementSubmit type="submit">{getregisterButtonName}</FormElementSubmit>

				<FormElementSingInAccount>
					<p>
						<span>{getLoginAccountBeforeLink} </span>

						<FormElementSingInAccountLink href={getLoginAccountLink}>
							{getLoginAccountNameLink}
						</FormElementSingInAccountLink>
					</p>
				</FormElementSingInAccount>
			</FormElement>
		</>
	);
};

export default FormRegister;
