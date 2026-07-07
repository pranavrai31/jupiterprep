import { useEffect, useRef, useState } from 'react';
import CtaButton from '../components/CtaButton';
import { useScrollFade } from '../hooks/useScrollFade';

type HomePageProps = {
  onNavigateContact: () => void;
};

function AnimatedStat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p style={{ color: '#F59E0B', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, fontVariantNumeric: 'tabular-nums' }}>
        {count}{suffix}
      </p>
      <p className="text-stone-500 uppercase mt-1" style={{ fontSize: '11px', letterSpacing: '2px' }}>{label}</p>
    </div>
  );
}

function FadeSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, style } = useScrollFade(delay);
  return <div ref={ref} style={style} className={className}>{children}</div>;
}

export default function HomePage({ onNavigateContact }: HomePageProps) {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const heroStyle: React.CSSProperties = {
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  };

  const heroStyle2: React.CSSProperties = {
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s ease 150ms, transform 0.7s ease 150ms',
  };

  const heroStyle3: React.CSSProperties = {
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s ease 300ms, transform 0.7s ease 300ms',
  };

  return (
    <div className="bg-stone-50">

      {/* Hero */}
      <section className="min-h-[92vh] flex items-center px-6 pt-8">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div style={heroStyle}>
              <h1 className="text-stone-900 mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1px' }}>
                Higher scores.<br />
                Better outcomes.
              </h1>
            </div>
            <div style={heroStyle2}>
              <p className="text-stone-500 mb-10 max-w-md" style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
                We don't use prep books. We build custom problem sets targeting your exact weak areas, because generic prep gets generic results.
              </p>
            </div>
            <div style={heroStyle3}>
              <CtaButton
                onNavigateContact={onNavigateContact}
                className="inline-block bg-stone-900 text-stone-50 font-medium py-4 px-10 transition-all duration-200 hover:scale-[1.02] hover:bg-stone-800"
              >
                Book a free consultation with us!
              </CtaButton>
            </div>
          </div>
          <div className="flex justify-center items-center" style={heroStyle2}>
            <img
              src="/mascot.png"
              alt="Jupiter Prep mascot"
              className="w-full max-w-md md:max-w-lg mascot-float"
              style={{ objectFit: 'contain', background: 'transparent' }}
            />
          </div>
        </div>
      </section>

      {/* Animated stats */}
      <section className="py-20 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto text-center">
          <FadeSection>
            <h2 className="text-white mb-4" style={{ fontWeight: 900 }}>Proven results</h2>
            <p className="text-stone-400 text-lg mb-16 max-w-xl mx-auto">
              Students consistently achieve significant score improvements through focused, personalized instruction.
            </p>
          </FadeSection>
          <div className="grid grid-cols-3 gap-8">
            <AnimatedStat target={80} suffix="+" label="Students Taught" />
            <AnimatedStat target={150} suffix="+" label="Avg. SAT Score Increase" />
            <AnimatedStat target={100} suffix="%" label="Satisfaction Rate" />
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <h2 className="text-stone-900 mb-3" style={{ fontWeight: 900 }}>What we offer</h2>
            <p className="text-stone-500 text-lg mb-4 max-w-2xl">
              Personalized support across standardized testing, college admissions, and academics.
            </p>
            <p className="text-amber-600 font-medium mb-16 max-w-2xl">
              We don't use prep books. Every student gets a custom problem set built around their specific weak areas, so you're always working on exactly what moves your score.
            </p>
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'SAT Tutoring', desc: 'Targeted instruction across Reading and Writing and Math, with custom problem sets built from your diagnostic results, not generic workbooks.', logo: '/logo-sat.png' },
              { title: 'ACT Tutoring', desc: 'Full-test preparation covering English, Math, Reading, and Science with personalized pacing plans tailored to your testing style.', logo: '/logo-act.png' },
              { title: 'College Consulting', desc: 'Real guidance on school selection, essay strategy, and positioning from tutors who just went through the process and got into top schools.', logo: '/logo-acorns.jpg' },
              { title: 'AP & Math Help', desc: 'Subject-level support from Algebra through Calculus and AP courses, taught conceptually so the knowledge sticks beyond the test.', logo: '/logo-ap.png' },
            ].map(({ title, desc, logo }, i) => (
              <FadeSection key={title} delay={i * 80}>
                <div className="bg-white border border-stone-200 p-8 h-full transition-all duration-250 hover:shadow-lg hover:-translate-y-1 hover:border-amber-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={logo} alt={title} className="w-8 h-8 object-contain rounded" />
                    <h3 className="text-stone-900 font-bold text-xl group-hover:text-amber-600 transition-colors duration-200">{title}</h3>
                  </div>
                  <p className="text-stone-500" style={{ lineHeight: 1.7 }}>{desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Math courses */}
      <section className="py-16 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <h2 className="text-stone-900 mb-2" style={{ fontWeight: 900, fontSize: '1.6rem' }}>Math courses we cover</h2>
            <p className="text-stone-500 mb-8">From foundational algebra to advanced calculus:</p>
            <div className="flex flex-wrap gap-3">
              {['Algebra I', 'Geometry', 'Algebra II', 'Precalculus', 'Calculus'].map((s) => (
                <span
                  key={s}
                  className="px-5 py-2 bg-white rounded-full border border-stone-200 text-stone-900 font-medium text-sm transition-all duration-200 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-105 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-3xl mx-auto text-center">
          <FadeSection>
            <h2 className="text-white mb-4" style={{ fontWeight: 900 }}>Ready to begin?</h2>
            <p className="text-stone-400 text-lg mb-10">
              Schedule a free consultation to discuss your goals and create a customized plan.
            </p>
            <CtaButton
              onNavigateContact={onNavigateContact}
              className="inline-block bg-stone-50 hover:bg-white text-stone-900 font-medium py-4 px-10 transition-all duration-200 hover:scale-[1.02]"
            >
              Get started
            </CtaButton>
          </FadeSection>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        .mascot-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
