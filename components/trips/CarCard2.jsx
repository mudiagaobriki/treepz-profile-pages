'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { Carousel } from 'flowbite';

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const CarCard2 = ({carImage, carName, price, location="", rating=4.9, tripsCount=30,
                             tripDate="", tripTime="", hasLiked=false, status="",
                             isChauffeured=false, isAirportTransfer=false, isIntercityTravel=false}) => {

    // let mobPad = isMobile ? "px-5 py-2" : "px-20 py-3";
    let tripStatus = status.toLowerCase();
    let bgColor = tripStatus == "payment pending" ? "tz-bg-blue" : (tripStatus == "confirm payment" ? "tz-bg-yellow" : "tz-bg-green");
    let color = tripStatus == "payment pending" ? "tz-text-blue" : (tripStatus == "confirm payment" ? "tz-text-yellow" : "tz-text-green");

    return (
        <div className='flex flex-col flex-start rounded-xl tz-shadow tz-border-light'>
            <div className="self-stretch">
                {/*<Image src={carImage} alt="car image" width={320} height={208} />*/}

                <div id="controls-carousel" class="relative w-full" data-carousel="slide">
                    {/*Carousel wrapper*/}
                    <div class="relative h-48 w-full overflow-hidden rounded-t-lg px-3">
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <Image src={carImage} width={320} height={208} class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={carImage} width={320} height={208} class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={carImage} width={320} height={208} class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
                    <div className="inline-flex items-center w-full absolute px-3 pt-4 top-0 left-0 right-0 z-30">
                        <div className="flex items-start px-2 py-1 gap-1 rounded-3xl bg-white tz-border-light-1">
                            <span className="truncate text-sm tz-text-dark">{location}</span>
                        </div>
                    </div>
                    {/*Slider indicators*/}
                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>
                    {/*Slider controls*/}
                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-0 group-focus:ring-white group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-0 group-focus:ring-white group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>
            <div className="flex flex-col items-start p-3 gap-2 self-stretch">
                <div className="flex gap-10 items-center self-stretch">
                    <div className="flex items-center gap-3">
                        <div className="flex items-start gap-2 pr-0 tz-border-right">
                            {isChauffeured &&
                                <div className="flex h-5 py-1 px-2 mr-3 items-center gap-1 rounded tz-bg-green">
                                    <Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />
                                    <span className="text-xs font-semibold tz-text-green">Chauffeurred</span>
                                </div>}
                            {isAirportTransfer &&
                                <div className="flex h-5 py-1 px-2 mr-3 items-center gap-1 rounded tz-bg-blue">
                                    <Image src="/assets/images/flight-takeoff-blue.png" alt="logo icon" width={12} height={12} />
                                    <span className="text-xs font-semibold tz-text-blue">Airport transfer</span>
                                </div>}
                            {isIntercityTravel &&
                                <div className="flex h-5 py-1 px-2 mr-3 items-center gap-1 rounded tz-bg-yellow">
                                    <Image src="/assets/images/car-fill.png" alt="logo icon" width={12} height={12} />
                                    <span className="text-xs font-semibold tz-text-brown">Inter-city travel</span>
                                </div>}
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src="/assets/images/star.png" alt="rating-star" width={13} height={13} />
                            <span className="text-xs font-medium">{rating} ({tripsCount})</span>
                        </div>
                    </div>
                    <div className={`flex h-5 py-1 px-2 items-center gap-1 rounded-3xl ${bgColor}`}>
                        <span className={`text-xs capitalize font-semibold ${color}`}>{status}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between self-stretch">
                    <div className="text-base font-medium tz-text-dark">{carName}</div>
                    <div className="text-base font-medium text-opacity-80 tz-text-dark">{price}</div>
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch">
                    <div className="flex items-center gap-1">
                        <Image src="/assets/images/time-fill.png" alt="trip time" width={16} height={16} />
                        <div className="text-sm text-opacity-80 tz-text-gray">{tripTime}</div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src="/assets/images/calendar-fill.png" alt="trip date" width={16} height={16} />
                        <div className="text-sm text-opacity-80 tz-text-gray">{tripDate}</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CarCard2;
