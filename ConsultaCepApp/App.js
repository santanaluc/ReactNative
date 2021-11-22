import React, { Component } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: [],
      cepValor: '',
      valorRetorno: ''
    }
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorCep = this.state.cepValor;
    const response = await api.get(`ws/${valorCep}/json`);
    this.setState({
      cep: response.data
    });
    this.setState({
      valorRetorno: `
        CEP: ${this.state.cep.cep} \n
        LOGRADOURO: ${this.state.cep.logradouro} \n
        BAIRRO: ${this.state.cep.bairro} \n
        CIDADE: ${this.state.cep.localidade} \n
        ESTADO: ${this.state.cep.uf} \n
      `
    })
    Keyboard.dismiss();
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <Text style={styles.titulo}>Busca CEP</Text>
          <Feather style={{marginLeft: 10}} name='map-pin' size={30} />
        </View>


        <View style={styles.row}>
          <TextInput 
            placeholder="Informe o CEP: "
            style={styles.input}
            onChangeText={(value) => this.setState({cepValor: value})}
            keyboardType = 'numeric'
          />

          <TouchableOpacity onPress={this.retorno}>
            <Feather style={{marginLeft: 10}} name='plus' size={40} />
          </TouchableOpacity>

        </View>      

          <Text>
            {this.state.valorRetorno}
          </Text>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80
  },
  titulo: {
    fontSize: 25,
    marginBottom: 50
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input:{
    height: 45,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    width: 300,
  }
});

export default App;
