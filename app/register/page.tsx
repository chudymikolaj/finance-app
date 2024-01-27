import axios from "axios";

import LoginPageElements from "./LoginPage";

import { LoginPageContainer } from "./login.styled";

interface LoginPageData {
	attributes: any;
}

interface GlobalData {
	darkImage: string;
	lightImage: string;
}

const strapiUrl = process.env.STRAPI_URL;

export const LoginPage = async () => {
	const responseFormData = await getLoginPageData();
	const responseGlobalData = await getGlobalData();

	return (
		<LoginPageContainer>
			<LoginPageElements
				data={responseFormData}
				global={responseGlobalData}
			/>
		</LoginPageContainer>
	);
};

export const getLoginPageData = async (): Promise<LoginPageData> => {
	try {
		const responseForm = await axios.get(
			`${strapiUrl}/api/login-page?populate=*`
		);

		if (responseForm.status !== 200) {
			throw new Error(`An error occurred: ${responseForm.status}`);
		}

		const attributes = responseForm.data.data.attributes;

		return attributes;
	} catch (error) {
		console.error("Error in getLoginPageData:", error);
		throw error; // Re-throw the error to be caught in the higher level
	}
};

export const getGlobalData = async (): Promise<GlobalData> => {
	try {
		const getGlobalData = await axios.get(`${strapiUrl}/api/global?populate=*`);

		if (getGlobalData.status !== 200) {
			throw new Error(`An error occurred: ${getGlobalData.status}`);
		}

		const getAttributes = getGlobalData.data.data.attributes;
		const darkImage = getAttributes.darkModeImageFormPage.data?.attributes.url;
		const lightImage =
			getAttributes.lightModeImageFormPage.data?.attributes.url;

		return { darkImage, lightImage };
	} catch (error) {
		console.error("Error in getGlobalData:", error);
		throw error; // Re-throw the error to be caught in the higher level
	}
};

export default LoginPage;
