import styled from "styled-components";
import ButtonSubmit from "@/components/Buttons/ButtonSubmit";
import { SIZES, WEIGHT, CUBICS, BORDER_RADIUS } from "@/styles/constants";
import { FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";

export const EditorWalletForm = styled.form``;

export const EditorWalletFormChoice = styled.div`
	margin: 0 auto 20px;
`;

export const EditorWalletFormChoiceName = styled.p`
	margin: 0 auto 10px;
	font-size: ${SIZES.smallText};
`;

export const EditorWalletFormChoiceLabels = styled.div`
	${FlexRowSpaceBetweenCenter}
	gap: 10px;
`;

export const EditorWalletFormChoiceInputRadio = styled.input`
	display: none;
	visibility: hidden;
`;

export const EditorWalletFormChoiceLabel = styled.label`
	${FlexRowSpaceBetweenCenter}

	padding: 10px 16px;
	background-color: ${(props) => props.theme.formLabelBackground};
	border-radius: ${BORDER_RADIUS};
	flex: 1 0 auto;
	text-align: center;
	font-size: ${SIZES.smallText};
	font-weight: ${WEIGHT.normal};
	cursor: pointer;

	span {
		width: 100%;
		text-align: center;
	}

	color: ${(props) => props.theme.formLabelInputColor};
	transition: background-color ${CUBICS.easyOut} 200ms;

	${EditorWalletFormChoiceInputRadio}:checked + &, &:hover {
		background-color: ${(props) => props.theme.activeButtonColor};
		color: ${(props) => props.theme.formLabelInputFontColor};
	}
`;

export const EditorWalletLabel = styled.label`
	${FlexRowSpaceBetweenCenter};
	gap: 10px;

	width: 100%;
	margin: 0 auto 10px;

	&:last-of-type {
		margin: 0 auto 20px;
	}

	flex-wrap: wrap;
`;

export const EditorWalletName = styled.span`
	flex: 1 0 100%;
	font-size: ${SIZES.smallText};
	font-weight: ${WEIGHT.normal};
`;

export const EditorWalletInputWrapper = styled.div`
	${FlexRowSpaceBetweenCenter};
	flex: 1 0 100%;

	width: 100%;
`;

export const EditorWalletFormChoiceButton = styled.div`
	flex: 1 0 auto;
`;

export const EditorWalletInput = styled.input`
	width: 100%;
	padding: 10px 16px;
	background-color: ${(props) => props.theme.formLabelBackground};
	border: unset;
	border-radius: ${BORDER_RADIUS};
	outline-color: ${(props) => props.theme.formOutlineColor};
	font-size: ${SIZES.smallText};
	color: ${(props) => props.theme.color};
`;

export const EditorWalletButton = styled(ButtonSubmit)``;
