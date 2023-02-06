import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {categories} from '../../mooks/categories';

import CardItem from './components/CardItem';
import {styles} from './styles';
import {Category} from './types';

const Home = ({navigation}: any) => {
  const onPressCategory = (category: Category) => {
    navigation.navigate('Category', {data: category});
  };
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>Categorias</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({item}) => (
            <CardItem category={item} onPressCat={onPressCategory} />
          )}
          keyExtractor={(item, index) => 'index' + index}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
