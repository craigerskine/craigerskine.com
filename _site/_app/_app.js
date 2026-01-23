// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// color mode
const toggleColorMode = function () {
  // light
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-mode', 'light');
    return;
  }
  // dark
  document.documentElement.classList.add('dark');
  localStorage.setItem('color-mode', 'dark');
};

document.querySelectorAll('.color-mode').forEach((btn) => {
  btn.addEventListener('click', toggleColorMode);
});

// twind
import { install, injectGlobal, autoDarkColor } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetLineClamp from '@twind/preset-line-clamp';

install({
  presets: [presetAutoprefix(), presetTailwind(), presetLineClamp()],
  darkMode: 'class',
  darkColor: autoDarkColor,
  hash: false,
  theme: {
    extend: {
      screens: {
        xs: '425px',
      },
      colors: ({ theme }) => ({
        pri: theme('colors.orange'),
        slate: { 950: '#020617' },
        gray: { 950: '#030712' },
        zinc: { 950: '#09090B' },
        neutral: { 950: '#0A0A0A' },
        stone: { 950: '#0C0A09' },
        red: { 950: '#450A0A' },
        orange: { 950: '#431407' },
        amber: { 950: '#451A03' },
        yellow: { 950: '#422006' },
        lime: { 950: '#1A2E05' },
        green: { 950: '#052E16' },
        emerald: { 950: '#022C22' },
        teal: { 950: '#042F2E' },
        cyan: { 950: '#083344' },
        sky: { 950: '#082F49' },
        blue: { 950: '#172554' },
        indigo: { 950: '#1E1B4B' },
        violet: { 950: '#2E1065' },
        purple: { 950: '#3B0764' },
        fuchsia: { 950: '#4A044E' },
        pink: { 950: '#500724' },
        rose: { 950: '#4C0519' },
      }),
      fontFamily: ({ theme }) => ({
        sans: ['Inter', ...theme('fontFamily.sans')],
      }),
      keyframes: {
        blob: {
          '15%': { transform: 'scale(1.4, 1.2)' },
          '40%': { transform: 'scale(.9, .9)' },
          '75%': { transform: 'scale(1.08, 1)' },
          '100%': { transform: 'scale(1, 1)' },
        },
      },
      animation: {
        blob: 'blob .3s ease-in-out',
      },
    },
  },
  rules: [
    ['text-wrap-(unset|wrap|nowrap|balance|pretty)', 'textWrap'],
    ['btn', {'@apply': 'ring-(inset 1 transparent) flex items-center justify-center relative rounded-full after:(border-(t transparent) absolute inset-0 content-[\'\'] [border-radius:inherit]) group-hover:(bg-(black/20 gradient-to-b) from-white/20 via-transparent ring-white/5 motion-safe:(animate-blob) after:border-white/50)'}],
    ['btn-', ({ $$ }) => `bg-white/50 ring-(inset 1 black/10) shadow motion-safe:(transition) group-hover:(bg-${$$}-500/50 bg-gradient-to-b from-white/30 via-transparent to-${$$}-500/30 text-${$$}-800 ring-${$$}-900/20 shadow-(lg ${$$}-500/30)) dark:(bg-black/20 ring-white/10)`],
    ['tab-', ({ $$ }) => `flex items-center justify-center relative rounded-full ring-(1 gray-200 inset) shadow motion-safe:(transition) after:(border-(t white/50) absolute inset-0 content-[''] rounded-full) bg-${$$}-500/50 bg-gradient-to-b from-white/30 via-transparent to-${$$}-500/30 text-${$$}-800 ring-${$$}-900/20 shadow-(lg ${$$}-500/30)`],
    ['bg-grid', { 'background-image': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 6 6\' width=\'6\' height=\'6\' fill=\'currentColor\'><path d=\'m6 5v1h-1v-1zm-4 0v1h-1v-1zm3-1v1h-1v-1zm-2 0v1h-1v-1zm1-1v1h-1v-1zm-1-1v1h-1v-1zm2 0v1h-1v-1zm-3-1v1h-1v-1zm4 0v1h-1v-1zm-5-1v1h-1v-1z\' /></svg>")' }],
    ['bg-paper', { 'background-image': 'url(/_assets/img/bg-paper.png)', '@apply': 'bg-fixed' }],
  ],
});

injectGlobal`
  :root {
    --color-default: #434341;
    --color-switch-2: #E70010;
    --color-wii-u: #43CCE8;
    --color-wii: #EEEEEE;
    --color-3ds: #EEEEEE;
    --color-xbx: #027C00;
    --color-xb-one: var(--color-xbx);
    --color-xb-360: #73E336;
    --color-xb: #6AA948;
    --color-ps5: #115CDD;
    --color-ps4: var(--color-ps5);
    --color-psv: #0068FF;
    --color-blu-ray: color-mix(in srgb, #0095d5, transparent 50%);
  }
  @layer base {
    [x-cloak] { @apply hidden; }
    body { @apply !block; }
    :focus-visible { @apply outline-(& 2 solid current) outline-offset-1; }
    /* media cases */
    .media-case { background: var(--color-default); display: inline-block; text-decoration: none; position: relative; border-radius: 0.1875rem; transition: all .15s cubic-bezier(0,1,0.5,1.5); }
    .media-case:hover,.media-case:focus { transform: translate(0, -0.5rem); }
    .media-case img { width: 100%; height: 100%; border-radius: 0 0.125rem 0.125rem 0; }
    /* plastic colors */
    .media-switch-2 { background: var(--color-switch-2); }
    .media-wii-u { background: var(--color-wii-u); }
    .media-wii { background: var(--color-wii); }
    .media-3ds { background: var(--color-3ds); }
    .media-xb-x { background: var(--color-xbx); }
    .media-xb-one { background: var(--color-xb-one); }
    .media-xb-360 { background: var(--color-xb-360); }
    .media-xb { background: var(--color-xb); }
    .media-ps5 { background: var(--color-ps5); }
    .media-ps4 { background: var(--color-ps4); }
    .media-psv { background: var(--color-psv); }
    .media-blu-ray { background: var(--color-blu-ray); }
    /* tweaks */
    .media-cd,.media-cd-tl { border-radius: 0; & img { border-radius: 0; } }
    /* sizes */
    .media-case { padding: 7px 8px 7px 0; width: 110px; height: 154px; }
    .media-ps5,.media-ps4 { padding: 7px 8px 7px 0; height: 134px; }
    .media-ps3,.media-blu-ray { padding: 14px 4px 4px 0; width: 110px; height: 134px; }
    .media-psv { padding: 5px 5px 5px 0; width: 90px; height: 118px; }
    .media-psp { padding: 4px 4px 4px 0; width: 88px; height: 138px; }
    .media-switch-2,.media-switch { padding: 4px 4px 4px 0; width: 83px; height: 134px; }
    .media-3ds,.media-ds { height: 104px; }
    .media-xb-x,.media-xb-one { padding: 17px 4px 7px 0; height: 134px; }
    .media-cd { padding: 2px 4px 2px 12px; width: 112px; height: 102px; }
    .media-cd-tl { padding: 2px 4px 2px 12px; width: 112px; height: 156px; }
    .media-box { padding: 0; width: 112px; height: 112px; border-radius: 2px; }
    .media-box-wd { padding: 0; width: 140px; height: 102px; border-radius: 2px; }
    .media-box-md { padding: 0; width: 102px; height: 120px; border-radius: 2px; }
    .media-box-sm { padding: 0; width: 102px; height: 102px; border-radius: 2px; }
    .media-box-tl { padding: 0; width: 102px; height: 140px; border-radius: 2px; }
    /* cases */
    .media-case:after { width: 100%; height: 100%; background: url(/_assets/img/media/cases/case.png) no-repeat 0 0; content: ""; position: absolute; top: 0; left: 0; }
    /* sony */
    .media-ps5:after,.media-ps4:after { background-image: url(/_assets/img/media/cases/sony-ps5.png); }
    .media-ps3:after { background-image: url(/_assets/img/media/cases/sony-ps3.png); }
    .media-psv:after { background-image: url(/_assets/img/media/cases/sony-psv.png); }
    .media-psp:after { background-image: url(/_assets/img/media/cases/sony-psp.png); }
    /* nintendo */
    .media-switch-2:after { background-image: url(/_assets/img/media/cases/n-switch-2.png); }
    .media-switch:after { background-image: url(/_assets/img/media/cases/n-switch.png); }
    .media-3ds:after,.media-ds:after { background-image: url(/_assets/img/media/cases/case-sm.png); }
    /* microsoft */
    .media-xb-x:after,.media-xb-one:after { background-image: url(/_assets/img/media/cases/ms-xbx.png); }
    /* misc */
    .media-blu-ray:after { background-image: url(/_assets/img/media/cases/blu-ray.png); }
    .media-cd:after { background-image: url(/_assets/img/media/cases/cd.png); }
    .media-cd-tl:after { background-image: url(/_assets/img/media/cases/cd-tl.png); }
    .media-box:after { background-image: url(/_assets/img/media/cases/box.png); }
    .media-box-wd:after { background-image: url(/_assets/img/media/cases/box-wd.png); }
    .media-box-md:after { background-image: url(/_assets/img/media/cases/box-md.png); }
    .media-box-sm:after { background-image: url(/_assets/img/media/cases/box-sm.png); }
    .media-box-tl:after { background-image: url(/_assets/img/media/cases/box-tl.png); }
    /* tippy */
    .tippy-box[data-state="hidden"] { @apply opacity-0 translate-y-1; }
    [data-tippy-root] { @apply max-w-[calc(100vw-10px)]; }
    .tippy-box { @apply bg-black text-(white xs) font-normal relative outline-0 opacity-100 rounded shadow-[0_0_0_1px_currentColor] translate-y-0 motion-safe:(transition duration-75); }
    .tippy-box[data-placement^="top"] > .tippy-arrow { @apply [filter:drop-shadow(0_1px_0_white)] bottom-0 before:(bottom-[-7px] left-0 border-(t-[8px] r-[8px] b-0 l-[8px] t-[initial])) origin-top; }
    .tippy-box[data-placement^="bottom"] > .tippy-arrow { @apply [filter:drop-shadow(0_-1px_0_white)] top-0 before:(top-[-7px] left-0 border-(t-0 r-[8px] b-[8px] l-[8px] b-[initial])) origin-bottom; }
    .tippy-box[data-placement^="left"] > .tippy-arrow {@apply [filter:drop-shadow(1px_0_0_white)] right-0 before:(right-[-7px] border-(t-[8px] r-0 b-[8px] l-[8px] l-[initial])) origin-left; }
    .tippy-box[data-placement^="right"] > .tippy-arrow { @apply [filter:drop-shadow(-1px_0_0_white)] left-0 before:(left-[-7px] border-(t-[8px] r-[8px] b-[8px] l-0 r-[initial]) origin-right); }
    .tippy-arrow { @apply w-4 h-4 text-black absolute before:(content-[''] absolute border-(transparent solid)); }
    .tippy-content { @apply py-1.5 px-3 relative z-[1]; }
  }
`;

// alpinejs
import Alpine from 'alpinejs';
import anchor from '@alpinejs/anchor';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';
import tippy from 'tippy.js';
document.addEventListener('alpine:init', () => {
  // tooltip
  // magic: $tooltip
  Alpine.magic('tooltip', el => message => {
    let instance = tippy(el, { content: message, trigger: 'manual' })
    instance.show()
    setTimeout(() => {
      instance.hide()
      setTimeout(() => instance.destroy(), 150)
    }, 2000)
  });
  // directive: x-tooltip
  Alpine.directive('tooltip', (el, { expression }, { evaluate }) => {
    tippy(el, { content: evaluate(expression) })
  });
});
Alpine.plugin([anchor, collapse, focus]);
window.Alpine = Alpine;
Alpine.start();
