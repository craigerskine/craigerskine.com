// twind
import { install, injectGlobal } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

install({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  hash: false,
  theme: {
    extend: {
      colors: ({ theme }) => ({
        brand: '#040635',
        content: '#EBE5FF',
        link: '#FFD34F',
      }),
      fontFamily: ({ theme }) => ({
        serif: 'Times New Roman,'+ theme('fontFamily.serif'),
      }),
    },
  },
  rules: [
    ['text-wrap-(unset|wrap|nowrap|balance)', 'textWrap'],
  ],
});
// global css
injectGlobal`
  @layer base {
    a { @apply text-link underline; }
    [x-cloak] { @apply hidden; }
  }
`

// alpinejs
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();