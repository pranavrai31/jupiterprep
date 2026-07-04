import CtaButton from '../components/CtaButton';

type HomePageProps = {
  onNavigateContact: () => void;
};

export default function HomePage({ onNavigateContact }: HomePageProps) {
  return (
    <div className="bg-stone-50">

      {/* Hero */}
      <section className="min-h-[92vh] flex items-center px-6 pt-8">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-stone-900 mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1px' }}>
              Higher scores.<br />
              Better outcomes.
            </h1>
            <p className="text-stone-500 mb-10 max-w-md" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
              Premium tutoring designed to unlock potential and deliver results that open doors.
            </p>
            <CtaButton
              onNavigateContact={onNavigateContact}
              className="inline-block bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium py-4 px-10 transition-colors"
            >
              Book a free consultation with us!
            </CtaButton>
          </div>

          {/* Mascot — transparent PNG, no box */}
          <div className="flex justify-center items-center">
            <img
              src="/mascot.png"
              alt="Jupiter Prep mascot"
              className="w-full max-w-sm md:max-w-md mascot-float"
              style={{ objectFit: 'contain', background: 'transparent' }}
            />
          </div>
        </div>
      </section>

      {/* Proven results — dark section matching original */}
      <section className="py-20 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontWeight: 900 }}>Proven results</h2>
          <p className="text-stone-400 text-lg mb-16 max-w-xl mx-auto">
            Students consistently achieve significant score improvements through focused, personalized instruction.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '80+', label: 'Students Taught' },
              { value: '150+', label: 'Avg. SAT Score Increase' },
              { value: '100%', label: 'Satisfaction Rate' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p style={{ color: '#F59E0B', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900 }}>{value}</p>
                <p className="text-stone-500 uppercase mt-1" style={{ fontSize: '11px', letterSpacing: '2px' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-stone-900 mb-3" style={{ fontWeight: 900 }}>What we offer</h2>
          <p className="text-stone-500 text-lg mb-16 max-w-xl">
            Personalized support across standardized testing, college admissions, and academics.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: 'SAT Tutoring', desc: 'Targeted instruction across Reading & Writing and Math, with proven strategies to maximize your score.' },
              { title: 'ACT Tutoring', desc: 'Full-test preparation covering English, Math, Reading, and Science with personalized pacing plans.' },
              { title: 'College Consulting', desc: 'Guidance on school selection, application strategy, essays, and positioning to stand out to admissions.' },
              { title: 'AP & Math Help', desc: 'Subject-level support for AP courses and math from Algebra through Calculus and beyond.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border-t-2 border-stone-200 pt-8">
                <h3 className="text-stone-900 font-bold text-xl mb-3">{title}</h3>
                <p className="text-stone-500" style={{ lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Math courses */}
      <section className="py-16 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-stone-900 mb-2" style={{ fontWeight: 900, fontSize: '1.6rem' }}>Math courses we cover</h2>
          <p className="text-stone-500 mb-8">From foundational algebra to advanced calculus:</p>
          <div className="flex flex-wrap gap-3">
            {['Algebra I', 'Geometry', 'Algebra II', 'Precalculus', 'Calculus'].map((s) => (
              <span key={s} className="px-5 py-2 bg-white border border-stone-200 text-stone-900 font-medium text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontWeight: 900 }}>Ready to begin?</h2>
          <p className="text-stone-400 text-lg mb-10">
            Schedule a free consultation to discuss your goals and create a customized plan.
          </p>
          <CtaButton
            onNavigateContact={onNavigateContact}
            className="inline-block bg-stone-50 hover:bg-white text-stone-900 font-medium py-4 px-10 transition-colors"
          >
            Get started
          </CtaButton>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        .mascot-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
