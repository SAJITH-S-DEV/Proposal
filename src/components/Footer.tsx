export default function Footer() {
    return (
        <footer className="py-20 bg-black text-center border-t border-white/5">
            <div className="opacity-40 hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs tracking-[0.4em] uppercase mb-2">Original Production</p>
                <p className="font-serif italic text-primary">Directed by Love • Starring Us</p>
                <p className="text-[10px] mt-8 text-white/30 tracking-widest">
                    © {new Date().getFullYear()} ALL RIGHTS RESERVED TO OUR STORY
                </p>
            </div>
        </footer>
    );
}