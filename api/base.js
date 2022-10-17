export const db = {
    categories: [
        {
            id: 0,
            title: "Меню",
            img: "",
            url: "",
            parentId: null,
        },
        {
            id: 1,
            title: "Роллы",
            img: "",
            url: "rolls",
            parentId: 0,
        },
        {
            id: 2,
            title: "Закуски",
            img: "",
            url: "snacks",
            parentId: 0,
        },
        {
            id: 3,
            title: "Салаты",
            img: "",
            url: "salads",
            parentId: 0,
        },
        {
            id: 4,
            title: "Супы",
            img: "",
            url: "soups",
            parentId: 3,
        },
        {
            id: 5,
            title: "Горячие блюда",
            img: "",
            url: "hot-eat",
            parentId: 3,
        },
        {
            id: 6,
            title: "Десерты",
            img: "",
            url: "deserts",
            parentId: 3,
        },
        {
            id: 7,
            title: "Напитки",
            img: "",
            url: "drinks",
            parentId: 4,
        },
        {
            id: 8,
            title: "Веган-меню",
            img: "",
            url: "vegan-menu",
            parentId: 2,
        },
    ],

    categories2: [
        {
            id: 0,
            title: "Меню",
            img: "",
            url: "",
            parentId: null,
        },
        {
            id: 1,
            title: "Телевизоры",
            img: "",
            url: "tv",
            parentId: 0,
        },
        {
            id: 2,
            title: "Телевизоры Sony",
            img: "",
            url: "sony",
            parentId: 1,
        },
        {
            id: 3,
            title: "small Sony",
            img: "",
            url: "small-sony",
            parentId: 2,
        },
        {
            id: 4,
            title: "little-small Sony",
            img: "",
            url: "little-small-sony",
            parentId: 3,
        },
        {
            id: 5,
            title: "little-small Sony 2",
            img: "",
            url: "little-small-sony-2",
            parentId: 3,
        },
    ]
}