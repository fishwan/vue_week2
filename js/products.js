// ESM載入
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';

// vue
createApp({
    data() {
        return {
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'yuchi-hexschool',
            products: [],
            tempProduct: {}
        }
    },
    methods: {
        openProduct(itemProduct) {
            this.tempProduct = itemProduct;
        },
        getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/products/all`;
            axios.get(url)
            .then((res) => {
                this.products = res.data.products;
                console.log(res.data.products)
            })
        }
    },
    mounted() {
        this.getData();
    },
}).mount('#app');