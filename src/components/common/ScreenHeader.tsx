import {
  StyleSheet,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
  BackHandler,
} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import {CustomText} from './CustomText';
import {colors, fonts, globalStyles} from '@/utils';
import Ionicons from '@expo/vector-icons/Ionicons';

type ScreenProps = {
  title?: string;
  children?: ReactNode;
  loading?: boolean;
  color?: string;
  hide?: boolean;
  showRightIcon?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  left?: ReactNode;
};

export const ScreenHeader = ({
  title,
  children,
  loading,
  color,
  hide,
  style,
  showRightIcon = true,
}: ScreenProps) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => loading && true,
    );
    return () => backHandler.remove();
  }, [loading]);

  return (
    <>
      {!hide && (
        <View style={[styles.mainWrapper, style]}>
          <View style={styles.centerWrapper}>
            <View style={styles.iconWrapper}>
              <Ionicons name="cart" size={24} color={colors.white} />
            </View>
            <CustomText
              fontSize={fonts.text.textRegular}
              fontFamily="fontBold"
              color={color || colors.orange}
              style={styles.title}>
              basket
            </CustomText>
          </View>

          {showRightIcon && (
            <View style={{marginLeft: globalStyles.margin.lg}}>{children}</View>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 400,
    marginTop: globalStyles.padding.sm,
    paddingHorizontal: globalStyles.wrapper,
    backgroundColor: colors.white,
    paddingBottom: globalStyles.padding.xs + 2,
    paddingVertical: globalStyles.padding.xs,
  },
  centerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  title: {
    textAlign: 'center',
  },
});
