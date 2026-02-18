import { useUserProfile } from '@tp06/core';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

export function UserProfile() {
  // TODO: Etape 3 - Les Mains Mobiles
  const { user, loading, error } = useUserProfile();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Chargement...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Erreur: {error}</Text>
      </View>
    );
  }

  // TODO: Afficher le profil avec <View>, <Image> et <Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Utilisateur (Mobile)</Text>
      {user && (
        <Text>
          {/* Affichez les infos ici */}
          {JSON.stringify(user, null, 2)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
