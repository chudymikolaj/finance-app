import { type Path, type UseFormRegister } from "react-hook-form";
import {
	type InputTypeValues,
	type IFormValues,
	type BlockFormKeysEvent,
} from "../Form.types";

import { InputElement, InputLabel } from "./input.styled";

type InputProps = {
	label: Path<IFormValues>;
	labelRegister: Path<IFormValues>;
	placeholder: Path<IFormValues>;
	type: InputTypeValues;
	register: UseFormRegister<IFormValues>;
	required: boolean;
};

// The following component is an example of your existing Input Component
const Input = ({
	label,
	labelRegister,
	placeholder,
	type,
	register,
	required,
}: InputProps) => {
	if (type === "number") {
		const blockFormKeysInput = (event: BlockFormKeysEvent) =>
			["e", "E", "+", "-"].includes(event.key) && event.preventDefault();

		return (
			<>
				<InputLabel htmlFor={labelRegister}>{label}</InputLabel>
				<InputElement
					id={labelRegister}
					placeholder={placeholder}
					type={type}
					onKeyDown={blockFormKeysInput}
					{...register(labelRegister, { required })}
				/>
			</>
		);
	}

	return (
		<>
			<InputLabel htmlFor={labelRegister}>{label}</InputLabel>
			<InputElement
				id={labelRegister}
				placeholder={placeholder}
				type={type}
				{...register(labelRegister, { required })}
			/>
		</>
	);
};

export default Input;
