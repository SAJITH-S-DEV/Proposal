import { useState } from "react";
import { Button } from "./ui/button";
import cinemaBg from "../assets/cinema-bg.jpg";
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

export default function ProposalSection() {
    const [isYes, setIsYes] = useState(false);
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [noCount, setNoCount] = useState(0);

    const handleYes = () => {
        setIsYes(true);

        // 1. Confetti Effect
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#e6c377', '#ffffff', '#f5e6ad']
        });

        // 2. Prepare Email Data
        const currentTime = new Date().toLocaleString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric',
            hour: '2-digit', minute: '2-digit',
        });

        const templateParams = {
            title: "The Director Said YES! 💍",
            name: "The Director",
            time: currentTime,
            message: "The proposal scene was a success. Production is moving to the next phase: Happily Ever After.",
        };

        // 3. Send Email (REPLACE THE KEYS BELOW WITH YOUR ACTUAL IDs)
        emailjs.send(
            'service_whhgiko',
            'template_op57pea',
            templateParams,
            'YGQEd2-9_f2ZHgDFl'
        )
            .then((result) => console.log('Email Sent!', result.text))
            .catch((error) => console.error('Email Failed:', error));
    };

    const moveNoButton = () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 100 - 50;
        setNoPosition({ x, y });
        setNoCount(noCount + 1);
    };

    return (
        <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-black">
            <img src={cinemaBg} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Cinema Background" />

            <div className="relative z-10 max-w-2xl">
                {!isYes ? (
                    <>
                        <h2 className="text-5xl md:text-7xl font-serif text-white mb-12 leading-tight">
                            Will you be my <span className="text-gradient-gold">forever co-star?</span>
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Button variant="romantic" size="cinematic" onClick={handleYes}>
                                Yes, Forever!
                            </Button>

                            {noCount < 5 && (
                                <div
                                    style={{ transform: `translate(${noPosition.x}px, ${noPosition.y}px)` }}
                                    className="transition-transform duration-200"
                                >
                                    <Button
                                        variant="ghost"
                                        onMouseEnter={moveNoButton}
                                        onClick={moveNoButton}
                                    >
                                        No
                                    </Button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="animate-fade-in">
                        <h2 className="text-6xl md:text-8xl font-serif text-gradient-gold mb-6">YES!</h2>
                        <p className="text-2xl italic text-white/90 font-serif">Our forever begins now. ❤️</p>
                        <p className="mt-8 text-primary uppercase tracking-[0.3em] text-xs">The End of Chapter One</p>
                    </div>
                )}
            </div>
        </section>
    );
}