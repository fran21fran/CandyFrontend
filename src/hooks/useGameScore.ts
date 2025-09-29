import { useState, useCallback } from "react";

interface UseGameScoreReturn {
  score: number;
  isGameActive: boolean;
  startGame: () => void;
  endGame: () => void;
  addPoints: (points: number) => void;
  resetScore: () => void;
}

export function useGameScore(): UseGameScoreReturn {
  const [score, setScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  const startGame = useCallback(() => {
    setIsGameActive(true);
    setScore(0);
  }, []);

  const endGame = useCallback(() => {
    setIsGameActive(false);
  }, []);

  const addPoints = useCallback((points: number) => {
    if (isGameActive) {
      setScore(prev => prev + points);
    }
  }, [isGameActive]);

  const resetScore = useCallback(() => {
    setScore(0);
  }, []);

  return {
    score,
    isGameActive,
    startGame,
    endGame,
    addPoints,
    resetScore,
  };
}

// Global score update function for backward compatibility
declare global {
  interface Window {
    updateGameScore?: (points: number) => void;
  }
}