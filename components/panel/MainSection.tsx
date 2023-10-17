'use client';
import React, { useEffect } from 'react';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import Table from './Table';
import LeaveForm from './LeaveForm';
import TableContainer from './TableContainer';
export default function MainSection() {
  return (
    <div className="px-20 py-11">
      <TableContainer />
      <LeaveForm />
    </div>
  );
}
