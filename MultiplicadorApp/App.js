import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero1: '',
      numero2: '',
      result: '',
      printconta: ''
    }

    this.calc = this.calc.bind(this);
    return;
  }

  calc() {
    if (this.state.numero1 === '' || this.state.numero2 === '') {
      alert("Digite os valores")
      return;
    } else {
      this.setState({result: this.state.numero1 * this.state.numero2})
      this.setState({printconta: this.state.numero1 + ' x ' + this.state.numero2 + ' = ' + this.state.result})
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 30, margin: 20, marginTop:80, textAlign: 'center'}}>Multiplicador de números</Text>

        <TextInput 
          style={{width: 250, fontSize: 18, height: 55, borderColor: 'black', margin: 25}}
          placeholder="Digite um número"
          keyboardType="numeric"
          onChangeText={(number) => this.setState({numero1: number})}
        ></TextInput>

        <TextInput 
          style={{width: 250, fontSize: 18, height: 55, borderColor: 'black', marginBottom: 25}}
          placeholder="Digite um número"
          keyboardType="numeric"
          onChangeText={(number) => this.setState({numero2: number})}
        ></TextInput>

        <Button onPress={this.calc} title="Calcular"></Button>

        <Text style={{fontSize: 20, marginTop:25}}>{this.state.printconta + this.state.result}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#f5c2d4',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
});

export default App;
