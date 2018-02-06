import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScheduleList from '../components/ScheduleList';
import  CropList from '../components/CropList';
import Header from '../components/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ScheduleList} />
        <Route exact path='/croplist' component={CropList} />
      </Switch>
    </div>
  );
}

export default App;
