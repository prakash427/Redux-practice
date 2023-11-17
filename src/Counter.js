import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addition, subtraction, reset} from './store/action';

const Counter = (props) => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.MainView}>
      <Button title="Add" onPress={() => dispatch(addition())} />
      <Text>{data}</Text>
      <Button title="Subtract" onPress={() => dispatch(subtraction())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;


