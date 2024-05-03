import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Button, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)

  function adicionar() {
    setCount(count + 1)
  }

  function remover() {
    if (count === 0) {
      Alert.alert("Count", "O valor está zerado")
      return
    }
    setCount(count - 1)
  }

  function limpar() {
    setCount(0)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>App Contador</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.button}>
        <Button title='Adicionar (+)' onPress={adicionar} />
      </View>
      <View style={styles.button}>
        <Button style={styles.button} title='Remover (-)' onPress={remover} />
      </View>
      <View style={styles.button}>
        <Button style={styles.button} title='Limpar' onPress={limpar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    minWidth: 200,
    marginBottom: 10,
  }
});
