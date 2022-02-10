import './App.css';
import React from 'react';
import MonthTemplate from './MonthTemplate';
import MonthHeaderContent from './MonthHeaderContent';
import MonthListContent from './MonthListContent';
import MonthList from './MonthList'
import MonthTwoList from './MonthTwoList';
// import { useState } from 'react';
// import { useCallback } from 'react';

function App() {

    // const [checked, setChecked] = useState('');


  

  return ( 
  <MonthTemplate>
     <MonthHeaderContent />
     <MonthListContent />
     <MonthList Titletext= "안전관리" 
     contextText="안전관리의 책임 및 위기관리 체계가 적합한가?" 
     secText= "일별 안전점검 체크리스트에 의해 관리되고 있는가?" 
     thrText="응급전화번호 및 비상연락망 등이 잘 관리되고 있는가?"
     />
     <MonthTwoList Titletext= "실외환경" 
     contextText="어린이집 주변에 감전 위험은 없는가?" 
     secText= "위험한 적치물, 축대 붕괴, 맨홀 등에 대한 위험은 없는가?" />
     <MonthTwoList Titletext= "실내환경" 
     contextText="모든 설비는 움직이거나 떨어지지 않도록 바닥과 벽면에 단단히 고정되어 있는가?" 
     secText= "창문, 방충망의 상태는 안전한가?"  />
     <MonthList Titletext= "현관, 통로, 계단, 비상구" 
     contextText="출입문, 현관문 등의 안전장치는 정상 작동하는가?" 
     secText= "계단, 통로부분에 미끄럼 방지처리가 되어있는가?" 
     thrText="계단의 안전 상태는 양호한가?" />
     <MonthTwoList Titletext= "화장실, 세면대" 
     contextText="화장실 내 전기 콘센트 등 전기용품은 안전한가?" 
     secText= "세면대의 고정 상태는 안전한가?" />
   </MonthTemplate>
  
  );
}

export default App;
