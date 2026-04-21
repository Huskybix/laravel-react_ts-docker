import { useState } from 'react';
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

    const prev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrent((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1));
    };

    const next = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrent((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1));
    };

    const goTo = (e: React.MouseEvent, i: number) => {
        e.stopPropagation();
        setCurrent(i);
    };

    return (
        <section id="about-section" className="flip-section pt-16">
            <div className={`flip-card w-[90vw] md:w-[80vw] lg:w-[70vw] ${flipped ? 'is-flipped' : ''}`}>
                <div className="flip-card-inner">
                    {/* Front */}
                    <div className="flip-card-front flex flex-col xl:flex-row gap-16 p-8 lg:p-12">
                        <img src={selfie} alt="Niall Storie" className="flip-card-image order-2 xl:order-1 w-full xl:w-[45%] md:mx-auto" />
                        <div className="flip-card-content order-1 xl:order-2">
                            <h2 className="text-primaryOrange text-shadow-2xs text-shadow-gray-500 !text-4xl">
                                Niall Storie
                            </h2>
                            <p>Hey there! Thanks for stopping by.</p>
                            <p>
                                I'm a career web developer who began their career working with the box
                                model back in the heady days of Dreamweaver and Frontpage, floating divs
                                here there and everywhere to create websites and online stores for the
                                likes of Garrandale, Plasplugs and Groundwork Greater Nottingham.
                            </p>
                            <p>
                                That was many moons ago though, we're well past all that now in our era
                                of Javascript frameworks, flexboxes, grids, containers and cloud hosts.
                                And I've been there for the whole journey as this landscape has evolved,
                                working with CakePHP back when MVC took centre stage, Node as Javascript
                                took over the world, and so many versions of Visual Studio it's often
                                hard to imagine I once worked entirely in Notepad2!
                            </p>
                            <p>
                                It feels like there's always some new technology to learn or some new
                                library to play with. As both a career and a hobby it's a neverending road
                                of growth which always has something new and interesting around every
                                single corner, and I love it.
                            </p>
                            <p>
                                I've been obsessed with coding since I was a kid tinkering with my
                                Commodore 64, and that thrill of having the power to make whatever I want
                                with nothing more than a little code and know-how is still with me all
                                this time later.
                            </p>
                            <p>I adore what I do, and I can't wait to see where it takes me next.</p>
                            <button className="flip-btn bg-primaryOrange hover:bg-primaryOrangeDarker text-gray-800 font-semibold" onClick={() => setFlipped((f) => !f)}>Who am I on the flip side? ↩</button>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="flip-card-back flex flex-col xl:flex-row gap-16 p-8 !pb-4 lg:!p-12">
                        <div className="flip-card-content">
                            <h2 className="!text-4xl text-shadow-2xs text-shadow-gray-500 text-primaryOrange">
                                Hobbies &amp; Interests
                            </h2>
                            <p>So what do I do when I'm not developing websites?</p>
                            <p>
                                Walking in nature, sitting down with a good book or firing up a game to
                                pass the time are some of my favourite things in the world, though that's
                                by no means a comprehensive list. Like in my work I'm a bit of a jack of
                                all trades, I also sing, bake, play guitar and more besides!
                            </p>
                            <p>
                                I'm a bit of an amateur photographer, I love spending time at zoos with
                                my little DSLR getting some fun snaps. That meerkat over there is a very
                                candid shot I captured at Marwell Zoo back in 2025.
                            </p>
                            <p>
                                I'm an aspiring game dev too, currently working on a solo survival horror
                                project inspired by games like Signalis and Parasite Eve. If you click
                                through my gallery on this card you can see a very early development
                                shot from my modeling process!
                            </p>
                            <button className="flip-btn bg-primaryOrange hover:bg-primaryOrangeDarker text-gray-800 font-semibold" onClick={() => setFlipped((f) => !f)}>Back to the serious stuff ↩</button>
                        </div>

                        <div className="flip-card-gallery w-full xl:w-[45%]" onClick={(e) => e.stopPropagation()}>
                            <div className="gallery-image-wrap">
                                <img
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
                    </div>

                </div>
            </div>
        </section>
    );
}
