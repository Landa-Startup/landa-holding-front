'use client';
import React, { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import Table from './Table';
import { fetchData } from '@/utils/fetchData';

interface TableData {
  first_name: string;
  last_name: string;
  start_time: string;
  end_time: string;
  status: string;
}

export default function MainSection() {

  const [data, setData] = useState<TableData[]>([]);

  useEffect(() => {
    fetchData('http://localhost:8000/panel/get-vacation-forms')
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(data)
  return (
    <div>

    </div>
    // <div className="flex flex-col gap-14 overflow-x-auto mx-auto mt-10">
    //   <Table
    //     header="Employees leave permissions"
    //     tableHead={[
    //       'No.',
    //       'Employee Name',
    //       'Employer Name',
    //       'Type Of Leave',
    //       'Date',
    //       'Time',
    //       'Status',
    //     ]}
    //     tableData={data}
    //   />
    //   <Table
    //     header="Employers leave permissions"
    //     tableHead={[
    //       'No.',
    //       'Employee Name',
    //       'Employer Name',
    //       'Type Of Leave',
    //       'Date',
    //       'Time',
    //       'Status',
    //     ]}
    //     tableData={[
    //       {
    //         employerName: 'Cy Ganderton',
    //         employeeName: 'Quality Control Specialist',
    //         typeOfLeave: 'illness',
    //         date: '2023/07/12',
    //         time: '12:30',
    //         status: 'Approved',
    //       },
    //       {
    //         employerName: 'Cy Ganderton',
    //         employeeName: 'Quality Control Specialist',
    //         typeOfLeave: 'illness',
    //         date: '2023/07/12',
    //         time: '12:30',
    //         status: 'Pending',
    //       },
    //       {
    //         employerName: 'Cy Ganderton',
    //         employeeName: 'Quality Control Specialist',
    //         typeOfLeave: 'illness',
    //         date: '2023/07/12',
    //         time: '12:30',
    //         status: 'Rejected',
    //       },
    //     ]}
    //   />
    // </div>
  );
}
