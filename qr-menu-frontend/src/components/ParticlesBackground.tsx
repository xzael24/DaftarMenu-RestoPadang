import { useEffect, useState } from 'react';
import Particles from 'react-particles-js';

export default function ParticlesBackground({ darkMode }: { darkMode: boolean }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <Particles
      params={{
        particles: {
          number: {
            value: darkMode ? 0 : 100,
          },
          shape: {
            type: darkMode ? "circle" : "edge",
          },
          opacity: {
            value: darkMode ? 0 : 0.5,
          },
          size: {
            value: darkMode ? 0 : 5,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
}
