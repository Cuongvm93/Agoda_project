import './search.css'

import { useState } from 'react';
import DateRange from '../dateRange';
export default function Search(){
    const [value, setValue] = useState([null, null]);
    return (
      <>
        <div className="search-bar-container">
          <input type="text" placeholder='Search' className='search-Input'/>
           {/* <input type="date" placeholder='Check in' className='search-date'/>
           <input type="date" placeholder='Check out' className='search-date'/>     */}
           <DateRange/>
          <div className="search-pickroom"></div>
          <button>Search</button>
        </div>
      </>
    );
}