import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {RootStackParamList} from './types';
import {LoginScreen, OnBoardingScreen, WelcomeScreen} from '@/screens';
import {BottomTabNavigation} from './BottomNavigator';
import {useAppSelector} from '@/store/hooks';

const RootStack = createNativeStackNavigator<RootStackParamList>();

type Props = {
  initialRouteName?: any;
};

export const RootStackNavigation = ({initialRouteName}: Props) => {
  const {accessToken} = useAppSelector(state => state.user);

  console.log(accessToken, 6667);

  return (
    <RootStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
        customAnimationOnGesture: true,
        animationDuration: 100,
      }}>
      {/* auth screens */}
      <RootStack.Group>
        {accessToken ? (
          <RootStack.Screen name="Main" component={BottomTabNavigation} />
        ) : (
          <>
            <RootStack.Screen name="Onboarding" component={OnBoardingScreen} />
            <RootStack.Screen name="Welcome" component={WelcomeScreen} />
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          </>
        )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
