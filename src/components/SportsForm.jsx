import { useState } from 'react'

export default function SportsForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    sport: '',
    title: '',
    date: '',
    venue: '',
  })

  const sports = [
    '🏀 Basketball',
    '⚽ Football',
    '🏈 NFL',
    '⚾ Baseball',
    '🎾 Tennis',
    '🏐 Volleyball',
    '🏒 Hockey',
    '🏉 Rugby',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ sport: '', title: '', date: '', venue: '' })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-neon-green neon-text mb-8 text-center animate-pulse-neon">
        ➕ ADD NEW EVENT
      </h2>
      
      <form onSubmit={handleSubmit} className="border-2 border-neon-green p-8 bg-black/50 space-y-6">
        <div>
          <label className="block text-neon-blue neon-text mb-2 uppercase tracking-wider">Sport</label>
          <select
            required
            value={formData.sport}
            onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
            className="w-full bg-black border-2 border-neon-blue/50 text-white p-3 focus:border-neon-blue focus:shadow-neon-blue outline-none"
          >
            <option value="">Select a sport...</option>
            {sports.map((sport) => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-neon-pink neon-text mb-2 uppercase tracking-wider">Event Title</label>
          <input
            required
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter event name..."
            className="w-full bg-black border-2 border-neon-pink/50 text-white p-3 focus:border-neon-pink focus:shadow-neon-pink outline-none"
          />
        </div>

        <div>
          <label className="block text-neon-purple neon-text mb-2 uppercase tracking-wider">Date</label>
          <input
            required
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-black border-2 border-neon-purple/50 text-white p-3 focus:border-neon-purple focus:shadow-neon-purple outline-none"
          />
        </div>

        <div>
          <label className="block text-neon-green neon-text mb-2 uppercase tracking-wider">Venue</label>
          <input
            required
            type="text"
            value={formData.venue}
            onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
            placeholder="Enter venue location..."
            className="w-full bg-black border-2 border-neon-green/50 text-white p-3 focus:border-neon-green focus:shadow-neon-green outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black border-2 border-neon-pink text-neon-pink p-4 font-bold uppercase tracking-wider hover:shadow-neon-pink hover:bg-neon-pink hover:text-black transition-all animate-pulse-neon"
        >
          ⚡ CREATE EVENT ⚡
        </button>
      </form>
    </div>
  )
}