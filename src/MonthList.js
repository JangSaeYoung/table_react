
import './MonthList.css';
// import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md'
// import cn from 'classnames';

function MonthList({Titletext,  contextText, secText, thrText }){



    return(
        <table>
         <tr>
             <td rowSpan="3" className='TitleText'>{Titletext}</td>
             <td bgcolor='white' className="ListText">{contextText}</td>
             <td  bgcolor='white' className='monthText'>
             <input type='checkbox'></input>
             </td>
             <td  bgcolor='white' className='monthText'>
             <input type='checkbox'></input>
             </td>
             <td  bgcolor='white' className='monthText'>
             <input type='checkbox'></input>
             </td>
             <td colSpan="2" bgcolor='white'></td>

         </tr>
         <tr bgcolor='white'>
             <td className="ListText">{secText}</td>
             <td><input type='checkbox'></input></td>
             <td><input type='checkbox'></input></td>
             <td><input type='checkbox'></input></td>
             <td colSpan="2" bgcolor='white'></td>

         </tr>
         <tr bgcolor='white'>
             <td className="ListText">{thrText}</td>
             <td><input type='checkbox'></input></td>
             <td><input type='checkbox'></input></td>
             <td><input type='checkbox'></input></td>
             <td colSpan="2" bgcolor='white'></td>
         </tr>
         </table>
    ); 
}

export default MonthList;