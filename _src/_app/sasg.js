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
  :root {
    --color-brand: #040635;
    --color-content: #EBE5FF;
    --color-link: #FFD34F;
  }
  @layer base {
    a {
      @apply [color:var(--color-link)] underline transition;
      &:hover {
        color: color-mix(in oklab, var(--color-brand) 20%, var(--color-link));
      }
    }
    [x-cloak] { @apply hidden; }
  }
`

// alpinejs
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();
