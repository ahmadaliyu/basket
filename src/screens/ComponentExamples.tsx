import {
  Button,
  CustomText,
  Input,
  ScreenHeader,
  ScreenWrapper,
} from '@/components';
import {colors, globalStyles} from '@/utils';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const ComponentExamples = () => {
  const {control} = useForm();
  return (
    <ScreenWrapper>
      <ScreenHeader title="Component Examples" />
      <View
        style={{
          paddingHorizontal: globalStyles.wrapper,
        }}>
        <Input
          control={control}
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          style={{
            marginTop: globalStyles.margin.md,
          }}
        />
        <Input
          control={control}
          name="password"
          label="Password"
          placeholder="Password"
          secureTextEntry
          rightIcon={require('../../assets/icons/eye.png')}
          iconPress={() => {
            console.log('Icon pressed');
          }}
          style={{
            marginTop: globalStyles.margin.md,
          }}
        />
        <Button
          label="Get Started"
          onPress={() => {}}
          active
          style={{
            marginVertical: globalStyles.margin.md,
          }}
        />

        <Button
          label="Get Started"
          onPress={() => {}}
          active
          bgColor={colors.placeholder}
          hover="purple"
          style={{
            marginVertical: globalStyles.margin.md,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <BouncyCheckbox
            size={25}
            fillColor={colors.secondary}
            unFillColor={colors.white}
            innerIconStyle={{borderWidth: 2}}
            onPress={(isChecked: boolean) => {
              console.log(isChecked);
            }}
            style={{width: 35}}
          />
          <CustomText>I agree</CustomText>
        </View>
      </View>
    </ScreenWrapper>
  );
};
