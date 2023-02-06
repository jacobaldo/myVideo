import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  stackContainer: {
    flex: 1,
  },
  tabContainer: {
    borderWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    shadowColor: '#091e42',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 9,
  },
  text: {
    fontSize: 10,
    letterSpacing: 0.2,
  },
});
