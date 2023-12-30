export type UseOutsideClickProps = {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    closeFunction?: () => void;
    refs: React.RefObject<HTMLElement>[];
};