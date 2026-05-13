import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Design Resources",
  base: '/designresources/',
  description: "A curated collection of design resources for graphic designers, UI/UX designers, developers, and creatives.",
  lang: 'en-US',
  cleanUrls: true,
  appearance: 'dark',
  head: [
    ['style', {}, `
      /* Custom styles to enhance VitePress homepage layout */
      .VPFeatures .items {
        justify-content: center !important;
      }
      .VPFeatures .item {
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }
      .VPFeatures .item:hover {
        transform: translateY(-5px) scale(1.01) !important;
      }
      .VPFeatures .VPFeature {
        border: 1px solid var(--vp-c-divider) !important;
        transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease !important;
      }
      .VPFeatures .VPFeature:hover {
        border-color: var(--vp-c-brand-1) !important;
        background-color: var(--vp-c-bg-soft) !important;
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25) !important;
      }

      /* Canva glassmorphic visual composition styles */
      .custom-hero-composition {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        min-height: 320px;
        position: relative;
        overflow: visible;
      }
      .composition-wrap {
        position: relative;
        width: 280px;
        height: 280px;
      }

      /* Animation keyframes */
      @-webkit-keyframes float1 {
        0%, 100% { -webkit-transform: translateY(0) rotate(0deg); transform: translateY(0) rotate(0deg); }
        50% { -webkit-transform: translateY(-12px) rotate(180deg); transform: translateY(-12px) rotate(180deg); }
      }
      @keyframes float1 {
        0%, 100% { -webkit-transform: translateY(0) rotate(0deg); transform: translateY(0) rotate(0deg); }
        50% { -webkit-transform: translateY(-12px) rotate(180deg); transform: translateY(-12px) rotate(180deg); }
      }
      @-webkit-keyframes float2 {
        0%, 100% { -webkit-transform: translateY(0) rotate(0deg); transform: translateY(0) rotate(0deg); }
        50% { -webkit-transform: translateY(-8px) rotate(-180deg); transform: translateY(-8px) rotate(-180deg); }
      }
      @keyframes float2 {
        0%, 100% { -webkit-transform: translateY(0) rotate(0deg); transform: translateY(0) rotate(0deg); }
        50% { -webkit-transform: translateY(-8px) rotate(-180deg); transform: translateY(-8px) rotate(-180deg); }
      }
      @-webkit-keyframes orbit {
        0% { -webkit-transform: rotate(0deg) translateX(90px) rotate(0deg); transform: rotate(0deg) translateX(90px) rotate(0deg); }
        100% { -webkit-transform: rotate(360deg) translateX(90px) rotate(-360deg); transform: rotate(360deg) translateX(90px) rotate(-360deg); }
      }
      @keyframes orbit {
        0% { -webkit-transform: rotate(0deg) translateX(90px) rotate(0deg); transform: rotate(0deg) translateX(90px) rotate(0deg); }
        100% { -webkit-transform: rotate(360deg) translateX(90px) rotate(-360deg); transform: rotate(360deg) translateX(90px) rotate(-360deg); }
      }
      @-webkit-keyframes orbit2 {
        0% { -webkit-transform: rotate(120deg) translateX(110px) rotate(-120deg); transform: rotate(120deg) translateX(110px) rotate(-120deg); }
        100% { -webkit-transform: rotate(480deg) translateX(110px) rotate(-480deg); transform: rotate(480deg) translateX(110px) rotate(-480deg); }
      }
      @keyframes orbit2 {
        0% { -webkit-transform: rotate(120deg) translateX(110px) rotate(-120deg); transform: rotate(120deg) translateX(110px) rotate(-120deg); }
        100% { -webkit-transform: rotate(480deg) translateX(110px) rotate(-480deg); transform: rotate(480deg) translateX(110px) rotate(-480deg); }
      }
      @-webkit-keyframes drift {
        0%, 100% { -webkit-transform: translateY(0) translateX(0); transform: translateY(0) translateX(0); opacity: 0.6; }
        50% { -webkit-transform: translateY(-6px) translateX(3px); transform: translateY(-6px) translateX(3px); opacity: 1; }
      }
      @keyframes drift {
        0%, 100% { -webkit-transform: translateY(0) translateX(0); transform: translateY(0) translateX(0); opacity: 0.6; }
        50% { -webkit-transform: translateY(-6px) translateX(3px); transform: translateY(-6px) translateX(3px); opacity: 1; }
      }
      @-webkit-keyframes pulse-sphere {
        0%, 100% { box-shadow: 0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.15); }
        50% { box-shadow: 0 0 80px rgba(139, 92, 246, 0.4), inset 0 0 60px rgba(139, 92, 246, 0.25); }
      }
      @keyframes pulse-sphere {
        0%, 100% { box-shadow: 0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.15); }
        50% { box-shadow: 0 0 80px rgba(139, 92, 246, 0.4), inset 0 0 60px rgba(139, 92, 246, 0.25); }
      }
      @-webkit-keyframes torus-spin {
        0% { -webkit-transform: scaleY(0.4) rotate(0deg); transform: scaleY(0.4) rotate(0deg); }
        100% { -webkit-transform: scaleY(0.4) rotate(360deg); transform: scaleY(0.4) rotate(360deg); }
      }
      @keyframes torus-spin {
        0% { -webkit-transform: scaleY(0.4) rotate(0deg); transform: scaleY(0.4) rotate(0deg); }
        100% { -webkit-transform: scaleY(0.4) rotate(360deg); transform: scaleY(0.4) rotate(360deg); }
      }
      @-webkit-keyframes torus-spin2 {
        0% { -webkit-transform: scaleY(0.5) rotate(45deg) rotate(0deg); transform: scaleY(0.5) rotate(45deg) rotate(0deg); }
        100% { -webkit-transform: scaleY(0.5) rotate(45deg) rotate(-360deg); transform: scaleY(0.5) rotate(45deg) rotate(-360deg); }
      }
      @keyframes torus-spin2 {
        0% { -webkit-transform: scaleY(0.5) rotate(45deg) rotate(0deg); transform: scaleY(0.5) rotate(45deg) rotate(0deg); }
        100% { -webkit-transform: scaleY(0.5) rotate(45deg) rotate(-360deg); transform: scaleY(0.5) rotate(45deg) rotate(-360deg); }
      }

      /* Orb Sphere Wrap */
      .sphere-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 2;
      }
      .sphere {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 35%, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.05) 60%, transparent 80%);
        border: 1px solid rgba(139, 92, 246, 0.2);
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
        -webkit-animation-name: pulse-sphere;
        animation-name: pulse-sphere;
        -webkit-animation-duration: 4s;
        animation-duration: 4s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        position: relative;
      }
      .sphere::after {
        content: '';
        position: absolute;
        top: 15%;
        left: 20%;
        width: 30%;
        height: 20%;
        border-radius: 50%;
        background: radial-gradient(ellipse, rgba(255, 255, 255, 0.25), transparent);
      }

      /* Torus Rings */
      .torus {
        position: absolute;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        border: 2px solid rgba(245, 158, 11, 0.4);
        -webkit-animation-name: torus-spin;
        animation-name: torus-spin;
        -webkit-animation-duration: 20s;
        animation-duration: 20s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        box-shadow: 0 0 12px rgba(245, 158, 11, 0.2);
        top: 30px;
        left: 30px;
        z-index: 1;
      }
      .torus2 {
        position: absolute;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        border: 1.5px solid rgba(245, 158, 11, 0.25);
        -webkit-animation-name: torus-spin2;
        animation-name: torus-spin2;
        -webkit-animation-duration: 28s;
        animation-duration: 28s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        box-shadow: 0 0 8px rgba(245, 158, 11, 0.15);
        top: 10px;
        left: 10px;
        z-index: 1;
      }

      /* Floating Cubes */
      .cube {
        width: 28px;
        height: 28px;
        position: absolute;
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(6, 182, 212, 0.4));
        border: 1px solid rgba(139, 92, 246, 0.4);
        border-radius: 4px;
        -webkit-animation-name: float1;
        animation-name: float1;
        -webkit-animation-duration: 6s;
        animation-duration: 6s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        box-shadow: 0 0 16px rgba(139, 92, 246, 0.3);
        z-index: 3;
      }
      .cube2 {
        width: 18px;
        height: 18px;
        position: absolute;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(139, 92, 246, 0.3));
        border: 1px solid rgba(6, 182, 212, 0.3);
        border-radius: 3px;
        -webkit-animation-name: float2;
        animation-name: float2;
        -webkit-animation-duration: 8s;
        animation-duration: 8s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        box-shadow: 0 0 12px rgba(6, 182, 212, 0.3);
        z-index: 3;
      }

      /* Dust Particles */
      .particle {
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.7);
        -webkit-animation-name: drift;
        animation-name: drift;
        -webkit-animation-duration: 3s;
        animation-duration: 3s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        z-index: 1;
      }

      /* Orbiting Path Particles */
      .orbiting-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 4;
      }
      .orbit-particle-1 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        margin: -3px;
        border-radius: 50%;
        background: #F59E0B;
        box-shadow: 0 0 8px #F59E0B;
        -webkit-animation-name: orbit;
        animation-name: orbit;
        -webkit-animation-duration: 15s;
        animation-duration: 15s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }
      .orbit-particle-2 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        margin: -2.5px;
        border-radius: 50%;
        background: #06B6D4;
        box-shadow: 0 0 8px #06B6D4;
        -webkit-animation-name: orbit2;
        animation-name: orbit2;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }
    `]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/jubayerprantor/designresources' },
      { text: 'Contribute', link: '/contributing' },
      { text: 'Sources', link: '/sources' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Inspiration',
        collapsed: false,
        items: [
          { text: 'Design Inspiration', link: '/design-inspiration' },
        ]
      },
      {
        text: 'Assets & Media',
        collapsed: false,
        items: [
          { text: 'Stock Photos',             link: '/stock-photos' },
          { text: 'Stock Video & Music',      link: '/stock-video-music' },
          { text: 'Vectors & Illustrations',  link: '/vectors-illustrations' },
          { text: 'Icons, Logos & Animations',link: '/icons-logos' },
          { text: 'Mockups & Frames',         link: '/mockups' },
          { text: 'Design Add-ons',           link: '/design-addons' },
          { text: '3D, Architecture & Motion',link: '/3d-architecture' },
        ]
      },
      {
        text: 'Design',
        collapsed: false,
        items: [
          { text: 'Typography & Fonts',       link: '/typography' },
          { text: 'Colors & Gradients',       link: '/colors-gradients' },
          { text: 'Design Tools & AI',        link: '/design-tools-ai' },
        ]
      },
      {
        text: 'Development',
        collapsed: false,
        items: [
          { text: 'Code & Frameworks',        link: '/code-frameworks' },
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Learning & Community',     link: '/learning-community' },
        ]
      },
      {
        text: 'About',
        collapsed: false,
        items: [
          { text: 'How to Contribute',       link: '/contributing' },
          { text: 'Sources & Attribution',   link: '/sources' },
          { text: 'Credits & Design',        link: '/credits' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jubayerprantor/designresources' }
    ],
    footer: {
      message: 'A personal collection of design resources. Open to contributions.',
      copyright: 'Copyright © 2026-present Jubayer Prantor & Contributors'
    }
  }
})
