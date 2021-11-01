import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';

class Anuncio extends Component {
  render() {
    let img = '../../img/mesa-computador.jpg';

    return(      
      <View style={styles.container}>
          <Image 
            source={require(img)}
            style={styles.image}
          />
          <Text style={styles.title}>{this.props.detalhes.titulo}</Text>

          <View style={styles.linha}></View>

          <Text style={styles.descricao}>{this.props.detalhes.descricao}</Text>
      </View>
    );
  }
}

export default Anuncio;
