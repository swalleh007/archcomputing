import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './AntigravityHero.css';

const serviceLinks = [
  'Software Development',
  'Custom AI Agents',
  'Automation Systems',
  'Web development',
];

const fullHeadline = 'Building reliable systems for team.';

export const AntigravityHero = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const startTypingDelay = window.setTimeout(() => {
      let index = 0;
      const intervalId = window.setInterval(() => {
        index += 1;
        setTypedText(fullHeadline.slice(0, index));

        if (index >= fullHeadline.length) {
          window.clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 42);

      return () => window.clearInterval(intervalId);
    }, 300);

    return () => window.clearTimeout(startTypingDelay);
  }, []);

  return (
    <section className="antigravity-hero">
      <div className="hero-content">
        <nav className="hero-nav" aria-label="Primary navigation">
          {serviceLinks.map((label) => (
            <span key={label} className="hero-nav-item">
              {label}
            </span>
          ))}
        </nav>

        <div className="hero-divider" aria-hidden="true" />

        <h1 className="hero-headline" aria-live="polite">
          {typedText}
          {isTyping && <span className="typing-cursor" aria-hidden="true" />}
        </h1>

        {!isTyping && (
          <>
            <p className="hero-subtitle hero-subtitle-reveal">
              We build custom AI agents, workflow automations, ecommerce platforms, and business
              software that help growing companies and enterprise teams move faster with confidence.
            </p>

            <div className="hero-actions hero-actions-reveal">
              <button onClick={() => navigate('/contact')} className="hero-cta primary">
                <span>Start a Project</span>
              </button>

              <button onClick={() => navigate('/capabilities')} className="hero-cta secondary">
                <span className="play-indicator" aria-hidden="true">
                  <Play size={14} fill="currentColor" />
                </span>
                <span>See Capabilities</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

