import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, fonts, globalStyles} from '@/utils';
import {HomeStack} from './HomeStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {BottomNavigationParamList} from './types';

import {CustomText} from '@/components';
import {AccountScreen} from '@/screens';

const Tab = createBottomTabNavigator<BottomNavigationParamList>();

const CartScreen = () => {
  return (
    <View>
      <CustomText>Item</CustomText>
    </View>
  );
};
const SavedScreen = () => {
  return (
    <View>
      <CustomText>Item</CustomText>
    </View>
  );
};

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: fonts.text.smallText,
          fontFamily: 'fontBold',
        },

        tabBarItemStyle: {
          marginVertical: globalStyles.margin.xs - 4,
          // borderWidth: 3,
        },
        tabBarStyle: {
          height: Platform.OS === 'android' ? 50 : 85,
          justifyContent: 'center',
          alignItems: 'center',
          // borderTopWidth: 0,
          elevation: 0,
          // borderWidth: 2,
          width: '100%',
          alignSelf: 'center',
          // bottom: 20,
          // borderRadius: 100,
          backgroundColor: colors.white,
          display:
            getFocusedRouteNameFromRoute(route) === 'Home' ||
            getFocusedRouteNameFromRoute(route) === 'SavingsScreen' ||
            getFocusedRouteNameFromRoute(route) === 'CardHome' ||
            getFocusedRouteNameFromRoute(route) === 'InsuranceScreen' ||
            getFocusedRouteNameFromRoute(route) === 'LoanScreen' ||
            !getFocusedRouteNameFromRoute(route)
              ? 'flex'
              : 'none',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,

        headerShown: false,
      })}>
      <Tab.Screen
        name="App"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.image,
                {
                  tintColor: focused ? colors.primary : colors.gray,
                },
              ]}
              source={require('../../assets/icons/home-active.png')}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.image,
                {
                  tintColor: focused ? colors.primary : colors.gray,
                },
              ]}
              source={require('../../assets/icons/home-active.png')}
            />
          ),
          tabBarLabel: 'Saved',
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.image,
                {
                  tintColor: focused ? colors.primary : colors.gray,
                },
              ]}
              source={require('../../assets/icons/home-active.png')}
            />
          ),
          tabBarLabel: 'Account',
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.image,
                {
                  tintColor: focused ? colors.primary : colors.gray,
                },
              ]}
              source={require('../../assets/icons/home-active.png')}
            />
          ),
          tabBarLabel: 'Cart',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  image: {width: 23, height: 23},
});
