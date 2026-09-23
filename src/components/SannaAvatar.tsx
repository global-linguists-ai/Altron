/**
 * AltronAvatar – Futuristic Cybernetic Core & AI Insignia for Altron.
 * Pure SVG, no external image assets needed. Scales crisply at any size.
 */
import React from 'react';
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Rect,
} from 'react-native-svg';

interface SannaAvatarProps {
  /** Width & height of the avatar (square) */
  size?: number;
}

export function SannaAvatar({ size = 48 }: SannaAvatarProps): React.JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      <Defs>
        {/* Deep space outer gradient */}
        <LinearGradient id="altronBg" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#0B0F19" />
          <Stop offset="50%" stopColor="#111827" />
          <Stop offset="100%" stopColor="#1E1B4B" />
        </LinearGradient>

        {/* Luminous Neon Cyber Cyan to Electric Violet */}
        <LinearGradient id="altronA" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#38BDF8" />
          <Stop offset="50%" stopColor="#6366F1" />
          <Stop offset="100%" stopColor="#818CF8" />
        </LinearGradient>

        {/* Outer Ring Glow */}
        <LinearGradient id="ringGlow" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0%" stopColor="#06B6D4" />
          <Stop offset="50%" stopColor="#8B5CF6" />
          <Stop offset="100%" stopColor="#38BDF8" />
        </LinearGradient>

        {/* Core Reactor Pulse */}
        <LinearGradient id="corePulse" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#22D3EE" />
          <Stop offset="100%" stopColor="#4F46E5" />
        </LinearGradient>
      </Defs>

      {/* Outer base container */}
      <Rect x="4" y="4" width="112" height="112" rx="28" fill="url(#altronBg)" />

      {/* Cybernetic Accent Border */}
      <Rect
        x="5"
        y="5"
        width="110"
        height="110"
        rx="27"
        fill="none"
        stroke="url(#ringGlow)"
        strokeWidth="2"
        opacity="0.85"
      />

      {/* Background Circuit Grid Details */}
      <Path
        d="M24 60 L40 60 L48 68 L72 68 L80 60 L96 60"
        stroke="#38BDF8"
        strokeWidth="1.2"
        fill="none"
        opacity="0.3"
      />
      <Circle cx="24" cy="60" r="2.5" fill="#38BDF8" opacity="0.6" />
      <Circle cx="96" cy="60" r="2.5" fill="#38BDF8" opacity="0.6" />

      {/* Central Cyber Hexagon / Reactor Shield */}
      <Path
        d="M60 20 L92 38 L92 78 L60 100 L28 78 L28 38 Z"
        fill="#0F172A"
        stroke="url(#ringGlow)"
        strokeWidth="2.5"
      />

      {/* Inner Glow Aura */}
      <Circle cx="60" cy="58" r="24" fill="url(#corePulse)" opacity="0.25" />

      {/* Stylized Futuristic ALTRON "A" Monogram */}
      {/* Outer A-Pillars */}
      <Path
        d="M60 28 L82 76 L71 76 L65 62 L55 62 L49 76 L38 76 Z"
        fill="url(#altronA)"
      />

      {/* A Inner Triangle cutout */}
      <Path
        d="M60 42 L67 56 L53 56 Z"
        fill="#0F172A"
      />

      {/* Glowing Horizontal Energy Bridge in the "A" */}
      <Rect x="46" y="55" width="28" height="3" rx="1.5" fill="#38BDF8" />

      {/* Core AI Power Crystal at the center */}
      <Circle cx="60" cy="56.5" r="3.5" fill="#FFFFFF" />
      <Circle cx="60" cy="56.5" r="1.5" fill="#38BDF8" />

      {/* Top and bottom status micro-nodes */}
      <Circle cx="60" cy="18" r="2" fill="#22D3EE" />
      <Circle cx="60" cy="102" r="2" fill="#8B5CF6" />
    </Svg>
  );
}

export default SannaAvatar;
