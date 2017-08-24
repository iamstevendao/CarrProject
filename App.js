import React from 'react';
import Tts from 'react-native-tts';
import SideMenu from 'react-native-side-menu';
import ConfigView from './App/view/ConfigView';
import ContentView from './App/view/ContentView'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
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

  onMenuItemSelected(item) {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }
  render() {
    const menu = <ConfigView onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}>
        <ContentView />
      </SideMenu>
    );
  }
}

