import { Container } from '@mui/material';
import './App.css';
import Buttons from './Components/Buttons';
import Checkboxes from './Components/Checkboxes';
import FloatingButtons from './Components/FloatingButtons';
import Radiogroup from './Components/Radiogroup';
import Ratings from './Components/Ratings';
import SelectField from './Components/SelectField';
import Switches from './Components/Switches';
import Textfields from './Components/Textfields';
import Avatars from './Components/Avatars';
import RegistrationForm from './Components/RegistrationForm';
import GridCard from './Components/GridCard';
import { useEffect, useState } from 'react';
import Layout from './Components/Layout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PractiSe from './Components/PractiSe';
import TableMU from './Components/TableMU';



function App() {

  const [note,setNotes]=useState([]);

  useEffect(()=>{
    fetch('/data.json')
    .then((response)=>{
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      else{
        return response.json();
      }
    })
    .then((data)=>{
      setNotes(data)
    })
  },[])


  return (
    <Container>
      {/* <SelectField/>
      <br /><br />
      <Avatars/>
      <Textfields/>
      <br /><br />
      <Switches/>
      <br /><br />
      <Buttons/>
      <br />
      <br />
      <Checkboxes/>
      <br /><br />
      <FloatingButtons/>
      <br /><br />
      <Radiogroup/>
      <br /><br />
      <Ratings/> 
       <RegistrationForm/>
 <Router>
<Layout>
  <Routes>
    <Route exact path='/notes' element={<GridCard note={note}/>}/>
    <Route exact path='/' element={<RegistrationForm/>}/>
  </Routes>
  </Layout>
</Router> 
      */}


      

 <TableMU/>
    
      
      

     
      
    </Container>
  );
}

export default App;
