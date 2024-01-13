"use client";

import {
	AssetHeader,
	AssetHeaderTitle,
	AssetHeaderButton,
} from "./AssetManagementHeader.styled";

const AssetManagementHeader = () => {
	return (
		<>
			<AssetHeader>
				<AssetHeaderTitle>Twoje aktywa</AssetHeaderTitle>
				<AssetHeaderButton href="/">Zobacz wszystko</AssetHeaderButton>
			</AssetHeader>
		</>
	);
};

export default AssetManagementHeader;
