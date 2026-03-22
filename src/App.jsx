import { useState } from 'react'
import Dashboard from './components/Dashboard'
import SportsForm from './components/SportsForm'
import SportsList from './components/SportsList'

function App() {
  const [activeView, setActiveView] = useState('dashboard')
  const [events, setEvents] = useState([
    { id: 1, sport: '🏀 Basketball', title: 'Lakers vs Warriors', date: '2024-03-25', venue: 'Staples Center', status: 'upcoming' },
    { id: 2, sport: '⚽ Football', title: 'Real Madrid vs Barcelona', date: '2024-03-28', venue: 'Santiago Bernabéu', status: 'upcoming' },
    { id: 3, sport: '🏈 NFL', title: 'Patriots vs Chiefs', date: '2024-03-20', venue: 'Gillette Stadium', status: 'completed' },
  ])

  const addEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: Date.now(), status: 'upcoming' }])
    setActiveView('list')
  }

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id))
  }

  return (
    <div className="min-h-screen bg-black grid-bg">
      {/* Header */}
      <header className="border-b-2 border-neon-pink p-6">
        <h1 className="text-6xl font-bold text-center text-neon-pink neon-text animate-flicker">
          ⚡ NEON SPORTS CMS ⚡
        </h1>
        <p className="text-center text-neon-blue text-sm mt-2 neon-text">RETRO • RADICAL • REVOLUTIONARY</p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-4 p-6 border-b border-neon-blue/30">
        {['dashboard', 'add', 'list'].map((view) => (
          <button
            key={view}
            onClick={() => setActiveView(view)}
            className={`px-8 py-3 border-2 font-bold uppercase tracking-wider transition-all ${
              activeView === view
                ? 'border-neon-pink text-neon-pink shadow-neon-pink animate-pulse-neon'
                : 'border-neon-blue/50 text-neon-blue/70 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-blue'
            }`}
          >
            {view === 'dashboard' ? '📊 Dashboard' : view === 'add' ? '➕ Add Event' : '📋 Events List'}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        {activeView === 'dashboard' && <Dashboard events={events} />}
        {activeView === 'add' && <SportsForm onSubmit={addEvent} />}
        {activeView === 'list' && <SportsList events={events} onDelete={deleteEvent} />}
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-neon-purple p-4 mt-12">
        <p className="text-center text-neon-purple neon-text text-sm">
          © 2024 NEON SPORTS CMS • POWERED BY RETRO VIBES 🌆
        </p>
      </footer>
    </div>
  )
}

export default App