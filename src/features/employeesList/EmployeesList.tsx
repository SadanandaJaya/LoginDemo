import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './EmployeesList.css';

export interface IEmployeesListProps {
    employeesList: any;
    routerProps: RouteComponentProps;
}

function EmployeesList(props: IEmployeesListProps) {
    return (
        <div className="employeesList">
            <pre >{JSON.stringify(props.employeesList, null, '\t')}</pre>
        </div>
    )
}

export default EmployeesList;