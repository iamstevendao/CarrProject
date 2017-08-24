import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import Constant from '../src/Constant';

export default function ContentView({ onItemSelected }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight onPress={() => onItemSelected(Constant.CONFIG)}>
          <Image source={require('../img/img_hamburger.png')}
            style={{ width: 30, height: 30 }} />
        </TouchableHighlight>
      </View>
      <View style={styles.content}>
        <TouchableHighlight onPress={() => onItemSelected(Constant.PLAY)}>
          <Image source={require('../img/img_play.png')}
            style={{ width: 100, height: 100 }} />
        </TouchableHighlight>
      </View>
    </View>
  );
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
    marginLeft: 10
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});