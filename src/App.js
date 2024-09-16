import logo from './logo.svg';
import './App.css';
import Funcational from './Funcational';
import ClassComp from './ClassComp';
import Mkmp from './Mkmp';
import Department from './Department';
import About from './About';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
      {/* College Name */}
      <Mkmp/> 
      {/* Department information */}
      <Department/>
      {/* About Project */}
      <About/>
      {/* Logo of React  */}
      <img src={logo} className="App-logo" alt="logo" />
      {/*  Functional Component  */}
      <Funcational/>
      {/*Class Component */}
      <ClassComp/>

        <p style={{color:'yellow'}}>
          App Component Paragraph Here
        </p>
      </header>
    </div>
  );
}

export default App;
