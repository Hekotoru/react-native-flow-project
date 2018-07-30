import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top: 200,
    left: 50,
    right: 50,
    bottom: 200,
    borderRadius: 10,
    backgroundColor:'#FFFFFF'
  },
  message: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'center'
  }
});

export default styles;