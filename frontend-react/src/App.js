import './../src/assets/css/App.css';
import Header from './app/layout/header/Header';
import Slider from './app/layout/slider/Slider';
import Sidebar from './app/layout/sidebar/Sidebar';
import Footer from './app/layout/footer/Footer';
import Inicio from './app/modules/app/inicio/Inicio';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <div className="center">
        <Inicio />
        <Sidebar />
        <div className="clearfix"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
