'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
// import isMobile from '@/components/helpers/isMobile'



const UniqueHost2 = ({links}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="flex flex-col items-center gap-32 w-[22.5rem]">
                <div className="flex flex-col items-start gap-8 self-stretch">
                    <h2 className="text-4xl font-medium tz-text-dark">200+</h2>
                    <p className="text-xl tz-text-gray">UNIQUE HOSTS</p>
                </div>   
                <div className="flex flex-col items-start gap-5">
                    <h2 className="text-3xl font-medium tz-text-dark">Flexibilty</h2>
                    <p className="tz-text-gray">
                        You have the flexibility to set your own availability and rental terms. Decide when you want to make your 
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        vehicle available for bookings, whether it's on weekends, during specific seasons, or on select weekdays.
                    </p>
                </div>    
        </div>
    );
};

export default UniqueHost2;
