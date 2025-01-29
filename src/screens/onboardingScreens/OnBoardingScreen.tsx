import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, fonts, globalStyles} from '@/utils';
import {CustomText, ScreenWrapper} from '@/components';
import Ionicons from '@expo/vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/navigations/types';

type Prop = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

export const OnBoardingScreen = ({navigation}: {navigation: Prop}) => {
  const handleNext = () => {
    navigation.navigate('Welcome');
  };

  const handleSkip = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <ScreenWrapper>
      <ImageBackground
        source={require('../../../assets/images/onboard.jpg')}
        style={styles.image}>
        <View style={styles.container}>
          <View style={styles.centerContent}>
            <View style={styles.circle}>
              <Ionicons name="cart" size={36} color={colors.body} />
              <CustomText
                fontFamily="fontBold"
                color={colors.white}
                fontSize={fonts.text.textRegular + 2}
                style={styles.title}>
                basket
              </CustomText>
            </View>
            <CustomText
              fontFamily="fontMedium"
              color={colors.white}
              fontSize={fonts.text.h3}
              lineHeight={32}>
              Stay Shopping
            </CustomText>
            <CustomText
              fontFamily="fontMedium"
              color={colors.white}
              fontSize={fonts.text.h3}
              lineHeight={32}>
              Stay Happy
            </CustomText>
            <CustomText
              fontFamily="fontMedium"
              color={colors.white}
              fontSize={fonts.text.h3}
              lineHeight={32}>
              Anytime
            </CustomText>
          </View>

          <CustomText
            fontFamily="fontBold"
            color={colors.orange}
            style={styles.text}
            fontSize={fonts.text.textRegular}>
            Basket Online Marketplace
          </CustomText>
          <View style={styles.bottomButtons}>
            <TouchableOpacity onPress={handleSkip}>
              <CustomText
                fontFamily="fontBold"
                color={colors.orange}
                fontSize={fonts.text.textRegular}>
                Skip
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
              <CustomText
                fontFamily="fontBold"
                color={colors.orange}
                fontSize={fonts.text.textRegular}>
                Next
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  text: {
    bottom: 40,
  },
});
