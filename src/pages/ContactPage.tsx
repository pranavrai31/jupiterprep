import { useState, FormEvent } from 'react';
import { CONTACT_FORM_ENDPOINT } from '../config';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!CONTACT_FORM_ENDPOINT) return;

    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="bg-stone-50">
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-6">Contact</p>
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-stone-900">Get in touch</h1>
            <img src="/mascot.png" alt="" aria-hidden="true" className="w-24 h-24 object-contain ml-2" />
          </div>
          <p className="text-stone-600 text-lg mb-16 max-w-xl">
            Ready to start? Schedule a free 30-minute consultation to discuss goals and create a personalized plan.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16 pb-16 border-b border-stone-200">
            <div>
              <h3 className="text-stone-900 text-sm font-semibold mb-2 tracking-wider uppercase">Email</h3>
              <a href="mailto:jupiterprep1@gmail.com" className="text-stone-600 hover:text-stone-900 transition-colors">
                jupiterprep1@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-stone-900 text-sm font-semibold mb-2 tracking-wider uppercase">Availability</h3>
              <p className="text-stone-600">Flexible scheduling</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-stone-900 text-2xl font-semibold mb-8">Send a message</h2>
              <form
                onSubmit={handleSubmit}
                action={CONTACT_FORM_ENDPOINT || 'mailto:jupiterprep1@gmail.com'}
                method="POST"
                encType={CONTACT_FORM_ENDPOINT ? undefined : 'text/plain'}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-400 focus:ring-0 transition-colors outline-none"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-400 focus:ring-0 transition-colors outline-none"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-400 focus:ring-0 transition-colors outline-none"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Grade level</label>
                  <select
                    name="grade"
                    className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-400 focus:ring-0 transition-colors outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="8th">8th Grade</option>
                    <option value="9th">9th Grade</option>
                    <option value="10th">10th Grade</option>
                    <option value="11th">11th Grade</option>
                    <option value="12th">12th Grade</option>
                    <option value="college">College</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-stone-200 focus:border-stone-400 focus:ring-0 transition-colors outline-none resize-none"
                    placeholder="Tell me about your goals..."
                  ></textarea>
                </div>

                {status === 'sent' && (
                  <p className="text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-3">
                    Thanks , your message is on its way. I'll get back to you within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
                    Something went wrong sending that. Please email jupiterprep1@gmail.com directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-stone-900 hover:bg-stone-800 disabled:opacity-60 disabled:cursor-not-allowed text-stone-50 font-medium py-4 transition-colors"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-stone-900 text-2xl font-semibold mb-8">What to expect</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-amber-600 text-sm font-medium">01</span>
                    <h3 className="text-stone-900 font-semibold">Initial assessment</h3>
                  </div>
                  <p className="text-stone-600 pl-10">Discussion of current scores, goals, and timeline.</p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-amber-600 text-sm font-medium">02</span>
                    <h3 className="text-stone-900 font-semibold">Personalized plan</h3>
                  </div>
                  <p className="text-stone-600 pl-10">Customized tutoring strategy tailored to specific needs.</p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-amber-600 text-sm font-medium">03</span>
                    <h3 className="text-stone-900 font-semibold">Logistics</h3>
                  </div>
                  <p className="text-stone-600 pl-10">Session frequency, scheduling, and investment discussion.</p>
                </div>
              </div>
              <div className="mt-12 p-6 bg-stone-100 border border-stone-200">
                <p className="text-stone-600 text-sm leading-relaxed">
                  Responses within 24 hours. For fastest reply, call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
