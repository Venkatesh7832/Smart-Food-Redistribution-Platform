import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-emerald-100">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">

            <HeartHandshake size={18} />

            AI Powered Food Redistribution

          </div>

          <h1 className="text-6xl md:text-7xl font-black mt-8 leading-tight">

            Feed

            <span className="text-green-600">
              {" "}Communities
            </span>

            <br />

            Not Landfills.

          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-gray-600">

            Connecting restaurants, hotels, NGOs and volunteers through
            smart food matching, live tracking and analytics.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Button size="lg">
              Donate Food
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Explore Platform

              <ArrowRight
                className="inline ml-2"
                size={18}
              />

            </Button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default HeroSection;