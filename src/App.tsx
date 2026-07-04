import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReferralsPage from './pages/ReferralsPage';

type Tab = 'home' | 'about' | 'referrals' | 'contact';

function JupiterLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="16" cy="16" r="13" fill="url(#jupiterGrad)" />
      <ellipse cx="16" cy="12" rx="8" ry="2.5" fill="#d97706" opacity="0.5" />
      <ellipse cx="16" cy="16" rx="10" ry="1.5" fill="#b45309" opacity="0.4" />
      <ellipse cx="16" cy="20" rx="9" ry="2" fill="#d97706" opacity="0.5" />
      <ellipse cx="16" cy="16" rx="10" ry="1.5" fill="#f59e0b" opacity="0.3" />
      <defs>
        <radialGradient id="jupiterGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="40%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToContact = () => {
    setActiveTab('contact');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'home' as Tab, label: 'Home' },
    { id: 'about' as Tab, label: 'About' },
    { id: 'referrals' as Tab, label: 'Results' },
    { id: 'contact' as Tab, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 text-xl font-semibold text-stone-900 tracking-tight"
            >
              <JupiterLogo />
              <span>Jupiter Prep</span>
            </button>

            <div className="hidden md:flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-stone-900'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 hover:bg-stone-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-stone-900'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        {activeTab === 'home' && <HomePage onNavigateContact={navigateToContact} />}
        {activeTab === 'about' && <AboutPage onNavigateContact={navigateToContact} />}
        {activeTab === 'referrals' && <ReferralsPage onNavigateContact={navigateToContact} />}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      <footer className="bg-stone-900 text-stone-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-center gap-3">
              <JupiterLogo />
              <div>
                <p className="text-xl font-semibold mb-1">Jupiter Prep</p>
                <p className="text-stone-500 text-sm">Higher scores. Better outcomes.</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <a href="mailto:jupiterprep1@gmail.com" className="text-stone-400 hover:text-stone-50 transition-colors text-sm">
                jupiterprep1@gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8">
            <p className="text-stone-600 text-xs">
              &copy; {new Date().getFullYear()} Jupiter Prep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
