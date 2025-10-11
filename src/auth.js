// src/state/auth.js
import { create } from 'zustand';

export const useAuth = create(set => ({
  isAuthed: false,
  user: null,
  login: (user) => set({ isAuthed: true, user }),
  logout: () => set({ isAuthed: false, user: null }),
}));