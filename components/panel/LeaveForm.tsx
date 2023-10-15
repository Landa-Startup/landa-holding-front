import React from 'react';

export default function LeaveForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="leaveType">Leave Type</label>
        <select className="form-control" id="leaveType">
          <option>Annual Leave</option>
          <option>Sick Leave</option>
          <option>Emergency Leave</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="leaveDate">Leave Date</label>
        <input type="date" className="form-control" id="leaveDate" />
      </div>
      <div className="form-group">
        <label htmlFor="leaveReason">Reason</label>
        <textarea className="form-control" id="leaveReason" rows={3}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
