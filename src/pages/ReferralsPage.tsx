import { useState } from 'react';
import CtaButton from '../components/CtaButton';
import { useScrollFade } from '../hooks/useScrollFade';

interface Referral {
  id: string;
  student_name: string;
  testimonial: string;
  image_path?: string;
  tag: string;
}

const REFERRALS: Referral[] = [
  {
    id: '1',
    student_name: 'Cristiano Allum',
    tag: 'Jupiter SAT',
    testimonial: "Jupiter Prep's SAT tutoring really helped me understand my shortcomings on the exam. Jupiter Prep helped me tackle my weaknesses specifically on the math second module and take the test more confidently and efficiently than ever before!",
    image_path: '/9B8DC41E-DAC3-49B8-85CE-4B7401849B08.jpeg',
  },
  {
    id: '2',
    student_name: 'Enzo Wjuniski',
    tag: 'Jupiter SAT',
    testimonial: "Before starting tutoring with Jupiter Prep, I was overrelying on Desmos and kept cutting corners on math problems everywhere on the SAT. With Jupiter Prep's help, I grasped how to fully understand the concepts behind each question and with only 3 weeks of tutoring, increased my score by 70 points.",
    image_path: '/7C8BB174-E0AE-4215-ABAB-C9D403CCC5DE.jpeg',
  },
  {
    id: '3',
    student_name: 'Aarav Verenkar',
    tag: 'Jupiter SAT',
    testimonial: "Jupiter Prep's SAT tutoring is phenomenal. Their style of teaching and methods of explanation are beyond what a regular tutor can provide for someone. The explanations are in-depth and thorough, and the lessons are very consistent to make sure you truly learn the material. 100% recommend getting tutored by Jupiter Prep!",
    image_path: '/images/tutors/aarav.png',
  },
  {
    id: '4',
    student_name: 'Asher Canter',
    tag: 'Jupiter SAT',
    testimonial: "With Jupiter Prep, my SAT score jumped drastically. After just a couple sessions, my score increased by over 200 points and I felt a great amount of confidence from the tutoring sessions. At first, I struggled with math, but since I started taking tutoring lessons, I felt so good with it and had no worries whatsoever. If I had to recommend anyone I'd definitely say Jupiter Prep because they know what they're doing.",
    image_path: '/images/tutors/asher.jpeg',
  },
  {
    id: '5',
    student_name: 'Omar Abouelenin',
    tag: 'Jupiter SAT',
    testimonial: "Jupiter Prep's tutoring was very helpful, and I was able to obtain all the information easily. I was able to quickly learn new tips and tricks that have helped me immensely while taking the SAT.",
    image_path: '/images/tutors/omar.jpg',
  },
  {
    id: '6',
    student_name: 'Leo Hillock',
    tag: 'Jupiter SAT',
    testimonial: "I've been struggling on getting my math score up on the SAT, and so I started receiving tutoring from Jupiter Prep. Ever since, I've learned many little tricks that help in so many situations. My tutor was great at explaining things so that you not only understand them in the moment, but so that the concepts also stay with you in the long run. I'm confident that on my next SAT I'll be able to improve my score by great margins because of Jupiter Prep.",
    image_path: '/images/tutors/leo.jpeg',
  },
  {
    id: '7',
    student_name: 'Jade Capella',
    tag: 'Jupiter SAT',
    testimonial: "The way Jupiter Prep explained each problem changed how I approach the SAT. I stopped memorizing tricks and started understanding the reasoning, and that shift took me from a 1380 to a 1540. Their custom math packet was harder than anything in the official banks, so the real test felt easy.",
    image_path: '/images/tutors/jade.jpeg',
  },
  {
    id: '8',
    student_name: 'Pietro Wjuniski',
    tag: 'Jupiter SAT',
    testimonial: "I was struggling with my geometry exams and quizzes, but Jupiter Prep helped fix that. My tutor was amazing and helped me work through every problem I had difficulty with, and even gave me some nice tips to help me memorize long formulas and cut down the work on tedious questions. If I had to recommend any service, it would definitely be Jupiter Prep.",
    image_path: '/images/tutors/pietro.jpeg',
  },
  {
    id: '9',
    student_name: 'Valida Aliyeva',
    tag: 'Jupiter SAT',
    testimonial: "The sessions I received from Jupiter Prep's tutoring helped me improve my score and learn new tips and tricks that I hadn't previously known. What stood out most was how personalized each session felt, my tutor always made sure I actually understood the material before moving on.",
    image_path: '/images/tutors/valida.jpeg',
  },
  {
    id: '10',
    student_name: 'Izabel Karrer',
    tag: 'Jupiter SAT',
    testimonial: "Jupiter Prep's tutoring really helped solidify my understanding of math concepts, and I also liked how my tutor went over the more challenging questions so I'd be prepared for the easier ones. That approach built a level of confidence I didn't have going in, and it showed on test day.",
    image_path: '/images/tutors/izabel.jpg',
  },
];

function FadeSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, style } = useScrollFade(delay);
  return <div ref={ref} style={style} className={className}>{children}</div>;
}

type ReferralsPageProps = {
  onNavigateContact: () => void;
};

export default function ReferralsPage({ onNavigateContact }: ReferralsPageProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="bg-stone-50">
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <FadeSection>
            <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Results</p>
            <div className="flex items-center gap-4 mb-8">
              <h1 className="text-stone-900">Success stories</h1>
              <img src="/mascot.png" alt="" aria-hidden="true" className="w-36 h-36 object-contain ml-2" />
            </div>
            <p className="text-stone-600 text-lg max-w-xl mb-16">
              When effort meets the right guidance, results follow.
            </p>
          </FadeSection>

          <div className="grid md:grid-cols-2 gap-8">
            {REFERRALS.map((referral, i) => (
              <FadeSection key={referral.id} delay={i * 60}>
                <div
                  onClick={() => setExpandedId(expandedId === referral.id ? null : referral.id)}
                  className="cursor-pointer group"
                >
                  {expandedId !== referral.id ? (
                    <div className="grid grid-cols-[1fr,2fr] gap-6 bg-white border border-stone-200 transition-all duration-250 hover:shadow-md hover:-translate-y-0.5 hover:border-amber-300">
                      {referral.image_path ? (
                        <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
                          <img src={referral.image_path} alt={referral.student_name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="aspect-[4/5] bg-stone-100 flex items-center justify-center">
                          <span className="text-stone-300 text-4xl font-semibold">{referral.student_name.charAt(0)}</span>
                        </div>
                      )}
                      <div className="py-8 pr-8 flex flex-col justify-center">
                        <h3 className="text-stone-900 text-2xl font-semibold mb-2">{referral.student_name}</h3>
                        <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 italic">"{referral.testimonial}"</p>
                        <p className="text-amber-600 text-xs font-medium tracking-wider uppercase mt-4">{referral.tag}</p>
                        <p className="text-stone-400 text-xs mt-1 group-hover:text-amber-500 transition-colors">Click to expand</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-stone-900 text-stone-50 p-8">
                      <p className="text-amber-400 text-xs font-medium tracking-wider uppercase mb-3">{referral.tag}</p>
                      <h3 className="text-white text-2xl font-semibold mb-4">{referral.student_name}</h3>
                      <p className="text-stone-300 leading-relaxed italic">"{referral.testimonial}"</p>
                      <p className="text-stone-500 text-xs mt-6">Click to collapse</p>
                    </div>
                  )}
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeSection>
            <h2 className="text-white mb-4">Proven track record</h2>
            <p className="text-stone-400 text-lg mb-8">
              Each success represents dedication, personalized instruction, and real results.
            </p>
            <CtaButton
              onNavigateContact={onNavigateContact}
              className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium py-4 px-10 transition-all duration-200 hover:scale-[1.02]"
            >
              Start your journey
            </CtaButton>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
