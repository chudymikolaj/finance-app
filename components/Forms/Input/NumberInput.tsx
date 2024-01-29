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
	min?: number;
	max?: number;
	step?: number;
	percentage?: boolean;
	bgColor?: "light" | "dark";
};

// The following component is an example of your existing Input Component
const NumberInput = ({
	label,
	labelRegister,
	placeholder,
	type,
	register,
	min,
	max,
	step,
	percentage,
	bgColor = "dark",
}: InputProps) => {
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
						{...register(labelRegister, { required: true })}
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
					{...register(labelRegister, { required: true })}
				/>
			)}
		</>
	);
};

export default NumberInput;
