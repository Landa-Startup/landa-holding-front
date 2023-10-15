'use client'
import React, { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
export default function MainSection() {  

  return (
    <div className="overflow-x-auto mx-auto mt-10">
      <table className='table table-sm md:table-md lg:table-lg'>
        {/* head */}
        <thead>
          <tr className="bg-tableHeader text-stone-500">
            <th></th>
            <th>Employee Name</th>
            <th>Employer Name</th>
            <th>Type Of Leave</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>illness</td>
            <td>2023/07/12</td>
            <td>12:30</td>
            <td className="badge badge-success md:mt-2.5">accent</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>entitlement</td>
            <td>2023/07/12</td>
            <td>12:30</td>
            <td className="badge badge-info md:mt-2.5">accent</td>

          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>entitlement</td>
            <td>2023/07/12</td>
            <td>12:30</td>
            <td className="badge badge-error  md:mt-2.5">accent</td>

          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
