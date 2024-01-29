import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

export default function LoadingBar() {
    const loadingBar = useRef(null);

    ScrollTrigger.create({
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            if (loadingBar.current !== null) {
                gsap.to(loadingBar.current, {
                    width: self.progress * 100 + '%',
                });
            }
        },
    });

    return (
        <div className="fixed top-0 left-0 w-full h-4 bg-transparent">
            <div ref={loadingBar} className="w-0 h-full bg-[#F7E3CB]"></div>
        </div>
    );
}
