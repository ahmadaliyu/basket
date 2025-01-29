import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Onboarding: undefined;
  Welcome: undefined;
  LoginScreen: undefined;
  BottomTabNavigation: NavigatorScreenParams<BottomNavigationParamList>;
};

export type BottomNavigationParamList = {
  App: NavigatorScreenParams<HomeStackParamList>;
  CartScreen: undefined;
  SavedScreen: undefined;
  AccountScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeStackParamList = {
  Home: undefined;
};
