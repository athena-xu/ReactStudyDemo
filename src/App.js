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
import SetStateExplain from './pages/setStateExplain'
import RenderOptimize from './pages/renderOptimize'
import EventsStudy from './pages/eventsStudy'
import UncontrolledComp from './pages/uncontrolledComp'
import HigherOrderComp from './pages/higherOrderComp'
import PortalsStudy from './pages/portalsStudy'
import CssHome from './pages/cssAndStudy/home'

function App() {
  return (
    <div className="App">
      {/* <div id="modal-wrapper"></div>  // 放在这里找不到的！！*/}

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
        <SetStateExplain />
        <RenderOptimize />
        <EventsStudy />
        <UncontrolledComp />
        <HigherOrderComp />
        <PortalsStudy />
        <CssHome />
    </div>
  );
}

export default App;
