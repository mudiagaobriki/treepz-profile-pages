'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// Third party components
import { Modal } from 'flowbite';

import NavBar from '@/components/sections/NavBar';
import VehicleType from '@/components/sections/VehicleType';
import VehicleImage from '@/components/sections/VehicleImage';
import BookingDetails from '@/components/sections/BookingDetails';
import MapSection from '@/components/sections/MapSection';
import LocationSection from '@/components/sections/LocationSection';
import BreadCrumb from '@/components/items/BreadCrumb';
import Footer from '@/components/sections/Footer';
import Signup from '@/components/modals/Signup';
import Login from '@/components/modals/Login';
import ForgotPassword from '@/components/modals/ForgotPassword';
import NewPassword from '@/components/modals/NewPassword';
import EmailOTP from '@/components/modals/EmailOTP';
import SuccessCard from '@/components/modals/SuccessCard';
import {useDispatch, useSelector} from "react-redux";
import Button1 from "../../components/items/Button1";

const Page = () => {
        const [userLocation, setUserLocation] = useState(null)

        const dispatch = useDispatch()

        const selectedRide = useSelector(state => state.marketplace.selectedRide)
        console.log({selectedRide})
        const vehicleName = selectedRide?.vehicle?.vehicleMake?.name + " " + selectedRide?.vehicle?.vehicleModel?.name
        const vehicleYear = selectedRide?.vehicle?.vehicleYear

        // get user location
        useEffect(() => {
                if ("geolocation" in navigator) {
                        console.log("Location Available");
                        navigator.geolocation.getCurrentPosition(function(position) {
                                console.log("Latitude is :", position.coords.latitude);
                                console.log("Longitude is :", position.coords.longitude);
                        });
                } else {
                        console.log("Location Not Available");
                }
        },[])

    return (
        <div>
            <NavBar bgColor="#FFF" />
            <div className="px-32 flex items-center gap-2 mt-14 mb-10 font-semibold tz-text-orange-1">
                <Image src="/assets/images/arrow-go-back-fill.png" alt="rating-star" width={24} height={24} /> Go back
            </div>
                <div className="flex justify-between items-start w-full px-32">
                        <div className="flex flex-col items-start gap-3">
                                <div className="flex items-start gap-2">
                                        {selectedRide?.driveType === "chaffeured" && <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                                                <Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />
                                                <span className="text-xs font-semibold tz-text-green">Chauffeurred</span>
                                        </div>}
                                        <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                                                {/*<Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />*/}
                                                <span className="text-xs font-semibold tz-text-green">Promoted</span>
                                        </div>
                                </div>
                                <div className="text-3xl font-semibold tz-text-dark">{vehicleName}</div>
                                <div className="flex items-start gap-3">
                                        <div className="flex items-center gap-1">
                                                <Image src="/assets/images/star.png" alt="rating-star" width={16} height={16} />
                                                <span className="text-sm font-bold tz-text-dark-1">4.9</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <p className="text-sm text-opacity-80 tz-text-dark">(34 reviews)</p>
                                                <div className="w-2 h-2 rounded-full tz-bg-gray-2"></div>
                                                <p className="text-sm text-opacity-80 tz-text-dark">x1 2.0i ( 181bhp ) {vehicleYear} auto</p>
                                        </div>
                                </div>
                        </div>
                        <div className="flex flex-col items-start gap-4">
                                <div className="flex items-center gap-5">
                                        <Image src="/assets/images/heart-2-line.png" alt="logo icon" width={32} height={32} />
                                        <Image src="/assets/images/share-box-fill.png" alt="logo icon" width={32} height={32} />
                                        <Button1 text="Reserve" url="" width={"56"} modalId={"signup-modal"} />
                                </div>
                                <div className="flex items-center gap-2 p-2 justify-end w-full">
                                        <Image src="/assets/images/refund-fill.png" alt="logo icon" width={24} height={24} />
                                        <p className="text-sm font-medium tz-text-dark-1">Free Cancellation</p>
                                </div>
                        </div>
                </div>
            <div className="my-20"></div>
            <VehicleImage />
            <div className="my-20"></div>
            <BookingDetails />
            <div className="my-20"></div>
            <MapSection />
            <div className="mt-24 pt-16 pb-10 tz-bg-light">
                <BreadCrumb links={["Rent a car", "Ikejah", "Mercedes", "Mercedes Mayback 20233"]} />
            </div>
            <LocationSection />
            <div className="pt-24 tz-bg-light"></div>
            <Footer />
            <Signup />
            <Login />
            <NewPassword />
            <ForgotPassword />
            <EmailOTP numberOfDigits={5} />
            <SuccessCard 
                title={"Password reset successful!"} 
                description={"Your request to reset your password is completed. Proceed to login with your new password."} 
                btnText={"Log in"} 
                modalId={"password-reset-success-modal"}
            />
        </div>
    );
};

export default Page;
