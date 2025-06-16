import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { eventImages } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const EventHighlights = () => {
  const sectionRef = useRef(null);
  const event1Ref = useRef(null);
  const event2Ref = useRef(null);
  const event3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [event1Ref.current, event2Ref.current, event3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const events = [
    {
      ref: event1Ref,
      image: eventImages.event1,
      title: "WOMEN BIKE RIDING",
      description:
        "An IEEE-powered event emphasizing the importance of bike riding, with real-time training for girls.",
    },
    {
      ref: event2Ref,
      image: eventImages.event2,
      title: "PULSE'25",
      description:
        "Coding, robotics, and design workshops brought tech enthusiasts together under PULSE'25.",
    },
    {
      ref: event3Ref,
      image: eventImages.event3,
      title: "GAMING COMPETITIONS",
      description:
        "E-Games and physical games fostered a competitive spirit among students.",
    },
  ];

  return (
    <section
      id="events"
      ref={sectionRef}
      className="py-20 px-6 md:px-16 lg:px-24 text-white"
    >
      <TitleHeader
        title="Event Highlights"
        sub="🤝 Some Glimpse from the events"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {events.map((event) => (
          <div
            key={event.title}
            ref={event.ref}
            className="bg-white/5 rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-white/80 text-sm line-clamp-3">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventHighlights;
