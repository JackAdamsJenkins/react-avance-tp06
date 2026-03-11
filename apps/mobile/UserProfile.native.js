import { useUserProfile } from '@tp06/core';
import { View, Text, Image, ActivityIndicator, StyleSheet, Button } from 'react-native';

export function UserProfile() {
  // TODO: Etape 3 - Les Mains Mobiles
  const { user, loading, error, refetch } = useUserProfile();

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
      {user && (
        <View style={styles.card}> 
          <Image
            source={{ uri: user.picture.large }}
            style={styles.avatar}
          />
          <Text style={styles.name}>
            {user.name.first} {user.name.last}
          </Text>
          <Text style={styles.info}>{user.email}</Text>
          <Text style={styles.info}>
            {user.location.city}  {user.location.country}
          </Text>
          <View style={{ marginTop: 20}}>
            <Button title='Rafraîchir' onPress={refetch} />
          </View>
        </View>
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
  },
  card: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation:3,
    width: '100%'
  },
   avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center'
  }
});
