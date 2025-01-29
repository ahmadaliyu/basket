import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {CustomText} from './CustomText';
import {colors, fonts, globalStyles} from '@/utils';
import {CustomIcon} from './CustomIcon';

type ScreenProps = {
  bgColor?: string;
  textColor?: string;
  label: string;
  onPress: () => void;
  active?: boolean;
  loading?: boolean;
  hover?: string;
  height?: number;
  leftIcon?: string;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  buttonTextStyle?: ViewStyle | TextStyle;
  buttonStyle?: ViewStyle;
  borderRadius?: number;
  iconSize?: number;
  fontFamily?:
    | 'fontBlack'
    | 'fontBold'
    | 'fontRegular'
    | 'fontMedium'
    | 'fontSemiBold'
    | 'ralewayBold'
    | 'gilroyHeavy'
    | 'gilroyMedium'
    | 'gilroyRegular'
    | 'ralewayMedium'
    | 'ralewayRegular'
    | 'ralewaySemiBold'
    | 'gilroyBold';
};

export function Button({
  active,
  onPress,
  textColor,
  bgColor,
  label,
  loading,
  hover,
  height = 50,
  style,
  buttonTextStyle,
  buttonStyle,
  leftIcon,
  rightIcon,
  iconSize,
  fontFamily = 'fontSemiBold',
}: ScreenProps) {
  const backgroundColor = (pressed: boolean) => {
    if (pressed) {
      return hover ? hover : 'orange';
    } else if (loading) {
      return colors.inactive;
    } else if (bgColor) {
      return bgColor;
    } else {
      return colors.secondary;
    }
  };

  return (
    <View style={style}>
      {/* if button is active */}
      {active ? (
        <Pressable
          style={({pressed}) => [
            styles.activeButton,
            {
              backgroundColor: backgroundColor(pressed),
            },
            {height: height},
            buttonStyle,
          ]}
          onPress={
            !loading
              ? () => {
                  onPress();
                }
              : null
          }>
          <>
            {leftIcon && (
              <CustomIcon
                size={iconSize ? iconSize : 24}
                style={{right: 8, resizeMode: 'contain'}}
                name={leftIcon as never}
              />
            )}
            <CustomText
              fontFamily={fontFamily}
              fontSize={fonts.text.textRegular}
              color={
                textColor ? textColor : loading ? colors.body : colors.white
              }
              style={buttonTextStyle}>
              {loading ? 'Loading' : label}
            </CustomText>
            {rightIcon && <View>{rightIcon}</View>}
            {loading && (
              <ActivityIndicator
                color={colors.body}
                size={'small'}
                style={{
                  marginLeft: globalStyles.margin.xs,
                }}
              />
            )}
          </>
        </Pressable>
      ) : (
        // if button is inactive
        <View style={[styles.inactiveButton, {height: height}]}>
          <CustomText
            fontFamily="fontMedium"
            fontSize={fonts.text.textRegular}
            color={colors.body}>
            {label}
          </CustomText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  activeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: globalStyles.radius.sm,
    flexDirection: 'row',
  },
  inactiveButton: {
    backgroundColor: colors.inactive,
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    borderRadius: globalStyles.radius.sm,
    flexDirection: 'row',
  },
});
