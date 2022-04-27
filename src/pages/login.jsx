import React from 'react'

// make tables using json
const MakeTable = (json) => {
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    let td = document.createElement('td')
    let thText = document.createTextNode('Name')
    let tdText = document.createTextNode('Email')
    th.appendChild(thText)
    td.appendChild(tdText)
    tr.appendChild(th)
    tr.appendChild(td)
    thead.appendChild(tr)
    table.appendChild(thead)
    table.appendChild(tbody)
    for(let i = 0; i < json.length; i++) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let tdText = document.createTextNode(json[i].branchName)
        td.appendChild(tdText)
        tr.appendChild(td)
        tbody.appendChild(tr)
    }
    return (
        <div>
            {table}
        </div>
    )
}

export default MakeTable;