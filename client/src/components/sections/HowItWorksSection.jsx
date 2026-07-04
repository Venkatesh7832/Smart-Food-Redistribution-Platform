const steps = [
  "Register",
  "Donate Food",
  "NGO Claims",
  "Track Delivery",
];

function HowItWorksSection() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">

          How It Works

        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (

            <div
              key={index}
              className="text-center"
            >

              <div className="w-20 h-20 rounded-full bg-green-600 text-white text-3xl flex items-center justify-center mx-auto">

                {index + 1}

              </div>

              <h3 className="font-bold text-2xl mt-6">

                {step}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorksSection;