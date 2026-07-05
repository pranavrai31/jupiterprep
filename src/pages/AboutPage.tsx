import CtaButton from '../components/CtaButton';

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
    sat: '1540',
    image: '/images/tutors/FullSizeRender_(1).jpeg',
  },
  {
    name: 'Anagha Iyer',
    role: 'Tutor',
    school: 'Stanford University, Class of 2030',
    sat: '1550',
    image: '/images/tutors/Facetune_08-05-2026-18-50-34_(1).jpeg',
  },
  {
    name: 'Aaron Pinto',
    role: 'Tutor',
    school: 'Carnegie Mellon University, Class of 2030',
    sat: '1540',
    image: '/images/tutors/dfb63f4e-83c8-439a-895d-e67bc6e97fe8_(1).JPEG',
  },
  {
    name: 'Nathan Lee',
    role: 'Tutor',
    school: 'UNC Chapel Hill, Class of 2030',
    sat: '1540',
    image: '/images/tutors/IMG_8740.JPEG',
  },
  {
    name: 'Jason Tang',
    role: 'Tutor',
    school: 'University of Pennsylvania, Class of 2030',
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

      {/* Founders section */}
      <section className="px-6 pt-24 pb-0">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Our Founders</p>
          <h1 className="text-stone-900 mb-12">Meet the founders</h1>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Founder photos */}
            <div className="flex gap-6 flex-shrink-0">
              {founders.map((founder) => (
                <div key={founder.name} className="w-48">
                  <div className="aspect-[3/4] bg-stone-200 overflow-hidden mb-3">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-amber-600 text-xs font-medium tracking-wider uppercase mb-0.5">{founder.role}</p>
                  <h3 className="text-stone-900 font-semibold text-sm leading-snug mb-0.5">{founder.name}</h3>
                  <p className="text-stone-500 text-xs">{founder.school}</p>
                </div>
              ))}
            </div>

            {/* Bio to the right */}
            <div className="border-l-4 border-amber-500 pl-6 max-w-sm">
              <p className="text-stone-700 text-base leading-relaxed mb-4">
                What sets Jupiter Prep apart isn't just our results, it's the community we've built around them. Over the past year, we've worked closely with students one-on-one, learning firsthand what truly moves the needle on SAT scores and what doesn't.
              </p>
              <p className="text-stone-700 text-base leading-relaxed mb-4">
                Every tutor on our team has been professionally trained by us. We've passed on what we know works, while giving each of them the freedom to develop their own natural teaching style.
              </p>
              <p className="text-stone-700 text-base leading-relaxed">
                We started Jupiter Prep because we wanted to offer something different: real mentorship, proven strategies, and the kind of personalized attention that creates lasting improvement. We're proud of what this team has built, and we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mascot divider between founders and tutors */}
      <div className="relative max-w-6xl mx-auto px-6 h-32 overflow-hidden">
        <img
          src="/mascot.png"
          alt=""
          aria-hidden="true"
          className="absolute right-6 -bottom-4 w-36 opacity-90"
          style={{ transform: 'rotate(-45deg)', transformOrigin: 'center center' }}
        />
      </div>

      {/* Tutors section */}
      <section className="px-6 pb-16 pt-0">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Our Team</p>
          <h2 className="text-stone-900 mb-4">Meet the tutors</h2>
          <p className="text-stone-500 text-lg max-w-xl mb-16">
            Elite students from top universities who know exactly what it takes to score at the highest levels.
          </p>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible">
            {tutors.map((tutor) => (
              <div key={tutor.name} className="flex-none w-48 snap-start lg:w-auto">
                <div className="aspect-[3/4] bg-stone-200 overflow-hidden mb-4">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-amber-600 text-xs font-medium tracking-wider uppercase mb-1">{tutor.role}</p>
                <h3 className="text-stone-900 font-semibold text-sm leading-snug mb-1">{tutor.name}</h3>
                <p className="text-stone-500 text-xs leading-relaxed mb-1">{tutor.school}</p>
                <p className="text-stone-700 text-xs font-medium">SAT: {tutor.sat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="py-24 px-6 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-stone-900 mb-12">Teaching philosophy</h2>
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

      {/* CTA */}
      <section className="py-24 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">Let's connect</h2>
          <p className="text-stone-400 text-lg mb-8">
            Schedule a consultation to discuss your academic goals.
          </p>
          <CtaButton
            onNavigateContact={onNavigateContact}
            className="inline-block bg-stone-50 hover:bg-white text-stone-900 font-medium py-4 px-10 transition-colors"
          >
            Book a free consultation with us!
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
