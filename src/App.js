import logo from './logo.svg';
import './App.css';
import PassValueParent from './pages/父子组件传值.js'
import SlotWrite from './pages/vue插槽slot对比'
import ComputedWrite from './pages/vue计算属性对比computed'
import RefFn from './pages/vueRef对比'
import ZhihuComp from './pages/知乎组件仿写'
import Counter from './pages/计数器'
import JsxTips from './pages/JSX语法'
import BooksManagement from './pages/图书管理组件仿写'
import ComponentsStudy1 from './pages/组件学习'
import CompCommunication from './pages/父子组件通信'
import ReactSlot from './pages/react实现插槽slot'
import StepCompContext from './pages/跨组件学习'
import SetStateExplain from './pages/深入学习setState'
import RenderOptimize from './pages/性能优化render'
import EventsStudy from './pages/事件总线'
import UncontrolledComp from './pages/受控组件与非受控组件'
import HigherOrderComp from './pages/高阶组件'
import PortalsStudy from './pages/传送门portal'
import CssHome from './pages/cssAndStudy/home'
import TemplateGrammer from './pages/模板字符串特殊语法'
import ReduxStudy1 from './pages/Redux学习1'

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
        <TemplateGrammer />
        <ReduxStudy1 />
    </div>
  );
}

export default App;
