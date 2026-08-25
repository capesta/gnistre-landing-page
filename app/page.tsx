const activities = ['Running', 'Football', 'Coding', 'Writing', 'Hiking', 'Photography'];

function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`phone-frame ${className}`}><img src={src} alt={alt} /></div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Momentum home"><img src="/momentum-icon.png" alt="" /><span>MOMENTUM</span></a>
        <div className="nav-links"><a href="#why">Why Momentum</a><a href="#how">How it works</a><a href="#everyone">For everyone</a></div>
        <a className="nav-cta" href="#start">Get started <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A little progress, every day</p>
          <h1>This one&apos;s <em>personal.</em></h1>
          <p className="hero-lede">A simple, private way to keep track of the things you do — from running and football to coding, writing and everything in between.</p>
          <div className="hero-actions"><a className="button button-primary" href="#start">Start building momentum <span>↗</span></a><a className="text-link" href="#how">See how it works <span>↓</span></a></div>
          <p className="quiet-note"><span>✦</span> No feeds. No likes. No pressure.</p>
        </div>
        <div className="hero-visual"><div className="hero-glow" /><div className="hero-grid" /><Phone src="/screens/log.png" alt="Momentum screen asking what you did today" /><div className="floating-card floating-card-top"><span className="card-icon">✦</span><div><strong>Made for real life</strong><small>Pick up where you left off</small></div></div><div className="floating-card floating-card-bottom"><span className="pulse-line" /><div><strong>Your progress</strong><small>Belongs to you</small></div></div></div>
      </section>

      <section className="activity-strip"><p>Whatever moves you</p><div className="activity-list">{activities.map((activity) => <span key={activity}>{activity}</span>)}</div></section>

      <section className="statement-section" id="why"><div className="section-kicker">The Momentum difference</div><div className="statement-grid"><h2>Core over <span>content.</span></h2><div><p className="statement-lede">Your progress doesn&apos;t need an audience.</p><p>Momentum keeps the useful part of tracking and leaves the noise behind. No performance theatre. No endless scrolling. Just a clear space for the things you want to keep doing.</p></div></div></section>

      <section className="feature-section" id="how"><div className="feature-intro"><div className="section-kicker">Small friction. Big difference.</div><h2>Designed to get out of your way.</h2><p>Log an activity in seconds, see the pattern forming, and get back to your day.</p></div><div className="feature-layout"><div className="feature-points"><article><span>01</span><div><h3>Simple by design</h3><p>Choose what you did, add a little detail if you want, and save. That&apos;s it.</p></div></article><article><span>02</span><div><h3>Progress you can feel</h3><p>Quiet, useful insights that make showing up feel rewarding.</p></div></article><article><span>03</span><div><h3>Private by default</h3><p>Your activities are yours. No feeds, followers or public scoreboard.</p></div></article></div><div className="feature-phones"><Phone src="/screens/stopwatch.png" alt="Momentum stopwatch screen" className="phone-small phone-back" /><Phone src="/screens/progress.png" alt="Momentum progress screen" className="phone-small phone-front" /></div></div></section>

      <section className="everyone-section" id="everyone"><div className="everyone-copy"><div className="section-kicker">For every kind of momentum</div><h2>Not just workouts.<br /><em>Not just athletes.</em></h2><p>Momentum is for walks, workouts, school projects, creative practice, recovery — and wherever you are starting from.</p><a className="text-link" href="#start">Find your starting point <span>↗</span></a></div><div className="activity-collage"><Phone src="/screens/activities.png" alt="Momentum activity categories including creative and academic activities" className="collage-phone collage-back" /><Phone src="/screens/sports.png" alt="Momentum sports activity list" className="collage-phone collage-front" /><div className="collage-label"><span>Sports</span><span>Creative</span><span>Academic</span><span>More</span></div></div></section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>Build momentum in whatever matters to you.</blockquote><p>One session. One page. One step forward.</p></section>

      <section className="final-section" id="start"><div className="final-orb" /><div className="section-kicker">Your next step starts here</div><h2>Start where you are.<br /><em>Keep moving.</em></h2><p>Momentum is coming to the App Store.</p><a className="button button-primary" href="#top">Get notified at launch <span>↗</span></a><small>App Store link coming soon</small></section>

      <footer className="footer"><a className="brand" href="#top"><img src="/momentum-icon.png" alt="" /><span>MOMENTUM</span></a><p>Private progress for real life.</p><span>© 2026 Momentum</span></footer>
    </main>
  );
}
