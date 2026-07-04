import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReferralsPage from './pages/ReferralsPage';
import { JupiterPlanet } from './components/JupiterLogo';

type Tab = 'home' | 'about' | 'referrals' | 'contact';

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
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => setActiveTab('home')} className="flex items-center gap-2">
              <JupiterPlanet size={34} />
              <span className="font-bold text-stone-900 text-base">Jupiter Prep</span>
            </button>

            <div className="hidden md:flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="text-sm transition-colors"
                  style={{
                    color: activeTab === tab.id ? '#0F172A' : '#6B7280',
                    fontWeight: activeTab === tab.id ? 700 : 400,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setIsMenuOpen(false); }}
                  className="w-full text-left px-4 py-2 text-sm font-medium"
                  style={{ color: activeTab === tab.id ? '#0F172A' : '#6B7280' }}
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

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-3">
            <JupiterPlanet size={32} />
            <div>
              <p className="font-bold text-white text-sm">Jupiter Prep</p>
              <p className="text-stone-400 text-xs mt-0.5">Higher scores. Better outcomes.</p>
            </div>
          </div>
          <a href="mailto:jupiterprep1@gmail.com" className="text-stone-400 text-sm hover:text-white transition-colors">
            jupiterprep1@gmail.com
          </a>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-stone-800">
          <p className="text-stone-600 text-xs">&copy; {new Date().getFullYear()} Jupiter Prep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
