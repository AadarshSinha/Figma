import {Routes,Route} from 'react-router-dom'
import Screen1 from './screens/Screen1.jsx';
import Screen2 from './screens/Screen2.jsx';
import Screen3 from './screens/Screen3.jsx';

function App() {
  return (
    <>
      <Routes>
       <Route exact path ="/screen1" element={<Screen1/>}/>
       <Route exact path ="/screen2" element={<Screen2/>}/>
       <Route exact path ="/screen3" element={<Screen3/>}/>
     </Routes>
    </>
  );
}

export default App;
