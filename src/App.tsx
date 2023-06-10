
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import Index from './components/mainPage/IndexPage';
import LoginPage from './components/mainPage/loginPage/LoginPage';
import './styles/globalStyles.css';
function App() {
  return (
    <div className='main'>
      <Header/>
      <LoginPage/>
      {/* <Index/> */}
     
      <Footer/>
    </div>
  );
}

export default App;
