import { useState } from 'react';
import CtaButton from '../components/CtaButton';

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
    testimonial: "Before starting tutoring with Jupiter Prep, I was overrelying on Desmos and kept cutting corners on math problems everywhere on the SAT. With Jupiter Prep's help, Jupiter Prep got me to fully understand the concepts behind each question and with only 3 weeks of tutoring, increased my score by 70 points.",
    image_path: '/7C8BB174-E0AE-4215-ABAB-C9D403CCC5DE.jpeg',
  },
  {
    id: '3',
    student_name: 'Aarav Verenkar',
    tag: 'Jupiter SAT',
    testimonial: "Jupiter Prep's SAT tutoring is phenomenal. Jupiter Prep's style of teaching and methods of explanation are beyond what a regular tutor can provide for someone. The explanations are in-depth and thorough, and Jupiter Prep's lessons are very consistent to make sure you truly learn the material. 100% recommend getting tutored by Jupiter Prep!",
    image_path: '/images/tutors/aarav.png',
  },
];

type ReferralsPageProps = {
  onNavigateContact: () => void;
};

export default function ReferralsPage({ onNavigateContact }: ReferralsPageProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="bg-stone-50">
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Results</p>
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-stone-900">Success stories</h1>
            <img src="/mascot.png" alt="" aria-hidden="true" className="w-20 h-20 object-contain" />
          </div>
          <p className="text-stone-600 text-lg max-w-xl mb-16">
            Real outcomes from students who put in the work.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {REFERRALS.map((referral) => (
              <div
                key={referral.id}
                onClick={() => setExpandedId(expandedId === referral.id ? null : referral.id)}
                className="cursor-pointer group"
              >
                {expandedId !== referral.id ? (
                  <div className="grid grid-cols-[1fr,2fr] gap-6 bg-white border border-stone-200 hover:border-stone-300 transition-colors">
                    {referral.image_path ? (
                      <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
                        <img
                          src={referral.image_path}
                          alt={referral.student_name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/5] bg-stone-100 flex items-center justify-center">
                        <span className="text-stone-300 text-4xl font-semibold">
                          {referral.student_name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="py-8 pr-8 flex flex-col justify-center">
                      <h3 className="text-stone-900 text-2xl font-semibold mb-2">
                        {referral.student_name}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 italic">
                        "{referral.testimonial}"
                      </p>
                      <p className="text-amber-600 text-xs font-medium tracking-wider uppercase mt-4">{referral.tag}</p>
                      <p className="text-stone-400 text-xs mt-1 group-hover:text-stone-600 transition-colors">
                        Click to expand
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-stone-900 text-stone-50 p-8">
                    <p className="text-amber-400 text-xs font-medium tracking-wider uppercase mb-3">{referral.tag}</p>
                    <h3 className="text-white text-2xl font-semibold mb-4">
                      {referral.student_name}
                    </h3>
                    <p className="text-stone-300 leading-relaxed italic">
                      "{referral.testimonial}"
                    </p>
                    <p className="text-stone-500 text-xs mt-6">
                      Click to collapse
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">
            Proven track record
          </h2>
          <p className="text-stone-400 text-lg mb-8">
            Each success represents dedication, personalized instruction, and real results.
          </p>
          <CtaButton
            onNavigateContact={onNavigateContact}
            className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium py-4 px-10 transition-colors"
          >
            Start your journey
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
