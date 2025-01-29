import React, {forwardRef} from 'react';
import {
  Image,
  StyleProp,
  ImageStyle,
  GestureResponderEvent,
  View,
  TouchableOpacity,
} from 'react-native';

const icons = {
  'eye-slash': require('../../../assets/icons/eye-slash.png'),
  eye: require('../../../assets/icons/eye.png'),
  bell: require('../../../assets/icons/bell.png'),
};

interface TAppIcons {
  name: keyof typeof icons;
  style?: StyleProp<ImageStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  size?: number;
}

export const CustomIcon = forwardRef<View, TAppIcons>(function (
  {name, style, size = 24, onPress},
  ref,
) {
  return (
    (onPress && (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[{width: size, height: size}, style]}>
        <Image
          style={[{width: size, height: size}, style]}
          source={icons[name]}
        />
      </TouchableOpacity>
    )) || (
      <Image
        style={[{width: size, height: size}, style]}
        source={icons[name]}
      />
    )
  );
});
