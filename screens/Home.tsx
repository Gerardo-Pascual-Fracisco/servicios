import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList ,Text, View } from 'react-native';
import axios from 'axios'
const URL='http://10.0.2.2:8000/api/categoryy'

//components
import Card from '../components/Card'
 function Home() {
  const [ listaLibros, setlistalibro ] = useState([])
  useEffect(() => {
    getlibros()
  },[])

  const getlibros = async () => {
    const { data }= await axios.get(URL)
    const { libros } = data
    setlistalibro(libros)
    console.log(data)
                   
  }
    const renderItem = ({ item }) => (
      <Card Name={item.Name}  />)
      return (
        <View style={styles.container}>
          <View style={{flex: 0.2, backgroundColor: 'steelblue'}} >
          <Text style={styles.title}>Libros</Text>
          </View>
          <FlatList
            data={listaLibros}
            renderItem={renderItem}
            keyExtractor={item => item.id_category.toString()}
          />
          <StatusBar style="auto" />
        </View>
      );
      }
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: 10,
        },
        body:{
          marginTop:10,
          flexDirection: 'row',
        },
        box:{
          flex:1,
          height: 50,
          width: 160,
        },
        textList: {
          fontSize: 25,
          color:'blue',
        },
        
        title: {
          fontSize: 25,
          color:'blue',
        },
        image:{
         width: 136,
         height: 108,
        },
      });
      export default Home;
