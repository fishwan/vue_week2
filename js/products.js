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
        // 驗證登入
        checkLogin() {
            const url = `${this.apiUrl}/api/user/check`;
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            axios.defaults.headers.common['Authorization'] = token;

            axios.post(url)
                .then(res => {
                    this.getData()
                })
                .catch(err => {
                    alert(err.data.message)
                    window.location = 'index.html'
                })
        },
        // 獲取資料
        getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            
            axios.get(url)
                .then(res => {
                    this.products = res.data.products;
                })
        }
    },
    mounted() {
        this.checkLogin();
    },
}).mount('#app');