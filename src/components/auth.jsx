// src/state/auth.js
import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({
    isAuthed,
    user,
    login: (u) => { setIsAuthed(true); setUser(u || { name: 'Learner' }); },
    logout: () => { setIsAuthed(false); setUser(null); },
  }), [isAuthed, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);