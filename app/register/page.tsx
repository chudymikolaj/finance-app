import axios from "axios";

import RegisterElement from "./RegisterElement";

import { RegisterPageContainer } from "./register.styled";

interface RegisterPageData {
	attributes: any;
}

interface GlobalData {
	darkImage: string;
	lightImage: string;
}

const strapiUrl = process.env.STRAPI_URL;

export const RegisterPage = async () => {
	const responseFormData = await getRegisterPageData();
	const responseGlobalData = await getGlobalData();

	return (
		<RegisterPageContainer>
			<RegisterElement
				data={responseFormData}
				global={responseGlobalData}
			/>
		</RegisterPageContainer>
	);
};

export const getRegisterPageData = async (): Promise<RegisterPageData> => {
	try {
		const responseForm = await axios.get(
			`${strapiUrl}/api/register-page?populate=*`
		);

		if (responseForm.status !== 200) {
			throw new Error(`An error occurred: ${responseForm.status}`);
		}

		const attributes = responseForm.data.data.attributes;

		return attributes;
	} catch (error) {
		console.error("Error in getRegisterPageData:", error);
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

export default RegisterPage;
