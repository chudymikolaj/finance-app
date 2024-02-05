import axios from "axios";

const fetchPrivateNavbar = async () => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navbar-public?populate[navbar][populate]=*`
		);

		if (response.status !== 200) {
			throw new Error(`An error occurred: ${response.status}`);
		}

		const attributes = response.data.data.attributes.navbar;

		return attributes;
	} catch (error) {
		console.error("Error in getLoginPageData:", error);
		throw error; // Re-throw the error to be caught in the higher level
	}
};

export default fetchPrivateNavbar;
