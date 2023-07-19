import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Music from './routes/Music/Music';
import MusicList from './routes/Music/MusicList';
import BeatsList from './routes/Beats/BeatsList';
import SamplesList from './routes/Samples/SamplesList';
import Beats from './routes/Beats/Beats';
import Samples from './routes/Samples/Samples';
import Login from './routes/General/LoginPage';
import Register from './routes/General/RegPage';
import Home from './routes/Home/Home';
import MusicStudio from './routes/Studio/Music/Music';
import BeatsStudio from './routes/Studio/Beats/Beats';
import SamplesStudio from './routes/Studio/Samples/Samples';
import ContextData from './context/Data/ContextData';
import StateData from "./context/Data/StateData";
import ReducerData from "./context/Data/ReducerData";

function App() {
  const [stateData, dispatchData] = React.useReducer(ReducerData, StateData)

  return (
    
      <ContextData.Provider value={{stateData, dispatchData}}>
        <Routes>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
      <Route path='/home' Component={Home}/>
      <Route path='/' Component={Music}/>
      <Route path='/musiclist' Component={MusicList}/>
      <Route path='/beatslist' Component={BeatsList}/>
      <Route path='/sampleslist' Component={SamplesList}/>
      <Route path='/beats' Component={Beats}/>
      <Route path='/samples' Component={Samples}/>
      <Route path='/musicstudio' Component={MusicStudio}/>
      <Route path='/beatsstudio' Component={BeatsStudio}/>
      <Route path='/samplesstudio' Component={SamplesStudio}/>
      </Routes>
      </ContextData.Provider>
    
  );
}

export default App;
