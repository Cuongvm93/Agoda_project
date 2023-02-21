import Header from "../../components/header/Header";
import Search from "../../components/search/search";
import HotelCard from "../../components/card-hotel/CardHotel"
import './findHotelCity.css'
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
function FindHotelInPalace() {
    const location=useLocation()// get current location 
    let params=new URLSearchParams(location.search)// để gán method sử lấy querystring
    console.log(params.get('city'));// lấy ra string mong muốn theo các key
    const [searchValue,setSearchValue]=useState("")
    const [dataHotel,setDataHotel]=useState([])
    useEffect(()=>{
        let query=window.location.search.slice(6,window.location.search.length)
        setSearchValue(query)
        fetch(`http://localhost:5000/api/v1/hotel/${query}`)
        .then(res=>res.json())
        .then(data=>{
            setDataHotel(...dataHotel,data)
            setSearchValue(data[0].city_name)
        })
    },[])
    console.log(dataHotel);
    return (
        <div>
            <div className="banner-city">
                <Header />
                <div className="banner-city-img">
                    <Search searchValue={searchValue}/>
                </div>
                <div className="page_result_body">
                    <div className="page_result_body_left"></div>
                    <div className="page_result_body_right">
                      {dataHotel.map((e,i)=>{
                        return <HotelCard 
                            img1={e.image[0]}
                            img2={e.image[1]}
                            img3={e.image[2]}
                            img4={e.image[3]}
                            img5={e.image[4]}
                            img6={e.image[5]}
                            title={e.Name}
                            district={e.district}
                            city={e.city_name}
                            price={e.price}
                        />
                      })}  
                    </div>
                </div>
            </div>
        </div>);
}

export default FindHotelInPalace;