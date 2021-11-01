import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Anuncio from './src/Anuncio'

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anuncios: [
        {
          id: 0,
          img: './img/mesa-computador.jpg',
          titulo: 'Mesa de computador',
          descricao: 'Mesa Computador Primus Austrália'
        },
        {
          id: 1,
          img: './img/mesa-computador.jpg',
          titulo: 'Mesa de computador',
          descricao: 'Mesa Computador Primus Austrália'
        },
        {
          id: 2,
          img: './img/mesa-computador.jpg',
          titulo: 'Mesa de computador',
          descricao: 'Mesa Computador Primus Austrália'
        }
      ],
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Anúncios</Text>

        <View style={styles.linha}></View>

        <FlatList
          data={this.state.anuncios}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Anuncio detalhes={item} />}
        />
      </View>
    )
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
    marginBottom: 25
  }
});

export default App;
