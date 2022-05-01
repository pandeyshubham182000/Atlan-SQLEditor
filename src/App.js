import React from 'react';
import './App.css';
import CountriesTables from './Components/CountriesTables';
import AtlanLogo from './Components/AtlanLogo';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      {/******************************** Dashboard ***************************************/}
      <AtlanLogo/>
      <CountriesTables />
      <Footer/>
      {/**********************************************************************************/}
    </div>
  )
}

export default App;
