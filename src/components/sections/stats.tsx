import { homeContent } from "@/content/home";

export function StatsGrid() {
  return (
    <section className="py-12 bg-card border-y border-border" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {homeContent.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
