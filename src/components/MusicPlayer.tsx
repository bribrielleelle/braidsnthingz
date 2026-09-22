import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc3, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const MusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<number | null>(null);

  const track = SALON_INFO.playlist[currentTrackIndex];

  // Web Audio Synth for nostalgic gentle R&B salon vibe
  const playRetroChords = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23], // G7
      ];

      let chordIdx = 0;
      const playNext = () => {
        if (!isPlaying || isMuted) return;
        const currentChord = chords[chordIdx % chords.length];
        chordIdx++;

        currentChord.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.02, ctx.currentTime + 0.3);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 1.9);
        });
      };

      playNext();
      if (oscillatorIntervalRef.current) clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = window.setInterval(playNext, 2000);
    } catch {
      // Audio not supported or blocked
    }
  };

  const stopAudio = () => {
    if (oscillatorIntervalRef.current) {
      clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playRetroChords();
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % SALON_INFO.playlist.length);
    setProgress(0);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + SALON_INFO.playlist.length) % SALON_INFO.playlist.length);
    setProgress(0);
  };

  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextTrack();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
      stopAudio();
    };
  }, [isPlaying, currentTrackIndex]);

  return (
    <div id="music-player" className="w-full bg-[#000000] border border-[#FF1493] mb-6 overflow-hidden shadow-[0_2px_15px_rgba(255,20,147,0.25)] font-sans">
      {/* Header bar */}
      <div className="bg-[#D2006B] px-3 py-1.5 flex items-center justify-between text-white border-b border-[#A80054]">
        <div className="flex items-center gap-2">
          <Disc3 className={`w-4 h-4 text-[#FFD700] ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="font-bold text-xs uppercase tracking-wide">
            talatasva&apos;s Music
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#FFB6C1]">
          <span className="hover:underline cursor-pointer">edit</span>
          <span>|</span>
          <button 
            onClick={() => setIsMuted(!isMuted)} 
            className="hover:text-white"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Player Body */}
      <div className="p-3 sm:p-4 bg-[#0A0508] text-white">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Aaliyah album thumbnail */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 border-2 border-[#D2006B] overflow-hidden bg-black">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
              alt="Aaliyah Album Cover"
              className="w-full h-full object-cover filter contrast-125 sepia-[0.2]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-center text-[#FFB6C1] py-0.5 font-mono">
              2000s R&B
            </div>
          </div>

          {/* Song Details & Animated Equalizer */}
          <div className="flex-1 w-full space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base font-bold text-white hover:text-[#FF69B4] cursor-pointer">
                  {track.artist}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#FF2A85] flex items-center gap-1 justify-center sm:justify-start">
                  <span>&ldquo;{track.title}&rdquo;</span>
                  {isPlaying && <Sparkles className="w-3 h-3 text-[#FFD700] animate-pulse" />}
                </p>
              </div>

              {/* Status indicator */}
              <div className="hidden sm:block text-right">
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded-none border ${
                  isPlaying ? 'border-[#39FF14] text-[#39FF14] bg-[#031A03]' : 'border-[#666666] text-[#888888]'
                }`}>
                  {isPlaying ? '● Playing' : '○ Paused'}
                </span>
                <p className="text-[10px] text-[#AAAAAA] mt-1 font-mono">Plays: 1,482</p>
              </div>
            </div>

            {/* Equalizer Visualizer Bars */}
            <div className="flex items-end gap-1 h-5 pt-2 justify-center sm:justify-start">
              {[40, 75, 95, 60, 85, 50, 100, 70, 45, 90, 65, 30].map((h, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-[#FF1493] transition-all duration-300"
                  style={{ 
                    height: isPlaying ? `${Math.max(15, (h * ((i % 3) + 1)) % 100)}%` : '20%',
                    opacity: isPlaying ? 0.9 : 0.3
                  }}
                />
              ))}
            </div>

            {/* Retro Player Controls */}
            <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
              <button 
                onClick={prevTrack}
                className="w-8 h-8 bg-[#4A0A1F] hover:bg-[#D2006B] border border-[#FF69B4] text-white flex items-center justify-center font-bold text-xs transition-colors"
                title="Previous Track"
              >
                ◀◀
              </button>
              <button 
                onClick={togglePlay}
                className="px-4 h-8 bg-[#D2006B] hover:bg-[#FF007F] border border-white text-white flex items-center justify-center font-bold text-xs uppercase tracking-wider transition-colors shadow-[0_0_8px_rgba(255,20,147,0.6)]"
              >
                {isPlaying ? '|| PAUSE' : '▶ PLAY'}
              </button>
              <button 
                onClick={nextTrack}
                className="w-8 h-8 bg-[#4A0A1F] hover:bg-[#D2006B] border border-[#FF69B4] text-white flex items-center justify-center font-bold text-xs transition-colors"
                title="Next Track"
              >
                ▶▶
              </button>
              <span className="text-[11px] text-[#BBBBBB] ml-2 font-mono">
                {track.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar with Hot Pink Indicator */}
        <div className="mt-3 pt-2 border-t border-[#220815]">
          <div className="w-full bg-[#1A0510] h-2 border border-[#551025] cursor-pointer relative overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#D2006B] to-[#FF2A85] h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
