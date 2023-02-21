import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  body: {
    marginHorizontal: 16,
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  btnStyle: {marginVertical: 30},
  iconBtnStyle: {marginHorizontal: 10},

  loadingSkeleton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: colors.neutral.neutral50,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
