import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList
} from 'react-native';
import Constant from '../src/Constant';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height - 30,
    backgroundColor: '#fff',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 5,
  },
  topic: {
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 10
  }
});

export default function ConfigView({ onItemSelected }) {
  return (
    <View style={styles.menu}>
      <ScrollView scrollsToTop={false} >
        <Text style={styles.topic}>Topic</Text>
        <FlatList
          data={Constant.TOPIC}
          renderItem={({ item }) =>
            <Text style={styles.item}
              onPress={(item) => onItemSelected(item)}>{item.key}
            </Text>
          }
        />
      </ScrollView>
      <Text>{Constant.BY_STEVEN}</Text>
    </View>
  );
}

ConfigView.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};