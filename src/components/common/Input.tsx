import React, {ReactNode, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  ReturnKeyType,
  KeyboardType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Controller} from 'react-hook-form';
import {CustomText} from './CustomText';
import {colors, fonts, globalStyles} from '@/utils';

type ScreenProps = {
  control: any;
  rules?: any;
  name: string;
  label?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  maxLength?: number;
  editable?: boolean;
  iconPress?: () => void;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  returnKeyType?: ReturnKeyType;
  sref?: any;
  onSubmitEditing?: any;
  autoCapitalize?: 'characters' | 'sentences' | 'words' | 'none';
  style?: StyleProp<ViewStyle>;
  altStyle?: StyleProp<ViewStyle>;
  right?: ReactNode;
};

export const Input = ({
  rightIcon,
  leftIcon,
  right,
  keyboardType,
  secureTextEntry,
  maxLength,
  editable,
  iconPress,
  placeholder,
  returnKeyType,
  label,
  name,
  rules,
  control,
  sref,
  onSubmitEditing,
  autoCapitalize,
  style,
  altStyle,
  onChangeText,
  coloredInput,
}: ScreenProps & {coloredInput?: boolean}) => {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <View style={style}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              {label && (
                <CustomText fontFamily="fontMedium">{label}</CustomText>
              )}
            </View>
          </View>
          <View
            style={[
              styles.flexRow,
              {
                borderBottomColor: inputFocus
                  ? colors.primary
                  : error
                  ? colors.secondary
                  : colors.borderBg,
                backgroundColor: coloredInput ? colors.primary : colors.white,
              },
              altStyle,
            ]}>
            {leftIcon && (
              <View style={styles.iconBtn}>
                <View>{leftIcon}</View>
              </View>
            )}
            <TextInput
              maxLength={maxLength}
              secureTextEntry={secureTextEntry}
              style={[
                styles.inputStyle,
                {
                  color: coloredInput ? 'white' : colors.header,
                  backgroundColor: 'transparent',
                },
              ]}
              selectionColor={coloredInput ? colors.white : colors.body}
              cursorColor={coloredInput ? colors.white : colors.primary}
              editable={editable}
              keyboardType={keyboardType}
              placeholderTextColor={coloredInput ? colors.white : colors.body}
              placeholder={placeholder}
              onChangeText={text => {
                onChange(text);
                onChangeText?.(text);
              }}
              value={
                keyboardType === 'numeric'
                  ? value
                      ?.replace('.', '')
                      ?.replace(',', '')
                      ?.replace('-', '')
                      ?.replace(' ', '')
                  : value
              }
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              returnKeyType={returnKeyType}
              ref={sref}
              onSubmitEditing={onSubmitEditing}
              autoCapitalize={autoCapitalize}
            />
            {rightIcon && (
              <TouchableHighlight
                activeOpacity={0.5}
                style={styles.iconBtn}
                onPress={iconPress}
                underlayColor={colors.inputBox}>
                <View>{rightIcon}</View>
              </TouchableHighlight>
            )}
            {right && <View style={{padding: 5}}>{right}</View>}
          </View>
          {error && (
            <View style={{marginBottom: globalStyles.margin.xs - 4}}>
              <CustomText
                color={colors.secondary}
                fontSize={fonts.text.smallText}>
                {error?.message}
              </CustomText>
            </View>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBox,
    borderRadius: globalStyles.radius.sm,
    paddingRight: globalStyles.padding.sm,
    marginTop: globalStyles.margin.xs,
    height: 54,
    paddingHorizontal: globalStyles.padding.sm,
    borderBottomWidth: 1,
  },
  inputStyle: {
    flex: 1,
    borderRadius: globalStyles.radius.sm,
    fontFamily: 'fontRegular',
    color: colors.header,
    fontSize: fonts.text.smallText,
    backgroundColor: colors.inputBox,
  },
  iconBtn: {
    borderRadius: 50,
    padding: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
