import React from 'react';

const DateDisplay = ({ checkIn, checkOut, className }) => {
  const formatDate = (date) => {
    if (!date) return 'Not selected';
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };

  return (
    <div className={`flex flex-col gap-4 ${className || ''}`}>
        <div className="p-2 rounded  check_in">{formatDate(checkIn)}</div>
        <div className="p-2 rounded  check_out">{formatDate(checkOut)}</div>
    </div>
  );
};

export default DateDisplay;