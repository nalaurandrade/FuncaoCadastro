import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Pagina1({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Estou na página1!</Text>
      <TouchableOpacity 
      onPress={()=> navigation.navigate('DrawerMenu')}>
        <Text>Navegar Pag2</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
