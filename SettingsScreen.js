import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useTheme } from 'styled-components/native';

export default function SettingsScreen({ route }) {
  const theme = useTheme();
  const { toggleTheme } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Settings</Text>
      <Image source={require('../assets/profile.png')} style={styles.image} />
      <Button title="Toggle Theme" onPress={toggleTheme} color={theme.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
