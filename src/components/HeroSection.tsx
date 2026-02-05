import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

export default function HeroSection() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <img
                src={heroBg}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-60' : 'opacity-0'}`}
                alt="Hero Background"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 text-center px-6">
                <p className="text-[#e6c377] tracking-widest uppercase text-xs mb-4">A Story of Us</p>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Greatest Scene</h1>
                <p className="text-lg md:text-xl italic text-white/80">Every love story is beautiful, but ours is my favorite.</p>

                <div className="mt-12">
                    <ChevronDown className="mx-auto text-[#e6c377] w-8 h-8 animate-bounce" />
                </div>
            </div>
        </section>
    );
}