import {
  HeartHandshake,
  MapPinned,
  Brain,
  ChartColumn,
} from "lucide-react";

import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    icon: HeartHandshake,
    title: "Easy Donations",
    description:
      "Donate surplus food within minutes through an intuitive workflow.",
  },
  {
    icon: MapPinned,
    title: "Live GPS Tracking",
    description:
      "Track every donation in real time from pickup to delivery.",
  },
  {
    icon: Brain,
    title: "AI Food Matching",
    description:
      "AI recommends the best NGO based on location, quantity and urgency.",
  },
  {
    icon: ChartColumn,
    title: "Analytics",
    description:
      "View donation insights, meals served and impact statistics.",
  },
];

function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">

          Platform Features

        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">

          Everything needed for efficient food redistribution.

        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturesSection;