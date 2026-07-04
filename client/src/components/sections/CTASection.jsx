import Button from "../ui/Button";

function CTASection() {
  return (
    <section className="bg-green-600 text-white py-24">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">

          Ready to Reduce Food Waste?

        </h2>

        <p className="mt-6 text-xl">

          Join thousands of donors and NGOs making a real impact.

        </p>

        <div className="mt-10 flex justify-center gap-6">

          <Button
            variant="secondary"
          >
            Get Started
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-600"
          >
            Donate Food
          </Button>

        </div>

      </div>

    </section>
  );
}

export default CTASection;