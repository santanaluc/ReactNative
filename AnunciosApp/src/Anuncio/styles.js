import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      borderColor: 'rgb(45, 46, 92)',
      borderWidth: 1,
      backgroundColor: '#fff',
      margin: 10,
      padding: 20,
      borderRadius: 8,
      width: 200,
      textAlign: 'center',
      height: 350
    },
    title: {
      fontSize: 25,
      color: 'rgb(45, 46, 92)',
      marginBottom: 5
    },
    linha: {
      width: '100%',
      height: 1,
      backgroundColor: 'grey',
      marginBottom: 8
    },
    image: {
        alignSelf: 'center',
        margin: 10,
        width: 150,
        height: 150    
    },
    descricao: {
      fontSize: 15,
      marginTop: 8
    }
  });

  export {styles};
  