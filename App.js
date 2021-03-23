import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, TextPropTypes } from 'react-native';

type Props = {};

export default class App extends Component<Props>{
  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoTeste:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
    var imc = this.state.massa / (this.state.altura * this.state.altura);
    var s = this.state;
    s.resultado = imc;
    this.setState(s)
    if(imc < 18.5){
      s.resultadoTeste = "Abaixo do peso";
    }else if(imc >= 18.5 && imc <= 24.9){
      s.resultadoTeste = "Peso Normal";
    }else if(imc >= 25.0 && imc <= 29.9){
      s.resultadoTeste = "Sobrepeso";
    }else if(imc >= 30.0 && imc <= 34.9){
      s.resultadoTeste = "Obesidade Grau I";
    }else if(imc >= 35.0 && imc <= 39.9){
      s.resultadoTeste = "Obesidade Grau II";
    }else if(imc >= 40){
      s.resultadoTeste = "Obesidade Morbida";
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require('./imc.png')}></Image>
      </View>
      <View style={styles.entradas}>
        <Text style={styles.textPlace}>PESO</Text>
        <TextInput placeholder="Em KG. EX: 50" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}></TextInput>
        <Text style={styles.textPlace}>ALTURA</Text>
        <TextInput placeholder="Em Metro. EX: 1.75" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}></TextInput>
      </View>
      <View style={styles.submit}>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text>Calcular</Text></TouchableOpacity>
      </View>
      <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
      <Text style={[styles.resultado, {fontSize: 25}]}>{this.state.resultadoTeste}</Text>
    </View>
  );
  }
}














// export default function App() {

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
  },
  entradas: {
    marginTop: 50,
    alignContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 30,
    width: 150,
    fontSize: 20,
    textAlign: 'center',
  },
  textPlace:{
    fontSize: 20,
  },
  button:{
    marginTop: 20,
    backgroundColor: '#0F0',
    height: 50,
    width: 85,
    borderRadius: 5,
    display: 'flex',
    alignSelf: 'center',
    padding: 15,
  },
  logo:{
    alignSelf: 'center',
    marginTop: 50,
    width: 150,
    height: 150,
  },
  resultado:{
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
    padding: 5,
  }
});
