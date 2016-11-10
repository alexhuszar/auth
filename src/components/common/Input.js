import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text
} from 'react-native';

const Input  = ( {label, value, placeholder, onChangeText, secureTextEntry} ) => {

  const  { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle} >
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        value={value}
        style={inputStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  )

};

const styles = StyleSheet.create({
  inputStyle: {
    height: 45,
    color: '#000',
    fontSize: 18,
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 14,
    textDecorationLine: 'none',
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex : 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { Input }
