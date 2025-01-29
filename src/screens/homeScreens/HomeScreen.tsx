import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import {CustomText, ScreenWrapper} from '@/components';
import {colors, globalStyles} from '@/utils';
import {useGetUsersQuery} from '@/service/appApi';

export const HomeScreen = () => {
  const {data, isLoading} = useGetUsersQuery();

  const renderItem = ({item}: any) => (
    <View style={styles.userItem}>
      <Image
        source={require('../../../assets/images/avatar.png')}
        style={{width: 25, height: 25}}
      />
      <CustomText color={colors.dark} fontSize={18}>
        {item.firstName} {item.lastName}
      </CustomText>
    </View>
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <CustomText>No users available.</CustomText>
    </View>
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="orange" />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.users}
            renderItem={renderItem}
            keyExtractor={item => item.address.address}
            ListEmptyComponent={ListEmptyComponent}
            ListHeaderComponent={() => (
              <CustomText fontSize={20}>List of Users</CustomText>
            )}
          />
        )}
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: globalStyles.wrapper,
  },
  userItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
});
