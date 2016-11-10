
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


class Header extends Component {

  static propTypes = {
    headerText: PropTypes.string
  };

  static defaultProps = {
    headerText: '',
  };

  render() {
    const {textStyle, headerStyle} = styles;
    const {headerText} = this.props;

    return (
      <View style={headerStyle}>
        <Text style={textStyle}>
          {headerText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

export { Header }
