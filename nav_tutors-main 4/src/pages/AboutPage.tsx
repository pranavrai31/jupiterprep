import CtaButton from '../components/CtaButton';

const tutors = [
  {
    name: 'Pranav Rai',
    role: 'Co-Founder / Tutor',
    school: 'Incoming Freshman — University of Michigan Ross School of Business',
    sat: '1540',
    image: '/images/tutors/Pranav_headshot.png',
  },
  {
    name: 'Hamid Moghaddam Adames',
    role: 'Co-Founder / Tutor',
    school: 'Incoming Freshman — University of Florida',
    sat: '1500',
    image: '/images/tutors/ChatGPT_Image_Jul_2,_2026,_05_47_32_PM.png',
  },
  {
    name: 'Andrey Vasilyev',
    role: 'Tutor',
    school: 'Incoming Senior — American Heritage School',
    sat: '1540',
    image: '/images/tutors/FullSizeRender_(1).jpeg',
  },
  {
    name: 'Anagha Iyer',
    role: 'Tutor',
    school: 'Incoming Freshman — Stanford University',
    sat: '1550',
    image: '/images/tutors/Facetune_08-05-2026-18-50-34_(1).jpeg',
  },
  {
    name: 'Aaron Pinto',
    role: 'Tutor',
    school: 'Incoming Freshman — Carnegie Mellon University',
    sat: '1540',
    image: '/images/tutors/dfb63f4e-83c8-439a-895d-e67bc6e97fe8_(1).JPEG',
  },
  {
    name: 'Nathan Lee',
    role: 'Tutor',
    school: 'Incoming Freshman — UNC Chapel Hill',
    sat: '1540',
    image: '/images/tutors/IMG_8740.JPEG',
  },
  {
    name: 'Jason Tang',
    role: 'Tutor',
    school: 'Incoming Freshman — University of Pennsylvania',
    sat: '1570',
    image: '/images/tutors/ChatGPT_Image_Jul_2,_2026,_06_32_14_PM.png',
  },
];

type AboutPageProps = {
  onNavigateContact: () => void;
};

export default function AboutPage({ onNavigateContact }: AboutPageProps) {
  return (
    <div className="bg-stone-50">
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Our Team</p>
          <h1 className="text-stone-900 mb-4">
            Meet the tutors
          </h1>
          <p className="text-stone-500 text-lg max-w-xl mb-16">
            Elite students from top universities who know exactly what it takes to score at the highest levels.
          </p>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible scrollbar-hide">
            {tutors.map((tutor) => (
              <div key={tutor.name} className="flex-none w-56 snap-start lg:w-auto">
                <div className="aspect-[3/4] bg-stone-200 overflow-hidden mb-4">
                  {tutor.image ? (
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-stone-200">
                      <span className="text-stone-400 text-sm">Photo coming soon</span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-amber-600 text-xs font-medium tracking-wider uppercase mb-1">{tutor.role}</p>
                  <h3 className="text-stone-900 font-semibold text-base leading-snug mb-1">{tutor.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-1">{tutor.school}</p>
                  <p className="text-stone-700 text-sm font-medium">SAT: {tutor.sat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-stone-900 mb-12">
            Teaching philosophy
          </h2>
          <div className="space-y-8">
            {[
              { n: '01', title: 'Personalized approach', body: 'Every session is tailored to individual learning styles and specific goals.' },
              { n: '02', title: 'Conceptual understanding', body: 'Focus on mastering fundamentals rather than memorizing answers.' },
              { n: '03', title: 'Confidence building', body: 'Developing the mindset to tackle challenges and reduce test anxiety.' },
              { n: '04', title: 'Proven strategies', body: 'Time management techniques and test-taking methods refined through experience.' },
              { n: '05', title: 'Progress tracking', body: 'Regular assessment and adaptive planning to ensure continuous improvement.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="grid lg:grid-cols-[auto,1fr] gap-4 items-start">
                <span className="text-amber-600 text-sm font-medium">{n}</span>
                <div>
                  <h3 className="text-stone-900 text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-stone-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">
            Let's connect
          </h2>
          <p className="text-stone-400 text-lg mb-8">
            Schedule a consultation to discuss academic goals.
          </p>
          <CtaButton
            onNavigateContact={onNavigateContact}
            className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium py-4 px-10 transition-colors"
          >
            Book consultation
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
