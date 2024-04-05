
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Base from './components/base/Base';
import FixBox from './components/FixBox';
import Welcome from './components/Welcome';


function App() {
  
  return (
    <>
        <Welcome />
        <Header />
        <Base />
        <FixBox />
        <Footer />
    </>
  );
}

export default App;
