import { useCallback, useRef, useState } from 'react';
import PrimaryButton from './PrimaryButton'
import '@css/flipCard.css';
import selfie from '@/Assets/Images/me.jpg';
import meer from '@/Assets/Images/meer.webp';
import dev from '@/Assets/Images/dev.webp';
import waffle from '@/Assets/Images/waff.webp';

const GALLERY_IMAGES = [
    { src: meer, alt: 'Meerkat at Marwell Zoo', focus: 'center center' },
    { src: dev, alt: 'Meerkat at Marwell Zoo', focus: 'center center' },
    { src: waffle, alt: 'Meerkat at Marwell Zoo', focus: 'center center' },
];

export default function FlipCard() {
    const [flipped, setFlipped] = useState(false);
    const [current, setCurrent] = useState(0);

    const isAnimating = useRef(false);

    const prev = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (isAnimating.current) return;
        isAnimating.current = true;
        setCurrent((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1));
        setTimeout(() => { isAnimating.current = false; }, 300); // match your transition
    }, []);

    const next = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (isAnimating.current) return;
        isAnimating.current = true;
        setCurrent((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1));
        setTimeout(() => { isAnimating.current = false; }, 300);
    }, []);

    const goTo = useCallback((e: React.MouseEvent, i: number) => {
        e.stopPropagation();
        setCurrent(i);
    }, []);

    return (
        <section id="about-section" className="flip-section pt-16">
            <div className={`flip-card w-[90vw] md:w-[80vw] lg:w-[70vw] ${flipped ? 'is-flipped' : ''}`}>
                <div className="flip-card-inner h-auto">
                    {/* Front */}
                    <div className="flip-card-front overflow-hidden !py-8 px-8 lg:px-12 flex flex-col gap-4">
                        <div className="flip-card-content flex flex-col xl:block">
                            <img src={selfie} alt="Niall Storie" className="flip-card-image order-last w-full xl:float-left xl:w-1/2 xl:mr-8 mb-0" />
                            <h2 className="text-primaryOrange text-shadow-2xs text-shadow-gray-500 !text-4xl mb-4">Hey there!<br />Thanks for stopping by.</h2>
                            <p className="mb-4">
                                I'm a career web developer who got their start doing agency work back in 2012, where I worked alongside companies such as Garrandale, Plasplugs and Groundwork Greater Nottingham to aid in defining their brand online.
                            </p>
                            <p className="mb-4">
                                That was many moons ago though and I've been there for the whole journey as this landscape has evolved,
                                working with CakePHP back when MVC took centre stage, Node as Javascript
                                took over the world, and so many versions of Visual Studio it's often
                                hard to imagine I once worked entirely in Notepad2!
                            </p>
                            <p className="mb-4">
                                It feels like there's always some new technology to learn or some new
                                library to play with. As both a career and a hobby development has set me on a neverending road
                                of growth which always has something new and interesting around every
                                single corner, and I love it.
                            </p>
                            <p className="mb-4">
                                I've been obsessed with coding since I was a kid tinkering with my
                                Commodore 64, and that thrill of having the power to make whatever I want
                                with nothing more than a little code and know-how is still with me all
                                this time later.
                            </p>
                            <p>I adore what I do, and I can't wait to see where it takes me next. Perhaps it'll be on a project with you!</p>
                        </div>
                        <button className="ml-auto mt-auto flip-btn bg-primaryOrange hover:bg-primaryOrangeDarker text-gray-800 font-semibold" onClick={() => setFlipped((f) => !f)}>Who am I on the flip side? &#8617;</button>
                    </div>

                    {/* Back */}
                    <div className="flip-card-back overflow-hidden !py-8 px-8 lg:px-12 flex flex-col gap-4">
                        <div className="flip-card-content flex flex-col xl:block">
                            <div className="flip-card-gallery order-last w-full mt-auto xl:float-right xl:w-1/2 xl:ml-8 xl:mb-4" onClick={(e) => e.stopPropagation()}>
                                <div className="gallery-image-wrap">
                                    <img
                                        key={current}
                                        src={GALLERY_IMAGES[current].src}
                                        alt={GALLERY_IMAGES[current].alt}
                                        className="gallery-image"
                                        style={{ objectPosition: GALLERY_IMAGES[current].focus ?? 'center center' }}
                                    />
                                </div>
                                <div className="gallery-controls">
                                    <button className="gallery-arrow" onClick={prev} aria-label="Previous image">‹</button>
                                    <div className="gallery-dots">
                                        {GALLERY_IMAGES.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`gallery-dot ${i === current ? 'is-active' : ''}`}
                                                onClick={(e) => goTo(e, i)}
                                                aria-label={`Go to image ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <button className="gallery-arrow" onClick={next} aria-label="Next image">›</button>
                                </div>
                            </div>
                            <h2 className="!text-5xl text-shadow-2xs text-shadow-gray-500 text-primaryOrange mb-4">
                                Hobbies &amp; Interests
                            </h2>
                            <p className="mb-4">So what do I do when I'm not developing websites?</p>
                            <p className="mb-4">
                                Walking in nature, sitting down with a good book or firing up a game to
                                pass the time are some of my favourite things in the world, though that's
                                by no means a comprehensive list. Like in my work I'm a bit of a jack of
                                all trades, I also sing, bake, play guitar and more besides!
                            </p>
                            <p className="mb-4">
                                I'm a bit of an amateur photographer, I love spending time at zoos with
                                my little DSLR getting some fun snaps. That meerkat over there is a very
                                candid shot I captured at Marwell Zoo back in 2025.
                            </p>
                            <p className="mb-4">
                                I'm an aspiring game dev too, currently working on a solo survival horror
                                project inspired by games like Signalis and Parasite Eve. If you click
                                through my gallery on this card you can see a very early development
                                shot from my modeling process!
                            </p>
                        </div>
                        <button className="mt-auto ml-auto flip-btn bg-primaryOrange hover:bg-primaryOrangeDarker text-gray-800 font-semibold" onClick={() => setFlipped((f) => !f)}>Back to the serious stuff &#8617;</button>
                    </div>

                </div>
            </div>
        </section>
    );
}
