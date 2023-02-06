import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/colors';

const Category = ({navigation, route}: any) => {
  const {data} = route.params;
  console.log(data);
  return (
    <SafeAreaView>
      <View style={styles.itemCard}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goback}>
          <Icon name="arrow-left" size={25} color={colors.white} />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.imgCategory}
          source={{
            uri: data?.iconUrl,
          }}
        />
        <Text>{data?.name}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Category;
