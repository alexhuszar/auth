import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from  'firebase';

import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

class auth extends Component {

  constructor(props){
    super(props);
    this.state = {loggedIn: null};
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAEtBx8T_H69gEF7nhQYulrdsTiq0J4_80',
      authDomain: 'authentification-816d2.firebaseapp.com',
      databaseURL: 'https://authentification-816d2.firebaseio.com',
      storageBucket: 'authentification-816d2.appspot.com',
      messagingSenderId: '927572303848'
    });

    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return <Logout />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  }
});

export default auth;
