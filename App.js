import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaInicial} options={{ title: 'Calculadora' }} />
        <Stack.Screen name="CalculadoraIdade" component={TelaCalculadoraIdade} options={{ title: 'Calculadora de Idade' }} />
        <Stack.Screen name="AreaTriangulo" component={TelaAreaTriangulo} options={{ title: 'Área do Triângulo' }} />
        <Stack.Screen name="AreaQuadrado" component={TelaAreaQuadrado} options={{ title: 'Área do Quadrado' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Calcular Idade" onPress={() => navigation.navigate('CalculadoraIdade')} />
      <Button title="Calcular Área do Triângulo" onPress={() => navigation.navigate('AreaTriangulo')} />
      <Button title="Calcular Área do Quadrado" onPress={() => navigation.navigate('AreaQuadrado')} />
    </View>
  );
};

const TelaCalculadoraIdade = () => {
  const [idade, setIdade] = useState('');
  const [faixaEtaria, setFaixaEtaria] = useState('');

  const verificarFaixaEtaria = () => {
    const idadeInt = parseInt(idade);
    if (idadeInt >= 0 && idadeInt <= 12) {
      setFaixaEtaria('Criança');
    } else if (idadeInt >= 13 && idadeInt <= 17) {
      setFaixaEtaria('Adolescente');
    } else if (idadeInt >= 18 && idadeInt <= 20) {
      setFaixaEtaria('Jovem');
    } else if (idadeInt >= 21 && idadeInt <= 60) {
      setFaixaEtaria('Adulto');
    } else if (idadeInt > 60) {
      setFaixaEtaria('Idoso');
    } else {
      setFaixaEtaria('Idade inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={setIdade}
        keyboardType="numeric"
        value={idade}
      />
      <Button title="Verificar Faixa Etária" onPress={verificarFaixaEtaria} />
      <Text style={styles.result}>Faixa Etária: {faixaEtaria}</Text>
    </View>
  );
};

const TelaAreaTriangulo = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const areaCalculada = (parseFloat(base) * parseFloat(altura)) / 2;
    setArea(areaCalculada);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área do Triângulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a base do triângulo"
        onChangeText={setBase}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura do triângulo"
        onChangeText={setAltura}
        keyboardType="numeric"
        value={altura}
      />
      <Button title="Calcular Área" onPress={calcularArea} />
      {area !== null && <Text style={styles.result}>Área do Triângulo: {area}</Text>}
    </View>
  );
};

const TelaAreaQuadrado = () => {
  const [lado1, setLado1] = useState('');
  const [lado2, setLado2] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const areaCalculada = parseFloat(lado1) * parseFloat(lado2);
    setArea(areaCalculada);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área do Quadrado</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o comprimento do lado 1"
        onChangeText={setLado1}
        keyboardType="numeric"
        value={lado1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o comprimento do lado 2"
        onChangeText={setLado2}
        keyboardType="numeric"
        value={lado2}
      />
      <Button title="Calcular Área" onPress={calcularArea} />
      {area !== null && <Text style={styles.result}>Área do Quadrado: {area}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 10,
    fontSize: 18,
  },
});
