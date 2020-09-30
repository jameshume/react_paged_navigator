import React from 'react';
import './App.css';
import PageNavigator from './containers/PageNavigator/PageNavigator'
import ProfileSlopePage from './containers/Pages/ProfileSlopePage/ProfileSlopePage';

function App() {
  return (
    <div className="App">
      <PageNavigator>
        <ProfileSlopePage page={1}>1</ProfileSlopePage>
        <ProfileSlopePage page={2}>2</ProfileSlopePage>
      </PageNavigator>
    </div>
  );
}

export default App;
