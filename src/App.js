import logo from './logo.svg';
import './App.css';
import PassValueParent from './pages/passValue.js'
import SlotWrite from './pages/slotWrite.js'
import ComputedWrite from './pages/computedWrite'
import RefFn from './pages/refFn'
import ZhihuComp from './pages/zhihuComponent'
import Counter from './pages/counter'
import JsxTips from './pages/jsxTips'
import BooksManagement from './pages/booksManagement'
import ComponentsStudy1 from './pages/componentsStudy1'
import CompCommunication from './pages/compCommunication'
import ReactSlot from './pages/reactSlot'
import StepCompContext from './pages/stepCompContext'

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
      <BooksManagement />
      <ComponentsStudy1 />
      <CompCommunication />
      <ReactSlot />
      <StepCompContext />
    </div>
  );
}

export default App;
