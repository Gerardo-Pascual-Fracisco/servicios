import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { getTask } from '../api';

const Home = () => {

const loadTasks = async () => {
  const data = await getTask()
  console.log(data)
}
useEffect(() => {
  loadTasks()
}, [])
return (
  <View>
    <Text>Home Screen</Text>
  </View>
);
};
export default Home;