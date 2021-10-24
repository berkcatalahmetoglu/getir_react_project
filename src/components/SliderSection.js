import { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from 'react-flags-select';

export default function SliderSection() {
    const [selected, setSelected] = useState('TR');
    const phones = {
        US: '+1',
        GB: '+44',
        FR: '+33	',
        DE: '+49',
        US: '+39',
        TR: '+90'
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    return (
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-brand-color before:to-transparent before:absolute before:inset-0 before:h-full before:z-10">
            <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"></img>
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"></img>
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"></img>
                </div>

            </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div>
                    <img src="https://getir.com/_next/static/images/groceriesInMinutes-20f12c15098e8fd2bae874e2a40e343b.svg"></img>
                    <h3 className="mt-8 text-4xl font-semibold text-white">At your door in minutes</h3>
                </div>
                <div className="w-[400px] rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Login or register</h4>
                    <div className="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select" />
                            <label className="flex-1 relative group block cursor-text ">
                                <input required className="h-14 px-4 border-2 cursor-text border-gray-200 rounded w-full transition-colors text-sm pt-2 group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer" />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color ">Mobile Phone</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">Continue with phone number</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
