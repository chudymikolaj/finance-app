import { type UseFormRegister } from "react-hook-form";

import { type InputTypeValues, type IFormValues } from "../Form.types";

import { InputWrapper, InputElement, InputLabel } from "./input.styled";

import { ErrorMessageForm } from "../Form.styled";

type InputProps = {
	label: string;
	labelRegister: string;
	placeholder: string;
	type: InputTypeValues;
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
const Input = ({
	label,
	labelRegister,
	placeholder,
	type,
	register,
	required,
	min,
	bgColor = "dark",
	pattern,
	error,
	errorType,
	errorsMessages,
}: InputProps) => {
	const isErrorType = errorType === error && errorType !== undefined;

	return (
		<InputWrapper>
			<InputLabel htmlFor={labelRegister}>{label}</InputLabel>
			<InputElement
				id={labelRegister}
				placeholder={placeholder}
				type={type}
				$bgColor={bgColor}
				{...register(labelRegister, {
					required,
					minLength: min,
					pattern,
				})}
			/>
			{isErrorType && <ErrorMessageForm>{errorsMessages}</ErrorMessageForm>}
		</InputWrapper>
	);
};

export default Input;
