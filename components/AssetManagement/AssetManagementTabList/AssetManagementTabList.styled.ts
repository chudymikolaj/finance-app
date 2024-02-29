import styled from "styled-components";

import ButtonSVG from "@/components/Buttons/ButtonSvg";
import { devices } from "@/styles/breakpoints";
import { BORDER_RADIUS, SIZES } from "@/styles/constants";
import { FlexColumnStart, FlexRow, FlexRowSpaceBetweenCenter, ScrollBarColor } from "@/styles/mixins.styled";

export const AssetManagementTabsTabList = styled.ul`
	${FlexColumnStart}
	gap: 6px;

	width: 100%;
	height: 102px;
	padding: 0 15px;
	margin: 0 auto 15px;

	@media ${devices.md} {
		margin: 0 auto 25px;
	}

	font-size: ${SIZES.tabNameFontSize};

	overflow-y: auto;

	${ScrollBarColor}
`;

export const AssetManagementTabsTabEmptyList = styled.div`
	width: 100%;
	text-align: center;
`;

export const AssetManagementTabsTabListItem = styled.li`
	${FlexRowSpaceBetweenCenter}
	gap: 10px;

	width: 100%;
	background-color: ${({ theme }) => theme.backgroundElement};
	border-radius: ${BORDER_RADIUS};
`;

export const AssetManagementTabsTabListItemName = styled.div`
	width: 100%;
	max-width: 60%;

	@media ${devices["2xl"]} {
		max-width: 70%;
	}
`;

export const AssetManagementTabsTabListItemValue = styled.div`
	width: 100%;
	max-width: 40%;

	@media ${devices["2xl"]} {
		max-width: 20%;
	}
`;

export const AssetManagementTabsTabListItemButtons = styled.div`
	${FlexRow}
	gap: 10px;
`;

export const AssetManagementTabsTabListItemButton = styled(ButtonSVG)`
	width: 30px;
	height: 30px;
	padding: 0;
	justify-content: center;
`;