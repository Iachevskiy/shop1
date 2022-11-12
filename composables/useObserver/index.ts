import {
  IObserver,
  IObserverRootWaiting,
  IObserverItems,
  IResizeObserver,
} from '@/types';

export const useObserver = function () {
  const resizeObservers = useState('useObserverResizes', ():IResizeObserver[] => ([]));
  const observers = useState('useObserver', ():IObserver[] => ([]));
  const observerRootsWaiting = useState('useObserverRootsWaiting', ():IObserverRootWaiting[] => ([]));

  // добавляем observer
  const addObserver = (data: IObserver): void => {
    if (typeof data.handle !== 'function') return;
    if (observers.value.find((item) => item.name === data.name)) {
      return;
    }
    observers.value.push(data);
  };

  // добавляем рут элемент
  const observerSetRoot = (name: string, root: HTMLElement) => {
    const hasInWaiting = observerRootsWaiting.value.find((item) => item.name === name);
    const hasInObservers = observerRootsWaiting.value.find((item) => item.name === name);
    if (hasInWaiting || hasInObservers) {
      return;
    }
    observerRootsWaiting.value.push({ name, root });
  };

  // добавляем элемент в observer
  const addToObserver = (nameObserver: string, nameEl: string, el: HTMLElement): void => {
    const observer = observers.value.find((item) => item.name === nameObserver);
    if (!observer) {
      return;
    }

    // console.log('addToObserver 1', nameEl);
    const hasElInOserver = observer.items.find((item) => item.name === nameEl);
    if (hasElInOserver) {
      return;
    }
    // console.log('addToObserver 2', nameEl);
    const elForObserver: IObserverItems = {
      name: nameEl,
      el,
      added: false,
    };
    // console.log('addToObserver', nameEl, elForObserver);
    observer.items.push(elForObserver);
  };

  // добавляем элемент в observer
  const removeFromObserver = (nameObserver: string, nameEl: string, el: HTMLElement): void => {
    const observer = observers.value.find((item) => item.name === nameObserver);
    if (!observer) {
      return;
    }

    observer.observer.unobserve(el);
    observer.items = observer.items.filter((item) => item.name !== nameEl);
  };

  watch(
    observers,
    (newObserver) => {
      newObserver.forEach((data) => {
        const {
          options,
          items,
          handle,
          name,
        } = data;

        if (!options.root) {
          const root = observerRootsWaiting.value.find((waiting) => waiting.name === name);
          if (!root) return;

          options.root = root.root;
          observerRootsWaiting.value = observerRootsWaiting.value
            .filter((waiting) => waiting.name !== name);
        }

        if (!data.observer) data.observer = new IntersectionObserver(handle, options);

        items.forEach((item) => {
          if (!item.added) {
            data.observer.observe(item.el);
            item.added = true;
          }
        });
      });
    },
    { deep: true },
  );

  // добавляем Resizes observer
  const addResizeObserver = (data: IResizeObserver): void => {
    if (resizeObservers.value.find((item) => item.name === data.name)) {
      return;
    }
    resizeObservers.value.push(data);
  };

  // добавляем элемент в observer
  const addToResizeObserver = (nameObserver: string, nameEl: string, el: HTMLElement): void => {
    const resizeObserver = resizeObservers.value.find((item) => item.name === nameObserver);
    if (!resizeObserver) {
      return;
    }
    const hasElInObserver = resizeObserver.items.find((item) => item.name === nameEl);
    if (hasElInObserver) {
      return;
    }
    const elForObserver: IObserverItems = {
      name: nameEl,
      el,
      added: false,
    };
    resizeObserver.items.push(elForObserver);
  };

  watch(
    resizeObservers,
    (newObserver) => {
      newObserver.forEach((data) => {
        const {
          items,
          handle,
        } = data;

        if (!data.observer) data.observer = new ResizeObserver(handle);

        items.forEach((item) => {
          if (!item.added) {
            data.observer.observe(item.el);
            item.added = true;
          }
        });
      });
    },
    { deep: true },
  );

  return {
    observers,
    observerRootsWaiting,
    addObserver,
    observerSetRoot,
    addToObserver,
    addResizeObserver,
    addToResizeObserver,
    removeFromObserver,
  };
};
