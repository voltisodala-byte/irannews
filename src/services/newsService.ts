export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  url: string;
}

const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Neue diplomatische Bemühungen zur Deeskalation im Iran-Konflikt',
    summary: 'Internationale Vermittler versuchen, die Spannungen in der Region durch neue Verhandlungen zu verringern. Ein Treffen in Genf wurde angekündigt.',
    date: '2026-03-03',
    source: 'Nachrichten-Ticker',
    url: 'https://www.tagesschau.de'
  },
  {
    id: '2',
    title: 'Humanitäre Hilfe erreicht Krisengebiete',
    summary: 'Die ersten Hilfskonvois mit Lebensmitteln und Medikamenten sind in den betroffenen Regionen eingetroffen, während die Waffenruhe weitgehend hält.',
    date: '2026-03-02',
    source: 'Weltbericht',
    url: 'https://www.dw.com'
  },
  {
    id: '3',
    title: 'Analysten warnen vor wirtschaftlichen Folgen des Konflikts',
    summary: 'Der Ölpreis steigt weiter an, während die globalen Märkte nervös auf die Entwicklungen im Nahen Osten reagieren. Experten fordern Stabilität.',
    date: '2026-03-02',
    source: 'Finanz-Kurier',
    url: 'https://www.reuters.com'
  }
];

export const fetchNews = async (): Promise<NewsArticle[]> => {
  // Simuliere API-Aufruf
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNews);
    }, 500);
  });
};

export const fetchSummary = async (): Promise<string> => {
  // Simuliere KI-Zusammenfassung
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "Die Lage im Irankrieg bleibt angespannt. Während humanitäre Korridore erste Entlastung bringen, sind diplomatische Lösungen weiterhin in weiter Ferne. Die Weltgemeinschaft blickt auf die bevorstehenden Gespräche in Genf, die als letzte Chance zur Vermeidung einer weiteren Eskalation gelten."
      );
    }, 800);
  });
};
