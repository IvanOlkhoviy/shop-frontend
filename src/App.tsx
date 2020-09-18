import React from 'react';
import { CategoryBar } from './components/CategoryBar';
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { VideoBar } from './components/VideoBar';

const App: React.FC = () => {
  return <>
      <Navbar/>
      <VideoBar/>
      <CategoryBar/>
      <Slider/>
  </>
}

export default App;
