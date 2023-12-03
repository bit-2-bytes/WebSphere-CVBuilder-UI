import {Route, Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import ErrorPage from './Components/ErrorPage';
import ResumeTemplate from './Components/ResumeTemplate';
import FormAuthoring from './Components/FormAuthoring';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/create/:id" element={<FormAuthoring/>}></Route>
      <Route path="/:id" element={<ResumeTemplate/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
  );
}

export default App;
