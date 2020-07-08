import React, { useState } from 'react';
import './DatePicker.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import calendar from '../../assets/calendar.png';

function DatePicker() {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className="data-range-picker">
      <DateRangePicker
        onChange={onChange}
        value={value}
        clearIcon={null}
        calendarClassName="data-range-picker"
        calendarIcon={null}
      />
      <img src={calendar} alt="calendar icon" className="calendar-icon" />
    </div>
  );
}

export default DatePicker;
