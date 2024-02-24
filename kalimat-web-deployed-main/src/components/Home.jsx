import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="banner">
                <h1>متاجر متعددة بضغطة زر</h1>
            </div>
            <div className="image-container">
                <img className="home-image" src="https://s3-alpha-sig.figma.com/img/18ba/f5cc/2debd0e5ac029291ba832c117f110aa3?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eiHYwnV3Wn-3qxFn8Qcqr0za6xOC8FkaLmsKADr9cdbWIRq1LZnsjuUnTa7AJBEPYrfSgVsVZ~UOZjyIKttZXjGZZjH8LbpaNoIcqlmMzIgJLbLABlHu6Fst0z5reD0f2x0fWqRSV7oyYTw44QCmLsySm9dLnm1K5yX4BvB1zVsedHF0VLTAoZ46iiCWg5qjcOfdSjdZXWldUG5cAcwgxQoBUAMaECDCbdg0Z8FBgaoHUI9W6ysPy9q1k-LgDnO8eEXrTikAxVpkmj6CbcyBbmBHitmiJ73HvWEXxXjnKckY0lj5smHYS2-kd04RlM1Oe4hsqxx-SFtQ9j5H8x7auA__" alt="Promotional content" />
            </div>
            <div className="footer">
                <p>قم بزيارة متاجرك المفضلة وتصفح المنتجات واشتري اونلاين</p>
                <p>مع أداء البحث السريع</p>
            </div>
        </div>
    );
};

export default Home;
