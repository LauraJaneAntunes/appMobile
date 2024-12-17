import 'react-native-gesture-handler/jestSetup';

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
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    })),
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
