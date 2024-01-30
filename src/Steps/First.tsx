import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function First() {
    useGSAP(() => {
        gsap.to('.first-title', {
            x: 'random([-10, 10])',
            opacity: 0.05,
            duration: 0.005,
            repeat: 50,
            ease: 'bounce.inOut',
            delay: 1,
            onComplete: () => {
                gsap.to('.first-title', {
                    x: 0,
                    opacity: 1,
                });
            },
        });

        gsap.to('.second-title', {
            x: 'random([-10, 10])',
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

        ScrollTrigger.create({
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                gsap.to('#test', {
                    scale: self.progress * 5000,
                });

                if (self.progress * 5000 >= 2600) {
                    console.log('test');
                    gsap.set('#web-container', {
                        backgroundColor: '#876255',
                    });

                    gsap.set('#test', {
                        opacity: 0,
                        duration: 0.5,
                    });
                } else {
                    gsap.set('#web-container', {
                        backgroundColor: '#343131',
                    });

                    gsap.to('#test', {
                        opacity: 1,
                        duration: 0.5,
                    });
                }
            },
        });
    });

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <p
                id="test"
                className="text-secondary z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                Hello
            </p>
            <div className="flex flex-col justify-center items-center gap-y-8 relative w-[800px] h-[100px]">
                <h1 className="first-title text-center text-8xl font-bold text-primary opacity-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">
                    Romain LAURENT
                </h1>
                <h1 className="second-title text-center text-8xl font-bold text-secondary opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">
                    Best Developer Ever
                </h1>
            </div>
        </div>
    );
}
