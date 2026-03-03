import { useState, useEffect } from 'react'
import { fetchNews, fetchSummary } from './services/newsService'
import type { NewsArticle } from './services/newsService'

function App() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [newsData, summaryData] = await Promise.all([
          fetchNews(),
          fetchSummary()
        ]);
        setNews(newsData);
        setSummary(summaryData);
      } catch (error) {
        console.error("Fehler beim Laden der Nachrichten:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-red-500 selection:text-white">
      {/* Breaking News Ticker */}
      <div className="bg-red-700 text-white py-1.5 overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-widest border-b border-red-900">
        <div className="inline-block animate-marquee px-4">
          +++ Eilmeldung: Neue diplomatische Gespräche in Genf angekündigt +++ Ölpreis erreicht Jahreshöchststand +++ Humanitäre Korridore im Süden geöffnet +++ Internationale Gemeinschaft fordert sofortige Waffenruhe +++
        </div>
        <div className="inline-block animate-marquee2 px-4">
          +++ Eilmeldung: Neue diplomatische Gespräche in Genf angekündigt +++ Ölpreis erreicht Jahreshöchststand +++ Humanitäre Korridore im Süden geöffnet +++ Internationale Gemeinschaft fordert sofortige Waffenruhe +++
        </div>
      </div>

      <header className="bg-black border-b border-red-900 sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
            <h1 className="text-2xl font-bold tracking-tighter uppercase">Irankrieg News-Ticker</h1>
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm font-medium uppercase tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition">Aktuell</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Hintergrund</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <section className="mb-12 bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-32 h-32 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-4 text-red-500 uppercase tracking-wider flex items-center">
                <span className="mr-2 text-2xl">⚡</span> Aktuelle Zusammenfassung
              </h2>
              <p className="text-lg leading-relaxed text-gray-300 max-w-3xl italic">
                "{summary}"
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-gray-700/50 rounded-full text-[10px] font-mono border border-gray-600">KI-GENERIERT</span>
                <span className="px-3 py-1 bg-gray-700/50 rounded-full text-[10px] font-mono border border-gray-600">STAND: 03. MÄRZ 2026</span>
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-gray-600 mr-4"></div>
                <h2 className="text-2xl font-bold uppercase tracking-tight">Hintergrund & Analysen</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-900 transition group cursor-pointer shadow-xl">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest px-2 py-0.5 border border-blue-900/30 rounded">ANALYSE</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">Die geostrategische Bedeutung der neuen Handelsrouten</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    Warum der aktuelle Konflikt nicht nur territoriale, sondern vor allem ökonomische Ursachen hat und welche Mächte im Hintergrund die Fäden ziehen.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <img src="https://ui-avatars.com/api/?name=Dr+Schmidt&background=random" className="w-8 h-8 rounded-full mr-3 border border-gray-600" alt="Avatar" />
                    <div>
                      <p className="font-bold text-gray-300">Dr. Markus Schmidt</p>
                      <p>Nahost-Experte, 02. März 2026</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-emerald-900 transition group cursor-pointer shadow-xl">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest px-2 py-0.5 border border-emerald-900/30 rounded">DOSSIER</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition">Chronik des Konflikts: Von der Eskalation zum Stillstand</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    Eine detaillierte Aufarbeitung der Ereignisse der letzten sechs Monate – grafisch aufbereitet für ein besseres Verständnis der Gesamtlage.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <img src="https://ui-avatars.com/api/?name=Sarah+Lenz&background=random" className="w-8 h-8 rounded-full mr-3 border border-gray-600" alt="Avatar" />
                    <div>
                      <p className="font-bold text-gray-300">Sarah Lenz</p>
                      <p>Redaktion Zeitgeschichte, 01. März 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-red-600 mr-4"></div>
                <h2 className="text-2xl font-bold uppercase tracking-tight">Neueste Meldungen</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map(article => (
                  <article key={article.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-red-900 transition-all group flex flex-col h-full hover:shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest px-2 py-0.5 border border-red-900/30 rounded">{article.source}</span>
                        <time className="text-xs text-gray-500 font-mono">{article.date}</time>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition leading-tight">{article.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {article.summary}
                      </p>
                    </div>
                    <div className="p-6 pt-0 mt-auto">
                      <a href={article.url} className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition flex items-center border-t border-gray-700/50 pt-4">
                        Quellen-Details ansehen <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <section className="bg-gray-800/50 border-y border-gray-700 py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Bleiben Sie informiert</h2>
              <p className="text-gray-400 text-lg mb-8">
                Abonnieren Sie unseren täglichen Lagebericht direkt in Ihr Postfach. Erhalten Sie kuratierte Analysen und Eilmeldungen als Erstes.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse" 
                  className="bg-gray-900 border border-gray-700 rounded-lg px-6 py-4 flex-grow focus:outline-none focus:border-red-600 transition"
                />
                <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition uppercase tracking-widest text-sm">
                  Abonnieren
                </button>
              </form>
              <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-widest">
                Abmeldung jederzeit möglich. Ihre Daten sind bei uns sicher.
              </p>
            </div>
            
            <div id="kontakt" className="bg-black/40 p-10 rounded-2xl border border-red-900/20">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Direkter Kontakt zur Redaktion
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-lg text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">E-Mail</p>
                    <p className="text-gray-200">redaktion@irankrieg-ticker.de</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-lg text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Pressebüro</p>
                    <p className="text-gray-200">Berlin & Genf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-red-900/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full opacity-50"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full opacity-50"></div>
          </div>
          <p className="text-gray-500 text-sm mb-4 tracking-[0.2em] uppercase font-semibold">Irankrieg News Aggregator &copy; 2026</p>
          <p className="text-gray-600 text-xs max-w-xl mx-auto leading-relaxed">
            Dieses Projekt dient zur Veranschaulichung der KI-gestützten Nachrichtenaggregation. Alle gezeigten Ereignisse sind Teil einer simulierten Umgebung zur Demonstration von Echtzeit-Zusammenfassungen.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
