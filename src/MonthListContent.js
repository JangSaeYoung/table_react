
import './MonthListContent.css'

function MonthListContent(){
  
return(
    <table>
        <tr>
            <td rowspan='2' className='TitleText'>구분</td>
            <td rowspan='2' className='ListText'>점검항목</td>
            <td colspan="3">점검결과</td>
            <td rowspan='2'>조치사항</td>
        </tr>
       
       <tr>
       <td className='monthText'>12월</td>
       <td className='monthText'>1월</td>
       <td className='monthText'>2월</td>
       </tr>
    </table>
   
);
}

export default MonthListContent;