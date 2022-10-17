import { cloneDeep } from 'lodash'
import { db } from '@/api/base';

export const useCatalog = function () {

    const dbCategories = cloneDeep(db.categories2);

    const catalog = dbCategories.map(category => {
        // подкатегории
        category.categories = dbCategories.filter(item => item.parentId === category.id);

        // получаем url родителя
        const getParentUrl = (url)=>{
            const category = dbCategories.find(item=> item.url === url);
            const categoryParentId = category.parentId;
            const parentCategory = dbCategories.find(item=> item.id === categoryParentId);
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
    })

    const categoryActiveId = useState('categoryActiveId', () => 0);

    const handleSelectCategory = (id) => {
        categoryActiveId.value = id;
        const router = useRouter();
        router.push({ path: categoryActive.value.fullUrl || '' });
    };

    const setPageByFullUrl = (fullUrl) => {
        const category = catalog
            .find(category => category.fullUrl === fullUrl || ((category.fullUrl + '/') === fullUrl))

        categoryActiveId.value = category.id;
    };

    const categories = computed(() => {
        return catalog.filter(category => category.parentId === categoryActiveId.value);
    })

    const categoryActive = computed(() => {
        return catalog.find(category => category.id === categoryActiveId.value);
    })
    return {
        categoryActiveId,
        handleSelectCategory,
        categories,
        categoryActive,
        setPageByFullUrl
    }
}
