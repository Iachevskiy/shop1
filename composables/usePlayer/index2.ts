import { useObserver } from '@/composables';
import { IObserver } from '@/types';

export const usePlayer = function () {
  const { addObserver } = useObserver();

  const statusShowing = useState('playerStatusShowing', () => ({
    fullShowId: null,
    startShowId: null,
    showItemDetail1: '11',
    showItemDetail2: '22',
    fullShowItemDetail: '11',
  }));

  const nowOpenId = useState('observerItemNowOpenId', () => null);

  const swipeBottomEnd = useState('swipeBottomEnd', () => false);
  const swipeTopEnd = useState('swipeTopEnd', () => true);

  const directionSwipe = useState('observerDirectionSwipe', () => 'bottom');

  const data = useState('playerData', () => [
    {
      id: 1,
      title: 'первый',
    },
    {
      id: 2,
      title: 'второй',
    },
    {
      id: 3,
      title: 'третий',
    },
    {
      id: 4,
      title: 'четвертый',
    },
    {
      id: 5,
      title: 'пятый',
    },
    {
      id: 6,
      title: 'шестой',
    },
    {
      id: 7,
      title: 'седьмой',
    },
    {
      id: 8,
      title: 'восьмой',
    },
    {
      id: 9,
      title: 'девятый',
    },
  ]);

  const dataShow = useState('observerdataShow', () => ({
    item11: 0,
    item12: 1,
    item21: 0,
    item22: 1,
  }));

  // Observer Start Showing
  const handleObserverStartShowing = (entries) => {
    entries.forEach((entry) => {
      const { item } = entry.target.dataset;
      if (entry.isIntersecting) {
        console.log('start Showing item', item);
      }
    });
  };
  const observerStartShowing:IObserver = {
    name: 'observerStartShowing',
    options: {
      root: null,
      rootMargin: '0px',
      threshold: [0.09],
    },
    observer: null,
    handle: handleObserverStartShowing,
    items: [],
  };
  addObserver(observerStartShowing);

  // Observer Start Full Showing
  const handleObserverStartFullShowing = (entries) => {
    entries.forEach((entry) => {
      const { item, itemDetail } = entry.target.dataset;
      if (entry.isIntersecting) {
        statusShowing.value.fullShowId = item;

        if (itemDetail !== statusShowing.value.fullShowItemDetail) {
          if (statusShowing.value.fullShowItemDetail[1] === itemDetail[1]) {
            const swipeTop = directionSwipe.value === 'top';
            const {
              item11, item12, item21, item22,
            } = dataShow.value;
            if (item === '1') {
              const newItem21Value = swipeTop ? item11 - 1 : item12 - 1;
              if (newItem21Value > -1 && newItem21Value < data.value.length) {
                dataShow.value.item21 = newItem21Value;
                swipeTopEnd.value = false;
              } else {
                swipeTopEnd.value = true;
              }

              const newItem22Value = swipeTop ? item11 + 1 : item12 + 1;
              if (newItem22Value > -1
                && newItem22Value < data.value.length
                && newItem22Value !== dataShow.value.item22) {
                dataShow.value.item22 = newItem22Value;
                swipeBottomEnd.value = false;
              } else {
                swipeBottomEnd.value = true;
              }
            }

            if (item === '2') {
              const newItem11Value = swipeTop ? item21 - 1 : item22 - 1;
              if (newItem11Value > -1 && newItem11Value < data.value.length) {
                dataShow.value.item11 = newItem11Value;
                swipeTopEnd.value = false;
              } else {
                swipeTopEnd.value = true;
              }
              const newItem12Value = swipeTop ? item21 + 1 : item22 + 1;
              if (newItem12Value > -1
                && newItem12Value < data.value.length
                && newItem12Value !== dataShow.value.item12) {
                dataShow.value.item12 = newItem12Value;
                swipeBottomEnd.value = false;
              } else {
                swipeBottomEnd.value = true;
              }
            }
          }

          statusShowing.value.fullShowItemDetail = itemDetail;
        }
      }
    });
  };
  const observerStartFullShowing:IObserver = {
    name: 'observerStartFullShowing',
    options: {
      root: null,
      rootMargin: '0px',
      threshold: [1],
    },
    observer: null,
    handle: handleObserverStartFullShowing,
    items: [],
  };
  addObserver(observerStartFullShowing);

  // Observer Start Finish line Full Showing
  const handleObserverStartFinishLine = (entries) => {
    entries.forEach((entry) => {
      const { devider } = entry.target.dataset;
      if (entry.isIntersecting) {
        if (statusShowing.value.fullShowId === '2') {
          if (devider === 'devider-2-top') {
            fun(classes12, 2);
            setDirection('top');
            statusShowing.value.showItemDetail1 = '11';
          }
          if (devider === 'devider-2-bottom') {
            fun(classes21, 22);
            setDirection('bottom');
            statusShowing.value.showItemDetail1 = '12';
          }
        }

        if (statusShowing.value.fullShowId === '1') {
          if (devider === 'devider-1-top') {
            fun(classes21, 1);
            setDirection('top');
            statusShowing.value.showItemDetail2 = '21';
          }
          if (devider === 'devider-1-bottom') {
            fun(classes12, 12);
            setDirection('bottom');
            statusShowing.value.showItemDetail2 = '22';
          }
        }
      }
    });
  };
  const observerStartFinishLine:IObserver = {
    name: 'observerStartFinishLine',
    options: {
      root: null,
      rootMargin: '0px',
      threshold: [0.95],
    },
    observer: null,
    handle: handleObserverStartFinishLine,
    items: [],
  };
  addObserver(observerStartFinishLine);

  const setDirection = (val) => {
    directionSwipe.value = val;
  };

  const classes = useState('observerItemClasses', () => ({
    item1: 'player__item-order1',
    item2: 'player__item-order2',
  }));
  const classes12 = {
    item1: 'player__item-order1',
    item2: 'player__item-order2',
  };
  const classes21 = {
    item1: 'player__item-order2',
    item2: 'player__item-order1',
  };
  const fun = (value, id) => {
    if (id !== nowOpenId.value) {
      const endBottom = (id === 22 || id === 12) && swipeBottomEnd.value;
      const endTop = (id === 1 || id === 2) && swipeTopEnd.value;
      if (!endBottom && !endTop) {
        classes.value = value;
        nowOpenId.value = id;
      }
    }
  };

  return {
    classes,
    dataShow,
    directionSwipe,
    data,
    statusShowing,
    swipeBottomEnd,
    swipeTopEnd,
  };
};
