import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Netflix',
    value: '55,00',
    date: '8/08/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix de cliente',
    value: '2.500,00',
    date: '28/07/2022',
    type: 1 //receita
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.000,00',
    date: '10/07/2022',
    type: 1 //receita
  },
]

export default function Home() {

  return (
    <View style={styles.container}>
        <Header name="Marcos Vinícius" />
        <Balance saldo="15.550,40" gastos="7.990,95"/>

        <Actions />

        <Text style={styles.title}>Últimas movimentações</Text>
        
        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Movements data={item} />}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  
});
