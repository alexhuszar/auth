import React, { Component, PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

  constructor (props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  }

  static propTypes = {
    onPress: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string
  };

  static defaultProps = {
    onPress: () => {},
    email: '',
    password: ''
  };

  renderButton(){

    if(this.state.loading) {
      return <Spinner size="small"/>
    } else {
      return (
        <Button
          onPress={this.handleButtonPress.bind(this)}
        >
        Login
        </Button>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            label="Email"
            placeholder="user@email.com"
            onChangeText={(email) => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }

  onLoginFiled(){
    this.setState({
      error: 'Authentications Failed.',
      loading: false
    })
  }

  onLoginSuccess(){
    this.setState({
      error: null,
      loading: false,
      email: '',
      password: ''
    });
  }

  handleButtonPress(){
    const {email, password} = this.state;
    this.setState({
      error: null,
      loading: true
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFiled.bind(this))
      })
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    flex: 1
  },
  errorStyle :{
    alignSelf: 'center',
    fontSize: 20,
    color: '#ff0000'
  }
});

export default LoginForm;
