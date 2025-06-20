import React, { useEffect, useState } from "react";

function Table() {
    const [employees,setEmployees] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/api/employee')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error(error));
  },[]);
    return (
        <div className="Table">
            <table className='table'>
                    <tr>
                        <th>Id</th>
                        <th>
                            Name
                        </th>
                        <th>
                            Branch
                        </th>
                        <th>
                            Salary
                        </th>
                    </tr>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                        <td>
                            {emp.id}
                        </td>
                        <td>
                            {emp.name}
                        </td>
                        <td>
                            {emp.branch}
                        </td>
                        <td>
                            {emp.salary}
                        </td>
                    </tr>
                    ))
                    }
            </table>
        </div>
    );
}

export default Table;