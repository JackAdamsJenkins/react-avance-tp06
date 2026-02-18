import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { UserProfile } from './UserProfile.native';

export default function App() {
  return (
    <View style={styles.container}>
      <UserProfile />
      <StatusBar style="auto" />
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
