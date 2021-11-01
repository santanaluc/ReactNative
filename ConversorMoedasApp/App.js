import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      valor: 0,
      de: 'Real',
      des: [
        'Real', 'Dólar', 'Euro'
      ],
      para: 'Real',
      paras: [
        'Real', 'Dólar', 'Euro'
      ],
    }

    this.converter = this.converter.bind(this);
  }

  converter() {
    let de = this.state.de;
    let para = this.state.para;
    let valor = parseInt(this.state.valor);
    let result = '';

    switch(true) {
      case de == 'Real' && para == 'Euro':
        result = valor * 0.16;
        break;
      case de == 'Real' && para == 'Dolar':
        result = valor * 0.19;
        break;
      case de == 'Dolar' && para == 'Real':
        result = valor * 5.25;
        break;
      case de == 'Dolar' && para == 'Euro':
        result = valor * 0.85;
        break;
      case de == 'Euro' && para == 'Dolar':
        result = valor * 1.18;
        break;
      case de == 'Euro' && para == 'Real':
        result = valor * 6.20;
        break;
      default:
        result = 'Selecione moedas diferentes';
        break;
    };

    this.setState({
      result: result
    });
  }

  render() {
    let de = this.state.des.map((key) => {
      return <Picker.Item key={key} value={key} label={key}/>
    });

    let para = this.state.paras.map((key) => {
      return <Picker.Item key={key} value={key} label={key}/>
    });

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            Conversor de Moedas
          </Text>

          <View style={styles.linha}></View>

          <Text style={styles.label}>Digite um valor:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({valor: text})}
          />
          <Text style={styles.label}>De:</Text>
          <Picker style={styles.input}
            selectedValue={this.state.de}
            onValueChange={(key) => this.setState({de: key})}
          >
            {de}
          </Picker>
          <Text style={styles.label}>Para:</Text>
          <Picker style={styles.input}
            selectedValue={this.state.para}
            onValueChange={(key) => this.setState({para: key})}
          >
            {para}
          </Picker>
          <Pressable style={styles.button} onPress={this.converter}>
            <Text style={styles.text}>Converter</Text>
          </Pressable>
          <Text style={styles.result}>{this.state.result}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 15,
    paddingTop: 20,
    color: 'rgb(45, 46, 92)'
  },
  linha: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 10
  },
  label: {
    textAlign: 'left',
    color: 'rgb(45, 46, 92)',
    fontSize: 16,
    marginBottom: 5,
    fontStyle: 'normal'
  },
  input: {
    width: '100%',
    borderColor: 'rgb(45, 46, 92)',
    borderWidth: 1,
    padding: 5,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    fontStyle: 'normal'
  }, 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 6,
    backgroundColor: 'rgb(45, 46, 92)',
    width: '100%',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  result: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18, 
    marginBottom: 2
  }
});

export default App;