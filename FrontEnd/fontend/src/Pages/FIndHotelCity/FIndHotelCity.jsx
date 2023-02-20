import Header from "../../components/header/Header";
import Search from "../../components/search/search";

function FindHotelInPalace() {
    return (
        <div>
            <div className="banner-city">
                <Header />
                <div className="banner-city-img">
                    <img src="/images/Nha-Trang.jpg" alt="" />
                    <Search />
                </div>
            </div>
        </div>);
}

export default FindHotelInPalace;