import { useObserver } from '@/composables';
import { IResizeObserver } from '@/types';

const sizes = {
  tablet: 992,
  mobile: 420,
};

export const useMedia = function () {
  const nuxtApp = useNuxtApp();

  const { addResizeObserver, addToResizeObserver } = useObserver();

  const mediaSize = useState('mediaSize', () => 'desktop');

  nuxtApp.hook('page:finish', () => {
    const handleResizeObserverMainWidth = (entries) => {
      entries.forEach((entry) => {
        const cr = entry.contentRect;
        const { width } = cr;
        if (width > sizes.tablet) mediaSize.value = 'desktop';
        if (width < sizes.tablet && width > sizes.mobile) mediaSize.value = 'tablet';
        if (width < sizes.mobile) mediaSize.value = 'mobile';
      });
    };
    const resizeObserverMainWidth:IResizeObserver = {
      name: 'resizeObserverMainWidth',
      observer: null,
      handle: handleResizeObserverMainWidth,
      items: [],
    };
    addResizeObserver(resizeObserverMainWidth);

    addToResizeObserver('resizeObserverMainWidth', 'body', document.querySelector('body'));
  });

  return {
    mediaSize,
  };
};
