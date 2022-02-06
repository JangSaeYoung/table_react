
import './MonthList.css';

function MonthList(){

    return(
        <table>
         <tr>
             <td rowspan="3" className='TitleText'  >안전관리</td>
             <td bgcolor='white' className="ListText">안전책임자는 누구니</td>
             <td  bgcolor='white' className='monthText'></td>
             <td  bgcolor='white' className='monthText'></td>
             <td  bgcolor='white' className='monthText'></td>
             <td colspan="2" bgcolor='white'></td>

         </tr>
         <tr bgcolor='white'>
             <td className="ListText">관리자는 누구니</td>
             <td></td>
             <td></td>
             <td></td>
             <td colspan="2" bgcolor='white'></td>

         </tr>
         <tr bgcolor='white'>
             <td className="ListText">대표자는 누구니</td>
             <td></td>
             <td></td>
             <td></td>
             <td colspan="2" bgcolor='white'></td>

         </tr>
         <tr>
             <td rowspan='2' className='TitleText'>실외환경</td>
             <td bgcolor='white' className="ListText">놀이기구는 많이 있니</td>
             <td  bgcolor='white'></td>
             <td  bgcolor='white'></td>
             <td  bgcolor='white'></td>
             <td colspan="2" bgcolor='white'></td>

         </tr>
         <tr bgcolor='white'>
             <td className="ListText">재밌는건 뭐가 있니</td>
             <td></td>
             <td></td>
             <td></td>
             <td colspan="2" bgcolor='white'></td>
         </tr>
         </table>
    ); 
}

export default MonthList;