import { useDispatch } from 'react-redux';
import './Search_result.css'
function SearchResultItem({title,district,cityname}) {
    const dispatch=useDispatch()
    return(
        <div className="searchResult_item" onClick={()=>dispatch({type:'choice_value',payload:title})}>
           <div className="searchResult_item_icon">
           {!district?<i class="fa-solid fa-location-dot"></i>:<i class="fa-solid fa-house"></i>}
           </div>
           <div className="searchResult_item_text">
           <p>{title}</p>
                {district? <p>{district}, {cityname}</p>:""}
           </div>
            </div>
    )
}
export default function SearchResult({data,display}) {
    console.log(data);
    return (
        <div className="SearchResult_container" style={{display:display}}>
            {data?data.map((e,i)=>{
              return  <SearchResultItem title={e.Name} district={e.district} cityname={e.city_name} />
            }):""}
        </div>
    )
}