"use client"

import styled from 'styled-components';
import { BORDER_RADIUS } from '@/styles/constants';

export const InputLabel = styled.label`
	width: 100%;
`;

export const InputElement = styled.input`
	width: 100%;
	max-width: calc(100%);
	padding: 10px 16px;
	background-color: ${({ theme }) => theme.colorElement_5};
	border: unset;
	border-radius: ${BORDER_RADIUS};
	font-size: 14px;
	color: ${({ theme }) => theme.color};
`;

