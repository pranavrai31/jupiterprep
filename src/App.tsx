import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReferralsPage from './pages/ReferralsPage';
import { JupiterFullLogo } from './components/JupiterLogo';

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
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      {/* Nav */}
      <nav style={{ backgroundColor: 'rgba(255,247,237,0.92)', borderBottom: '1px solid #F59E0B22' }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => setActiveTab('home')} className="flex items-center">
              <JupiterFullLogo height={40} />

            <div className="hidden md:flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="text-sm font-medium transition-colors"
                  style={{
                    color: activeTab === tab.id ? '#0F172A' : '#6B7280',
                    fontWeight: activeTab === tab.id ? 700 : 500,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: '#0F172A' }}
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
                  className="w-full text-left px-4 py-2 text-sm font-medium transition-colors"
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
      <footer style={{ backgroundColor: '#0F172A', color: '#FFF7ED' }} className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-center gap-3">
              <JupiterFullLogo height={48} />
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <a href="mailto:jupiterprep1@gmail.com"
                style={{ color: '#94A3B8', fontSize: '14px' }}
                className="hover:text-white transition-colors">
                jupiterprep1@gmail.com
              </a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1E293B' }} className="mt-8 pt-8">
            <p style={{ color: '#475569', fontSize: '12px' }}>
              &copy; {new Date().getFullYear()} Jupiter Prep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
