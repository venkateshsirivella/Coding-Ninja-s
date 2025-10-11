import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Toast = { id: number; title: string; description?: string };
type ToastCtx = { push: (t: Omit<Toast, 'id'>) => void };
const ToastContext = createContext<ToastCtx | null>(null);
export const useToast = () => useContext(ToastContext)!;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Toast[]>([]);
  const idRef = useRef(1);
  const push = (t: Omit<Toast, 'id'>) => {
    const id = idRef.current++;
    setItems(s => [...s, { id, ...t }]);
    setTimeout(() => setItems(s => s.filter(x => x.id !== id)), 2500);
  };
  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed inset-x-0 top-4 z-[60] mx-auto flex max-w-sm flex-col gap-3 px-4">
        <AnimatePresence>
          {items.map(t => (
            <motion.div
              key={t.id}
              initial={{ y: -16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl bg-gray-900 text-white shadow-lg ring-1 ring-black/10 dark:bg-white dark:text-gray-900"
              role="status"
              aria-live="polite"
            >
              <div className="px-4 py-3">
                <p className="text-sm font-semibold">{t.title}</p>
                {t.description ? <p className="text-xs opacity-80">{t.description}</p> : null}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
