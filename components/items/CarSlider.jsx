'use client';

import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

import { Carousel } from 'flowbite';

// Custom components
// import isMobile from '@/components/helpers/isMobile'

const CarSlider = () => {

    /*useEffect(() => {
        const carouselElement = document.getElementById('controls-carousel');
        const items = [
            {
                position: 0,
                el: document.getElementById('carousel-item-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-item-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-item-3')
            },
        ];
        const carousel = new Carousel(carouselElement, items);
        // goes to the next (right) slide
        carousel.next()
        // goes to the previous (left) slide
        carousel.prev()
    });*/

    return (
        <div className='flex flex-col flex-start p-4 gap-8 flex-shrink-0 rounded-3xl bg-white w-[39rem] tz-border-gray-2'>
            <div className="flex justify-between items-start self-stretch">
                <div>
                    <h3 className="text-[1.75em] font-semibold tz-text-dark mb-4">Mercedes Maybach 2022</h3>
                    <div className="flex items-center gap-4">
                        <p>May 30 - June 2</p>
                        <div className="flex h-5 py-1 px-2 items-center gap-1 tz-bg-green rounded">
                            <Image src="/assets/images/user-icons.png" alt="logo icon" width={12} height={12} />
                            <span className="text-xs font-semibold tz-text-green">Chauffeurred</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="text-opacity-80 text-2xl font-medium tz-text-dark">₦ 20,000/</span>
                        <span className="text-opacity-80 tz-text-dark-2">day</span>
                    </div>
                    <p className="text-opacity-80 text-xs tz-text-gray">₦ 45,000 est. total</p>
                </div>
            </div>
            <div className="rounded-2xl">
                {/*<Image src="/assets/images/toyota-prado.png" alt="" width={600} height={300} />*/}

                <div id="controls-carousel" class="relative w-full" data-carousel="slide">
                    {/*Carousel wrapper*/}
                    <div class="relative h-80 overflow-hidden rounded-lg px-3">

                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <Image src="/assets/images/toyota-prado.png" width={600} height={400} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src="/assets/images/toyota-prado.png" width={600} height={400} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src="/assets/images/toyota-prado.png"  width={600} height={400} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-between w-full absolute px-3 pt-4 top-0 left-0 right-0 z-30">
                        <div className="flex items-center px-2 py-1 gap-1 rounded-3xl bg-white tz-border-light-1">
                            <span className="text-sm tz-text-dark">Asanti kotoko, Ikeja</span>
                        </div>
                        <Image src="/assets/images/heart-2-light.png" alt="" width={24} height={24} />
                    </div>
                    {/*Slider indicators*/}
                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-2 h-2 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        {/*<button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>*/}
                    </div>
                    {/*Slider controls*/}
                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CarSlider;

/*
display: flex;
padding: 4px 8px;
align-items: flex-start;
gap: 4px;
border-radius: 32px;
border: 1px solid var(--neutral-tints-99, #F7F7F7);
background: var(--white-00, #FFF);*/

