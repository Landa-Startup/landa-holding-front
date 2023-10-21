import React from 'react';
import ClipboardData from '../icons/Panel/ClipboardData';

interface user {
  first_name: string;
  last_name: string;
  code: string;
  id_number: string;
  phone_number: string;
}

interface TableData {
  user: user;
  start_time: string;
  end_time: string;
  status: string;
}

export default function Table({
  header,
  tableHead,
  tableData,
  tableType,
}: {
  header: string;
  tableHead: string[];
  tableData: TableData[];
  tableType: string;
}) {
  // console.log(tableData.user.first_name)
  return (
    <div>
      <div className="flex gap-2 font-medium text-3xl border-b-2 border-black pb-4 mb-6">
        <ClipboardData />
        <span>{header}</span>
      </div>
      <table className="table table-sm md:table-md lg:table-lg table-zebra overflow-x-auto max-w-screen-sm">
        {/* head */}
        <thead>
          <tr className="bg-tableHeader text-stone-500">
            {tableHead.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(() => {
            if (tableType == 'employee') {
              return (
                <div>
                  {' '}
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* Add this line to display the row number */}
                      <td>{data.user.first_name}</td>
                      <td>{data.user.last_name}</td>
                      {/* <td>{data.typeOfLeave}</td> */}
                      <td>{data.end_time}</td>
                      <td>{data.start_time}</td>
                      <td
                        className={`badge badge-${
                          data.status === 'Approved'
                            ? 'success'
                            : data.status === 'Pending'
                            ? 'info'
                            : 'error'
                        } md:mt-2.5`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </div>
              );
            } else if (tableType == 'my') {
              return (
                <div>
                  {' '}
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* Add this line to display the row number */}
                      {/* <td>{data.first_name}</td>
                      <td>{data.last_name}</td> */}
                      {/* <td>{data.typeOfLeave}</td> */}
                      <td>{data.end_time}</td>
                      <td>{data.start_time}</td>
                      <td
                        className={`badge badge-${
                          data.status === 'Approved'
                            ? 'success'
                            : data.status === 'Pending'
                            ? 'info'
                            : 'error'
                        } md:mt-2.5`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </div>
              );
            } else if (tableType == 'all') {
              return (
                <div>
                  {' '}
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {/* Add this line to display the row number */}
                      <td>{data.user.first_name}</td>
                      <td>{data.user.last_name}</td>
                      {/* <td>{data.typeOfLeave}</td> */}
                      <td>{data.end_time}</td>
                      <td>{data.start_time}</td> 
                      <td
                        className={`badge badge-${
                          data.status === 'Approved'
                            ? 'success'
                            : data.status === 'Pending'
                            ? 'info'
                            : 'error'
                        } md:mt-2.5`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))}
                </div>
              );
            } else {
              return <div></div>;
            }
          })()}

        </tbody>
      </table>
    </div>
  );
}
