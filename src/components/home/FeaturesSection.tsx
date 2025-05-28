import { Lightbulb, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    title: "Smart Comparisons",
    description:
      "Discover the best tools without digging through endless options.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "Data-Driven Insights",
    description:
      "Rankings based on popularity, recency, and community feedback.",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Time-Saving",
    description: "Make fast, informed decisions without research fatigue.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Devsly?</h2>
        <p className="text-gray-600 mb-10">
          We help developers find the right tools quickly and confidently.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-xl">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
