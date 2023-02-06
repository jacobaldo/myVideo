import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image} from 'react-native';
import {CategoryProps} from '../types';
import {styles} from './styles';

const CardItem = ({category, onPressCat}: CategoryProps) => {
  return (
    <TouchableOpacity onPress={() => onPressCat(category)}>
      <View style={styles.itemCard}>
        <Image
          style={styles.imgCategory}
          source={{
            uri: category?.iconUrl,
          }}
        />
        <Text>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CardItem;
