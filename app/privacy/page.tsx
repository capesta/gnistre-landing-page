export const metadata = {
  title: 'Privacy — GNISTRE',
  description: 'How GNISTRE handles your data and protects your privacy.',
};

export const dynamic = 'force-static';

const privacySections = [
  ['What GNISTRE stores', <><p>GNISTRE is designed to work without an account or social profile. You do not need to provide your name, email address or date of birth to use the core app.</p><p>Activity entries, goals, personal rewards, settings and free-text notes are stored locally on your device so the app can show your progress. GNISTRE does not sell this information or share it with advertisers.</p></>],
  ['Optional distance tracking', <><p>If you choose to enable distance tracking for a supported activity, GNISTRE uses your device&apos;s location during a user-started workout to estimate distance.</p><p>Location is processed on your device. GNISTRE does not create or store a route history and does not share your location with other people or third parties. When you save the workout, GNISTRE stores only the final, aggregated distance for that activity, such as 8.6 km or 5.3 mi. Temporary location data used during the calculation is discarded when the session ends.</p><p>Distance tracking is optional. You can use the stopwatch and log activities manually without enabling location access.</p></>],
  ['Children and young people', <><p>GPS distance tracking is available to users aged 13 and older. Users under 13 can use GNISTRE without GPS. The age group is self-declared in onboarding or Settings; GNISTRE does not ask for an exact date of birth. This is a product safeguard, not age verification.</p><p>Parents and guardians should review device permissions and use of the app according to the child&apos;s age and local requirements.</p></>],
  ['Permissions and sharing', <><p>GNISTRE asks for location access only when you choose distance tracking for a supported workout. You can change or revoke this permission at any time in your device settings.</p><p>GNISTRE has no public profiles, leaderboards, social media connections, advertising, analytics services or server account.</p></>],
  ['Deleting your data', <><p>You can delete individual activity entries from Activity Log. The Reset option in Settings removes the app&apos;s locally stored activity data, goals, rewards, favourites and preferences and starts the app again. Deleting the app also removes its locally stored data, subject to the behaviour of your device backup system.</p></>],
  ['Contact', <><p>If you have questions about this privacy policy or how GNISTRE handles your data, contact <a href="mailto:hello@gnistre.app">hello@gnistre.app</a>.</p></>],
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <nav className="nav-shell privacy-nav">
        <a className="brand" href="/" aria-label="GNISTRE home"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a>
        <a className="nav-cta" href="/">Back to GNISTRE <span>↗</span></a>
      </nav>
      <article className="privacy-card">
        <div className="section-kicker">Privacy by design</div>
        <h1>Your data stays yours.</h1>
        <p className="privacy-lede">GNISTRE is designed to work without an account, social profile or data collection. Optional distance measurement stays on your phone.</p>
        <div className="privacy-list">
          {privacySections.map(([title, detail]) => <section key={title as string}><h2>{title as string}</h2>{detail}</section>)}
        </div>
        <p className="privacy-updated">GNISTRE Privacy Policy · Last updated August 27, 2026</p>
      </article>
      <footer className="footer privacy-footer"><a className="brand" href="/"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a><p>Private progress for real life.</p><div className="footer-links"><a className="footer-link" href="/manual">User Manual</a><span>© 2026 GNISTRE</span></div></footer>
    </main>
  );
}
