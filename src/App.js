import logo from './logo.svg';
import './App.css';
import { Tweet } from 'react-tweet';
 

function App() {
  return (

    <div className="App px-12 mx-12 sm:grid-cols-1 grid lg:grid-cols-3 gap-8" data-theme="light" >
     
      {/* <Tweet id="1659273134879514624" /> */}
      <Tweet id="1686824395770298369" />
      <Tweet id="1687011479307059200" />
      
      <Tweet id="1659272970903355392" />
      <Tweet id="1696475381623308502" />
      <Tweet id="1674060852083802112" />
      <Tweet id="1647603740227117059" />
      <Tweet id="1645157312024420354" />
      <Tweet id="1665031225197690880" />
      {/* <Tweet id="1680924487032659969" /> */}

    </div>
  );
}

export default App;
