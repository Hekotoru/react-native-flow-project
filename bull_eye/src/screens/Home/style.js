import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#32CD32',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  labels: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

export default styles;