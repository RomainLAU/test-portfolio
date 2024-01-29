import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Experience({ title, index }: { title: string; index: number }) {
    const container = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const description = useRef<HTMLDivElement>(null);
    const img = useRef<HTMLImageElement>(null); // Fix: Change the type to HTMLImageElement

    useGSAP(
        () => {
            gsap.fromTo(
                description.current,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? '1600' : '-1000',
                },
                {
                    opacity: 1,
                    x: index % 2 === 0 ? '800' : '-200',
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'sine.inOut',
                    scrollTrigger: titleRef.current,
                }
            );

            gsap.fromTo(
                img.current,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? '-1525' : '1000',
                },
                {
                    opacity: 1,
                    x: index % 2 === 0 ? '-725' : '200',
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'sine',
                    scrollTrigger: titleRef.current,
                }
            );
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="h-screen w-screen flex justify-center items-center flex-col gap-y-24 px-24 my-12"
        >
            <h2 ref={titleRef} className="text-4xl text-primary font-bold">
                {title}
            </h2>
            <div className="flex items-center justify-center">
                <p ref={description} className="text-primary text-xl opacity-0 text-justify w-[30vw]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae non, nostrum ea deserunt
                    minus placeat quia temporibus adipisci veniam dolore. Eligendi vitae hic provident fugiat, dolores
                    vel saepe placeat quia temporibus adipisci veniam dolore. Eligendi vitae hic provident fugiat,
                    dolores vel saepe placeat quia temporibus adipisci veniam dolore. Eligendi vitae hic provident
                    fugiat, dolores vel saepe placeat quia temporibus adipisci veniam dolore. Eligendi vitae hic
                    provident fugiat, dolores vel saepe placeat quia temporibus adipisci veniam dolore. Eligendi vitae
                    hic provident fugiat, dolores vel saepe placeat quia temporibus adipisci veniam dolore. Eligendi
                    vitae hic provident fugiat, dolores vel saepe beatae.
                </p>
                <img ref={img} src="https://placehold.co/600x400" alt="alt" />
            </div>
        </div>
    );
}
