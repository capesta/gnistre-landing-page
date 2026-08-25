import type { CSSProperties } from 'react';

function Phone({ src, alt, className = '', style }: { src: string; alt: string; className?: string; style?: CSSProperties }) {
  return <div className={`phone-frame ${className}`} style={style}><img src={src} alt={alt} /></div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Momentum home"><img src="/momentum-icon.png" alt="" /><span>MOMENTUM</span></a>
        <a className="nav-cta" href="#start">Get started <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>This one&apos;s <em>personal.</em></h1>
          <p className="hero-lede">A simple, private way to keep track of the things you do — from running and football to coding, writing and everything in between.</p>
          <div className="hero-actions"><a className="button button-primary" href="#start">Start building momentum <span>↗</span></a><a className="text-link" href="#how">See how it works <span>↓</span></a></div>
        </div>
        <div className="hero-visual"><div className="hero-glow" /><Phone src="/screens-cutouts/log.png" alt="Momentum screen asking what you did today" /></div>
      </section>

      <section className="feature-section" id="how"><div className="core-lower standalone-feature"><div className="feature-copy"><div className="section-kicker">Core over content.</div><h2>Designed to get out of your way.</h2><p className="statement-lede">Your progress doesn&apos;t need an audience.</p><p>Log an activity in seconds, see the pattern forming, and get back to your day.</p><p className="noise-note">Private by default.<br />No GPS. No tracking. No audience.</p><div className="feature-points"><article><span>01</span><div><h3>Simple by design</h3><p>Choose what you did, add a little detail if you want, and save. That&apos;s it.</p></div></article><article><span>02</span><div><h3>Progress you can feel</h3><p>Quiet, useful insights that make showing up feel rewarding.</p></div></article><article><span>03</span><div><h3>Private by default</h3><p>Your activities are yours. No feeds, followers or public scoreboard.</p></div></article></div></div><div className="feature-phones"><Phone src="/screens-cutouts/training.png" alt="Momentum training entry showing activity, distance, pace and effort" className="phone-small phone-back" /><Phone src="/screens-cutouts/progress.png" alt="Momentum progress screen" className="phone-small phone-front" /></div></div></section>

      <section className="everyone-section" id="everyone"><div className="everyone-copy"><div className="section-kicker">For every age. Every kind of momentum.</div><h2>Not just workouts.<br /><em>Not just athletes.</em></h2><p>Momentum is for school days, training days, creative days and everything in between — whether you&apos;re just getting started or already on your way.</p><a className="text-link" href="#start">Find your starting point <span>↗</span></a></div><div className="activity-collage"><Phone src="/screens-cutouts/activities.png" alt="Momentum activity categories including creative and academic activities" className="collage-phone collage-back" /><Phone src="/screens-cutouts/sports.png" alt="Momentum sports activity list" className="collage-phone collage-front" /></div></section>

      <section className="final-section" id="start"><div className="final-orb" /><h2>Start where you are.<br /><em>Keep moving.</em></h2><p>Momentum is coming to the App Store.</p><a className="button button-primary" href="#top">Get notified at launch <span>↗</span></a><small>App Store link coming soon</small></section>

      <footer className="footer"><a className="brand" href="#top"><img src="/momentum-icon.png" alt="" /><span>MOMENTUM</span></a><p>Private progress for real life.</p><span>© 2026 Momentum</span></footer>
    </main>
  );
}
