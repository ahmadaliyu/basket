import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  CustomText,
  Input,
  ScreenHeader,
  ScreenWrapper,
} from '@/components';
import {colors, fonts, globalStyles} from '@/utils';
import {useForm} from 'react-hook-form';
import {RootStackScreenProps} from '@/navigations/types';
import Ionicons from '@expo/vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useLoginMutation} from '@/service/auth';

export const LoginScreen = ({
  navigation,
}: RootStackScreenProps<'LoginScreen'>) => {
  const {control} = useForm();

  const [login, {isLoading, error, data}] = useLoginMutation();

  const [inputValues, setInputValues] = useState({
    username: '',
    password: '',
  });

  // function to login the user
  const handleLogin = async () => {
    console.log(inputValues, 999);

    try {
      await login(inputValues).unwrap();
    } catch (error: any) {
      Alert.alert(
        `Error!, ${error?.data?.message} email: 'emilys' and password: 'emilyspass'`,
      );
    }
  };

  return (
    <ScreenWrapper>
      <ScreenHeader
        style={{
          paddingBottom: globalStyles.padding.xs + 2,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: globalStyles.wrapper,
        }}>
        <View style={styles.textCon}>
          <CustomText
            textAlign="center"
            fontFamily="fontBold"
            color={colors.dark}
            fontSize={fonts.text.h2}
            style={styles.text}>
            Log into your account
          </CustomText>
          <CustomText
            textAlign="center"
            color={colors.dark}
            fontSize={fonts.text.textRegular}
            style={{...styles.text, width: '70%', alignSelf: 'center'}}>
            Enter your email and password to access your account or create an
            account
          </CustomText>
        </View>
        <Input
          onChangeText={text =>
            setInputValues({
              ...inputValues,
              username: text,
            })
          }
          placeholder="Email address"
          leftIcon={
            <Ionicons name="mail-outline" size={22} color={colors.orange} />
          }
          control={control}
          name="email"
        />
        <Input
          onChangeText={text =>
            setInputValues({
              ...inputValues,
              password: text,
            })
          }
          placeholder="********"
          leftIcon={
            <Ionicons name="key-outline" size={22} color={colors.orange} />
          }
          rightIcon={
            <Ionicons name="eye-off" size={22} color={colors.orange} />
          }
          control={control}
          name="password"
          secureTextEntry
        />
        <View style={styles.checkbox}>
          <BouncyCheckbox
            size={25}
            fillColor={colors.gray}
            unFillColor={colors.white}
            innerIconStyle={{borderWidth: 2, borderRadius: 0, margin: 20}}
            iconStyle={{width: 25, height: 25, borderRadius: 0, margin: 20}}
            onPress={(isChecked: boolean) => {
              console.log(isChecked);
            }}
            style={{width: 35}}
          />
          <CustomText>Remember me</CustomText>
        </View>
        <Button
          onPress={handleLogin}
          loading={isLoading}
          label="LOGIN"
          active={inputValues.username && (inputValues.password as any)}
          buttonStyle={{backgroundColor: colors.dark}}
          style={styles.btn}
        />
        <TouchableOpacity>
          <CustomText
            fontFamily="fontSemiBold"
            color={colors.orange}
            textAlign="center"
            style={styles.passwordText}>
            Forgot password
          </CustomText>
        </TouchableOpacity>
        <CustomText textAlign="center" style={{marginTop: 20}}>
          - Or continue with -
        </CustomText>
        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={[styles.socialButton, {borderColor: 'black'}]}>
            <Ionicons name="logo-facebook" size={22} color={colors.blue} />
            <CustomText style={styles.socialText}>Facebook</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialButton, {borderColor: 'black'}]}>
            <Ionicons name="logo-google" size={22} color={colors.red} />
            <CustomText style={styles.socialText}>Google</CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <CustomText>Don't have an account?</CustomText>
          <TouchableOpacity onPress={() => {}}>
            <CustomText style={styles.signupText}>Signup</CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  textCon: {
    marginVertical: 20,
  },
  text: {marginVertical: 5},
  checkbox: {flexDirection: 'row', alignItems: 'center', gap: 24},
  btn: {
    marginTop: globalStyles.margin.lg,
    width: '85%',
    alignSelf: 'center',
  },
  passwordText: {
    textDecorationColor: 'orange',
    textDecorationLine: 'underline',
    marginTop: 40,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  socialText: {
    marginLeft: 10,
    fontFamily: 'fontRegular',
    fontSize: fonts.text.textRegular,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: colors.orange,
    marginLeft: 5,
    fontFamily: 'fontSemiBold',
  },
});
