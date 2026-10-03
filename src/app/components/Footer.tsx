import { useState } from "react";
import { Link } from "react-router";
import PolicyModal from "./PolicyModal";
import { PrivacyPolicyContent, CookiePolicyContent, TermsContent } from "./policies";

const CAPABILITY_LINKS = [
  { label: "User Experience & Design", href: "/services/design" },
  { label: "Database Architecture", href: "/services/database" },
  { label: "Web Engineering", href: "/services/web" },
  { label: "Software Development", href: "/services/pro" },
  { label: "Customer Service AI", href: "/services/aura-ai" },
];

const RESOURCE_LINKS = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Documentation & APIs", href: "/docs" },
  { label: "AI & Tech Blog", href: "/blog" },
  { label: "System Infrastructure", href: "/infrastructure" },
];

const COMPANY_LINKS = [
  { label: "About Arch", href: "/about" },
  { label: "Careers", href: "/careers", badge: "Hiring" },
  { label: "Contact Us", href: "/contact" },
  { label: "Consultation", href: "/contact", highlight: true },
];

export function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'cookies' | 'terms' | null>(null);

  const getModalContent = () => {
    switch (activeModal) {
      case 'privacy': return { title: 'Privacy Policy', content: <PrivacyPolicyContent /> };
      case 'cookies': return { title: 'Cookies Policy', content: <CookiePolicyContent /> };
      case 'terms': return { title: 'Terms and Conditions', content: <TermsContent /> };
      default: return { title: '', content: null };
    }
  };

  const currentModal = getModalContent();

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-900">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2 text-white font-bold text-xl tracking-tight">
                <span className="text-blue-500 font-black text-2xl">/</span>
                <span>ARCH COMPUTING</span>
              </div>

              <p className="text-sm leading-relaxed max-w-sm text-slate-400">
                Architecting the future of intelligent enterprise. We bridge core
                database infrastructure, advanced web engineering, and autonomous
                customer AI into a singular, cohesive ecosystem.
              </p>

              <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-3 py-1 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Systems Operational</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Capabilities</h4>
              <ul className="space-y-2.5 text-sm">
                {CAPABILITY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="hover:text-blue-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5 text-sm">
                {RESOURCE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="hover:text-blue-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-sm">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className={link.highlight ? "text-blue-400 hover:text-blue-300 font-medium transition-colors" : "hover:text-blue-400 transition-colors"}
                    >
                      {link.label}
                      {link.badge ? (
                        <span className="text-xs text-blue-400 ml-1 font-medium bg-blue-950/50 px-1.5 py-0.5 rounded border border-blue-900/50">
                          {link.badge}
                        </span>
                      ) : null}
                      {link.highlight && !link.badge ? " →" : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-md w-full space-y-2">
              <h4 className="text-sm font-medium text-slate-200">Stay ahead of the arch</h4>
              <p className="text-xs text-slate-500">
                Monthly insights on enterprise web infrastructure and customer AI analytics.
              </p>

              <form
                className="flex mt-2 max-w-sm sm:max-w-md"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter business email"
                  required
                  className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-r-md px-4 py-2 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs text-slate-500 lg:text-right">
              <span>&copy; 2026 Arch Computing Inc. All rights reserved.</span>
              <div className="flex gap-4">
                <button type="button" onClick={() => setActiveModal('privacy')} className="hover:text-slate-400 transition-colors text-left">Privacy Policy</button>
                <button type="button" onClick={() => setActiveModal('terms')} className="hover:text-slate-400 transition-colors text-left">Terms of Service</button>
                <button type="button" onClick={() => setActiveModal('cookies')} className="hover:text-slate-400 transition-colors text-left">Security Data</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PolicyModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={currentModal.title}
        content={currentModal.content}
      />
    </>
  );
}
