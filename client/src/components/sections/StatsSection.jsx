import { Package, Users, Building2, Truck } from "lucide-react";

const stats = [
  {
    icon: Package,
    number: "12,500+",
    label: "Meals Saved",
  },
  {
    icon: Building2,
    number: "150+",
    label: "NGOs",
  },
  {
    icon: Users,
    number: "3,200+",
    label: "Users",
  },
  {
    icon: Truck,
    number: "650+",
    label: "Deliveries",
  },
];

function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
          >
            <item.icon
              size={42}
              className="mx-auto text-green-600"
            />

            <h2 className="text-4xl font-bold mt-5">
              {item.number}
            </h2>

            <p className="text-gray-500 mt-2">
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default StatsSection;