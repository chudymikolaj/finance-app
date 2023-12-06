import styled from "styled-components";
import { FlexColumn } from "@/styles/mixins.styled";

const List = styled.ul`
	${FlexColumn}
	gap: 10px;

	height: 100%;
`;

export default List;
