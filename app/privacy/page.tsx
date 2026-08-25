export const metadata = {
  title: 'Privacy — Gnistre',
  description: 'How Gnistre handles your data and protects your privacy.',
};

const privacyItems = [
  ['Stored on this device', 'Your sessions, goals and preferences are stored locally on your iPhone in the current prototype.'],
  ['No account required', 'You do not need to provide your name, email address or date of birth to use the core app.'],
  ['No location tracking', 'Gnistre does not need your location, contacts, camera or microphone. Distance can be entered manually when you choose.'],
  ['No social sharing', 'Your progress is private. There are no public profiles, leaderboards or social media connections.'],
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <nav className="nav-shell privacy-nav">
        <a className="brand" href="/" aria-label="Gnistre home"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a>
        <a className="nav-cta" href="/">Back to Gnistre <span>↗</span></a>
      </nav>
      <article className="privacy-card">
        <div className="section-kicker">Privacy by design</div>
        <h1>Your data stays yours.</h1>
        <p className="privacy-lede">Gnistre is designed to work without an account, location tracking or a social profile.</p>
        <div className="privacy-list">
          {privacyItems.map(([title, detail]) => <section key={title}><h2>{title}</h2><p>{detail}</p></section>)}
        </div>
        <div className="privacy-control"><strong>Delete your data</strong><p>You can delete all activity data, goals and preferences from the Privacy screen inside the app.</p></div>
        <p className="privacy-updated">Gnistre Privacy Policy · Last updated August 2026</p>
      </article>
      <footer className="footer privacy-footer"><a className="brand" href="/"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a><p>Private progress for real life.</p><span>© 2026 Gnistre</span></footer>
    </main>
  );
}
