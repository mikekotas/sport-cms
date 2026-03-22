export default function SportsList({ events, onDelete }) {
  return (
    <div>
      <h2 className="text-4xl font-bold text-neon-purple neon-text mb-8 text-center animate-pulse-neon">
        📋 ALL EVENTS
      </h2>
      
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="border-2 border-neon-blue p-6 bg-black/50 hover:shadow-neon-blue transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl">{event.sport}</span>
                  <h3 className="text-2xl font-bold text-neon-pink neon-text">{event.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div>
                    <span className="text-neon-blue neon-text">📅 DATE:</span>
                    <span className="ml-2 text-white">{event.date}</span>
                  </div>
                  <div>
                    <span className="text-neon-green neon-text">📍 VENUE:</span>
                    <span className="ml-2 text-white">{event.venue}</span>
                  </div>
                  <div>
                    <span className="text-neon-purple neon-text">⚡ STATUS:</span>
                    <span className={`ml-2 uppercase font-bold ${
                      event.status === 'upcoming' ? 'text-neon-green' : 'text-neon-pink'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => onDelete(event.id)}
                className="ml-4 px-6 py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-bold uppercase transition-all"
              >
                🗑️ DELETE
              </button>
            </div>
          </div>
        ))}
        
        {events.length === 0 && (
          <div className="text-center text-neon-blue/50 text-2xl py-12 border-2 border-neon-blue/20">
            No events found. Add your first event! ⚡
          </div>
        )}
      </div>
    </div>
  )
}