import './App.css';
import Dashboard from './pages/Dashboard';
import StudentList from './components/StudentList';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/profile';
import AddStudents from './components/AddStudents';
import EditStudents from './components/EditStudent';
import NoPage from './components/NoPage';

function App() {
   return (
    <div className="App" >
  <Routes>
    <Route path="/" element={<Dashboard/>} />

   <Route path="/student/add" element={<AddStudents
   />} />

     <Route path="/edit/:id" element={<EditStudents/>} />

      <Route path='/profile' element={<Profile/>} />

     <Route path='/student/all' element={ <StudentList/>}/>

       <Route path="*" element={<NoPage/>}/>

  </Routes>
    </div>
  );
}

export default App;
