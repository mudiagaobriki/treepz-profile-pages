'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';

const VehicleImage = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-2/3">
            <div className="flex justify-between items-center mb-8 w-full">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-medium tz-text-dark">Hosted by Isidore Kpokufe</span>
                        <Image src="/assets/images/status-icons.png" alt="logo icon" width={20} height={20} />
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/userStarFill.png" alt="user-star" width={16} height={16} />
                            <span className="text-sm tz-text-gray">Host since Feb. 2023</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/car-wheel-2.png" alt="user-star" width={16} height={16} />
                            <span className="text-sm tz-text-gray">Gasoline</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/wifi.png" alt="user-star" width={16} height={16} />
                            <span className="text-sm tz-text-gray">4 seats</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/bluetooth.png" alt="user-star" width={16} height={16} />
                            <span className="text-sm tz-text-gray">2 doors</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image src="/assets/images/profile-photo.png" alt="profile photo" width={68} height={68} className="rounded-full border-white flex-shrink-0" />
                </div>
            </div>
            <div className="flex flex-col items-end gap-2 pt-8 tz-border-top-3">
                <div>
                    <h3 className="text-2xl font-medium tz-text-dark mb-5">Description</h3>
                    <div className="flex flex-col justify-center w-full h-24 flex-shrink-0">
                        <p className="tz-text-gray overflow-hidden overflow-ellipsis w-full tz-text-fadeout">
                        Mercedes Maybach 2023 boasts a plethora of advanced features and amenities, ensuring the utmost comfort and convenience for both driver and passengers. 
                        Indulge in the sumptuous leather-appointed seats, enveloping you in pure luxury. Revel in the latest in-car connectivity options, with Bluetooth mobile connectivity, aux inputs, 
                        and USB ports to effortlessly integrate your devices. Experience the thrill of driving with the S drive function, allowing you to unleash the full potential of this remarkable vehicle. 
                        The sport mode offers an exhilarating performance, complemented by the precision-engineered handling and powerful engine, ensuring an unforgettable ride. The Mercedes Maybach 2023 is equipped 
                        with an array of state-of-the-art safety features, providing peace of mind on every journey. From advanced driver-assistance systems to innovative braking technologies, this vehicle prioritizes your 
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                        safety and the safety of those around you. This luxury masterpiece is available on our marketplace, ready to elevate your driving experience to new heights. Whether you're attending a special event,
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                        embarking on a weekend getaway, or simply seeking to make a statement, the Mercedes Maybach 2023 is the epitome of refined luxury. Don't miss out on the opportunity to own this automotive masterpiece.
                        Contact us now with any questions or to schedule a viewing. Embrace the extraordinary with the Mercedes Maybach 2023.</p>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2 w-full">
                    <p className="text-base font-semibold tz-text-dark">Show more</p>
                    <Image src="/assets/images/chevron-down-line.png" alt="" width={24} height={24} className="flex-shrink-0" />
                </div>
            </div>
        </div>
        
    );
};

export default VehicleImage;
