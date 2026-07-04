import CtaButton from '../components/CtaButton';

type HomePageProps = {
  onNavigateContact: () => void;
};

export default function HomePage({ onNavigateContact }: HomePageProps) {
  return (
    <div className="bg-stone-50">
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-stone-900 mb-8 text-balance">
            Higher scores.<br />Better outcomes.
          </h1>
          <p className="text-xl text-stone-600 max-w-xl mx-auto leading-relaxed mb-12">
            Premium tutoring designed to unlock potential and deliver results that open doors.
          </p>
          <CtaButton
            onNavigateContact={onNavigateContact}
            className="inline-block bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium py-4 px-10 transition-colors"
          >
            Book a consultation
          </CtaButton>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-stone-900 mb-4">
            What we offer
          </h2>
          <p className="text-stone-600 text-lg mb-12">
            Personalized support across standardized testing, college admissions, and academics.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-stone-900 text-lg font-semibold mb-3">SAT Tutoring</h3>
              <p className="text-stone-600 leading-relaxed">
                Targeted instruction across Reading & Writing and Math, with proven strategies to maximize your score.
              </p>
            </div>
            <div>
              <h3 className="text-stone-900 text-lg font-semibold mb-3">ACT Tutoring</h3>
              <p className="text-stone-600 leading-relaxed">
                Full-test preparation covering English, Math, Reading, and Science with personalized pacing plans.
              </p>
            </div>
            <div>
              <h3 className="text-stone-900 text-lg font-semibold mb-3">College Consulting</h3>
              <p className="text-stone-600 leading-relaxed">
                Guidance on school selection, application strategy, essays, and positioning to stand out to admissions.
              </p>
            </div>
            <div>
              <h3 className="text-stone-900 text-lg font-semibold mb-3">AP & Math Help</h3>
              <p className="text-stone-600 leading-relaxed">
                Subject-level support for AP courses and math from Algebra through Calculus and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Proven results
          </h2>
          <p className="text-xl text-stone-400 mb-16 max-w-xl mx-auto">
            Students consistently achieve significant score improvements through focused, personalized instruction.
          </p>
          <div className="grid grid-cols-3 gap-8 text-left">
            <div>
              <p className="text-5xl font-semibold text-amber-400 mb-2">80+</p>
              <p className="text-stone-500 text-sm tracking-wider uppercase">Students taught</p>
            </div>
            <div>
              <p className="text-5xl font-semibold text-amber-400 mb-2">150+</p>
              <p className="text-stone-500 text-sm tracking-wider uppercase">Avg. SAT score increase</p>
            </div>
            <div>
              <p className="text-5xl font-semibold text-amber-400 mb-2">100%</p>
              <p className="text-stone-500 text-sm tracking-wider uppercase">Satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-stone-900 mb-4">
            Math courses we cover
          </h2>
          <p className="text-stone-600 text-lg mb-12">
            From foundational algebra to advanced calculus:
          </p>
          <div className="flex flex-wrap gap-3">
            {['Algebra I', 'Geometry', 'Algebra II', 'Precalculus', 'Calculus'].map((subject) => (
              <span
                key={subject}
                className="bg-amber-50 border border-amber-200 px-4 py-2 text-stone-700 text-sm font-medium"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-100 border-t border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-stone-900 mb-4">
            Ready to begin?
          </h2>
          <p className="text-stone-600 text-lg mb-8">
            Schedule a free consultation to discuss goals and create a customized plan.
          </p>
          <CtaButton
            onNavigateContact={onNavigateContact}
            className="inline-block bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium py-4 px-10 transition-colors"
          >
            Get started
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
