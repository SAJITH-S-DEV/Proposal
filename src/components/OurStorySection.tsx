import { Heart, Star, Camera } from "lucide-react";

const scenes = [
    { title: "The Meet-Cute", desc: "We went in to watch Oppenheimer, never knowing destiny had already rolled the opening credits of our love story.", icon: <Camera /> },
    { title: "The Rising Action", desc: "Fate brought us back together with a swipe right , first as friends, then slowly, inevitably, as lovers.", icon: <Star /> },
    { title: "The Connection", desc: "With you, love didn’t feel like a leap, it felt like coming home.", icon: <Heart /> },
];

export default function OurStorySection() {
    return (
        <section id="our-story" className="py-32 bg-black px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center text-4xl md:text-5xl font-serif text-primary mb-20">The Screenplay</h2>
                <div className="space-y-12">
                    {scenes.map((scene, i) => (
                        <div key={i} className="flex gap-8 items-start group">
                            <div className="flex flex-col items-center">
                                <div className="p-4 rounded-full border border-primary text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                                    {scene.icon}
                                </div>
                                {i !== scenes.length - 1 && <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mt-4" />}
                            </div>
                            <div className="pt-2">
                                <h3 className="text-2xl font-serif text-white mb-2">{scene.title}</h3>
                                <p className="text-white/60 leading-relaxed">{scene.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}