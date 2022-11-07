import { useObserver } from '@/composables';
import { IObserver } from '@/types';
import { debounce } from 'lodash';

export const usePlayer = function () {
  const { addObserver } = useObserver();

  const showPlayBtn = useState('playerShowPlayBtn', () => true);
  const toHidePlayBtn = () => {
    showPlayBtn.value = false;
  };
  const toShowPlayBtn = () => {
    showPlayBtn.value = true;
  };
  const fullShowId = useState('playerFullShowId', () => 0);
  const startShowId = useState('playerStartShowId', () => 1);
  const view1Order = useState('playerView1_Order', () => 0);
  const view2Order = useState('playerView2_Order', () => 1);
  const view3Order = useState('playerView3_Order', () => 2);

  const videos = useState('playerVideos', () => ([
    {
      id: 33948,
      user_id: 2648523,
      privacy: 0,
      description: 'Full delicious video will be only for friends soon😋👅',
      duration: 10,
      likes_count: 3,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/91860e9deaca0d41ec18056a2b6230069e9ec81162b636b32a3823c70c9d9194.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30665,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/a44a484769d83259a1ab55d29ac3b8885a13f3c6b34b4f0399acd4f9bfa33666.jpg',
      image_user_id: 2648523,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/ae9bb090d448595add7956e7da614ef402f61ba7ec76e483b822c41d0993d752.jpg',
      user_name: 'Kitty_Katty',
      user_username: 'kitty_katty',
      user_follow_price: 10,
      user_free_days: 1,
      user_verified: true,
      user_currency: 'USD',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2648523/91b22233f619b3799d7c4faa5bf26d54170.webp',
      user_adult: true,
    },
    {
      id: 33940,
      user_id: 2646641,
      privacy: 0,
      description: 'Проверяю формы',
      duration: 10,
      likes_count: 3,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/6e2b792e67825f4b22f606e6812c4566ef6d43bee37a8cef5eabbb8b3cb02049.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30656,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/eae2f491dcd739b01bea47ce92a0489133bbfb5bfd63766126445f901fa4ba6d.jpg',
      image_user_id: 2646641,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/65f757af5c72a907842605c11573bc7813061d9333bf20029bcead1b5db71c85.jpg',
      user_name: 'Solla',
      user_username: 'solla',
      user_follow_price: 5,
      user_free_days: null,
      user_verified: true,
      user_currency: 'USD',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2646641/3f56eb1604d7c0acc4789dfa7c9aea8a11.webp',
      user_adult: true,
    },
    {
      id: 33968,
      user_id: 2648690,
      privacy: 0,
      description: 'Washed away my sins 😈',
      duration: 7,
      likes_count: 4,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/428c06016df038164f1ab3b382dec42cb504cb931ca8e06554a729f9a1b73350.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30687,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/eccd2ee70b2717956e412e1b8e7a676ee561b955f99d80421a31e51ea81e4fea.jpg',
      image_user_id: 2648690,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/87d586e3f973aaf291c1cdb922723ca0f6d46ba5bce325935a57d370b7b27576.jpg',
      user_name: 'Cute Demon',
      user_username: 'tvorozhok',
      user_follow_price: 9.99,
      user_free_days: 3,
      user_verified: true,
      user_currency: 'TRY',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2648690/d2743c98217eeb292aa51aa3445e0119128.webp',
      user_adult: true,
    },
    {
      id: 33957,
      user_id: 2649441,
      privacy: 0,
      description: '',
      duration: 15,
      likes_count: 4,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/d67f30a58a3a4740250ae3c3f2932ba1854aefd448e168f4e8d681417eb39c3a.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30675,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/b01fb4c09c3cd7b151d7c1c395fd9465e6ac2da932292fc3fbc9fdbf5b4cf2ff.jpg',
      image_user_id: 2649441,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/1951b6d198e2b967fb4d9bc560254ae08ee75e1d88d5a0fa85b7cad98b928210.jpg',
      user_name: 'Ivi.lica',
      user_username: 'ivi.lica',
      user_follow_price: 5,
      user_free_days: 1,
      user_verified: true,
      user_currency: 'KZT',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2649441/dc5871a99c41746cd9d430cb0349dbc1160.webp',
      user_adult: true,
    },
    {
      id: 33937,
      user_id: 2649374,
      privacy: 0,
      description: 'Happy Halloween 🎃',
      duration: 3,
      likes_count: 3,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/c7029153a64b2774c7be1d79d723b4dad5d50848fceb285c0a4cf5ae32e33845.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30653,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/ff26acb1fb9e9c54400cc86a1fe00984d89f35acfaf90a698b67c0cbdfba866a.jpg',
      image_user_id: 2649374,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/e32b07ecd633e61fec054500f115fb0e7aa93ad5fd8d15210e15cd4e10b8c808.jpg',
      user_name: 'Lovely ',
      user_username: 'lovelyfantasy',
      user_follow_price: 5,
      user_free_days: 1,
      user_verified: true,
      user_currency: 'USD',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2649374/6223cbb0b0a19801b727d872b1cf2c79124.webp',
      user_adult: true,
    },
    {
      id: 33911,
      user_id: 2648604,
      privacy: 0,
      description: '😘',
      duration: 27,
      likes_count: 8,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/8b127a79b1670f36ba3ae544feb4ca980a7e896cf5b175cb901e71ceb02395e2.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30627,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/8dbbf124311540f6eac5bfeace0863d9aed0a82a62b5ccd90ab040342b1eb68c.jpg',
      image_user_id: 2648604,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/d779ff0cd54581eabf400fdda81fb7b99fafe6af3d68fe27addb1d17b74a41e1.jpg',
      user_name: 'Lena Twerk❤️‍🔥',
      user_username: 'lenatsig',
      user_follow_price: 5.99,
      user_free_days: 0,
      user_verified: true,
      user_currency: 'USD',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2648604/a743eaa0f6f916c163aba1698cdb4d0c127.webp',
      user_adult: true,
    },
    {
      id: 33907,
      user_id: 2644734,
      privacy: 0,
      description: '',
      duration: 6,
      likes_count: 2,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/e304018a4b9d08096c68b7a901b39879e289c3d6ce5a16f413140d6daa590553.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30623,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/7ad81f73bb608aa9ada9f92b32930aed22adf4acce0ba57f180f0ce84968ca26.jpg',
      image_user_id: 2644734,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/f5c831163ea12500179ee5d2e62f563167939c0985ce7c4fc2c9171f41ee3421.jpg',
      user_name: 'Julia Strawberry',
      user_username: 'juliastrawberry',
      user_follow_price: 7,
      user_free_days: 3,
      user_verified: true,
      user_currency: 'RUB',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2644734/80339705216d3de5000fd0b2683758f571.webp',
      user_adult: true,
    },
    {
      id: 33925,
      user_id: 2648523,
      privacy: 0,
      description: 'Can you guess, what I prepared for "only for friends" video, mm, sweeety? :P',
      duration: 9,
      likes_count: 2,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/87060d4c23fc9714928b8ec8018017efe9b579f79d91c33d9d7015921000ceb4.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30641,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/74bcc5b43ece3ce0f191945f516f6b93d7a9dbd4027f5755a19848b2ab4e011a.jpg',
      image_user_id: 2648523,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/a6de34bf341e9b51cbc9a337a672cd8b00903b2a4acd0ed6ac81103b794d340e.jpg',
      user_name: 'Kitty_Katty',
      user_username: 'kitty_katty',
      user_follow_price: 10,
      user_free_days: 1,
      user_verified: true,
      user_currency: 'USD',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2648523/91b22233f619b3799d7c4faa5bf26d54170.webp',
      user_adult: true,
    },
    {
      id: 33885,
      user_id: 2649019,
      privacy: 0,
      description: 'Hungry boy 😼',
      duration: 10,
      likes_count: 2,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/87d17af67bde8d19893364f8e4cfdefd1c6385d16c73bf31d86ff50fb0584a1f.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30596,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/07af03ce7d38c41104722352b91fb7ebf06b4706e343e68b81af6f641947ad19.jpg',
      image_user_id: 2649019,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/6636a900880f170c3eacc039f0fb8a77df4dff2d2f5e97f78541367a36833c27.jpg',
      user_name: 'Andrew Berezin',
      user_username: 'andrewberezin',
      user_follow_price: 13,
      user_free_days: 0,
      user_verified: true,
      user_currency: 'USD',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2649019/64cc43a69fe5d522c6af39b40af0ccfb117.webp',
      user_adult: true,
    },
    {
      id: 33869,
      user_id: 2648500,
      privacy: 0,
      description: '',
      duration: 10,
      likes_count: 3,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/2635543b298de63cd1792ff62149dfa6bbb4d6b3c1af4f80e1dbc70f088f3c78.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30578,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/ce077ab6c678f84a1299dfbd26668a3d7fdb8b3582acf141f8c2d0657cf392d4.jpg',
      image_user_id: 2648500,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/30be97c37fb3c561c5582673f165f05f62f8c1a5269642c80aa9eb6cd51e8dbe.jpg',
      user_name: 'Margo',
      user_username: '2648500',
      user_follow_price: 5,
      user_free_days: 3,
      user_verified: true,
      user_currency: 'RUB',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2648500/f687c2eb66f438c7678dcd5b041d4118130.webp',
      user_adult: true,
    },
    {
      id: 33936,
      user_id: 2649319,
      privacy: 0,
      description: 'Hello 👋🏻',
      duration: 3,
      likes_count: 4,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/65e8ea0908860c0f836f0d2934c0bba5f196010cf9a1be0466c51cbfc5c0ca73.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30652,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/c3991baff04a84d6ab26882d590b700e584ec085d380d1e242e72bac9a507c8a.jpg',
      image_user_id: 2649319,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/4e249d31bc18df71a91b6664b29e95c1464421e03451a72dbb0b94f26f1aba54.jpg',
      user_name: 'Anapu',
      user_username: '2649319',
      user_follow_price: 5,
      user_free_days: 3,
      user_verified: true,
      user_currency: 'PLN',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2649319/79ea9fcbf62950318f558f8eb5e6af0340.webp',
      user_adult: true,
    },
    {
      id: 33932,
      user_id: 2648766,
      privacy: 0,
      description: '<-----Больше для друзей.More for friends 💕',
      duration: 12,
      likes_count: 2,
      status: 2,
      src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/downloadable/8eda37116abb0db96861c9bed79324addeca1de941fbb038ee4b5560da69e337.mp4',
      is_follower: false,
      liked: false,
      available: true,
      image_id: 30648,
      image_src: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/d6d260827454751faa61b23f181d3d2ee45532bdfc104efa6df0a99f456e6e73.jpg',
      image_user_id: 2648766,
      image_blured: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/image/bf1b66417ff24184a728443427c66bc9b6b1686b2dea717f7da44792e3889acf.jpg',
      user_name: 'Alice',
      user_username: 'sweetalice',
      user_follow_price: 5,
      user_free_days: 1,
      user_verified: true,
      user_currency: 'EUR',
      user_free_subscribe: false,
      user_avatar: 'https://friendsonly.ams3.cdn.digitaloceanspaces.com/storage/app/public/images/avatars/2648766/3c013101322042f26753d7d8e9fb60ab36.webp',
      user_adult: true,
    },
  ]));

  const nuxtApp = useNuxtApp();

  const updateViewsOrder = (item) => {
    console.log('fullShowId', item);
    fullShowId.value = item;
    const view1 = view1Order.value;
    const view2 = view2Order.value;
    const view3 = view3Order.value;

    let nowIndex;
    if (item === '1') nowIndex = view1;
    if (item === '2') nowIndex = view2;
    if (item === '3') nowIndex = view3;

    const dataLength = videos.value.length - 1;

    const topIndex = nowIndex - 1;
    const topIndexValid = topIndex > -1;
    const bottomIndex = nowIndex + 1;
    const bottomIndexValid = bottomIndex <= dataLength;

    if (item === '1') {
      if (topIndexValid && view3 !== topIndex) view3Order.value = topIndex;
      if (bottomIndexValid && view2 !== bottomIndex) view2Order.value = bottomIndex;
    }
    if (item === '2') {
      if (topIndexValid && view1 !== topIndex) view1Order.value = topIndex;
      if (bottomIndexValid && view3 !== bottomIndex) view3Order.value = bottomIndex;
    }
    if (item === '3') {
      if (topIndexValid && view2 !== topIndex) view2Order.value = topIndex;
      if (bottomIndexValid && view1 !== bottomIndex) view1Order.value = bottomIndex;
    }
  };

  const debouncedUpdateViewsOrder = debounce(updateViewsOrder, 180);

  // only client
  nuxtApp.hook('page:finish', () => {
    // Observer Start Full Showing
    const handleObserverStartFullShowing = (entries) => {
      entries.forEach((entry) => {
        const { item } = entry.target.dataset;
        if (entry.isIntersecting && fullShowId.value !== item) {
          debouncedUpdateViewsOrder(item);
        }
      });
    };
    const observerStartFullShowing:IObserver = {
      name: 'observerStartFullShowing',
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.9],
      },
      observer: null,
      handle: handleObserverStartFullShowing,
      items: [],
    };
    addObserver(observerStartFullShowing);

    // Observer Start Showing
    const handleObserverStartShowing = (entries) => {
      entries.forEach((entry) => {
        const { item } = entry.target.dataset;
        if (entry.isIntersecting) {
          console.log('start show', item);
          startShowId.value = item;
        }
      });
    };
    const observerStartShowing:IObserver = {
      name: 'observerStartShowing',
      options: {
        root: null,
        rootMargin: '0px',
        threshold: [0.01],
      },
      observer: null,
      handle: handleObserverStartShowing,
      items: [],
    };
    addObserver(observerStartShowing);
  });

  return {
    videos,
    fullShowId,
    view1Order,
    view2Order,
    view3Order,
    showPlayBtn,
    toHidePlayBtn,
    toShowPlayBtn,
    startShowId,
  };
};
