const siteData = {
  studioName: "ArkaRage",
  developerName: "Mohan",
  contactEmail: "mohandhass28@gmail.com",
  statusLabel: "Official developer studio website",
  tagline: "Modern Android publishing presence",
  focus: [
    "Android application publishing",
    "Product design and delivery",
    "Google Play developer presence",
  ],
};

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Identity", href: "#identity" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#privacy" },
];

const heroStats = [
  { label: "Studio", value: siteData.studioName },
  { label: "Developer", value: siteData.developerName },
  { label: "Contact", value: siteData.contactEmail },
];

const identityCards = [
  {
    title: "Studio Name",
    value: siteData.studioName,
    description:
      "Official studio identity used for public publishing, branding, and developer communication.",
  },
  {
    title: "Developer",
    value: siteData.developerName,
    description:
      "Public developer identity associated with the studio's applications and publishing presence.",
  },
  {
    title: "Website Role",
    value: "Public developer presence",
    description:
      "This website serves as the official online presence connected to the associated Google Play developer account.",
  },
];

const studioCards = [
  {
    index: "01",
    title: "Clear identity",
    text: "The website clearly presents the studio name, owner name, and developer purpose in a direct and professional format.",
  },
  {
    index: "02",
    title: "Modern presentation",
    text: "The interface uses a refined layout, layered visual depth, and responsive behavior to create a premium first impression.",
  },
  {
    index: "03",
    title: "Ready to scale",
    text: "The structure is ready for future additions such as app listings, support resources, policy pages, and studio updates.",
  },
];

const supportPoints = [
  "Official public website representing the ArkaRage developer identity.",
  "Maintained as the web presence for the associated Google Play Console account.",
  "Designed to communicate developer identity, studio branding, and contact clarity for public review.",
];

function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteData.studioName,
    founder: siteData.developerName,
    email: siteData.contactEmail,
    description: `Official website for ${siteData.studioName}, featuring developer ${siteData.developerName}.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="page-shell">
        <header className="hero" id="overview">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <nav className="topbar">
            <div className="brand-lockup">
              <div className="brand-mark">AR</div>
              <div>
                <p className="eyebrow">{siteData.statusLabel}</p>
                <h1>{siteData.studioName}</h1>
              </div>
            </div>

            <div className="nav-links" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <a key={link.href} className="nav-link" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="hero-grid">
            <section className="hero-copy reveal">
              <span className="chip">{siteData.tagline}</span>
              <h2>
                Official digital home for <span>{siteData.studioName}</span>.
              </h2>
              <p>
                ArkaRage is the official studio website for developer {siteData.developerName},
                built to present a polished public identity for Android publishing and
                Google Play visibility.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#identity">
                  Explore identity
                </a>
                <a className="secondary-button" href="#contact">
                  Contact studio
                </a>
              </div>

              <div className="hero-stat-grid">
                {heroStats.map((item) => (
                  <article className="hero-stat" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </section>

            <aside className="hero-panel reveal reveal-delay">
              <div className="hero-panel-frame">
                <p className="panel-label">Studio profile</p>
                <div className="signal-row">
                  <span className="signal-dot" />
                  <span className="signal-dot" />
                  <span className="signal-dot active" />
                </div>
                <div className="panel-card">
                  <div>
                    <span className="muted-label">Studio</span>
                    <strong>{siteData.studioName}</strong>
                  </div>
                  <div>
                    <span className="muted-label">Developer</span>
                    <strong>{siteData.developerName}</strong>
                  </div>
                  <div>
                    <span className="muted-label">Primary focus</span>
                    <strong>Android app publishing</strong>
                  </div>
                </div>
              </div>

              <ul className="focus-list" aria-label="Studio focus">
                {siteData.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </header>

        <main>
          <section className="info-strip reveal">
            <p>Independent developer studio</p>
            <p>Responsive modern framework</p>
            <p>Official public-facing presence</p>
          </section>

          <section className="section editorial-section reveal">
            <div className="editorial-copy">
              <span className="eyebrow">Studio overview</span>
              <h3>Professional presentation built for public trust.</h3>
              <p>
                The website is structured to make ownership, branding, and contact
                information immediately visible while maintaining a modern, premium
                presentation across desktop and mobile screens.
              </p>
            </div>

            <div className="editorial-panel">
              <p>
                Designed as an official studio destination for publishing visibility,
                account credibility, and future product growth.
              </p>
            </div>
          </section>

          <section className="section reveal" id="identity">
            <div className="section-heading">
              <span className="eyebrow">Identity</span>
              <h3>Official developer and studio information</h3>
              <p>
                This section presents the core identity details associated with ArkaRage
                and its public developer presence.
              </p>
            </div>

            <div className="card-grid">
              {identityCards.map((card) => (
                <article className="info-card" key={card.title}>
                  <span className="card-kicker">{card.title}</span>
                  <h4>{card.value}</h4>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section reveal">
            <div className="section-heading">
              <span className="eyebrow">Why this site works</span>
              <h3>A cleaner and more modern studio presence</h3>
              <p>
                The layout combines structured business information with a stronger visual
                system so the website feels current, intentional, and credible.
              </p>
            </div>

            <div className="feature-grid">
              {studioCards.map((card) => (
                <article className="feature-card" key={card.index}>
                  <span className="feature-index">{card.index}</span>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section support-section reveal" id="support">
            <div className="section-heading">
              <span className="eyebrow">Website statement</span>
              <h3>Official public presence for the developer account</h3>
              <p>
                This website is maintained as the official public-facing studio website for
                the developer identity associated with Google Play Console.
              </p>
            </div>

            <div className="support-card">
              <ul>
                {supportPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="support-signoff">
                <span>Developer</span>
                <strong>{siteData.developerName}</strong>
              </div>
            </div>
          </section>

          <section className="section reveal" id="contact">
            <div className="section-heading">
              <span className="eyebrow">Contact</span>
              <h3>Official contact information</h3>
              <p>
                For developer communication, studio inquiries, or account-related contact,
                please use the email address below.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card-copy">
                <p className="contact-label">Primary contact email</p>
                <a className="contact-email" href={`mailto:${siteData.contactEmail}`}>
                  {siteData.contactEmail}
                </a>
              </div>

              <div className="contact-owner-card">
                <span>Developer</span>
                <strong>{siteData.developerName}</strong>
                <p>{siteData.studioName}</p>
              </div>
            </div>
          </section>

          <section className="section reveal" id="privacy">
            <div className="section-heading">
              <span className="eyebrow">Privacy</span>
              <h3>Website privacy statement</h3>
              <p>
                This website is an informational public page for ArkaRage and does not
                provide account registration, payment processing, or interactive user
                services.
              </p>
            </div>

            <div className="privacy-grid">
              <article className="info-card">
                <span className="card-kicker">Website data</span>
                <h4>No direct account collection</h4>
                <p>
                  The website is intended for informational purposes and does not ask
                  visitors to create accounts or submit personal profile information.
                </p>
              </article>
              <article className="info-card">
                <span className="card-kicker">Application policies</span>
                <h4>App-specific policies can be added separately</h4>
                <p>
                  Any future Android applications released by the studio may include their
                  own dedicated privacy policies and support documentation where required.
                </p>
              </article>
            </div>
          </section>
        </main>

        <footer className="footer reveal">
          <p>
            © {new Date().getFullYear()} {siteData.studioName}. Developer:{" "}
            {siteData.developerName}.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
