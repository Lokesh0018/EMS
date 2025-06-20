import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigate() {
    return (
        <div className="Navigate">
            <h1>Employee Management</h1>
            <nav className="nav">
                <ul>
                    <li><Link to="/employee/add">Add Employee</Link></li>
                    <li><Link to="/employee/view">View Employee</Link></li>
                    <li><Link to="/employee/edit">Update Employee</Link></li>
                    <li><Link to="/employee/delete">Delete Employee</Link></li>
                </ul>
            </nav>
            <div className="table-btn">
                <ul>
                    <button><Link to="/employees">Table</Link></button>
                </ul>
            </div>
        </div>
    );
}

export default Navigate;