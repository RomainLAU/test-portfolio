import First from './Steps/First';
import Experience from './Steps/Experience';

export default function App() {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen w-full bg-[#343131]">
            {/* <LoadingBar /> */}
            <First />
            <Experience title="Agilbox" index={0} />
            <Experience title="Entropy" index={1} />
            <Experience title="DeepBlock" index={2} />
            <Experience title="Notice" index={3} />
        </div>
    );
}
