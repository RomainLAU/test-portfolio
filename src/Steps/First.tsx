import gsap from 'gsap';
import { useEffect } from 'react';

export default function First() {
    useEffect(() => {
        gsap.to('.first-title', {
            x: (Math.round(Math.random()) ? '-' : '+') + 10,
            opacity: 0.05,
            duration: 0.005,
            repeat: 50,
            ease: 'bounce.inOut',
            delay: 1,
            onComplete: () => {
                gsap.to('.first-title', {
                    opacity: 1,
                });
            },
        });

        gsap.to('.second-title', {
            x: (Math.round(Math.random()) ? '-' : '+') + 10,
            opacity: 1,
            duration: 0.005,
            repeat: 50,
            ease: 'bounce.inOut',
            delay: 1,
            onComplete: () => {
                gsap.to('.second-title', {
                    x: 0,
                    opacity: 0,
                });
            },
        });
    }, []);

    // return <div ref={box} className="box w-28 h-28 rounded-md bg-[#F7E3CB]" onClick={onClick}></div>;
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-y-8 relative w-[800px] h-[100px]">
                <h1 className="first-title text-center text-8xl font-bold text-[#F7E3CB] opacity-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">
                    Romain LAURENT
                </h1>
                <h1 className="second-title text-center text-8xl font-bold text-[#F7E3CB] opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">
                    Best Developer Ever
                </h1>
            </div>
        </div>
    );
}
