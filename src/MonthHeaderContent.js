import './MonthHeaderContent.css'

function MonthHeaderContent (){


return(
    <div>
        <table>
             <thead>  {/*점검정보란 칸 */}
                <tr>점검기간
                    <td>2022년 12월 ~ 2022년 2월</td>
                    <td>확인</td>
                    <td>매월 4일은 안전점검의 날</td>
                </tr>
                <tr className="userBox">점검자
                    <td>장세영</td>
                    <td></td>
                    <td>점검상태: 양호 , 보통 , 불량</td> 
                </tr>
            </thead>
     </table>

    </div>
    );
}

export default MonthHeaderContent;