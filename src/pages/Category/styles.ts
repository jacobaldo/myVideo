import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  itemCard: {
    marginHorizontal: 16,
  },
  imgCategory: {
    width: '100%',
    height: 200,
  },
  goback: {
    position: 'absolute',
    backgroundColor: colors.secondary.secondary100,
    top: 5,
    zIndex: 2,
    borderRadius: 40,
    padding: 10,
  },
});
