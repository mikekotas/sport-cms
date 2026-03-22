export default function Dashboard({ events }) {
  const stats = {
    total: events.length,
    upcoming: events.filter(e => e.status === 'upcoming').length,
    completed: events.filter(e => e.status === 'completed').length,
  }

  const statCards = [
    { label: 'Total Events', value: stats.total, color: 'pink', icon: '🎯' },
    { label: 'Upcoming', value: stats.upcoming, color: 'blue', icon: '🔜' },
    { label: 'Completed', value: stats.completed, color: 'green', icon: '✅' },
  ]

  return (
    <div>
      <h2 className="text-4xl font-bold text-neon-blue neon-text mb-8 text-center animate-pulse-neon">
        📊 DASHBOARD OVERVIEW
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className={`border-2 border-neon-${stat.color} p-8 bg-black/50 hover:shadow-neon-${stat.color} transition-all`}
          >
            <div className="text-6xl text-center mb-4">{stat.icon}</div>
            <div className={`text-5xl font-bold text-center text-neon-${stat.color} neon-text`}>
              {stat.value}
            </div>
            <div className={`text-center mt-2 text-neon-${stat.color}/70 uppercase tracking-wider`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Events */}
      <div className="border-2 border-neon-purple p-6 bg-black/50">
        <h3 className="text-2xl font-bold text-neon-purple neon-text mb-4">⚡ RECENT EVENTS</h3>
        <div className="space-y-3">
          {events.slice(0, 5).map((event) => (
            <div
              key={event.id}
              className="border border-neon-blue/30 p-4 hover:border-neon-blue hover:shadow-neon-blue transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-neon-green text-xl">{event.sport}</span>
                  <span className="text-white ml-3 font-bold">{event.title}</span>
                </div>
                <span className="text-neon-pink text-sm">{event.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}