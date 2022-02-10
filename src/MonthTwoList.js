import './MonthTwoList.css';
// import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

function MonthTwoList({Titletext, contextText, secText}){

    return(
        <table>
         <tr>
             <td rowSpan='2' className='TitleText'>{Titletext}</td>
             <td bgcolor='white' className="ListText">{contextText}</td>
             <td bgcolor='white' className='monthText'><input type='checkbox'></input></td>
             <td bgcolor='white' className='monthText'><input type='checkbox'></input></td>
             <td bgcolor='white' className='monthText'><input type='checkbox'></input></td>
             <td colSpan="2" bgcolor='white'></td>
         </tr>
         <tr bgcolor='white'>
             <td className="ListText">{secText}</td>
             <td bgcolor='white' className='monthText'><input type='checkbox'></input></td>
             <td bgcolor='white' className='monthText'><input type='checkbox'></input></td>
             <td bgcolor='white' className='monthText'><input type='checkbox'></input></td>
             <td colSpan="2" bgcolor='white'></td>
         </tr>
         </table>
    ); 
}

export default MonthTwoList;