import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle, ViewStyle} from 'react-native';
import {colors, fonts} from '@/utils';

type ScreenProps = {
  style?: TextStyle | ViewStyle;
  fontSize?: number;
  color?: string;
  fontFamily?:
    | 'fontBlack'
    | 'fontExtraBold'
    | 'fontBold'
    | 'fontRegular'
    | 'fontMedium'
    | 'fontSemiBold'
    | 'ralewayBold'
    | 'gilroyHeavy'
    | 'gilroyMedium'
    | 'gilroyRegular'
    | 'gilroyBold'
    | 'ralewayMedium'
    | 'ralewayRegular'
    | 'ralewaySemiBold';
  children: any;
  lineHeight?: any;
  textAlign?: 'center' | 'justify' | 'right' | 'left';
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none';
  textDecorationLine?:
    | 'line-through'
    | 'underline'
    | 'underline line-through'
    | 'none';
  onPress?: () => void;
} & TextProps;

export function CustomText({
  fontSize,
  color,
  fontFamily,
  children,
  lineHeight,
  textAlign,
  textTransform,
  textDecorationLine,
  style,
  onPress,
}: ScreenProps) {
  return (
    <Text
      onPress={onPress}
      style={[
        {
          lineHeight: lineHeight && lineHeight,
          fontSize: fontSize ? fontSize : fonts.text.smallText,
          color: color ? color : colors.black,
          fontFamily: fontFamily ? fontFamily : 'fontRegular',
          textAlign: textAlign,
          textTransform: textTransform,
          textDecorationLine: textDecorationLine,
        },
        style,
      ]}
      // adjustsFontSizeToFit
      // numberOfLines={1}
    >
      {children}
    </Text>
  );
}
