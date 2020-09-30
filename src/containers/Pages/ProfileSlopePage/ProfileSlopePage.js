import React from 'react';
import {PageNavigatorContext} from '../../PageNavigator/PageNavigator'

class ProfileSlopePage extends React.PureComponent {
  static contextType = PageNavigatorContext;

  componentDidMount() {
    console.log("Mounted page", this.props.page)
  }

  componentDidUpdate() {
    console.log("Updated page", this.props.page)
  }

  render() {
    console.log("Rendering page", this.props.page)
    return (
      <div>
        <button onClick={() => this.context.changeNavigation(true, true, true)}>Make prev navigable</button>
        <button onClick={() => this.context.changeNavigation(false, true, false)}>Make prev disabled</button>
        <button onClick={() => this.context.changeNavigation(true, true, true)}>Make next navigable</button>
        <button onClick={() => this.context.changeNavigation(true, false, true)}>Make next disabled</button>
        {this.props.children}
      </div>
    );
  }
}

export default ProfileSlopePage;