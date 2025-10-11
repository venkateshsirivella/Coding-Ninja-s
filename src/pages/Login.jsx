// src/pages/Login.jsx
// Fix: remove TypeScript-only annotation `provider?: string` in a .jsx file.

import React, { useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../components/Toast';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-5" aria-hidden="true">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.156 7.957 3.043l5.657-5.657C33.64 6.053 29.084 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.444 16.108 18.826 14 24 14c3.059 0 5.842 1.156 7.957 3.043l5.657-5.657C33.64 6.053 29.084 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 44c5.152 0 9.67-1.973 12.957-5.2l-5.982-5.06C29.934 35.091 27.178 36 24 36c-5.2 0-9.646-3.317-11.307-7.951l-6.553 5.045C9.445 39.611 16.106 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.79 2.231-2.151 4.151-4.107 5.55l5.982 5.06C35.86 40.026 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"/>
  </svg>
);
const NaukriIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-5" aria-hidden="true">
    <circle cx="128" cy="128" r="120" fill="#1e90ff" />
    <path d="M70 168V88h24l36 44V88h26v80h-24l-36-44v44z" fill="white" />
  </svg>
);

const Login = () => {
  const emailId = useId();
  const passId = useId();
  const [stage, setStage] = useState('email'); // 'email' | 'password'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oauth, setOauth] = useState(null); // null | 'google' | 'naukri'
  const navigate = useNavigate();
  const { push } = useToast();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Removed TS type. Use plain JS.
  const handleFinishLogin = (provider) => {
    push({ title: 'Login successful', description: provider ? `Signed in with ${provider}` : 'Welcome back!' });
    navigate('/user');
  };

  return (
    <main className="min-h-[calc(100dvh-64px)] bg-gray-50 dark:bg-gray-950 px-4 py-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
        <div className="hidden md:block rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 ring-1 ring-black/5 dark:from-gray-800 dark:to-gray-900">
          <h1 className="text-3xl font-semibold text-white">Get the tech career deserved. Faster.</h1>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li>128% average hike via placement cell</li>
            <li>1.5 Lac+ learners placed at top companies</li>
            <li>1,400+ alumni in MAANG & unicorn startups</li>
          </ul>
        </div>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/favicon.ico" alt="" className="size-7 rounded-full" />
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">codingninjas</span>
            </div>
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Close">Close</Link>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-gray-100">Login with</h2>

          <div className="mt-4 grid gap-3">
            <button type="button" onClick={() => setOauth('google')} className="inline-flex w-full items-center justify-between rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
              <span className="flex items-center gap-3"><GoogleIcon />Google</span>
              <span aria-hidden className="text-gray-400">→</span>
            </button>
            <button type="button" onClick={() => setOauth('naukri')} className="inline-flex w-full items-center justify-between rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
              <span className="flex items-center gap-3"><NaukriIcon />Naukri</span>
              <span aria-hidden className="text-gray-400">→</span>
            </button>
          </div>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            <span className="text-xs uppercase tracking-wide text-gray-500">or</span>
            <span className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>

          <div className="relative overflow-hidden">
            <div className="flex w-[200%]" style={{ transform: `translateX(${stage === 'email' ? '0%' : '-50%'})`, transition: 'transform 260ms ease' }}>
              <form className="w-1/2 pr-3 space-y-5" onSubmit={e => { e.preventDefault(); if (isValidEmail) setStage('password'); }} noValidate>
                <div className="space-y-1">
                  <label htmlFor={emailId} className="block text-sm font-medium text-gray-700 dark:text-gray-200">Enter email</label>
                  <input id={emailId} type="email" inputMode="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/60" placeholder="Enter email here" required />
                </div>
                <button type="submit" disabled={!isValidEmail} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-white hover:bg-black disabled:opacity-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                  Continue <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </form>

              <form className="w-1/2 pl-3 space-y-5" onSubmit={e => { e.preventDefault(); if (password.length >= 6) handleFinishLogin(); }}>
                <div className="space-y-1">
                  <label htmlFor={passId} className="block text-sm font-medium text-gray-700 dark:text-gray-200">Enter password</label>
                  <input id={passId} type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/60" placeholder="Enter password" required minLength={6} />
                </div>
                <button type="submit" disabled={password.length < 6} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-white hover:bg-emerald-700 disabled:opacity-50">
                  Sign in
                </button>
                <button type="button" onClick={() => setStage('email')} className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">Back</button>
              </form>
            </div>
          </div>

          <AnimatePresence>
            {oauth && (
              <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-modal="true" role="dialog">
                <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} className="w-full max-w-md rounded-2xl bg-[#1f1f1f] text-white shadow-2xl">
                  <div className="px-5 py-4 border-b border-white/10 flex items-center gap-2">
                    <span className="inline-flex size-5 items-center justify-center rounded bg-white">
                      {oauth === 'google' ? <GoogleIcon /> : <NaukriIcon />}
                    </span>
                    <p className="font-medium">Sign in with {oauth === 'google' ? 'Google' : 'Naukri'}</p>
                  </div>
                  <div className="px-6 py-6 space-y-4">
                    <div className="mx-auto grid place-items-center">
                      <div className="size-12 grid place-items-center rounded-full bg-[#ff4500] text-white text-2xl font-bold">r</div>
                    </div>
                    <p className="text-center text-lg font-semibold">Confirm that you want to sign in</p>
                    <p className="text-center text-sm text-gray-300">To continue, the provider will share name and email with our app.</p>
                    <div className="flex justify-between pt-2">
                      <button onClick={() => setOauth(null)} className="rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-white/5">Cancel</button>
                      <button onClick={() => { setOauth(null); handleFinishLogin(oauth === 'google' ? 'Google' : 'Naukri'); }} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Confirm</button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>
    </main>
  );
};
export default Login;
