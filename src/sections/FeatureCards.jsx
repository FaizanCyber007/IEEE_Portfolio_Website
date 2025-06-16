import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeatureCards = () => (
  <section className="w-full padding-x-lg py-20">
    <div className="flex flex-col items-center">
      {/* Centered Title Header */}
      <TitleHeader
        title="Benefits of Joining Us"
        sub="🤝 Here is what you get after joining us"
      />

      {/* Cards Grid */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4 hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img
                src={imgPath}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;
