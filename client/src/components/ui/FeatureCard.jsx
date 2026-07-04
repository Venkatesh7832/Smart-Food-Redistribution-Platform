function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">

        <Icon className="text-green-600" size={30} />

      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;