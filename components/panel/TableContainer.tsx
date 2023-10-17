import React from 'react';
import Table from './Table';

export default function TableContainer() {
  return (
    <div className="flex flex-col gap-14 overflow-x-auto mx-auto mt-10">
      <Table
        header="Employees leave permissions"
        tableHead={[
          'No.',
          'Employee Name',
          'Employer Name',
          'Type Of Leave',
          'Date',
          'Time',
          'Status',
        ]}
        tableData={[
          {
            employerName: 'Cy Ganderton',
            employeeName: 'Quality Control Specialist',
            typeOfLeave: 'illness',
            date: '2023/07/12',
            time: '12:30',
            status: 'Approved',
          },
          {
            employerName: 'Cy Ganderton',
            employeeName: 'Quality Control Specialist',
            typeOfLeave: 'illness',
            date: '2023/07/12',
            time: '12:30',
            status: 'Pending',
          },
          {
            employerName: 'Cy Ganderton',
            employeeName: 'Quality Control Specialist',
            typeOfLeave: 'illness',
            date: '2023/07/12',
            time: '12:30',
            status: 'Rejected',
          },
        ]}
      />
      <Table
        header="Employers leave permissions"
        tableHead={[
          'No.',
          'Employee Name',
          'Employer Name',
          'Type Of Leave',
          'Date',
          'Time',
          'Status',
        ]}
        tableData={[
          {
            employerName: 'Cy Ganderton',
            employeeName: 'Quality Control Specialist',
            typeOfLeave: 'illness',
            date: '2023/07/12',
            time: '12:30',
            status: 'Approved',
          },
          {
            employerName: 'Cy Ganderton',
            employeeName: 'Quality Control Specialist',
            typeOfLeave: 'illness',
            date: '2023/07/12',
            time: '12:30',
            status: 'Pending',
          },
          {
            employerName: 'Cy Ganderton',
            employeeName: 'Quality Control Specialist',
            typeOfLeave: 'illness',
            date: '2023/07/12',
            time: '12:30',
            status: 'Rejected',
          },
        ]}
      />
    </div>
  );
}
