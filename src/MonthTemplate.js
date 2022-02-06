import React from 'react';
import './MonthTemplate.css'; 



function MonthTemplate ({children}){

    return(
    <div>
                <div className="title">월별점검표</div>

     <div className="content">{children}</div>
    </div>
    );
}

export default MonthTemplate;