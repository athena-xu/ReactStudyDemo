import logo from './logo.svg';
import './App.css';
import PassValueParent from './pages/passValue.js'
import SlotWrite from './pages/slotWrite.js'
import ComputedWrite from './pages/computedWrite'
import RefFn from './pages/refFn'
import ZhihuComp from './pages/zhihuComponent'
import Counter from './pages/counter'
import JsxTips from './pages/jsxTips'

function App() {
  return (
    <div className="App">
    <PassValueParent />
      {
        // <PassValueParent />
      }
      <SlotWrite />
      <ComputedWrite/>
      <RefFn/>
      <ZhihuComp />
      <Counter />
      <JsxTips />
    </div>
  );
}

export default App;
