import type { CSSProperties } from 'react';

function Phone({ src, alt, className = '', style }: { src: string; alt: string; className?: string; style?: CSSProperties }) {
  return <div className={`phone-frame ${className}`} style={style}><img src={src} alt={alt} /></div>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Gnistre home"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a>
        <div className="nav-actions"><a className="nav-cta" href="#start"><span className="nav-cta-price"><span>$2.99</span><span className="nav-cta-once"> once</span></span><span className="nav-cta-label">Get started</span><span className="nav-cta-arrow">↗</span></a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>This one&apos;s <em>personal.</em></h1>
          <p className="hero-lede">A simple, private way to keep track of the things you do — from running and football to coding, writing and everything in between. For all ages.</p>
          <div className="hero-actions"><a className="button button-primary" href="#start">Find what keeps you moving <span>↗</span></a><a className="text-link" href="#how">See how it works <span>↓</span></a></div>
        </div>
        <div className="hero-visual"><div className="hero-glow" /><Phone src="/screens-clean/log-road-cycling.png" alt="Gnistre home screen for logging an activity" /></div>
      </section>

      <section className="feature-section" id="how"><div className="core-lower standalone-feature"><div className="feature-copy"><div className="section-kicker">Core over content.</div><h2>Designed to get out of your way.</h2><p className="statement-lede">Your progress doesn&apos;t need an audience.</p><p className="noise-note"><strong>Optional distance tracking.</strong><span>No maps. No route history.</span><span>No data harvesting.</span></p><div className="feature-points"><article><span>01</span><div><h3>Simple by design</h3><p>Start now or log it later. Choose what you did, add a detail if you want, and save.</p></div></article><article><span>02</span><div><h3>Private by default</h3><p>Your activities are yours. No feeds, followers or public scoreboard.</p></div></article></div></div><div className="feature-phones"><Phone src="/screens-clean/edit-distance-2026-08-28-clean.png" alt="Gnistre edit entry showing running distance and average pace" className="phone-small phone-back" /><Phone src="/screens-clean/stopwatch-gps.png" alt="Gnistre stopwatch with optional distance tracking ready to start" className="phone-small phone-front phone-gps" /></div></div></section>

      <section className="everyone-section" id="everyone"><div className="everyone-copy"><div className="section-kicker">For every age. Every kind of movement.</div><h2>Not just workouts.<br /><em>Not just athletes.</em></h2><p>Gnistre is for school days, training days, creative days and everything in between.</p><a className="text-link" href="#start">Find your starting point <span>↗</span></a></div><div className="activity-collage"><Phone src="/screens-clean/activities-creative-academic.png" alt="Gnistre creative and academic activity categories" className="collage-phone collage-back" /><Phone src="/screens-clean/activities-sports.png" alt="Gnistre sports activity list" className="collage-phone collage-front" /></div></section>

      <section className="final-section" id="start"><div className="final-orb" /><h2>Start where you are.<br /><em>Keep going.</em></h2><p className="price-line"><strong>$2.99 once.</strong> Full access.</p><p>Gnistre is coming to the App Store.</p><a className="button button-primary" href="#top">Get notified at launch <span>↗</span></a><small>No subscriptions. No ads. No data selling.</small></section>

      <footer className="footer"><a className="brand" href="#top"><img src="/gnistre-icon.png" alt="" /><span>GNISTRE</span></a><p>Private progress for real life.</p><a className="footer-link" href="/privacy">Privacy</a><span>© 2026 Gnistre</span></footer>
    </main>
  );
}
