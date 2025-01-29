import 'react-native-gesture-handler';
import React, {useCallback, useState} from 'react';
import {Appearance, StatusBar, StyleSheet, View} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {RootStackNavigation} from '@/navigations';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = React.useRef();

  const [theme, setTheme] = useState(Appearance.getColorScheme());

  const [fontsLoaded] = useFonts({
    fontBlack: require('./assets/fonts/Inter/Inter-Black.ttf'),
    fontExtraBold: require('./assets/fonts/Inter/Inter-ExtraBold.ttf'),
    fontBold: require('./assets/fonts/Inter/Inter-Bold.ttf'),
    fontRegular: require('./assets/fonts/Inter/Inter-Regular.ttf'),
    fontMedium: require('./assets/fonts/Inter/Inter-Medium.ttf'),
    fontSemiBold: require('./assets/fonts/Inter/Inter-SemiBold.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container} onLayout={onLayoutRootView}>
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                // @ts-ignore
                routeNameRef.current = navigationRef.getCurrentRoute().name;
                // @ts-ignore
                // setCurrentScreenName(routeNameRef.current);
              }}
              onStateChange={() => {
                const previousRouteName = routeNameRef.current;
                // @ts-ignore
                const currentRouteName = navigationRef.getCurrentRoute().name;
                if (previousRouteName !== currentRouteName) {
                  // @ts-ignore
                  routeNameRef.current = currentRouteName;
                  // setCurrentScreenName(currentRouteName);
                }
              }}>
              <GestureHandlerRootView
                style={{
                  flex: 1,
                  backgroundColor: 'grey',
                }}>
                <RootStackNavigation initialRouteName="ComponentExamples" />
              </GestureHandlerRootView>
            </NavigationContainer>
          </View>
          <StatusBar
            backgroundColor={theme === 'dark' ? 'transparent' : 'transparent'}
            barStyle={theme === 'dark' ? 'dark-content' : 'dark-content'}
            translucent
          />
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
