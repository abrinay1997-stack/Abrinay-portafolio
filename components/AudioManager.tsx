
import React, { useEffect, useRef, createContext, useContext, useState } from 'react';

interface AudioContextType {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  playClick: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used within an AudioProvider');
  return context;
};

export const AudioManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const violinRef = useRef<HTMLAudioElement | null>(null);
  const lastSectionRef = useRef<string>('');
  const isProgrammaticScrollRef = useRef(false);

  // Initialize audio files
  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL;
    violinRef.current = new Audio(`${baseUrl}audio/violin.mp3`);
    violinRef.current.loop = true;
    violinRef.current.volume = 0.4;

    return () => {
      if (violinRef.current) {
        violinRef.current.pause();
        violinRef.current = null;
      }
    };
  }, []);

  // Handle Mute/Unmute
  useEffect(() => {
    if (!violinRef.current) return;

    if (isMuted) {
      violinRef.current.pause();
    } else if (hasInteracted) {
      violinRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  }, [isMuted, hasInteracted]);

  const toggleMute = (muted: boolean) => {
    if (!muted) {
      setHasInteracted(true);
    }
    setIsMuted(muted);
  };

  const playClick = () => {
    if (isMuted) return;
    const baseUrl = import.meta.env.BASE_URL;
    const click = new Audio(`${baseUrl}audio/click.mp3`);
    click.volume = 0.4;
    click.play().catch(() => {});
  };

  const playTransition = () => {
    if (isMuted) return;
    const baseUrl = import.meta.env.BASE_URL;
    const transition = new Audio(`${baseUrl}audio/transicion.mp3`);
    transition.volume = 0.5;
    transition.play().catch(() => {});
  };

  // Global click listener
  useEffect(() => {
    const handleGlobalClick = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
      playClick();
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [isMuted, hasInteracted]);

  // Section transition detection
  useEffect(() => {
    const sections = ['hero', 'work', 'spotify-showcase', 'press', 'credits', 'biography-page'];

    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          if (lastSectionRef.current && lastSectionRef.current !== sectionId) {
            // Only play if it's NOT a programmatic scroll (from menu)
            if (!window.location.hash || !isProgrammaticScrollRef.current) {
                playTransition();
            }
          }
          lastSectionRef.current = sectionId;
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Listen for custom events from Navbar if we want to skip programmatic scroll
    const handleProgrammaticScroll = () => {
        isProgrammaticScrollRef.current = true;
        setTimeout(() => {
            isProgrammaticScrollRef.current = false;
        }, 1000); // Reset after typical smooth scroll duration
    };

    window.addEventListener('programmatic-scroll', handleProgrammaticScroll);

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener('programmatic-scroll', handleProgrammaticScroll);
    };
  }, [isMuted, children]);

  return (
    <AudioContext.Provider value={{ isMuted, setIsMuted: toggleMute, playClick }}>
      {children}
    </AudioContext.Provider>
  );
};
