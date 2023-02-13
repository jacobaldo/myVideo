import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {Button} from '../../components/Button';
import {categories} from '../../mooks/categories';
import Icon from 'react-native-vector-icons/Feather';
import CardItem from './components/CardItem';
import {styles} from './styles';
import {Category} from './types';
import {colors} from '../../constants/colors';

const Home = ({navigation}: any) => {
  const onPressCategory = (category: Category) => {
    navigation.navigate('Category', {data: category});
  };
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>Categorias</Text>
        {/* Video 1 */}
        <FlatList
          horizontal
          data={categories}
          renderItem={({item}) => (
            <CardItem category={item} onPressCat={onPressCategory} />
          )}
          keyExtractor={(item, index) => 'index' + index}
        />
        {/* Video 2 */}
        <Button
          style={styles.btnStyle}
          btnText="Aceptar"
          type="primary"
          disabled={false}
          loading={false}
          onPress={() => {
            console.log('holaa click');
          }}
          iconLeft={
            <Icon
              name="lock"
              size={15}
              color={colors.white}
              style={styles.iconBtnStyle}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
