'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

const MeetNewPeople = ({imageRight=true}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="w-full px-32">
            {imageRight ? <div className="flex justify-between items-start w-full">
                            <div className="flex flex-col items-start gap-8 w-[38rem]">
                                <h2 className="text-[2.5rem] font-medium tz-text-dark">Meet new people</h2>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <p className="text-xl tz-text-gray">As a host, you'll have the chance to meet travelers from different backgrounds and cultures. Share local insights, provide recommendations, and create memorable experiences for your guests.</p>
                            </div>
                            <div className="">
                                <Image src="/assets/images/manOnCar.png" alt="logo icon" width={600} height={500} />
                            </div>
                        </div> 
                        :
                        <div className="flex justify-between items-start w-full">
                            <div className="">
                                <Image src="/assets/images/manOnCar.png" alt="logo icon" width={600} height={500} />
                            </div>
                            <div className="flex flex-col items-start gap-8 w-[38rem]">
                                <h2 className="text-[2.5rem] font-medium tz-text-dark">Meet new people</h2>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <p className="text-xl tz-text-gray">As a host, you'll have the chance to meet travelers from different backgrounds and cultures. Share local insights, provide recommendations, and create memorable experiences for your guests.</p>
                            </div>
                        </div>}
        </div>
    );
};

export default MeetNewPeople;
