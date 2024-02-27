import { type UseFormRegister } from "react-hook-form";

import { type IFormValues } from "../Form.types";

import { InputWrapper, InputPasswordElement, InputLabel, InputPassword, IconWrapper } from "./input.styled";

import { ErrorMessageForm } from "../Form.styled";
import { useState } from "react";
import SvgIcon from "@/components/SvgIcon";

type InputProps = {
	label: string;
	labelRegister: string;
	placeholder: string;
	register: UseFormRegister<IFormValues>;
	required: boolean;
	min?: number;
	bgColor?: "light" | "dark";
	pattern?: any;
	error?: string;
	errorType?: string;
	errorsMessages?: string;
};

// The following component is an example of your existing Input Component
const InputPasswordComponent = ({
	label,
	labelRegister,
	placeholder,
	register,
	required,
	min,
	bgColor = "dark",
	pattern,
	error,
	errorType,
	errorsMessages,
}: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = () => setShowPassword((prevState) => !prevState);
	const isErrorType = errorType === error && errorType !== undefined;

	return (
		<InputWrapper>
			<InputLabel htmlFor={labelRegister}>{label}</InputLabel>

			<InputPassword>
				<InputPasswordElement
					id={labelRegister}
					placeholder={placeholder}
					type={showPassword ? "text" : "password"}
					$bgColor={bgColor}
					{...register(labelRegister, {
						required,
						minLength: min,
						pattern,
					})}
				/>

				<IconWrapper>
					<SvgIcon
						onClick={handleChange}
						src="/eye.svg"
					/>
				</IconWrapper>
			</InputPassword>

			{isErrorType && <ErrorMessageForm>{errorsMessages}</ErrorMessageForm>}
		</InputWrapper>
	);
};

export default InputPasswordComponent;
