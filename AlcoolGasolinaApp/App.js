import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';
import { Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      validar: ''
    };

    this.verificar = this.verificar.bind(this);
  }

  verificar() {
    if (this.state.alcool === '' || this.state.gasolina === '') {
      alert('Digite os valores corretos.')
      return
    } 

    if (this.state.alcool / this.state.gasolina < 0.7) {
      this.setState({validar: 'O álcool está valendo a pena'});
    } else {
      this.setState({validar: 'A gasolina está mais em conta'});
    }
  };

  render(){
    return (
      <View style={{alignItems: 'center'}}>
        {/* Alcool */}
        <Text style={{fontSize: 30, margin: 20, marginTop:80, textAlign: 'center'}}>Álcool/Gasolina</Text>
        <TextInput 
        style={{width: 250, fontSize: 18, height: 55, borderColor: 'black', margin: 25}}
        placeholder="Digite o valor do álcool"
        keyboardType="numeric"
        onChangeText={(number) => this.setState({alcool: number})}
        ></TextInput>

        {/* Gasolina */}
        <TextInput 
        placeholder="Digite o valor da gasolina"
        style={{width: 250, fontSize: 18, height: 55, borderColor: 'black', marginBottom: 25}}
        keyboardType="numeric"
        onChangeText={(number) => this.setState({gasolina: number})}
        ></TextInput>

        <Button onPress={this.verificar} title="Verificar"></Button>

        <Text style={{fontSize: 20, marginTop:25}}>{this.state.validar}</Text>
      </View>
    )
  }
}

export default App;
