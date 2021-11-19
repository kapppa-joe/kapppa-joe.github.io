import useWindowDimensions from "./useWindowDimensions";

// const devices = ["sm", "md", "lg", "xl"];
const breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200 };

const useGuessDevice = () => {
  const { width } = useWindowDimensions();
  const isTouchDevice = width <= breakpoints.md;
  const isMobile = width <= breakpoints.sm;
  const isLargeScreen = width > breakpoints.lg;
  return { isTouchDevice, isMobile, isLargeScreen };
};

export default useGuessDevice;
