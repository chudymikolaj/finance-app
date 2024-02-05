import axios from "axios";

const fetchPrivateNavbar = async (jwt: string) => {
	try {
		const { data, status } = await axios.get(
			`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navbar-private?populate[navbar][populate]=*`,
			{
				headers: {
					Authorization: "Bearer " + jwt,
				},
			}
		);

		if (status !== 200) {
			throw new Error(`An error occurred: ${status}`);
		}

		const attributes = data.data.attributes.navbar;

		return attributes;
	} catch (error) {
		console.error("Error in getLoginPageData:", error);
		throw error; // Re-throw the error to be caught in the higher level
	}
};

export default fetchPrivateNavbar;
