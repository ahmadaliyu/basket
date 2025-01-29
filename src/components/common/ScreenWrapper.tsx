import React, {ReactNode, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  AppState,
  StatusBar,
  Platform,
} from 'react-native';

import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {colors} from '../../utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ScreenProps = {
  backgroundColor?: string;
  statusBarColor?: string;
  barStyle?: 'dark-content' | 'light-content' | 'default';
  style?: any;
  children: ReactNode;
};

export const ScreenWrapper = ({
  children,
  backgroundColor,
  statusBarColor,
  barStyle,
}: ScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        {
          backgroundColor: backgroundColor ? backgroundColor : colors.white,
          paddingTop: Platform.OS === 'android' ? insets.top * 0.8 : 0,
        },
      ]}
      // {...panResponder.panHandlers}
    >
      <StatusBar
        backgroundColor={statusBarColor ? statusBarColor : 'transparent'}
        barStyle={barStyle ? barStyle : 'dark-content'}
        translucent
      />
      <View style={styles.modalOverlay} />
      {/* {countdown === 0 && isFocused && logout()} */}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    zIndex: 200,
  },

  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
