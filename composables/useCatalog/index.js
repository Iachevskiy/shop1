import { cloneDeep } from 'lodash';
import { db } from '@/api/base';

export const useCatalog = function () {
  const nuxtApp = useNuxtApp();

  const categories = useState('categories', () => cloneDeep(db.categories));
  const products = useState('products', () => cloneDeep(db.products));

  const categoryActiveId = useState('categoryActiveId', () => 1);
  const selectingCategoryByMenu = useState('selectingCategoryByMenu', () => false);
  const handleSelectCategory = (id) => {
    selectingCategoryByMenu.value = true;
    categoryActiveId.value = id;
  };

  const observer = useState('observer', () => null);
  const initObserver = () => {
    // Настройки observer
    const options = {
      rootMargin: '-200px 0px -400px 0px',
    };

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        const showId = Number(entry.target.dataset.categoryId);
        if (entry.isIntersecting) {
          const openByClick = selectingCategoryByMenu.value && showId === categoryActiveId.value;
          const openByScroll = !selectingCategoryByMenu.value;
          if (openByClick) {
            selectingCategoryByMenu.value = false;
          }
          if (openByScroll) {
            categoryActiveId.value = showId;
          }
        }
      });
    };

    observer.value = new IntersectionObserver(handleObserver, options);
  };

  nuxtApp.hook('page:finish', () => {
    if (!observer.value) {
      initObserver();
    }
  });

  return {
    categories,
    categoryActiveId,
    handleSelectCategory,
    observer,
    products,
  };
};
