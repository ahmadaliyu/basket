import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, fonts, globalStyles} from '@/utils';
import {HomeStack} from './HomeStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {BottomNavigationParamList} from './types';
import Ionicons from '@expo/vector-icons/Ionicons';

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
          height: Platform.OS === 'android' ? 60 : 85,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 0,
          width: '100%',
          alignSelf: 'center',

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
            <Ionicons
              name="home-outline"
              color={focused ? 'orange' : 'dark'}
              size={20}
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
            <Ionicons
              name="star-outline"
              color={focused ? 'orange' : 'dark'}
              size={20}
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
            <Ionicons
              name="person-outline"
              color={focused ? 'orange' : 'dark'}
              size={20}
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
            <Ionicons
              name="cart-outline"
              color={focused ? 'orange' : 'dark'}
              size={20}
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
