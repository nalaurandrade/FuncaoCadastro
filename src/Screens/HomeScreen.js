import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const jokes = [
  { id: '1', title: 'Piada do Pato', body: 'Por que o pato não usa sabão? Porque ele já tem a pata limpa!' },
  { id: '2', title: 'Piada do Elefante', body: 'Por que o elefante não usa computador? Porque ele tem medo do mouse!' },
  { id: '3', title: 'Piada do Livro', body: 'O que o livro foi fazer no médico? Estava com dor nas páginas!' },
];

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(jokes);
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando piadas...</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('JokeDetail', { joke: item })}
            >
              <Text style={styles.buttonText}>Abrir</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listContainer: { padding: 10 },
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold', flex: 1, marginRight: 10 },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 25,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
