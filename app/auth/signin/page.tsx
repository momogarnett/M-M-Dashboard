'use client'

import { signIn } from 'next-auth/react'

export default function SignInPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #1a3fd0 0%, #1060e0 35%, #0891d8 65%, #00ccff 100%)' }}
    >
      {/* Animated glow orbs */}
      <div className="animate-glow-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 65%)' }} />
      <div className="animate-glow-2 absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,102,0,0.5), transparent 65%)' }} />
      <div className="animate-glow-3 absolute top-1/2 -left-20 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,204,255,0.4), transparent 65%)' }} />
      <div className="animate-glow-4 absolute -top-20 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,102,0,0.35), transparent 65%)' }} />


      {/* Card */}
      <div
        className="relative z-10 w-full max-w-lg mx-6 rounded-3xl px-12 py-14 shadow-2xl"
        style={{
          background: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(32px)',
          border: '1px solid rgba(255,255,255,0.20)',
        }}
      >
        {/* Logo — transparent SVG */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo-clean.svg"
            alt="Mind and Machine DFW"
            className="w-80 h-80 object-contain"
          />
        </div>

        {/* Headline */}
        <div className="text-center mb-10">
          <p className="text-white/60 text-sm font-bold tracking-[0.35em] uppercase mb-3">
            Member Portal
          </p>
<p className="text-white/50 text-base leading-relaxed">
            A Smarter Room for Tomorrow's Conversations
          </p>
        </div>

        {/* Sign in button */}
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="btn-shimmer w-full flex items-center justify-center gap-4 px-6 py-5 rounded-2xl font-black text-lg tracking-wide text-white relative overflow-hidden transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #FF6600 0%, #ff8c00 100%)',
            boxShadow: '0 8px 30px rgba(255,102,0,0.45), 0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          {/* Shimmer sweep */}
          <span className="shimmer-line absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)', transform: 'translateX(-100%)' }} />

          <svg className="w-6 h-6 flex-shrink-0 relative z-10" viewBox="0 0 24 24">
            <path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="relative z-10">Sign In</span>
        </button>

        {/* Footer note */}
        <p className="text-center text-white/40 text-sm mt-8 leading-relaxed">
          Access is by approval only.{' '}
          <span className="text-white/50">
            [[ Contact info — confirm with board ]]
          </span>
        </p>
      </div>
    </div>
  )
}
