import 'react-native-gesture-handler/jestSetup';
import "@testing-library/jest-native/extend-expect";

jest.mock('react-native-gesture-handler', () => ({
  Swipeable: () => null,
  DrawerLayout: () => null,
  State: {},
  PanGestureHandler: () => null,
  GestureHandlerRootView: (props) => props.children,
  TouchableWithoutFeedback: (props) => props.children,
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    NavigationContainer: (props) => <div {...props} />,
    useNavigation: jest.fn().mockReturnValue({
      navigate: jest.fn(),
      goBack: jest.fn(),
      openDrawer: jest.fn(), 
    }),
  };
});

jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: jest.fn(() => ({
    Navigator: ({ children, ...props }) => (
      <div testID="drawer-navigator" {...props}>
        {children}
      </div>
    ),
    Screen: ({ options, ...props }) => (
      <div testID={options?.testID || "screen"} {...props} />
    ),
  })), 
}));

// Mock useColorScheme to test both light and dark themes
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.useColorScheme = jest.fn();
  return RN;
});