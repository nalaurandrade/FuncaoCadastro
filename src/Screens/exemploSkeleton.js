import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { MotiView } from 'moti';

export default function exemploSkeleton() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento de dados
    setTimeout(() => {
      setData([
        { id: '1', name: 'João' },
        { id: '2', name: 'Maria' },
        { id: '3', name: 'Carlos' },
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  const SkeletonItem = () => (
    <MotiView
      from={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 800,
      }}
      style={styles.skeleton}
    />
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      {loading ? (
        <>
          <SkeletonItem />
          <SkeletonItem />
          <SkeletonItem />
        </>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
  },
  skeleton: {
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
  },
});
