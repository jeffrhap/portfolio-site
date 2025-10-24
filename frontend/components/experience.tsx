export default function Experience() {
  const stats = [
    {
      number: "7+",
      label: "Years of Experience",
      color: "text-green-400"
    },
    {
      number: "100+",
      label: "Websites",
      color: "text-yellow-400"
    },
    {
      number: "10+",
      label: "Experiences",
      color: "text-pink-400"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          With the experience to
          <br />
          back it up.
        </h2>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-6xl md:text-7xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg md:text-xl font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}