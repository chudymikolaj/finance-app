"use client";

import { useAppContext } from "@/lib/ThemeProviderContext/actions";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Line from "@/components/Line";
import PopupComponent from "@/components/Popup";
import AssetHeader from "./AssetManagementHeader";
import AssetManagementTabs from "./AssetManagementTabs";

import {
	AssetCategoriesCategories,
	AssetCategoriesCategory,
	AssetCategoriesCategoryButton,
	AssetCategoriesCategoryProgress,
	AssetCategoriesCategoryProgressBar,
	AssetCategoriesCategoryName,
	AssetCategoriesCategoryValue,
	AssetCategoriesCategoryCircleColor,
	AssetCategoriesContainer,
} from "./AssetManagementAssets.styled";

const assetsTabsList = [
	{
		categoryId: "zelazna-rezerwa",
		title: "Żelazna rezerwa",
		value: 13500,
		goal: 10000,
		color: "#5D8C71",
		lists: [
			{
				id: "1",
				title: "PLN",
				value: 4500,
			},
			{
				id: "2",
				title: "PLN",
				value: 4500,
			},
			{
				id: "3",
				title: "PLN",
				value: 4500,
			},
		],
	},
	{
		categoryId: "inwestycje",
		title: "Inwestycje",
		value: 25000,
		goal: 10000,
		color: "#FF6969",
		lists: [
			{
				id: "1",
				title: "PLN",
				value: 25000,
			},
		],
	},
	{
		categoryId: "oszczednosci",
		title: "Oszczędności",
		value: 15000,
		goal: 10000,
		color: "#9747FF",
		lists: [
			{
				id: "1",
				title: "PLN",
				value: 15000,
			},
		],
	},
	{
		categoryId: "reszta",
		title: "Reszta",
		value: 5000,
		goal: 10000,
		color: "#67aded",
		lists: [
			{
				id: "1",
				title: "PLN",
				value: 5000,
			},
		],
	},
];

const AssetManagementComponent = () => {
	const { updateAssetListTabs, assetTabLists } = useAppContext();
	const isAssets = assetTabLists.length > 0;
	const calcPercentageOfGoal = (value: number, goal: number) =>
		(value / goal) * 100 >= 100 ? 100 : (value / goal) * 100;

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
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1024,
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

	useEffect(() => {
		if (!isAssets) {
			updateAssetListTabs(assetsTabsList);
		}

		setActiveCategory(assetsTabsList[0]?.categoryId);
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
							{assetTabLists.map(
								({ categoryId, title, value, goal, color }) => (
									<div key={categoryId}>
										<AssetCategoriesCategory>
											<AssetCategoriesCategoryButton
												onClick={() => {
													handleOpenPopup();
													setActiveCategory(categoryId);
												}}
											>
												<AssetCategoriesCategoryCircleColor
													$color={color}
												></AssetCategoriesCategoryCircleColor>

												<AssetCategoriesCategoryName>
													{title}
												</AssetCategoriesCategoryName>

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
								)
							)}
						</Slider>

						<PopupComponent
							openPopup={showPopupAssetManagment}
							closePopup={handleClosePopup}
						>
							<AssetManagementTabs
								activeTab={activeCategory}
								assetTabLists={assetTabLists}
							/>
						</PopupComponent>
					</>
				)}
			</AssetCategoriesCategories>
		</AssetCategoriesContainer>
	);
};

export default AssetManagementComponent;
