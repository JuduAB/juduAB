import DefaultTheme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress';
// 引入自定义组件
import MyLayout from "./components/MyLayout.vue"
import MouseClick from "./components/MouseClick.vue"
import MouseFollower from "./components/MouseFollower.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import confetti from "./components/confetti.vue"

// 引入var.css
import './style/var.css';
// 引入vue3的相关api
import { toRefs, onMounted, watch, nextTick } from "vue";
// 引入评论插件
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
// 引入图片放大插件
import mediumZoom from 'medium-zoom';


export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        DefaultTheme.enhanceApp({app}); //20行
        // ...
        app.component('MouseClick', MouseClick) //鼠标跟随组件
        app.component('MouseFollower', MouseFollower) //鼠标跟随组件
        app.component('update' , update)
        app.component('ArticleMetadata' , ArticleMetadata)
        app.component('confetti' , confetti)
    },
    Layout: MyLayout,

    setup() {
        // 获取前言和路由
        const { frontmatter } = toRefs(useData());
        const route = useRoute();

        // 注册评论插件
        giscusTalk({
            repo: 'JuduAB/juduAB',
            repoId: 'R_kgDON3DbuQ',
            category: 'General', // 默认: `General`
            categoryId: 'DIC_kwDON3Dbuc4CngNw',
            mapping: 'pathname', // 默认: `pathname`
            inputPosition: 'top', // 默认: `top`
            lang: 'zh-CN', // 默认: `zh-CN`
            locales: {
                'zh-Hans': 'zh-CN',
            },
            homePageShowComment: false, // 首页是否显示评论区，默认为否
            lightTheme: 'light', // 默认: `light`
            darkTheme: 'transparent_dark', // 默认: `transparent_dark`
        },
            {
                frontmatter, route
            },
            true
        );

        // 注册图片放大插件
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );

    }
};