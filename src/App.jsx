import React from "react";
import './App.css';

export default function AnikronosApp() {
  return (
    <>
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="page">
        {/* ── FULL-WIDTH NAV ── */}
        <nav>
          <div className="nav-inner">
            <div className="logo-wrap">
              {/* Change 4: lightning-icon.png in a blue-hued circle */}
              <div className="logo-icon">
                <img src="./images/lightning-icon.png" alt="Lightning" className="logo-lightning-img" />
              </div>
              <div>
                <div className="logo-text">Anikronos</div>
                <div className="logo-sub">URL Shortener · by chronos and anikulapo</div>
              </div>
            </div>
          </div>
        </nav>

        <section className="hero">
          <h1>Shorten Your Links.<br />Expand Your Reach.</h1>
          <p className="hero-sub">
            A powerful URL shortening platform designed for modern web experiences.
            Manage, track analytics, and optimize every link effortlessly.
          </p>

          <div className="input-row">
            <input
              className="url-input"
              type="url"
              placeholder="Paste your long, complex URL here..."
            />
            {/* Change 6: lightning icon inside the shorten button (no circle) */}
            <button className="shorten-btn">
              <img src="./images/lightning-icon.png" alt="" className="btn-lightning-img" />
              Shorten URL
            </button>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Why Choose Anikronos?</h2>
          <div className="features-grid">
            {[
              { icon: "⚡", name: "Instant Shortening", desc: "Create compact links in milliseconds with zero friction." },
              { icon: "📊", name: "Detailed Analytics", desc: "Track clicks, sources, devices, and geographic data." },
              { icon: "🏷️", name: "Custom Aliases", desc: "Brand your links with memorable keywords like chrns.co/sale." },
              { icon: "📁", name: "Link Management", desc: "Organize and manage all your links in one central dashboard." },
            ].map(f => (
              <div className="feature-card" key={f.name}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS — stacked sliding cards */}
        <section className="how-section">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-deck-wrap">
            <div className="steps-deck">
              <div className="sdeck-card sdeck-card-1" tabIndex={0} role="button" aria-label="Step 1: Paste Link">
                <div className="sdeck-step-num">01</div>
                <div className="sdeck-emoji">📋</div>
                <div className="sdeck-name">Paste Link</div>
                <div className="sdeck-desc">Copy any long URL and paste it into our secure input field. Works with any link — social, ecommerce, docs, you name it.</div>
              </div>
              <div className="sdeck-card sdeck-card-2" tabIndex={0} role="button" aria-label="Step 2: Shorten">
                <div className="sdeck-step-num">02</div>
                <div className="sdeck-emoji">⚙️</div>
                <div className="sdeck-name">Shorten</div>
                <div className="sdeck-desc">Our algorithm instantly generates a concise, memorable alias for your link. Optionally set a custom keyword to make it truly yours.</div>
              </div>
              <div className="sdeck-card sdeck-card-3" tabIndex={0} role="button" aria-label="Step 3: Share and Track">
                <div className="sdeck-step-num">03</div>
                <div className="sdeck-emoji">🚀</div>
                <div className="sdeck-name">Share &amp; Track</div>
                <div className="sdeck-desc">Distribute your shortened link anywhere and monitor real-time analytics — clicks, devices, locations, and referral sources.</div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-logo">Anikronos</div>
          <div className="social-links">
            <a href="https://twitter.com/" className="social-link" aria-label="Twitter" target="_blank" rel="noreferrer noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.857L1.254 2.25H8.08l4.259 5.629 5.905-5.629Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://github.com/MEPHiSTO126/URLshortener" className="social-link" aria-label="GitHub" target="_blank" rel="noreferrer noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/olaoluwa-ilugbaro-026245398/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BkmJF%2FXy8Q8ek%2Ft1O4zHgTw%3D%3D" className="social-link" aria-label="LinkedIn" target="_blank" rel="noreferrer noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <div className="footer-copy">© 2026 Anikronos Ltd. All rights reserved.</div>
        </footer>
      </div>
    </>
  );
}