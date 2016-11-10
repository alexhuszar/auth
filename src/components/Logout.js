import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import { Button, Card, CardSection } from './common';
import firebase from 'firebase';

class LogoutForm extends Component {

  render () {
    return (
      <View style={styles.containerStyle}>
        <Button
          onPress={() => {
            firebase.auth().signOut()
          }}
        >
        Log out
        </Button>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  }
});
export default LogoutForm;
