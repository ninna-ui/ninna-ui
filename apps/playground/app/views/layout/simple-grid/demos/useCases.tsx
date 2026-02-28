import { SimpleGrid, VStack } from "@ninna-ui/layout";

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* Product Grid */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Product Grid</p>
        <SimpleGrid minChildWidth="200px" gap="4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-base-100 border border-base-300 rounded-lg overflow-hidden">
              <div className="h-32 bg-linear-to-br from-teal-400 to-cyan-500" />
              <VStack gap="2" className="p-4">
                <h4 className="font-semibold text-base-content">Product {i + 1}</h4>
                <p className="text-sm text-base-content/70">$99.00</p>
              </VStack>
            </div>
          ))}
        </SimpleGrid>
      </div>

      {/* Feature Grid */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Feature Grid</p>
        <SimpleGrid columns={3} gap="4">
          {[
            { icon: "🚀", title: "Fast", desc: "Lightning quick" },
            { icon: "🔒", title: "Secure", desc: "Enterprise grade" },
            { icon: "📱", title: "Responsive", desc: "Works everywhere" },
          ].map((feature) => (
            <div key={feature.title} className="p-4 bg-success/10 rounded-lg text-center">
              <span className="text-3xl">{feature.icon}</span>
              <h4 className="font-semibold text-base-content mt-2">{feature.title}</h4>
              <p className="text-sm text-base-content/70">{feature.desc}</p>
            </div>
          ))}
        </SimpleGrid>
      </div>

      {/* Stats Grid */}
      <div>
        <p className="text-sm text-base-content/70 mb-2">Stats Grid</p>
        <SimpleGrid columns={4} gap="4">
          {[
            { value: "10K+", label: "Users" },
            { value: "99.9%", label: "Uptime" },
            { value: "50+", label: "Countries" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-base-100 border border-base-300 rounded-lg text-center">
              <p className="text-2xl font-bold text-success">{stat.value}</p>
              <p className="text-sm text-base-content/70">{stat.label}</p>
            </div>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}
