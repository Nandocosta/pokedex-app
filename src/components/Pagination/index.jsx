import React from 'react';

import './index.css'

// function populationList() {

//     const data = Array.from({length: 100}).map(_, i)
//     console.log(data)

// }
// populationList()

export function Pagination (){
    return(
        <div>
            <div class="controls">
                <div class="first">&#171;</div>
                <div class="prev">{'<'}</div>
                <div class="numbers">
                    <div>1</div>
                </div>
                <div class="next">{'>'}</div>
                <div class="last">&#187;</div>
            </div>
        </div>
    )
}
