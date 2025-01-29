import {Button, CustomText, ScreenHeader, ScreenWrapper} from '@/components';
import {colors, fonts, globalStyles} from '@/utils';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/navigations/types';

type Prop = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export const WelcomeScreen = ({navigation}: {navigation: Prop}) => {
  const handleGetStarted = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <ScreenWrapper backgroundColor={colors.dark}>
      <ScreenHeader style={{backgroundColor: colors.dark}} />
      <View style={styles.container}>
        <View style={styles.textCon}>
          <CustomText
            textAlign="center"
            color={colors.gray}
            fontSize={fonts.text.textRegular}
            style={styles.text}>
            Welcome to
          </CustomText>
          <CustomText
            fontSize={fonts.text.h3}
            textAlign="center"
            color={colors.white}
            style={styles.text}>
            basket online store
          </CustomText>
          <CustomText
            textAlign="center"
            color={colors.gray}
            fontSize={fonts.text.textRegular}
            style={{...styles.text, width: '70%', alignSelf: 'center'}}>
            basket is the no1 online store for both new and used products
          </CustomText>
        </View>
        <Image
          source={require('../../../assets/images/couple.jpg')}
          style={styles.image}
        />
        <Button
          buttonStyle={styles.btn}
          active
          label="Get Started"
          onPress={handleGetStarted}
          rightIcon={
            <Ionicons
              name="arrow-forward"
              color={colors.dark}
              size={24}
              style={{marginLeft: 10}}
            />
          }
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: globalStyles.wrapper,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 200,
    marginTop: 80,
  },
  textCon: {
    marginVertical: 20,
  },
  text: {marginVertical: 5},
  btn: {
    backgroundColor: 'orange',
    marginTop: globalStyles.margin.lg,
    width: '80%',
    alignSelf: 'center',
  },
});
