import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [user, setUser] = useState('');
  return <GameContext.Provider value = {{ user, setUser }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };