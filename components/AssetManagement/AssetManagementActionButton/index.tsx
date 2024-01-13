import {
	AssetManagementActionButton,
	AssetManagementActionButtonContainer,
} from "./AssetManagementActionButton.styled";

const AssetManagementActionButtonComponent = ({
	action,
}: {
	action: () => void;
}) => {
	return (
		<AssetManagementActionButtonContainer>
			<AssetManagementActionButton action={action}>
				Dodaj nowe aktywo
			</AssetManagementActionButton>
		</AssetManagementActionButtonContainer>
	);
};

export default AssetManagementActionButtonComponent;
