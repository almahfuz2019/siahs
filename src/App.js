import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Notice from './Components/Notice';
import Result from './Components/Result';
import Deshboard from './Pages/Admin/Deshboard';
import ManageClass from './Pages/Admin/Class/ManageClass';
import CreateClass from './Pages/Admin/Class/CreateClass';
import ManageSubject from './Pages/Admin/subjects/ManageSubject';
import CreateSubject from './Pages/Admin/subjects/CreateSubject';
import CreateStudent from './Pages/Admin/Students/CreateStudent';
import ManageStudent from './Pages/Admin/Students/ManageStudent';
import AddResult from './Pages/Admin/Result/AddResult';
import ManageResult from './Pages/Admin/Result/ManageResult';
import AddTeacher from './Pages/Admin/Teachers/AddTeacher';
import ManageTeachers from './Pages/Admin/Teachers/ManageTeachers';
import AddVisitor from './Pages/Admin/Visitors/AddVisitor';
import Managevisitors from './Pages/Admin/Visitors/ManageVisitors';
import MainPage from './Pages/Admin/MainPage/MainPage';
import SubjectCombination from './Pages/Admin/subjects/SubjectCombination';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/notice' element={<Notice/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/admin/' element={<Deshboard/>}>
          <Route path='deshboard' element={<MainPage/>}/>
          <Route path='create-class' element={<CreateClass/>}/>
          <Route path='manage-class' element={<ManageClass/>}/>
          <Route path='create-subject' element={<CreateSubject/>}/>
          <Route path='manage-subject' element={<ManageSubject/>}/>
          <Route path='create-student' element={<CreateStudent/>}/>
          <Route path='manage-student' element={<ManageStudent/>}/>
          <Route path='add-result' element={<AddResult/>}/>
          <Route path='manage-result' element={<ManageResult/>}/>
          <Route path='add-teacher' element={<AddTeacher/>}/>
          <Route path='manage-teachers' element={<ManageTeachers/>}/>
          <Route path='add-visitor' element={<AddVisitor/>}/>
          <Route path='subject-combination' element={<SubjectCombination/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
