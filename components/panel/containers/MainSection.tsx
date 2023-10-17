'use client';
import React, { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import Table from '../Table';
import { fetchData } from '@/utils/fetchData';
import LeaveForm from './LeaveForm';

interface TableData {
  first_name: string;
  last_name: string;
  start_time: string;
  end_time: string;
  status: string;
}

export default function MainSection() {
  const [employer, setEmployer] = useState<TableData[]>([]);
  const [employee, setEmployee] = useState<TableData[]>([]);

  useEffect(() => {
    // employer data
    fetchData('http://localhost:8000/panel/staff-vacation-form')
      .then((result) => {
        setEmployer(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    // employee data
    fetchData('http://localhost:8000/panel/get-vacation-forms')
      .then((result) => {
        setEmployee(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(employee);
  return (
    <>
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
          tableData={employer}
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
          tableData={employee}
        />
      </div>
      <LeaveForm />
    </>
  );
}
