import React from 'react';
import Tts from 'react-native-tts';
import SideMenu from 'react-native-side-menu';
import ConfigView from './App/view/ConfigView';
import ContentView from './App/view/ContentView'
import Constant from './App/src/Constant';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onConfigSelected = this.onConfigSelected.bind(this);
    this.onContentSelected = this.onContentSelected.bind(this);
    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onConfigSelected(item) {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }
  onContentSelected(item) {
    switch (item) {
      case Constant.CONFIG:
        this.toggle();
        break;
      case Constant.PLAY:
        break;
    }
  }
  render() {
    const menu = <ConfigView onItemSelected={this.onConfigSelected} />;
    return (
      <SideMenu menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}>
        <ContentView onItemSelected={this.onContentSelected} />
      </SideMenu>
    );
  }
}

