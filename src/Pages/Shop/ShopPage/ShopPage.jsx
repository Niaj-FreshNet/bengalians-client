import Notice from "../../../Components/Notice/Notice";
import ShopBanner from "../../../Components/ShopBanner/ShopBanner";
import ShopProducts from "../ShopProducts/ShopProducts";
import BannerDesktop from "../../../assets/banner1.webp";
import BannerMobile from "../../../assets/banner2.webp";


const ShopPage = () => {
    return (
        <div className='w-full mx-auto'>
            <div className='max-w-screen-2xl mx-auto'>
                <ShopBanner
                    heading={'The Worlds Best Perfume Oil Collection'}
                    text={'Choose Your Desired Perfume Oil from Worlds Best Perfume Oil Collection'}
                    button={'Shop Now'}
                    bannerDesktop={BannerDesktop}
                    bannerMobile={BannerMobile}
                />
            </div>
            <div className='max-w-screen-2xl mx-auto pt-6 pb-1 bg-gray-50'>
                <Notice
                    heading="World's Best Perfume Oils"
                    notices={['Free Nationwide Shipping on Orders Over 1000 BDT.', 'Up to 50% Off!', 'Alter Your Attire Effortlessly at KhushbuWaala Banasree Outlet']}
                    interval={4000}
                />
            </div>
            <div className='bg-white'>
                <div className='max-w-screen-2xl lg:px-4 pb-8 mx-auto'>
                    <ShopProducts />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;