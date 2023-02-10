import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutusData: this.props.route.params.aboutus.about,
    };
  }

  render() {
    console.log('this.props.route.params', this.props.route);
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text style={styles.headerfile}>{'Back'}</Text>
          </TouchableOpacity>
          <Text style={[styles.headerfile, {paddingLeft: 100}]}>
            {'About Us'}
          </Text>
        </View>
        <Text style={styles.about}>{this.state.aboutusData}</Text>
        <View style={styles.line} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  headerfile: {
    fontSize: 18,
    marginTop:20,
    color: 'black',
    paddingLeft:20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  about: {
    fontSize: 14,
    color: 'black',
    padding: 20,
  },
  line: {
    height: 1,
    marginTop: 12,
  },
});
