export const metadata = {
  title: 'Privacy — Gnistre',
  description: 'How Gnistre handles your data and protects your privacy.',
};

export const dynamic = 'force-static';

const privacyItems = [
  ['Stored on this device', 'Your sessions, goals, preferences and saved distances are stored locally on your iPhone.'],
  ['No account required', 'You do not need to provide your name, email address or date of birth to use the core app.'],
  ['Optional location measurement', 'If you enable Distance tracking, GNISTRE uses your location only during an active, user-started session.'],
  ['No route history', 'Raw GPS points are not stored. Only the final, aggregated distance is kept on your phone when you save the session.'],
  ['No social sharing', 'Your progress is private. There are no public profiles, feeds, leaderboards or social media connections.'],
  ['Age-specific GPS access', 'GPS measurement is available to users aged 13 and over. GNISTRE works fully without GPS as well.'],
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <nav className="nav-shell privacy-nav">
        <a className="brand" href="../" aria-label="Gnistre home"><img src="../gnistre-icon.png" alt="" /><span>GNISTRE</span></a>
        <a className="nav-cta" href="../">Back to Gnistre <span>↗</span></a>
      </nav>
      <article className="privacy-card">
        <div className="section-kicker">Privacy by design</div>
        <h1>Your data stays yours.</h1>
        <p className="privacy-lede">GNISTRE is designed to work without an account, social profile or data collection. Optional distance measurement stays on your phone.</p>
        <div className="privacy-list">
          {privacyItems.map(([title, detail]) => <section key={title}><h2>{title}</h2><p>{detail}</p></section>)}
        </div>
        <div className="privacy-control"><strong>Delete your data</strong><p>You can delete all activity data, goals and preferences from the Privacy screen inside the app.</p></div>
        <p className="privacy-updated">Gnistre Privacy Policy · Last updated August 2026</p>
      </article>
      <footer className="footer privacy-footer"><a className="brand" href="/"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a><p>Private progress for real life.</p><div className="footer-links"><a className="footer-link" href="/manual">User Manual</a><span>© 2026 Gnistre</span></div></footer>
    </main>
  );
}
