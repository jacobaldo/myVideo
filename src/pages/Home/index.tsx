import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {Button} from '../../components/Button';
import {categories} from '../../mooks/categories';
import Icon from 'react-native-vector-icons/Feather';
import CardItem from './components/CardItem';
import {styles} from './styles';
import {Category} from './types';
import {colors} from '../../constants/colors';
import Skeleton from '../../components/1.Atoms/Skeleton/Skeleton';

const Home = ({navigation}: any) => {
  const onPressCategory = (category: Category) => {
    navigation.navigate('Category', {data: category});
  };
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>VIDEO 1</Text>
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
        <Text style={styles.title}>VIDEO 2</Text>
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
        {/* Video 3 */}
        <Text style={styles.title}>VIDEO 3</Text>
        <View style={styles.loadingSkeleton}>
          <Skeleton height={80} width={80} borderRadius={40} />
          <View>
            <Skeleton height={25} width={200} borderRadius={16} />
            <Skeleton height={20} width={'50%'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
