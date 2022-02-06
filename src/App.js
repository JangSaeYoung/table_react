import './App.css';
import React from 'react';
import MonthTemplate from './MonthTemplate';
import MonthHeaderContent from './MonthHeaderContent';
import MonthListContent from './MonthListContent';
import MonthList from './MonthList'

function App() {
  return ( 
  <MonthTemplate>
     <MonthHeaderContent />
     <MonthListContent />
     <MonthList />
   </MonthTemplate>
  
  );
}

export default App;
