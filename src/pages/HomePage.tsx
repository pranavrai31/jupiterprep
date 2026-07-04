import CtaButton from '../components/CtaButton';
import JupiterMascot from '../components/JupiterMascot';

type HomePageProps = {
  onNavigateContact: () => void;
};

export default function HomePage({ onNavigateContact }: HomePageProps) {
  return (
    <div style={{ backgroundColor: '#FFF7ED' }}>

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 pt-16 pb-8">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p style={{ color: '#F59E0B', fontSize: '13px', fontWeight: 700, letterSpacing: '3px' }} className="uppercase mb-6">
              Premium SAT & ACT Tutoring
            </p>
            <h1 style={{ color: '#0F172A', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1px' }} className="mb-6">
              Higher scores.<br />
              <span style={{ color: '#F59E0B' }}>Better outcomes.</span>
            </h1>
            <p style={{ color: '#4B5563', fontSize: '1.2rem', lineHeight: 1.7 }} className="mb-10 max-w-md">
              Premium tutoring from elite students who aced the tests — designed to unlock your potential and open doors.
            </p>
            <div className="flex flex-wrap gap-4">
              <CtaButton
                onNavigateContact={onNavigateContact}
                className="inline-block font-bold py-4 px-10 transition-all hover:opacity-90"
                style={{ backgroundColor: '#0F172A', color: '#FFF7ED', fontSize: '15px', letterSpacing: '0.5px' } as React.CSSProperties}
              >
                Book a consultation
              </CtaButton>
              <CtaButton
                onNavigateContact={onNavigateContact}
                className="inline-block font-bold py-4 px-10 transition-all hover:opacity-90"
                style={{ backgroundColor: 'transparent', color: '#0F172A', fontSize: '15px', border: '2px solid #0F172A' } as React.CSSProperties}
              >
                Learn more →
              </CtaButton>
            </div>
          </div>
          <div className="flex justify-center">
            <JupiterMascot className="w-full max-w-sm md:max-w-md drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: '#0F172A' }} className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '80+', label: 'Students Taught' },
            { value: '150+', label: 'Avg. SAT Score Increase' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p style={{ color: '#F59E0B', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900 }}>{value}</p>
              <p style={{ color: '#94A3B8', fontSize: '12px', letterSpacing: '2px' }} className="uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 px-6" style={{ backgroundColor: '#FFF7ED' }}>
        <div className="max-w-5xl mx-auto">
          <p style={{ color: '#F59E0B', fontSize: '12px', fontWeight: 700, letterSpacing: '3px' }} className="uppercase mb-4">Services</p>
          <h2 style={{ color: '#0F172A', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900 }} className="mb-4">What we offer</h2>
          <p style={{ color: '#6B7280', fontSize: '1.1rem' }} className="mb-16 max-w-xl">
            Personalized support across standardized testing, college admissions, and academics.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'SAT Tutoring', desc: 'Targeted instruction across Reading & Writing and Math, with proven strategies to maximize your score.', icon: '📐' },
              { title: 'ACT Tutoring', desc: 'Full-test preparation covering English, Math, Reading, and Science with personalized pacing plans.', icon: '📝' },
              { title: 'College Consulting', desc: 'Guidance on school selection, application strategy, essays, and positioning to stand out to admissions.', icon: '🎓' },
              { title: 'AP & Math Help', desc: 'Subject-level support for AP courses and math from Algebra through Calculus and beyond.', icon: '📊' },
            ].map(({ title, desc, icon }) => (
              <div key={title}
                style={{ backgroundColor: 'white', border: '1.5px solid #F59E0B22', borderRadius: '2px' }}
                className="p-8 hover:shadow-md transition-shadow">
                <div style={{ fontSize: '2rem' }} className="mb-4">{icon}</div>
                <h3 style={{ color: '#0F172A', fontWeight: 800, fontSize: '1.1rem' }} className="mb-3">{title}</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Math courses */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F59E0B11' }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: '#0F172A', fontWeight: 900, fontSize: '1.6rem' }} className="mb-2">Math courses we cover</h2>
          <p style={{ color: '#6B7280' }} className="mb-8">From foundational algebra to advanced calculus:</p>
          <div className="flex flex-wrap gap-3">
            {['Algebra I', 'Geometry', 'Algebra II', 'Precalculus', 'Calculus'].map((s) => (
              <span key={s}
                style={{ backgroundColor: 'white', border: '1.5px solid #F59E0B', color: '#0F172A', fontWeight: 600, fontSize: '14px', borderRadius: '2px' }}
                className="px-5 py-2">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: '#FFF7ED', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)' }} className="mb-4">
            Ready to begin?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem' }} className="mb-10">
            Schedule a free consultation to discuss your goals and create a customized plan.
          </p>
          <CtaButton
            onNavigateContact={onNavigateContact}
            className="inline-block font-bold py-4 px-12 transition-all hover:opacity-90"
            style={{ backgroundColor: '#F59E0B', color: '#0F172A', fontSize: '15px', letterSpacing: '0.5px' } as React.CSSProperties}
          >
            Get started
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
