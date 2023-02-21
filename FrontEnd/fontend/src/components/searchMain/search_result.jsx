import './Search_result.css'
function SearchResultItem({title,district,cityname}) {
    return(
        <div className="searchResult_item">
                <p>{title}</p>
                {district? <p>{district}, {cityname}</p>:""}
            </div>
    )
}
export default function SearchResult({data,display}) {
    console.log(data);
    return (
        <div className="SearchResult_container" style={{display:display}}>
            {data?data.map((e,i)=>{
              return  <SearchResultItem title={e.Name} district={e.district} cityname={e.city_name}/>
            }):""}
        </div>
    )
}