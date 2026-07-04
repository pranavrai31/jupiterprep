import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import CtaButton from '../components/CtaButton';

interface Referral {
  id: string;
  student_name: string;
  initial_score?: number;
  final_score: number;
  testimonial?: string;
  image_path?: string;
  created_at: string;
}

type ReferralsPageProps = {
  onNavigateContact: () => void;
};

export default function ReferralsPage({ onNavigateContact }: ReferralsPageProps) {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetchReferrals();
  }, []);

  const fetchReferrals = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('referrals')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReferrals(data || []);
    } catch (err) {
      console.error('Error fetching referrals:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-stone-50">
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Results</p>
          <h1 className="text-stone-900 mb-8">
            Success stories
          </h1>
          <p className="text-stone-600 text-lg max-w-xl mb-16">
            Real outcomes from students who put in the work.
          </p>

          {isLoading ? (
            <div className="text-center py-24">
              <p className="text-stone-400">Loading...</p>
            </div>
          ) : referrals.length === 0 ? (
            <div className="border border-stone-200 p-24 text-center">
              <p className="text-stone-400">Success stories coming soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {referrals.map((referral) => (
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
                        {referral.testimonial && (
                          <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 italic">
                            "{referral.testimonial}"
                          </p>
                        )}
                        <p className="text-amber-600 text-xs font-medium tracking-wider uppercase mt-4">Jupiter SAT</p>
                        <p className="text-stone-400 text-xs mt-1 group-hover:text-stone-600 transition-colors">
                          Click to expand
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-stone-900 text-stone-50 p-8">
                      <p className="text-amber-400 text-xs font-medium tracking-wider uppercase mb-3">Jupiter SAT</p>
                      <h3 className="text-white text-2xl font-semibold mb-2">
                        {referral.student_name}
                      </h3>
                      {referral.testimonial && (
                        <p className="text-stone-300 leading-relaxed italic">
                          "{referral.testimonial}"
                        </p>
                      )}
                      <p className="text-stone-500 text-xs mt-6">
                        Click to collapse
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
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
