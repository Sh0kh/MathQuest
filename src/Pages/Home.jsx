import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';
import Hero from '../Components/User-Pages/Home/Hero';


export default function Home() {

    useGSAP(() => {
        gsap.fromTo('.Title ',
            {
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: "power1.inOut"
            }
        )
    });

    return (
        <main className='h-[1500px] mt-[100px]'>
            <Hero />
        </main>
    );
}
