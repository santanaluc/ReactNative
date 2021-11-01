import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      borderColor: 'rgb(45, 46, 92)',
      borderWidth: 1,
      backgroundColor: '#fff',
      margin: 10,
      padding: 20,
      borderRadius: 8
    },
    title: {
      color: 'rgb(45, 46, 92)',
      fontSize: 23,
      textAlign: 'left',
      marginBottom: 5
    },
    linha: {
        width: '100%',
        height: 1,
        backgroundColor: 'grey',
        marginBottom: 8
    },
    info: {
        fontSize: 15,
        textAlign: 'justify',
        marginTop: 8
    }
  });

  export {styles};