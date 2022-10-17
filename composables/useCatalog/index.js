import { cloneDeep } from 'lodash'
import { db } from '@/api/base';

export const useCatalog = function () {



    const dbCategories = useState('dbCategories', () =>  cloneDeep(db.categories2));

    const catalog = useState('dbCatalog', () => dbCategories.value.map(category => {
        // подкатегории
        category.categories = dbCategories.value.filter(item => item.parentId === category.id);

        // получаем url родителя
        const getParentUrl = (url)=>{
            const category = dbCategories.value.find(item=> item.url === url);
            const categoryParentId = category.parentId;
            const parentCategory = dbCategories.value.find(item=> item.id === categoryParentId);
            return parentCategory ? parentCategory.url : null;
        };

        // получаем полный url
        const getFullUrl = (url)=> {
            const parentUrl = getParentUrl(url[0]);
            if(parentUrl) {
                url.unshift(parentUrl)
                return getFullUrl(url)
            }
            return url;
        }
        category.fullUrl = '/' + getFullUrl([category.url]).join('/');

        return category;
    }))

    const categoryActiveId = useState('categoryActiveId', () => 0);

    const handleSelectCategory = (id) => {
        categoryActiveId.value = id;
        const router = useRouter();
        router.push({ path: categoryActive.value.fullUrl || '' });
    };

    const setPageByFullUrl = (fullUrl) => {
        const category = catalog.value
            .find(category => category.fullUrl === fullUrl || ((category.fullUrl + '/') === fullUrl))

        categoryActiveId.value = category.id;
    };

    const categories = computed(() => {
        return catalog.value.filter(category => category.parentId === categoryActiveId.value);
    })

    const categoryActive = computed(() => {
        return catalog.value.find(category => category.id === categoryActiveId.value);
    })

    const categoryActiveParent = computed(() => {
        const categoryActiveParent = catalog.value.find(category => category.id === categoryActive.value.parentId);
        return categoryActiveParent;
    })
    return {
        catalog,
        categoryActiveId,
        handleSelectCategory,
        categories,
        categoryActive,
        setPageByFullUrl,
        categoryActiveParent,
    }
}
