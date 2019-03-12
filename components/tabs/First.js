import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import uuid from 'uuid';
import AnimateNumber from 'react-native-animate-number';

const apiFake = [
  { 
    main: [
      {id: uuid(), name: 'POINTS', value: 777 },
      {id: uuid(), name: 'CALORIES', value: 75 },
      {id: uuid(), name: 'CLASSES', value: 5 },
    ]
  },
  {
    pass: [
    {id: uuid(), name: 'POWER', value: 8 },
    {id: uuid(), name: 'AGILITY', value: 6 },
    {id: uuid(), name: 'STAMINA', value: 5 },
    {id: uuid(), name: 'SPEED', value: 9 }
    ]
  },
  {
    bbfm: [
    {id: uuid(), name: 'BOOST', value: 7 },
    {id: uuid(), name: 'BRAVE', value: 4 },
    {id: uuid(), name: 'FAST', value: 5 },
    {id: uuid(), name: 'MIGHTY', value: 6 }
    ]
  }
]

export default class First extends Component {
  state={
    num1: 0
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.containerMain}>
        <View id={apiFake[0].main[0].id} style={styles.container}>
          <Text style={styles.text1}><AnimateNumber value={apiFake[0].main[0].value} countBy={2} interval={0.1} /></Text>
          <Text style={styles.name}>{apiFake[0].main[0].name}</Text>
        </View>
        <View id={apiFake[0].main[1].id} style={styles.container}>
          <Text style={styles.text2}><AnimateNumber value={apiFake[0].main[1].value} countBy={1} interval={1.5} /></Text>
          <Text style={styles.name3}>{apiFake[0].main[1].name}</Text>
        </View>
        <View style={styles.container2}>
          {apiFake[1].pass.map(item => {
            return(
              <View id={item.id} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text3}><AnimateNumber value={item.value} countBy={1} /></Text>
                <Text style={styles.name1}>{item.name}</Text>
              </View>
            )
          })}
          </View>
        <View id={apiFake[0].main[2].id} style={styles.container}>
          <Text style={styles.text2}><AnimateNumber value={apiFake[0].main[2].value} countBy={1} /></Text>
          <Text style={{ color: '#ff0', fontSize: 20 }}>{apiFake[0].main[2].name}</Text>
        </View>
        <View style={styles.container3}>
          {apiFake[2].bbfm.map(item =>{
            return(
              <View id={item.id} style={{ justifyContent: 'center', alignItems: 'center', marginRight: 55, marginLeft: 55 }}>
                <Text style={styles.text2}><AnimateNumber value={item.value} countBy={1} /></Text>
                <Text style={{ color: '#fff', fontSize: 25 }}>{item.name}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  container2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20,
  },
  container3: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  text1: {
    color: '#fff',
    fontSize: 55,
  },
  text2: {
    color: '#fff',
    fontSize: 45,
  },
  text3: {
    color: '#fff',
    fontSize: 35,
  },
  name: {
    color: '#ff0',
    fontSize: 25,
  },
  name3: {
    color: '#ff0',
    fontSize: 20,
  },
  name1: {
    color: '#fff',
    fontSize: 20,
  }
})