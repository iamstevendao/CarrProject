import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Switch, TouchableOpacity
} from 'react-native';
import Constant from '../src/Constant';

const window = Dimensions.get('window');
var topics = require("../assets/topics.json");

class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }
  _onPress() {
    this.props.onPressItem(this.props.index);
  }
  render() {
    const title = this.props.title;
    const active = this.props.active;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={this._onPress}>
        <Text style={styles.itemText}>
          {title}
        </Text>
        <Switch
          style={styles.itemSwitch}
          onValueChange={this._onPress}
          value={active}
        />
      </TouchableOpacity>
    );
  }
}
export default class ConfigView extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this.state = { topics: topics };
  }
  _onPressItem(index) {
    // topics[index].active = !topics[index].active;
    //var copy = Object.assign({}, this.state.selected);
    var oldTopics = this.state.topics.slice(0);
    console.log("OLD TOPIC: ", oldTopics);
    oldTopics[index].active = !oldTopics[index].active;
    this.setState({
      topics: oldTopics
    });
    //console.log("state: ", this.state.topics);
  }
  _renderItem({ item, index }) {
    console.log(this.state.topics[index].active);
    return (
      <ListItem
        index={index}
        title={item.key}
        active={!!this.state.topics[index].active}
        onPressItem={this._onPressItem}
      />
    );
  }
  render() {
    return (
      <View style={styles.menu}>
        <ScrollView scrollsToTop={false} >
          <Text style={styles.topics}>Topics</Text>
          <FlatList
            data={this.state.topics}
            extraData={this.state.topics}
            renderItem={this._renderItem}
          />
        </ScrollView>
        <Text>{Constant.BY_STEVEN}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height - 30,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: window.width * 0.6
  },
  itemText: {
    flex: 3,
    fontSize: 25,
    fontWeight: '400',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  itemSwitch: {
    flex: 1
  },
  topics: {
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 20
  }
});