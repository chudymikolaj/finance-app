export type UseOutsideClickProps = {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    refs: React.RefObject<HTMLElement>[];
};