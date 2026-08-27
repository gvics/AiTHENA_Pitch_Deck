import { useState } from 'react'
import './App.css'

const slides = [
  {
    id: 'title',
    component: 'TitleSlide',
  },
  {
    id: 'problem',
    component: 'ProblemSlide',
  },
  {
    id: 'solution',
    component: 'SolutionSlide',
  },
  {
    id: 'product',
    component: 'ProductSlide',
  },
  {
    id: 'market',
    component: 'MarketSlide',
  },
  {
    id: 'traction',
    component: 'TractionSlide',
  },
  {
    id: 'business',
    component: 'BusinessSlide',
  },
  {
    id: 'team',
    component: 'TeamSlide',
  },
  {
    id: 'ask',
    component: 'AskSlide',
  },
]

function TitleSlide() {
  return (
    <div className="slide slide-title">
      <div className="title-content">
        <div className="logo-mark">Ai</div>
        <h1 className="brand-name">
          <span className="brand-ai">Ai</span>
          <span className="brand-thena">THENA</span>
        </h1>
        <p className="tagline">Intelligence That Thinks Ahead</p>
        <div className="subtitle">
          AI-Powered Decision Intelligence Platform
        </div>
        <div className="title-meta">
          <span>Series A · 2026</span>
        </div>
      </div>
      <div className="title-bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
    </div>
  )
}

function ProblemSlide() {
  return (
    <div className="slide slide-problem">
      <div className="slide-header">
        <div className="slide-tag">The Problem</div>
        <h2>Enterprises Are Drowning in Data,<br />Starving for Insight</h2>
      </div>
      <div className="problem-grid">
        <div className="problem-card">
          <div className="problem-icon">📊</div>
          <div className="problem-stat">2.5 quintillion</div>
          <div className="problem-label">bytes of data created daily</div>
        </div>
        <div className="problem-card">
          <div className="problem-icon">⏱️</div>
          <div className="problem-stat">73%</div>
          <div className="problem-label">of enterprise data goes unanalyzed</div>
        </div>
        <div className="problem-card">
          <div className="problem-icon">💸</div>
          <div className="problem-stat">$3.1T</div>
          <div className="problem-label">lost annually to poor data quality</div>
        </div>
      </div>
      <div className="pain-points">
        <div className="pain-point">
          <span className="pain-bullet">✗</span>
          Siloed data systems that don't communicate
        </div>
        <div className="pain-point">
          <span className="pain-bullet">✗</span>
          Weeks of manual analysis to answer basic questions
        </div>
        <div className="pain-point">
          <span className="pain-bullet">✗</span>
          Decisions made on gut instinct, not intelligence
        </div>
      </div>
    </div>
  )
}

function SolutionSlide() {
  return (
    <div className="slide slide-solution">
      <div className="slide-header">
        <div className="slide-tag">The Solution</div>
        <h2>AiThena: Your Enterprise AI Brain</h2>
      </div>
      <div className="solution-visual">
        <div className="solution-center">
          <div className="solution-logo">AiThena</div>
          <div className="solution-tagline">Decision Intelligence Layer</div>
        </div>
        <div className="solution-connectors">
          <div className="connector connector-top">Data Lakes</div>
          <div className="connector connector-right">CRM / ERP</div>
          <div className="connector connector-bottom">Real-time Streams</div>
          <div className="connector connector-left">Documents</div>
        </div>
      </div>
      <div className="solution-benefits">
        <div className="benefit">
          <span className="benefit-icon">⚡</span>
          <div>
            <strong>Instant Answers</strong>
            <p>Natural language queries across all your data in seconds</p>
          </div>
        </div>
        <div className="benefit">
          <span className="benefit-icon">🧠</span>
          <div>
            <strong>Predictive Intelligence</strong>
            <p>Anticipate trends before they happen</p>
          </div>
        </div>
        <div className="benefit">
          <span className="benefit-icon">🔒</span>
          <div>
            <strong>Enterprise-Grade Security</strong>
            <p>SOC 2 Type II · GDPR · HIPAA compliant</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductSlide() {
  return (
    <div className="slide slide-product">
      <div className="slide-header">
        <div className="slide-tag">Product</div>
        <h2>Three Pillars of Intelligence</h2>
      </div>
      <div className="product-pillars">
        <div className="pillar">
          <div className="pillar-icon">🔍</div>
          <h3>AiThena Query</h3>
          <p>
            Ask complex business questions in plain English. Our LLM-powered
            engine translates natural language into precise data operations
            across heterogeneous sources.
          </p>
          <ul className="pillar-features">
            <li>Multi-source query federation</li>
            <li>Automated data joins</li>
            <li>Explainable results</li>
          </ul>
        </div>
        <div className="pillar pillar-featured">
          <div className="pillar-badge">Core</div>
          <div className="pillar-icon">🤖</div>
          <h3>AiThena Cortex</h3>
          <p>
            The reasoning engine at the heart of AiThena. Continuously learns
            from your business context to surface proactive insights and
            anomalies.
          </p>
          <ul className="pillar-features">
            <li>Autonomous monitoring</li>
            <li>Root cause analysis</li>
            <li>Prescriptive recommendations</li>
          </ul>
        </div>
        <div className="pillar">
          <div className="pillar-icon">📡</div>
          <h3>AiThena Pulse</h3>
          <p>
            Real-time intelligence delivery. Push the right insights to the
            right people at the right moment via Slack, email, or your existing
            tools.
          </p>
          <ul className="pillar-features">
            <li>Workflow integrations</li>
            <li>Smart alerting</li>
            <li>Collaborative decisions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function MarketSlide() {
  return (
    <div className="slide slide-market">
      <div className="slide-header">
        <div className="slide-tag">Market Opportunity</div>
        <h2>A $280B Market Undergoing AI Transformation</h2>
      </div>
      <div className="market-circles">
        <div className="market-circle market-tam">
          <div className="circle-inner">
            <div className="circle-value">$280B</div>
            <div className="circle-label">TAM</div>
            <div className="circle-desc">Enterprise Analytics & BI</div>
          </div>
        </div>
        <div className="market-circle market-sam">
          <div className="circle-inner">
            <div className="circle-value">$48B</div>
            <div className="circle-label">SAM</div>
            <div className="circle-desc">AI-Augmented Analytics</div>
          </div>
        </div>
        <div className="market-circle market-som">
          <div className="circle-inner">
            <div className="circle-value">$2.4B</div>
            <div className="circle-label">SOM</div>
            <div className="circle-desc">5-Year Target</div>
          </div>
        </div>
      </div>
      <div className="market-growth">
        <div className="growth-stat">
          <span className="growth-value">38%</span>
          <span className="growth-label">CAGR through 2030</span>
        </div>
        <div className="growth-stat">
          <span className="growth-value">12,000+</span>
          <span className="growth-label">Target enterprise accounts</span>
        </div>
        <div className="growth-stat">
          <span className="growth-value">$240K</span>
          <span className="growth-label">Average ACV</span>
        </div>
      </div>
    </div>
  )
}

function TractionSlide() {
  return (
    <div className="slide slide-traction">
      <div className="slide-header">
        <div className="slide-tag">Traction</div>
        <h2>Strong Early Signals</h2>
      </div>
      <div className="traction-metrics">
        <div className="metric-card">
          <div className="metric-value">$1.2M</div>
          <div className="metric-label">ARR</div>
          <div className="metric-trend">↑ 3× YoY</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">24</div>
          <div className="metric-label">Enterprise Customers</div>
          <div className="metric-trend">↑ 8 this quarter</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">97%</div>
          <div className="metric-label">Net Retention</div>
          <div className="metric-trend">Industry avg: 104%</div>
        </div>
        <div className="metric-card">
          <div className="metric-value">4.8/5</div>
          <div className="metric-label">NPS Score</div>
          <div className="metric-trend">↑ From 4.2 last year</div>
        </div>
      </div>
      <div className="customer-logos">
        <div className="logos-label">Trusted by industry leaders</div>
        <div className="logo-placeholders">
          <div className="logo-ph">Fortune 500 FS</div>
          <div className="logo-ph">Global Retailer</div>
          <div className="logo-ph">Health System</div>
          <div className="logo-ph">Tech Unicorn</div>
          <div className="logo-ph">Gov Agency</div>
        </div>
      </div>
    </div>
  )
}

function BusinessSlide() {
  return (
    <div className="slide slide-business">
      <div className="slide-header">
        <div className="slide-tag">Business Model</div>
        <h2>Scalable SaaS with Land-and-Expand</h2>
      </div>
      <div className="business-tiers">
        <div className="tier">
          <div className="tier-name">Starter</div>
          <div className="tier-price">$2,000<span>/mo</span></div>
          <ul>
            <li>Up to 5 data sources</li>
            <li>10 users</li>
            <li>AiThena Query</li>
            <li>Email support</li>
          </ul>
        </div>
        <div className="tier tier-pro">
          <div className="tier-badge">Most Popular</div>
          <div className="tier-name">Professional</div>
          <div className="tier-price">$8,000<span>/mo</span></div>
          <ul>
            <li>Unlimited data sources</li>
            <li>50 users</li>
            <li>Full AiThena Suite</li>
            <li>Dedicated CSM</li>
          </ul>
        </div>
        <div className="tier">
          <div className="tier-name">Enterprise</div>
          <div className="tier-price">Custom</div>
          <ul>
            <li>Unlimited everything</li>
            <li>Private deployment</li>
            <li>Custom AI models</li>
            <li>SLA guarantee</li>
          </ul>
        </div>
      </div>
      <div className="unit-economics">
        <div className="econ-item">
          <span className="econ-label">CAC</span>
          <span className="econ-value">$18K</span>
        </div>
        <div className="econ-item">
          <span className="econ-label">LTV</span>
          <span className="econ-value">$240K</span>
        </div>
        <div className="econ-item">
          <span className="econ-label">LTV:CAC</span>
          <span className="econ-value">13.3×</span>
        </div>
        <div className="econ-item">
          <span className="econ-label">Payback</span>
          <span className="econ-value">9 months</span>
        </div>
      </div>
    </div>
  )
}

function TeamSlide() {
  const team = [
    {
      initials: 'AK',
      name: 'Alex Kim',
      title: 'CEO & Co-founder',
      bg: '#6366f1',
      bio: 'Former VP of AI at Palantir. PhD MIT CS. 2× founder.',
    },
    {
      initials: 'SP',
      name: 'Sarah Park',
      title: 'CTO & Co-founder',
      bg: '#8b5cf6',
      bio: 'Ex-Google Brain. Built ML infra for 1B+ users. Stanford PhD.',
    },
    {
      initials: 'MR',
      name: 'Marcus Rodriguez',
      title: 'CPO',
      bg: '#06b6d4',
      bio: 'Former Head of Product at Tableau. Scaled to $1B ARR.',
    },
    {
      initials: 'JL',
      name: 'Jennifer Lee',
      title: 'CRO',
      bg: '#10b981',
      bio: 'Built enterprise sales at Databricks from $0 to $200M ARR.',
    },
  ]

  return (
    <div className="slide slide-team">
      <div className="slide-header">
        <div className="slide-tag">Team</div>
        <h2>World-Class Operators & Researchers</h2>
      </div>
      <div className="team-grid">
        {team.map((member) => (
          <div className="team-card" key={member.name}>
            <div
              className="team-avatar"
              style={{ background: member.bg }}
            >
              {member.initials}
            </div>
            <div className="team-info">
              <div className="team-name">{member.name}</div>
              <div className="team-title">{member.title}</div>
              <div className="team-bio">{member.bio}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="advisors">
        <div className="advisors-label">Backed &amp; Advised By</div>
        <div className="advisor-logos">
          <span>Sequoia Capital</span>
          <span>a16z</span>
          <span>Former CTO, AWS</span>
          <span>CEO, Snowflake</span>
        </div>
      </div>
    </div>
  )
}

function AskSlide() {
  return (
    <div className="slide slide-ask">
      <div className="ask-content">
        <div className="slide-tag" style={{ textAlign: 'center', marginBottom: '1rem' }}>The Ask</div>
        <h2>Raising $12M Series A</h2>
        <div className="use-of-funds">
          <div className="fund-item">
            <div className="fund-bar" style={{ '--pct': '45%', '--color': '#6366f1' }}>
              <div className="fund-fill" />
            </div>
            <div className="fund-label">
              <strong>45%</strong> Product &amp; Engineering
            </div>
          </div>
          <div className="fund-item">
            <div className="fund-bar" style={{ '--pct': '30%', '--color': '#8b5cf6' }}>
              <div className="fund-fill" />
            </div>
            <div className="fund-label">
              <strong>30%</strong> Sales &amp; Marketing
            </div>
          </div>
          <div className="fund-item">
            <div className="fund-bar" style={{ '--pct': '15%', '--color': '#06b6d4' }}>
              <div className="fund-fill" />
            </div>
            <div className="fund-label">
              <strong>15%</strong> Customer Success
            </div>
          </div>
          <div className="fund-item">
            <div className="fund-bar" style={{ '--pct': '10%', '--color': '#10b981' }}>
              <div className="fund-fill" />
            </div>
            <div className="fund-label">
              <strong>10%</strong> Operations
            </div>
          </div>
        </div>
        <div className="milestones">
          <div className="milestone">
            <span className="milestone-time">12 months</span>
            <span className="milestone-goal">$5M ARR · 100 customers</span>
          </div>
          <div className="milestone">
            <span className="milestone-time">24 months</span>
            <span className="milestone-goal">$15M ARR · Series B ready</span>
          </div>
        </div>
        <div className="cta">
          <a href="mailto:invest@aithena.ai" className="cta-button">
            Let's Build the Future Together →
          </a>
          <div className="cta-contact">invest@aithena.ai · aithena.ai</div>
        </div>
      </div>
      <div className="title-bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>
    </div>
  )
}

const slideComponents = {
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  ProductSlide,
  MarketSlide,
  TractionSlide,
  BusinessSlide,
  TeamSlide,
  AskSlide,
}

export default function App() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1))

  const SlideComponent = slideComponents[slides[current].component]

  const handleKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
  }

  return (
    <div className="deck" onKeyDown={handleKey} tabIndex={0}>
      <div className="slides-wrapper">
        <SlideComponent />
      </div>

      <nav className="deck-nav">
        <button
          className="nav-btn"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className="slide-dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`dot ${i === current ? 'dot-active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="nav-btn"
          onClick={next}
          disabled={current === slides.length - 1}
          aria-label="Next slide"
        >
          →
        </button>
      </nav>

      <div className="slide-counter">
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
