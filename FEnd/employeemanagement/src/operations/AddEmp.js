import React from 'react';

function AddEmp() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        data.salary = parseFloat(data.salary);
        fetch('http://localhost:8081/api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (!response.ok)
                throw new Error('Fail');
            return response.json().catch(error => console.error('Error:', error));
        }).then(console.log('Success:'));
    }
    return (
        <div className="AddEmp">
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit} >
                <div className='container'>
                    <table border={1}>
                        <tr>
                            <td className='label'>
                                <label htmlFor="name">Name:</label>
                            </td>
                            <td className='l-ip'>
                                <input type="text" id="name" name="name" required />

                            </td>
                        </tr>
                        <tr>
                            <td className='label'>
                                <label htmlFor="branch">Branch:</label>
                            </td>
                            <td className='l-ip'>
                                <input type="text" id="branch" name="branch" required />
                            </td>
                        </tr>
                        <tr>
                            <td className='label'>
                                <label htmlFor="salary">Salary:</label>
                            </td>

                            <td className='l-ip' >
                                <input type="number" id="salary" step='any' name="salary" required />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit" className='s-btn'>Add Employee</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default AddEmp;