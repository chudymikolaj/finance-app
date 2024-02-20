"use client";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Line from "@/components/Line";
import PopupComponent from "@/components/Popup";
import AssetHeader from "./AssetManagementHeader";
import AssetManagementTabs from "./AssetManagementTabs";

import { getUserDataAxios } from "@/utils/fetch/getUserDataAxios";
import updateTabValueAxios from "@/utils/fetch/updateTabValueAxios";
import {
	AssetCategoriesCategories,
	AssetCategoriesCategory,
	AssetCategoriesCategoryButton,
	AssetCategoriesCategoryCircleColor,
	AssetCategoriesCategoryName,
	AssetCategoriesCategoryProgress,
	AssetCategoriesCategoryProgressBar,
	AssetCategoriesCategoryValue,
	AssetCategoriesContainer,
} from "./AssetManagementAssets.styled";

const AssetManagementComponent = () => {
	const { updateAssetListTabs, assets_tabs } = useAppContext();

	const [showPopupAssetManagment, setShowPopupAssetManagment] = useState(false);
	const [activeCategory, setActiveCategory] = useState("");
	const [slickSettings, setSlickSettings] = useState({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	const calcPercentageOfGoal = (value: number, goal: number) =>
		(value / goal) * 100 >= 100 ? 100 : (value / goal) * 100;

	const isAssets = assets_tabs?.length > 0;

	useEffect(() => {
		const securePage = async () => {
			const session = await getSession();

			if (session) {
				const resultAssetsTabs = await getUserDataAxios(session, "?populate[assets_tabs][populate][tab_assets]=*");

				updateAssetListTabs([]);

				if ("assets_tabs" in resultAssetsTabs) {
					const convertedValueOfTabs = resultAssetsTabs.assets_tabs.map((tab) => {
						let value = tab.tab_assets.reduce((accumulator, currentValue) => {
							return accumulator + currentValue.value;
						}, 0);

						const newValue = { ...tab, value };

						updateTabValueAxios(newValue, session.jwt, "/api/assets-tabs");

						return newValue;
					});

					updateAssetListTabs(convertedValueOfTabs);
				}
			}
		};

		securePage();
	}, []);

	const handleOpenPopup = () => setShowPopupAssetManagment(true);
	const handleClosePopup = () => setShowPopupAssetManagment(false);

	return (
		<AssetCategoriesContainer>
			<AssetHeader />
			<Line />
			<AssetCategoriesCategories>
				{!isAssets && (
					<AssetCategoriesCategory>
						<span>Wczytywanie kategorii</span>
					</AssetCategoriesCategory>
				)}

				{isAssets && (
					<>
						<Slider {...slickSettings}>
							{assets_tabs.map(({ id_asset, name, value, goal, color }) => (
								<div key={id_asset}>
									<AssetCategoriesCategory>
										<AssetCategoriesCategoryButton
											onClick={() => {
												handleOpenPopup();
												setActiveCategory(id_asset);
											}}
										>
											<AssetCategoriesCategoryCircleColor $color={color}></AssetCategoriesCategoryCircleColor>

											<AssetCategoriesCategoryName>{name}</AssetCategoriesCategoryName>

											<AssetCategoriesCategoryValue>
												{value}/{goal} PLN
											</AssetCategoriesCategoryValue>

											<AssetCategoriesCategoryProgress>
												<AssetCategoriesCategoryProgressBar
													$progress={calcPercentageOfGoal(value, goal)}
													$color={color}
												/>
											</AssetCategoriesCategoryProgress>
										</AssetCategoriesCategoryButton>
									</AssetCategoriesCategory>
								</div>
							))}
						</Slider>

						<PopupComponent
							openPopup={showPopupAssetManagment}
							closePopup={handleClosePopup}
						>
							<AssetManagementTabs
								activeTab={activeCategory}
								assets_tabs={assets_tabs}
							/>
						</PopupComponent>
					</>
				)}
			</AssetCategoriesCategories>
		</AssetCategoriesContainer>
	);
};

export default AssetManagementComponent;
