
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

dayjs.extend(customParseFormat);
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().startOf('day');
};
const App = ({height,width,size,weight,handelchange}) => (
  <Space direction="vertical" size={12} style={{fontSizeAdjust:weight}}>
    <RangePicker style={{height:height,width:width,fontSize:size, fontWeight:weight}}
      disabledDate={disabledDate}
      onChange={handelchange}
    />
  </Space>
);
export default App;