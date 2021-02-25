import './App.scss';
import Header from './components/component/Header';
import Intro from './components/component/Intro';
import Form from './components/component/Form';
import MainVideo from './components/component/MainVideo';
import Aside from './components/component/Aside'
// import MainVideo from './data/video-details.json';

function App() {
  return (
    <div className="App">
     <Header/>
     <MainVideo/>
     <Intro/>
     <Form/>
     <Aside/>
    </div>
  );
}

export default App;
