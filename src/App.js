
import { Provider } from 'react-redux';
import Boodoo from './containers/Boodoo';
import Clock from './containers/Clock';
import ClockFun from './containers/ClockFun';
// import Counter from './containers/Counter';
import CounterFun from './containers/CounterFun';
import Country from './containers/Country';
import Country1 from './containers/Country1';
import Coursee from './containers/Coursee';
import Employee from './containers/Employee';
import EmployeeFun from './containers/EmployeeFun';
import FormikYupvalidation from './containers/FormikYupvalidation';
import Products from './containers/Products';
import PrototypeInheritance from './containers/PrototypeInheritance';
import Students from './containers/Students';
import StudentsFun from './containers/StudentsFun';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from './redux/store';
import Counter from './containers/Counter/Counter';
// import './containers/Boodoo.css'



function App() {
  const store = configureStore();
  return (
    <>
      <Provider store={store}>


        {/* <Employee /> */}
        {/* <Coursee /> */}
        {/* <EmployeeFun /> */}
        {/* <Counter /> */}
        {/* <CounterFun /> */}
        {/* <Country /> */}
        {/* <Country1 /> */}
        {/* <Clock /> */}
        {/* <ClockFun /> */}
        {/* <Products /> */}
        {/* <Boodoo /> */}
        {/* <FormikYupvalidation /> */}
        {/* <PrototypeInheritance /> */}
        <Counter />
      </Provider>
    </>
  );
}

export default App;
