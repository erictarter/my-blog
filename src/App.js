import './App.scss';
import { Carousel } from './components/Carousel';
import { Blog1 } from './components/Blog1';
import { Blog2 } from './components/Blog2';
import { Blog3 } from './components/Blog3';

function App() {
  return (
    <div className='App'>
      <Carousel></Carousel>
      <Blog1></Blog1>
      <Blog2></Blog2>
      <Blog3></Blog3>
    </div>
  );
}

export default App;
