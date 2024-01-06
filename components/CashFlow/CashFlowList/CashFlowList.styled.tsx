import styled from "styled-components";
import { FlexColumn } from "@/styles/mixins.styled";

const List = styled.ul`
	${FlexColumn}
	gap: 5px;

	height: 398px;
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
	overflow: hidden;
`;

export default List;
