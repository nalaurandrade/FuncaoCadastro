import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function JokeDetailScreen({ route }) {
  const { joke } = route.params;
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(null); // null, 'like', 'dislike'

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLike = () => setLiked((prev) => (prev === 'like' ? null : 'like'));
  const handleDislike = () => setLiked((prev) => (prev === 'dislike' ? null : 'dislike'));

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#ff4500" />
        <Text>Carregando a piada...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{joke.title}</Text>
      <Text style={styles.body}>{joke.body}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.reactionButton} onPress={handleLike}>
          <Icon
            name="thumbs-up"
            size={28}
            color={liked === 'like' ? '#27ae60' : '#fff'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.reactionButton} onPress={handleDislike}>
          <Icon
            name="thumbs-down"
            size={28}
            color={liked === 'dislike' ? '#e74c3c' : '#fff'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  body: { fontSize: 18, marginBottom: 30 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  reactionButton: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 50,
    elevation: 3,
  },
});
