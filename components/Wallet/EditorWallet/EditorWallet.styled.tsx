import styled from "styled-components";
import { SIZES, WEIGHT, CUBICS, BORDER_RADIUS } from "@/styles/constants";
import { FlexRowSpaceBetweenCenter } from "@/styles/mixins.styled";

export const EditorWallet = styled.div<{ $animate?: boolean }>`
	width: 100%;
	margin: auto;
	background-color: ${(props) => props.theme.colorElement};
	border: 1px solid ${(props) => props.theme.colorBorder};
	border-radius: ${BORDER_RADIUS};
	visibility: ${(props) => (props.$animate ? "visible" : "hidden")};
	opacity: ${(props) => (props.$animate ? "1" : "0")};
	position: absolute;
	top: 0;
	left: 0;
	transform: ${(props) =>
		props.$animate ? "translateY(0)" : "translateY(10px)"};
	transition: transform ${CUBICS.easyOut} 200ms, opacity ${CUBICS.easyOut} 200ms,
		visibility ${CUBICS.easyOut} 200ms;
	z-index: 1;
`;

export const EditorWalletForm = styled.form`
	padding: 16px;
`;

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
	background-color: ${(props) => props.theme.colorElement_5};
	border-radius: ${BORDER_RADIUS};
	flex: 1 0 auto;
	text-align: center;
	font-size: ${SIZES.smallText};
	cursor: pointer;

	span {
		width: 100%;
		text-align: center;
	}

	color: ${(props) => props.theme.colorTextActiveButton};
	transition: background-color ${CUBICS.easyOut} 200ms;

	${EditorWalletFormChoiceInputRadio}:checked + & {
		background-color: ${(props) => props.theme.colorBackgroundActiveButton};
	}

	&:hover {
		background-color: ${(props) => props.theme.colorBackgroundActiveButton};
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
	width: 100%;
	${FlexRowSpaceBetweenCenter};
	flex: 1 0 100%;
`;

export const EditorWalletFormChoiceButton = styled.div`
	flex: 1 0 auto;
`;

export const EditorWalletInput = styled.input`
	width: 100%;
	max-width: calc(100%);
	padding: 10px 16px;
	background-color: ${(props) => props.theme.colorElement_5};
	border: unset;
	border-radius: ${BORDER_RADIUS};
	font-size: ${SIZES.smallText};
	color: ${(props) => props.theme.color};
`;

export const EditorWalletButton = styled.button`
	width: 100%;
	padding: 10px 16px;
	background-color: ${(props) => props.theme.colorBackgroundActiveButton};
	border-radius: ${BORDER_RADIUS};
	font-size: ${SIZES.smallText};
	color: ${(props) => props.theme.colorTextActiveButton};
	transition: background-color ${CUBICS.easyOut} 200ms;

	&:hover {
		background-color: ${(props) => props.theme.colorElement_5};
	}
`;
