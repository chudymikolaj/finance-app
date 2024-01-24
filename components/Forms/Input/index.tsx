import { type UseFormRegister } from "react-hook-form";

import {
	type InputTypeValues,
	type IFormValues,
	type BlockFormKeysEvent,
} from "../Form.types";

import {
	InputElement,
	InputElementWithSymbol,
	InputElementWrapper,
	InputLabel,
	PercentageSymbol,
} from "./input.styled";

type InputProps = {
	label: string;
	labelRegister: string;
	placeholder: string;
	type: InputTypeValues;
	register: UseFormRegister<IFormValues>;
	required: boolean;
	min?: number;
	max?: number;
	step?: number;
	percentage?: boolean;
	bgColor?: "light" | "dark";
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
	max,
	step,
	percentage,
	bgColor = "dark",
}: InputProps) => {
	if (type === "number") {
		const blockFormKeysInput = (event: BlockFormKeysEvent) =>
			["e", "E", "+", "-"].includes(event.key) && event.preventDefault();

		return (
			<>
				<InputLabel htmlFor={labelRegister}>{label}</InputLabel>
				{percentage ? (
					<InputElementWrapper>
						<InputElementWithSymbol
							id={labelRegister}
							placeholder={placeholder}
							type={type}
							onKeyDown={blockFormKeysInput}
							min={min}
							max={max}
							step={step}
							$bgColor={bgColor}
							{...register(labelRegister, { required })}
						/>
						<PercentageSymbol>%</PercentageSymbol>
					</InputElementWrapper>
				) : (
					<InputElement
						id={labelRegister}
						placeholder={placeholder}
						type={type}
						onKeyDown={blockFormKeysInput}
						min={min}
						max={max}
						step={step}
						$bgColor={bgColor}
						{...register(labelRegister, { required })}
					/>
				)}
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
				$bgColor={bgColor}
				{...register(labelRegister, { required })}
			/>
		</>
	);
};

export default Input;
