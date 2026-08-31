export const metadata = {
  title: 'User Manual — Gnistre',
  description: 'How to get started and make the most of GNISTRE.',
};

export const dynamic = 'force-static';

export default function ManualPage() {
  return (
    <main className="manual-page">
      <nav className="nav-shell privacy-nav">
        <a className="brand" href="/" aria-label="Gnistre home"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a>
        <a className="nav-cta" href="/">Back to Gnistre <span>↗</span></a>
      </nav>
      <article className="manual-card">
        <div className="section-kicker">User guide</div>
        <h1>Find your way around <em>GNISTRE.</em></h1>
        <p className="privacy-lede">A quick guide to recording activities, using the stopwatch and making progress your own.</p>
        <div className="manual-list">
          <section><h2>Getting started</h2><p>When you open GNISTRE for the first time:</p><ol><li>Choose your age group.</li><li>Choose up to five favorite activities.</li><li>Tap <strong>Done</strong>.</li></ol><p>Your favorites appear on the home screen and can be changed later in Settings.</p></section>
          <section><h2>Logging an activity</h2><ol><li>Choose a date.</li><li>Choose a duration.</li><li>Choose an activity.</li><li>Optionally add distance and a focus area.</li><li>Tap <strong>Save</strong>.</li></ol><p>Distance is optional.</p></section>
          <section><h2>Using the stopwatch</h2><ol><li>Tap the stopwatch icon at the top of the screen.</li><li>Choose an activity, or use the activity already selected on the home screen.</li><li>Turn on <strong>Distance tracking</strong> if you want GPS measurement.</li><li>Tap <strong>Start</strong>.</li></ol><p>While the session is active:</p><ul><li>Distance and pace appear automatically when a GPS signal is available.</li><li>Pace is shown using your selected unit, such as <code>/km</code> or <code>/mi</code>.</li><li>A split is shown after each full kilometer or mile.</li><li>You can switch to a music app or lock your screen. GPS measurement will continue.</li></ul><p>Tap <strong>Pause</strong> to pause the session.</p><p>You can then:</p><ul><li>Tap <strong>Resume</strong> to continue.</li><li>Tap <strong>Save</strong>, then <strong>Save Session</strong> to save the session.</li><li>Tap <strong>Cancel</strong>, then <strong>Discard</strong> to discard the session.</li></ul><p>The saved distance is automatically added to the Activity Log.</p></section>
          <section><h2>Activity Log</h2><p>In the Activity Log, you can:</p><ul><li>View recorded activities.</li><li>Tap an activity to edit it.</li><li>Change the date, duration, distance and focus.</li><li>Swipe left and tap the red trash icon to delete an activity.</li></ul></section>
          <section><h2>Statistics</h2><p>Tap the statistics icon at the top of the screen to see:</p><ul><li>Total time</li><li>Number of sessions</li><li>Active days</li><li>Activities</li><li>Activity Trend</li><li>Monthly Momentum</li></ul><p>In the chart, you can switch between <strong>Time</strong> and <strong>Sessions</strong>, and choose from different time periods.</p></section>
          <section><h2>GPS and privacy</h2><p>GPS measurement is available to users aged 13 and over. GNISTRE also works without GPS.</p><ul><li>Your location is used only during an active session.</li><li>Raw GPS points and route history are not stored.</li><li>Only the total distance is saved on your phone.</li><li>Your data is not shared with others.</li></ul></section>
          <section><h2>Settings</h2><p>In Settings, you can:</p><ul><li>Change the unit of measurement between kilometers and miles.</li><li>Change your age group when relevant.</li><li>Change your favorite activities.</li><li>Read the Privacy Policy.</li><li>Delete your locally stored activity data.</li></ul></section>
        </div>
      </article>
      <footer className="footer privacy-footer"><a className="brand" href="/"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a><p>Private progress for real life.</p><div className="footer-links"><a className="footer-link" href="/privacy">Privacy</a><span>© 2026 Gnistre</span></div></footer>
    </main>
  );
}
