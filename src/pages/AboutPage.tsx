import { useState } from 'react';
import CtaButton from '../components/CtaButton';
import { useScrollFade } from '../hooks/useScrollFade';

const founders = [
  {
    name: 'Pranav Rai',
    role: 'Co-Founder',
    school: 'University of Michigan Ross School of Business, Class of 2030',
    image: '/images/tutors/Pranav_headshot.png',
  },
  {
    name: 'Hamid Moghaddam Adames',
    role: 'Co-Founder',
    school: 'University of Florida, Class of 2030',
    image: '/images/tutors/ChatGPT_Image_Jul_2,_2026,_05_47_32_PM.png',
  },
];

const tutors = [
  {
    name: 'Andrey Vasilyev',
    role: 'Tutor',
    school: 'American Heritage School, Rising Senior',
    scores: 'SAT: 1540 | ACT: 35',
    specializes: ['SAT', 'ACT', 'Mathematics'],
    tip: 'On the SAT math section, always re-read what the question is actually asking before solving. Half the time students solve the right equation but answer the wrong thing.',
    image: '/images/tutors/FullSizeRender_(1).jpeg',
  },
  {
    name: 'Anagha Iyer',
    role: 'Tutor',
    school: 'Stanford University, Class of 2030',
    scores: 'SAT: 1550',
    specializes: ['SAT', 'College Consulting'],
    tip: 'Your college essay is not about impressing anyone. It is about letting them hear your actual voice. Write the draft you would never send, then clean it up. The realness is what gets remembered.',
    image: '/images/tutors/Facetune_08-05-2026-18-50-34_(1).jpeg',
  },
  {
    name: 'Aaron Pinto',
    role: 'Tutor',
    school: 'Carnegie Mellon University, Class of 2030',
    scores: 'SAT: 1540',
    specializes: ['SAT'],
    tip: 'Eliminate before you guess. On every multiple choice question, cross out the two answers you are most confident are wrong. Your odds go from 25% to 50% instantly.',
    image: '/images/tutors/dfb63f4e-83c8-439a-895d-e67bc6e97fe8_(1).JPEG',
  },
  {
    name: 'Nathan Lee',
    role: 'Tutor',
    school: 'UNC Chapel Hill, Class of 2030',
    scores: 'SAT: 1540',
    specializes: ['SAT'],
    tip: 'Time management is the hidden skill on the SAT. Practice pacing with a stopwatch before you ever worry about content. Knowing when to move on is worth more than knowing one extra formula.',
    image: '/images/tutors/IMG_8740.JPEG',
  },
  {
    name: 'Jason Tang',
    role: 'Tutor',
    school: 'University of Pennsylvania, Class of 2030',
    scores: 'SAT: 1570',
    specializes: ['College Consulting', 'Mathematics'],
    tip: 'For college essays, specificity beats grandeur every time. "I learned to lead" is forgettable. "I learned to lead when our robot arm snapped 30 minutes before competition" sticks.',
    image: '/images/tutors/ChatGPT_Image_Jul_2,_2026,_06_32_14_PM.png',
  },
  {
    name: 'Alan Joseph',
    role: 'Tutor',
    school: 'American Heritage School, Rising Senior',
    scores: 'SAT: 1530',
    specializes: ['SAT', 'Mathematics'],
    tip: 'On reading passages, do not try to memorize everything. Just get the main idea of each paragraph as you go. When a question comes up, you will know exactly where to look.',
    image: '/images/tutors/alan.jpeg',
  },
  {
    name: 'Adina Brody',
    role: 'Tutor',
    school: 'MAST @ FIU, Rising Senior',
    scores: 'ACT: 36',
    specializes: ['ACT'],
    tip: 'The ACT Science section is not actually testing science knowledge. It is testing your ability to read graphs and tables quickly. Practice data interpretation and your score will jump.',
    image: '/images/tutors/adina.jpeg',
  },
  {
    name: 'Renier Quintero',
    role: 'Tutor',
    school: 'Harvard University, Class of 2030',
    scores: 'SAT: 1560 | ACT: 36',
    specializes: ['SAT', 'ACT', 'College Consulting'],
    tip: 'When it comes to college applications, the students who stand out are the ones who own their story. Do not try to sound like what you think admissions wants to hear. Be specific, be honest, and be yourself.',
    image: '/images/tutors/renier.png',
  },
  {
    name: 'Jonathan Schwartz',
    role: 'Tutor',
    school: 'American Heritage School, Rising Senior',
    scores: 'SAT: 1590',
    specializes: ['SAT'],
    tip: 'A 1590 comes down to near-perfect accuracy, not speed. Slow down on the questions you are most confident about. Careless errors on easy questions are what separate a 1500 from a 1590.',
    image: '/images/tutors/jonathan.jpeg',
  },
];

const FILTERS = ['All', 'SAT', 'ACT', 'Mathematics', 'College Consulting'];

function FadeSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, style } = useScrollFade(delay);
  return <div ref={ref} style={style} className={className}>{children}</div>;
}

type AboutPageProps = {
  onNavigateContact: () => void;
};

export default function AboutPage({ onNavigateContact }: AboutPageProps) {
  const [flipped, setFlipped] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTutors = activeFilter === 'All'
    ? tutors
    : tutors.filter(t => t.specializes.includes(activeFilter));

  return (
    <div className="bg-stone-50">

      {/* Founders */}
      <section className="px-6 pt-24 pb-0">
        <div className="max-w-6xl mx-auto">
          <FadeSection>
            <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Our Founders</p>
            <h1 className="text-stone-900 mb-12">Meet the founders</h1>
          </FadeSection>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <FadeSection delay={100} className="flex gap-6 flex-shrink-0">
              {founders.map((founder) => (
                <div key={founder.name} className="w-48">
                  <div className="aspect-[3/4] bg-stone-200 overflow-hidden mb-3">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="text-amber-600 text-xs font-medium tracking-wider uppercase mb-0.5">{founder.role}</p>
                  <h3 className="text-stone-900 font-semibold text-sm leading-snug mb-0.5">{founder.name}</h3>
                  <p className="text-stone-500 text-xs">{founder.school}</p>
                </div>
              ))}
            </FadeSection>

            <FadeSection delay={200} className="border-l-4 border-amber-500 pl-6 max-w-lg">
              <p className="text-stone-700 text-base leading-relaxed mb-4">
                What sets Jupiter Prep apart isn't just our results, it's the community we've built around them. Over the past year, we've worked closely with students one-on-one, learning firsthand what truly moves the needle on SAT scores and what doesn't.
              </p>
              <p className="text-stone-700 text-base leading-relaxed mb-4">
                Every tutor on our team has been professionally trained by us. We've passed on what we know works, while giving each of them the freedom to develop their own natural teaching style.
              </p>
              <p className="text-stone-700 text-base leading-relaxed">
                We started Jupiter Prep because we wanted to offer something different: real mentorship, proven strategies, and the kind of personalized attention that creates lasting improvement. We're proud of what this team has built, and we're just getting started.
              </p>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Mascot divider */}
      <div className="relative max-w-6xl mx-auto px-6 h-48 overflow-visible">
        <img src="/mascot.png" alt="" aria-hidden="true" className="absolute right-6 top-0 w-72 opacity-90 mascot-bounce" />
      </div>

      {/* Tutors */}
      <section className="px-6 pb-16 pt-0">
        <div className="max-w-6xl mx-auto">
          <FadeSection>
            <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Our Team</p>
            <h2 className="text-stone-900 mb-2">Meet the tutors</h2>
            <p className="text-stone-500 text-base max-w-xl mb-3">
              Elite students from top universities who know exactly what it takes to score at the highest levels.
            </p>
            <p className="text-amber-600 text-sm mb-8">Click any tutor card to flip it and see their tip.</p>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-12">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => { setActiveFilter(f); setFlipped(null); }}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: activeFilter === f ? '#0F172A' : 'white',
                    color: activeFilter === f ? '#FFF7ED' : '#374151',
                    border: activeFilter === f ? '1.5px solid #0F172A' : '1.5px solid #D1D5DB',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredTutors.map((tutor, i) => (
              <FadeSection key={tutor.name} delay={i * 60}>
                <div
                  className="flip-card cursor-pointer"
                  onClick={() => setFlipped(flipped === tutor.name ? null : tutor.name)}
                >
                  <div className={`flip-card-inner ${flipped === tutor.name ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                      <div className="aspect-[3/4] bg-stone-200 overflow-hidden mb-4 transition-opacity duration-200 hover:opacity-90">
                        <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover object-top" />
                      </div>
                      <p className="text-amber-600 text-xs font-medium tracking-wider uppercase mb-1">{tutor.role}</p>
                      <h3 className="text-stone-900 font-semibold text-sm leading-snug mb-1">{tutor.name}</h3>
                      <p className="text-stone-500 text-xs leading-relaxed mb-2">{tutor.school}</p>
                      <p className="text-stone-700 text-xs font-medium mb-2">{tutor.scores}</p>
                      <div className="flex flex-wrap gap-1">
                        {tutor.specializes.map((s) => (
                          <span key={s} className="text-xs px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-700 font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flip-card-back bg-stone-900 p-4 flex flex-col justify-center">
                      <p className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-3">Tutor tip</p>
                      <p className="text-stone-300 text-sm leading-relaxed italic">"{tutor.tip}"</p>
                      <p className="text-stone-600 text-xs mt-4">Click to flip back</p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <FadeSection>
            <h2 className="text-stone-900 mb-12">Teaching philosophy</h2>
          </FadeSection>
          <div className="space-y-8">
            {[
              { n: '01', title: 'Personalized approach', body: 'Every session is tailored to individual learning styles and specific goals.' },
              { n: '02', title: 'Conceptual understanding', body: 'Focus on mastering fundamentals rather than memorizing answers.' },
              { n: '03', title: 'Confidence building', body: 'Developing the mindset to tackle challenges and reduce test anxiety.' },
              { n: '04', title: 'Proven strategies', body: 'Time management techniques and test-taking methods refined through experience.' },
              { n: '05', title: 'Progress tracking', body: 'Regular assessment and adaptive planning to ensure continuous improvement.' },
            ].map(({ n, title, body }, i) => (
              <FadeSection key={n} delay={i * 80}>
                <div className="grid lg:grid-cols-[auto,1fr] gap-4 items-start">
                  <span className="text-amber-600 text-sm font-medium">{n}</span>
                  <div>
                    <h3 className="text-stone-900 text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-stone-600">{body}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeSection>
            <h2 className="text-white mb-4">Let's connect</h2>
            <p className="text-stone-400 text-lg mb-8">Schedule a consultation to discuss your academic goals.</p>
            <CtaButton
              onNavigateContact={onNavigateContact}
              className="inline-block bg-stone-50 hover:bg-white text-stone-900 font-medium py-4 px-10 transition-all duration-200 hover:scale-[1.02]"
            >
              Book a free consultation with us!
            </CtaButton>
          </FadeSection>
        </div>
      </section>

      <style>{`
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .mascot-bounce { animation: bounce-gentle 3s ease-in-out infinite; }
        .flip-card { perspective: 1000px; }
        .flip-card-inner {
          position: relative;
          width: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card-inner.flipped { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          transform: rotateY(180deg);
          min-height: 100%;
        }
      `}</style>
    </div>
  );
}
