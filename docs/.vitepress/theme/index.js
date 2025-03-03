import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
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
    }
};