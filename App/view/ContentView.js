import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';

export default class ContentView extends React.Component {
  constructor(props) {
    super(props);
    this._pressConfig = this._pressConfig.bind(this);
    this._pressPlay = this._pressPlay.bind(this);
  }
  _pressConfig() {
    console.log("pressed");
  }
  _pressPlay() {
    //Tts.speak("Hello world");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight onPress={this._pressConfig}>
            <Image source={require('../img/img_hamburger.png')}
              style={{ width: 30, height: 30 }} />
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          <TouchableHighlight onPress={this._pressPlay}>
            <Image source={require('../img/img_play.png')}
              style={{ width: 100, height: 100 }} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  header: {
    position: "absolute",
    marginTop: 30,
    alignSelf: "flex-end",
    marginRight: 30
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});