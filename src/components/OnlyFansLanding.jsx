import React from 'react'
import { Star, ShieldCheck, Lock, Camera, MessageCircle, Heart, ChevronRight, Sparkles } from 'lucide-react'

const creators = [
  {
    name: 'Ava Summers',
    handle: '@avasummers',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1200&auto=format&fit=crop',
    tags: ['Lifestyle', 'Fitness']
  },
  {
    name: 'Mia Chen',
    handle: '@miastudio',
    image: 'https://images.unsplash.com/photo-1745153555705-52357edafb03?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0NjE1MDZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['Photography', 'Travel']
  },
  {
    name: 'Sofia Rivera',
    handle: '@sofiavibes',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    tags: ['Fashion', 'Beauty']
  },
  {
    name: 'Nina Patel',
    handle: '@ninalive',
    image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1200&auto=format&fit=crop',
    tags: ['Wellness', 'Mindfulness']
  },
  {
    name: 'Emily Carter',
    handle: '@emilycarter',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    tags: ['Creator Tips', 'Behind the Scenes']
  },
  {
    name: 'Layla Nguyen',
    handle: '@laylanguyen',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop',
    tags: ['Art', 'Design']
  }
]

const features = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-teal-600" />,
    title: 'Safe & Respectful',
    desc: 'Crafted with community-first guidelines. No explicit content required.'
  },
  {
    icon: <Camera className="h-5 w-5 text-teal-600" />,
    title: 'Beautiful Galleries',
    desc: 'Share stylish shoots, behind-the-scenes, and lifestyle moments.'
  },
  {
    icon: <MessageCircle className="h-5 w-5 text-teal-600" />,
    title: 'Direct Messaging',
    desc: 'Chat with your biggest fans and build real connections.'
  },
  {
    icon: <Lock className="h-5 w-5 text-teal-600" />,
    title: 'Member-Only Posts',
    desc: 'Offer premium access to exclusive drops and series.'
  }
]

export default function OnlyFansLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Inter]">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-teal-600 flex items-center justify-center text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-semibold">OnlyFans</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-teal-700">Features</a>
            <a href="#creators" className="hover:text-teal-700">Creators</a>
            <a href="#faq" className="hover:text-teal-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 rounded-md text-sm hover:bg-gray-100">Sign in</button>
            <button className="px-4 py-2 rounded-md bg-teal-600 text-white text-sm shadow-sm hover:bg-teal-700">Start free</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium border border-teal-100">
                <Star className="h-3.5 w-3.5" />
                Creator-first. Community-safe.
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
                Build a sustainable fanbase with content that feels like you
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl">
                Share your style, behind-the-scenes, and everyday moments. Keep it classy, keep it you. Monetize with member-only posts and authentic fan connections.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-5 py-3 rounded-lg bg-teal-600 text-white shadow-sm hover:bg-teal-700">
                  Create your page
                </button>
                <button className="px-5 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50">
                  Explore creators
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-600"/> Verified creators</div>
                <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-rose-500"/> Supportive community</div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {creators.slice(0,4).map((c, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-sm bg-white border border-gray-200">
                    <img src={c.image} alt={c.name} className="h-56 w-full object-cover" />
                    <div className="p-3">
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3">
                  {f.icon}
                </div>
                <div className="font-medium mb-1">{f.title}</div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creators showcase */}
      <section id="creators" className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Discover creators</h2>
              <p className="text-gray-600 text-sm">Elegant, dressed looks. Tasteful content only.</p>
            </div>
            <button className="text-teal-700 hover:underline inline-flex items-center gap-1 text-sm">
              View all <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((c, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
                <img src={c.image} alt={c.name} className="h-64 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.handle}</div>
                    </div>
                    <button className="px-3 py-1.5 rounded-md bg-teal-600 text-white text-xs">Follow</button>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 text-amber-500 mb-3">
                  {Array.from({length:5}).map((_,idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-700">“This platform helped me build a supportive community without compromising my style. Love the tools and the vibe.”</p>
                <div className="mt-4 text-sm text-gray-500">— Happy Creator</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold mb-4">Frequently asked questions</h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="font-medium">Is explicit content required?</div>
              <p className="text-sm text-gray-600 mt-1">No. Our example focuses on tasteful, dressed photography and community features.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="font-medium">Can I migrate my audience?</div>
              <p className="text-sm text-gray-600 mt-1">Yes, invite fans with custom links and welcome offers.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="font-medium">How do payouts work?</div>
              <p className="text-sm text-gray-600 mt-1">Creators can set subscription tiers and receive monthly payouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>© {new Date().getFullYear()} OnlyFans demo</span>
            <span>•</span>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#creators" className="hover:underline">Creators</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
