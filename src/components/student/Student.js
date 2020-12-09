import React from 'react';

const Student = ({ student: {name, phone, parent, address} } ) => {
    return (
        <tr>
            <td>{ name }</td>
            <td>{ phone }</td>
            <td>{ parent }</td>
            <td>{ address }</td>
        </tr>    
    )
}

export default Student;
