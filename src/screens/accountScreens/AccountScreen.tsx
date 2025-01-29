import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {CustomText, ScreenWrapper} from '@/components';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {logout} from '@/store/reducers/userSlice';
import {colors} from '@/utils';

export const AccountScreen = () => {
  const dispatch = useAppDispatch();

  const {firstName, lastName} = useAppSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <View style={styles.darkHeader}>
          <TouchableOpacity style={styles.cartButton}>
            <Ionicons name="cart" size={24} color="white" />
          </TouchableOpacity>

          <Ionicons
            name="search"
            color={'dark'}
            size={22}
            style={{position: 'absolute', zIndex: 2, left: 80}}
          />
          <TextInput style={styles.searchInput} placeholder="Search" />

          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="orange" />
          </TouchableOpacity>
        </View>

        <View style={styles.orangeHeader}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.profileImage}
          />
          <CustomText color={colors.dark} fontSize={18}>
            {`${firstName + ' ' + lastName}`}
          </CustomText>
        </View>

        <View style={styles.whiteSection}>
          <TouchableOpacity style={styles.rowIconText}>
            <Ionicons name="notifications" size={24} color="orange" />
            <CustomText style={styles.rowText}>Notification</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rowIconText}>
            <Ionicons name="person" size={24} color="orange" />
            <CustomText style={styles.rowText}>Edit Profile</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rowIconText}>
            <Ionicons name="receipt" size={24} color="orange" />
            <CustomText style={styles.rowText}>Order History</CustomText>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.rowIconText}>
            <Ionicons name="log-out" size={24} color="orange" />
            <CustomText style={styles.rowText}>Log out</CustomText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 50,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingLeft: 50,
    marginLeft: 15,
  },
  menuButton: {
    padding: 10,
  },
  orangeHeader: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    padding: 16,
    height: 150,
    gap: 8,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },

  whiteSection: {
    marginTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingTop: 65,
    paddingLeft: 50,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 130,
  },
  rowIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
    marginVertical: 15,
  },
  rowText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
});
