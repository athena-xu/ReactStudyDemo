import logo from './logo.svg';
import './App.css';
import PassValueParent from './pages/passValue.js'
import SlotWrite from './pages/slotWrite.js'
import ComputedWrite from './pages/computedWrite'
import RefFn from './pages/refFn'
import ZhihuComp from './pages/zhihuComponent'
function App() {
  return (
    <div className="App">
    < PassValueParent / >
      {
        // <PassValueParent />
      }
      <SlotWrite />
      <ComputedWrite/>
      <RefFn/>
      < ZhihuComp / >
    </div>
  );
}

export default App;
