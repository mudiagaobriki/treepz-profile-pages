'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Custom components
import Button1 from '@/components/items/Button1';

const ExploreWithoutLimits2 = () => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";

    return (
        <div className="px-32 flex justify-between items-start w-full">
            <div className="flex flex-col items-start gap-[4.5rem] w-96">
                <div className="flex flex-col items-start gap-8 self-stretch">
                    <p className="text-xl tz-text-gray">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Whether it's a sleek sports car or a rugged truck. It only takes a few minutes, and best of all, there are no listing fees or monthly charges.
                    </p>
                    <h1 className="text-7xl font-medium tz-text-dark">Explore <br /> without <br /> limits.</h1>
                </div>   
                <Button1 text={"Explore Kampala with a car"} url={"#"} width={"[21.5rem]"} icon={true} img={"/assets/images/arrow-right-up-line.png"} />
            </div>
            <div className="flex items-start gap-20">
                <div>
                    <Image src="/assets/images/exploreSafari.png" alt="monkey" width={509} height={584} />
                </div>
                <div className="flex flex-col items-center gap-60">
                    <div className="flex flex-col items-start gap-8 self-stretch">
                        <h2 className="text-4xl font-medium tz-text-dark">200+</h2>
                        <p className="text-xl tz-text-gray">UNIQUE HOSTS</p>
                    </div>   
                    <div className="flex flex-col items-start gap-8 self-stretch">
                        <h2 className="text-4xl font-medium tz-text-dark">200+</h2>
                        <p className="text-xl tz-text-gray">UNIQUE HOSTS</p>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default ExploreWithoutLimits2;
