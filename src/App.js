import RouteSwitch from './components/RouteSwitch';
import DropdownProvider from './context/DropdownProvider';
import './styles/App.css'

const App = () => {
  return (
    <DropdownProvider>
      <><RouteSwitch/></>
    </DropdownProvider>
  );
}

export default App;
