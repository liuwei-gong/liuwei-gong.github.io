import type { ReactNode } from "react";

type ExternalLink = {
  label: string;
  href: string;
};

type Person = {
  name: string;
  href: string;
};

type Publication = {
  number: string;
  year: string;
  kind: string;
  title: string;
  authors: Person[];
  citation?: string;
  links: ExternalLink[];
};

const publications: Publication[] = [
  {
    number: "05",
    year: "2026",
    kind: "Preprint",
    title:
      "The (local) geometry of oscillatory integrals on manifolds: Dimension three",
    authors: [
      { name: "Song Dai", href: "https://cam.tju.edu.cn/en/faculty/index.php?id=25" },
      { name: "Shaoming Guo", href: "https://sites.google.com/view/shaomingguo" },
    ],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.12927" }],
  },
  {
    number: "04",
    year: "2026",
    kind: "Preprint",
    title: "Global convergence of the Gursky–Malchiodi Q-curvature flow",
    authors: [
      {
        name: "Sanghoon Lee",
        href: "https://sites.google.com/view/sanghoon-lees-homepagege/%ED%99%88",
      },
      { name: "Juncheng Wei", href: "https://personal.math.ubc.ca/~jcwei/" },
    ],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2602.04267" }],
  },
  {
    number: "03",
    year: "2025",
    kind: "Preprint",
    title:
      "Compactness and non-compactness theorems of the fourth- and sixth-order constant Q-curvature problems",
    authors: [
      { name: "Seunghyeok Kim", href: "https://sites.google.com/site/shkim0401/" },
      { name: "Juncheng Wei", href: "https://personal.math.ubc.ca/~jcwei/" },
    ],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2502.14237" }],
  },
  {
    number: "02",
    year: "2025",
    kind: "Journal article",
    title: "Conformal metrics of constant scalar curvature with unbounded volumes",
    authors: [{ name: "Yanyan Li", href: "https://sites.math.rutgers.edu/~yyli/" }],
    citation: "Proceedings of the London Mathematical Society 131, e70069",
    links: [
      {
        label: "Journal",
        href: "https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/plms.70069",
      },
      { label: "arXiv", href: "https://arxiv.org/abs/2406.06898" },
    ],
  },
  {
    number: "01",
    year: "2024",
    kind: "Journal article",
    title:
      "Oscillatory integral operators on manifolds and related Kakeya and Nikodym problems",
    authors: [
      { name: "Song Dai", href: "https://cam.tju.edu.cn/en/faculty/index.php?id=25" },
      { name: "Shaoming Guo", href: "https://sites.google.com/view/shaomingguo" },
      { name: "Ruixiang Zhang", href: "https://sites.google.com/view/ruixiang-zhang/home" },
    ],
    citation: "Cambridge Journal of Mathematics 12 (4), 937–1015",
    links: [
      { label: "Journal", href: "https://link.intlpress.com/JDetail/1861820834495074305" },
      { label: "arXiv", href: "https://arxiv.org/abs/2310.20122" },
    ],
  },
];

const talks = [
  {
    title: "Global convergence of the Gursky–Malchiodi Q-curvature flow",
    appearances: [
      { date: "July 2026", venue: "Yunnan Normal University" },
      { date: "May 2026", venue: "Nanjing University" },
    ],
  },
  {
    title: "Oscillatory integral operators on manifolds",
    appearances: [
      { date: "May 2026", venue: "Westlake University" },
      { date: "Mar. 2026", venue: "City University of Hong Kong" },
    ],
  },
  {
    title: "Compactness and non-compactness theorems of constant Q-curvature problems",
    appearances: [
      { date: "Oct. 2025", venue: "Tianjin University" },
      { date: "Jan. 2025", venue: "Beijing Normal University Zhuhai" },
    ],
  },
  {
    title: "Conformal metrics of constant scalar curvature with unbounded volumes",
    appearances: [
      { date: "Mar. 2025", venue: "Guangzhou University" },
      { date: "Dec. 2024", venue: "14th AIMS Conference, Abu Dhabi" },
      { date: "Nov. 2023", venue: "University of Wisconsin–Madison" },
    ],
  },
];

const courses = [
  {
    title: "MATH 4030 · Differential Geometry",
    term: "Fall 2026",
    institution: "CUHK",
  },
  {
    title: "MATH 250 · Linear Algebra",
    term: "Summer 2022",
    institution: "Rutgers University",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liuwei Gong",
  alternateName: "巩刘伟",
  jobTitle: "Postdoctoral Fellow",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "The Chinese University of Hong Kong",
    url: "https://www.cuhk.edu.hk/",
  },
  email: "mailto:lwgong@math.cuhk.edu.hk",
  url: "https://liuwei-gong.github.io/",
  sameAs: [
    "https://scholar.google.com/citations?user=tzpMVewAAAAJ&hl=en",
    "https://www.math.cuhk.edu.hk/people/academic-staff/liuwei",
  ],
  knowsAbout: ["Nonlinear analysis", "Harmonic analysis", "Geometric analysis"],
};

function OutboundLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Collaborators({ people }: { people: Person[] }) {
  return (
    <>
      {people.map((person, index) => (
        <span key={person.name}>
          {index > 0 && (index === people.length - 1 ? (people.length > 2 ? ", and " : " and ") : ", ")}
          <OutboundLink href={person.href}>{person.name}</OutboundLink>
        </span>
      ))}
    </>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="site-header__inner shell">
          <a className="wordmark" href="#about" aria-label="Liuwei Gong, home">
            Liuwei Gong
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#publications">Publications</a>
            <a href="#talks">Talks</a>
            <a href="#teaching">Teaching</a>
          </nav>
          <a className="header-cv" href="/liuwei-gong-cv.pdf" target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="hero__grid shell">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow">Postdoctoral Fellow · Mathematics</p>
              <h1 id="hero-title">
                <span className="name-latin">Liuwei Gong</span>
                <span className="name-chinese" lang="zh-Hans">
                  巩刘伟
                </span>
              </h1>
              <p className="hero__lede">
                My research connects analytic methods with geometric structure, from conformally invariant
                curvature equations to oscillatory integral operators on manifolds.
              </p>
              <p className="hero__position">
                Currently a postdoctoral fellow at the{" "}
                <OutboundLink href="https://www.math.cuhk.edu.hk/people/academic-staff/liuwei">
                  Chinese University of Hong Kong
                </OutboundLink>, working with{" "}
                <OutboundLink href="https://personal.math.ubc.ca/~jcwei/">Juncheng Wei</OutboundLink>.
              </p>
              <p className="hero__bio">
                I received my PhD from Rutgers University under the supervision of{" "}
                <OutboundLink href="https://sites.math.rutgers.edu/~yyli/">Yanyan Li</OutboundLink>. My work spans
                nonlinear, harmonic, and geometric analysis.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#publications">
                  View publications
                </a>
                <a className="button button--secondary" href="/liuwei-gong-cv.pdf" target="_blank" rel="noreferrer">
                  Curriculum vitae
                </a>
                <OutboundLink
                  className="button button--secondary"
                  href="https://scholar.google.com/citations?user=tzpMVewAAAAJ&hl=en"
                >
                  Google Scholar
                </OutboundLink>
              </div>
              <dl className="contact-strip">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:lwgong@math.cuhk.edu.hk">lwgong@math.cuhk.edu.hk</a>
                  </dd>
                </div>
                <div>
                  <dt>Office</dt>
                  <dd>Room 711, Academic Building No. 1, CUHK</dd>
                </div>
              </dl>
            </div>

            <div className="portrait-card">
              <div className="portrait-card__frame">
                <img
                  src="/liuwei-gong.jpg"
                  alt="Liuwei Gong at the Institute of Mathematical Sciences"
                  width="1280"
                  height="1155"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section publications" id="publications" aria-labelledby="publications-title">
          <div className="shell">
            <SectionHeading
              id="publications-title"
              title="Articles & preprints"
              intro="Research in geometric analysis, conformal geometry, and oscillatory integral theory."
            />
            <ol className="publication-list">
              {publications.map((publication) => (
                <li className="publication" key={publication.number}>
                  <div className="publication__number" aria-hidden="true">
                    {publication.number}
                  </div>
                  <div className="publication__body">
                    <div className="publication__meta">
                      <span>{publication.year}</span>
                      <span>{publication.kind}</span>
                    </div>
                    <h3>{publication.title}</h3>
                    <p className="publication__authors">
                      With <Collaborators people={publication.authors} />
                    </p>
                    {publication.citation ? <p className="publication__citation">{publication.citation}</p> : null}
                  </div>
                  <div className="publication__links" aria-label={`Links for ${publication.title}`}>
                    {publication.links.map((link) => (
                      <OutboundLink key={link.label} href={link.href}>
                        {link.label}
                      </OutboundLink>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section talks" id="talks" aria-labelledby="talks-title">
          <div className="shell">
            <SectionHeading id="talks-title" eyebrow="Academic exchange" title="Invited talks" />
            <div className="talk-list">
              {talks.map((talk, index) => (
                <article className="talk" key={talk.title}>
                  <div className="talk__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{talk.title}</h3>
                  <ul>
                    {talk.appearances.map((appearance) => (
                      <li key={`${appearance.date}-${appearance.venue}`}>
                        <time>{appearance.date}</time>
                        <span>{appearance.venue}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section teaching" id="teaching" aria-labelledby="teaching-title">
          <div className="shell">
            <SectionHeading id="teaching-title" eyebrow="In the classroom" title="Teaching" />
            <div className="teaching-list">
              {courses.map((course, index) => (
                <article className="course" key={course.title}>
                  <div className="course__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{course.title}</h3>
                  <ul>
                    <li>
                      <time>{course.term}</time>
                      <span>{course.institution}</span>
                    </li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <p>© 2026 Liuwei Gong</p>
          <p>Postdoctoral Fellow · The Chinese University of Hong Kong</p>
          <a href="#about">Back to top</a>
        </div>
      </footer>
    </>
  );
}
