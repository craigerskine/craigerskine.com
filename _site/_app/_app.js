// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// color mode
const toggleColorMode = function() {
  // light
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-mode', 'light')
    return;
  }
  // dark
  document.documentElement.classList.add('dark');
  localStorage.setItem('color-mode', 'dark');
};

document.querySelectorAll('.color-mode').forEach(btn => {
  btn.addEventListener('click', toggleColorMode);
});

// twind
import { install, injectGlobal, autoDarkColor } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

install({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  darkColor: autoDarkColor,
  hash: false,
  theme: {
    extend: {
      screens: {
        'xs': '425px',
      },
      colors: ({ theme }) => ({
        pri: theme('colors.orange'),
      }),
      fontFamily: ({ theme }) => ({
        sans: 'Inter,'+ theme('fontFamily.sans'),
      }),
      keyframes: {
        blob: {
          '15%': { transform: 'scale(1.4, 1.2)', },
          '40%': { transform: 'scale(.9, .9)', },
          '75%': { transform: 'scale(1.08, 1)', },
          '100%': { transform: 'scale(1, 1)', },
        },
      },
      animation: {
        blob: 'blob .3s ease-in-out',
      },
    },
  },
  rules: [
    [ 'btn-', ({ $$ }) => `bg-gray-50/50 flex items-center justify-center relative rounded-full ring-(1 gray-200 inset) shadow motion-safe:(transition) group-hover:(motion-safe:(animate-blob) after:(border-(t white/50) absolute inset-0 content-[''] rounded-full) bg-${$$}-500/50 bg-gradient-to-b from-white/30 via-transparent to-${$$}-500/30 text-${$$}-800 ring-${$$}-900/20 shadow-(lg ${$$}-500/30))` ],
    [ 'bg-grid', { 'background-image': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 6 6\' width=\'6\' height=\'6\' fill=\'currentColor\'><path d=\'m6 5v1h-1v-1zm-4 0v1h-1v-1zm3-1v1h-1v-1zm-2 0v1h-1v-1zm1-1v1h-1v-1zm-1-1v1h-1v-1zm2 0v1h-1v-1zm-3-1v1h-1v-1zm4 0v1h-1v-1zm-5-1v1h-1v-1z\' /></svg>")', } ],
    [ 'bg-paper', { 'background-image': 'url(/_assets/img/bg-paper.png)', '@apply': 'bg-fixed' } ],
  ],
});

injectGlobal`
  @layer base {
    body { @apply !block; }
    .media-dvd,.media-ps2,.media-wii,.media-gcn,.media-xb,.media-xb360 { padding: 7px 8px 7px 0; width: 110px; height: 154px; }
    .media-cd { padding: 2px 4px 2px 12px; width: 112px; height: 102px; }
    .media-cd-tl { padding: 2px 4px 2px 12px; width: 112px; height: 156px; }
    .media-xbone { padding: 17px 4px 7px 0; width: 110px; height: 134px; }
    .media-wiiu { padding: 7px 6px 7px 0; width: 110px; height: 154px; }
    .media-switch { padding: 4px 4px 4px 0; width: 90px; height: 134px; }
    .media-3ds { padding: 5px 5px 5px 0; width: 110px; height: 104px; }
    .media-ds { padding: 7px 8px 7px 0; width: 110px; height: 104px; }
    .media-ps5,.media-ps4 { padding: 7px 8px 7px 0; width: 110px; height: 134px; }
    .media-ps3 { padding: 14px 4px 4px 0; width: 110px; height: 134px; }
    .media-psv { padding: 5px 5px 5px 0; width: 90px; height: 118px; }
    .media-psp { padding: 4px 4px 4px 0; width: 88px; height: 138px; }
    [x-cloak] { @apply hidden; }
  }
`

// alpinejs
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
Alpine.plugin(focus);
window.Alpine = Alpine;
Alpine.start();