import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const salvarCadastro = async () => {
    if (!nome || !email) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const novoCadastro = { nome, email };
    try {
      const jsonValue = await AsyncStorage.getItem('cadastros');
      const cadastros = jsonValue != null ? JSON.parse(jsonValue) : [];
      cadastros.push(novoCadastro);
      await AsyncStorage.setItem('cadastros', JSON.stringify(cadastros));
      setNome('');
      setEmail('');
      Alert.alert('Sucesso', 'Cadastro salvo!');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Button title="Salvar" onPress={salvarCadastro} />
      <Button title="Ver Lista" onPress={() => navigation.navigate('ListaScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    borderRadius: 4,
    borderColor: '#ccc',
  },
});
