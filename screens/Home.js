import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,TouchableOpacity, 
         FlatList, View,Text} from 'react-native';
import axios from 'axios'

//components
import Card from '../componentes/Card'

let URL = "http://192.168.1.126:8000/api/categoryy"

const Home = () => {

    const [ listaCategories, setListaCategories ] = useState([])
   

    useEffect(() => {
      getCategories()
    }, [])

  const getCategories = async () => {
      const { data } = await axios.get(URL)
      const { Categories } = data
      setListaCategories(Categories)
      console.log(data)
  }
  const renderItem = ({ item }) => (
    <Card 
          Name={item.Name}
           />
)

return (
  <View style={styles.container}>
    <View style={{flex: 0.2, backgroundColor: 'gray'}} >
      <Text style={styles.title}>Libros</Text>
    </View>
    <FlatList
      data={listaCategories}
      renderItem={renderItem}
      keyExtractor={item => item.id_category.toString()}
    />
    <StatusBar style="auto" />
  </View>
);
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
 
  button: {
    marginHorizontal:5,  
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth:2,
    borderRadius:10,
    padding: 10
  },

});

export default Home;

