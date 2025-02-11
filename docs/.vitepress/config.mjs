import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Judu's Wiki",
    description: "学习、记录",
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', href: '/icon.ico' }]],
    srcDir: './src',
    locales: {

        root: {
            label: '简体中文',
            lang: 'zh'
        },
        // en: {
        //     label: "English",
        //     lang: 'en'
        // }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        },

        nav: [
            { text: 'Home', link: '/' },
            { text: '嵌入式 & 软件开发', link: '/Linux/' }
        ],

        sidebar: [
            {
                text: '嵌入式 & 软件开发',
                items: [
                    {
                        text: 'Linux',
                        items: [
                            // {
                            //     text: 'Linux 驱动开发基础',
                            //     link: '/Linux/LinuxDriver/',
                            //     collapsed: true,
                            //     items: [
                            //         {text:'a',link:'a.md'},
                            //         {text:'b',link:'b.md'},
                            //     ]
                            // },
                            // {
                            //     text: 'Linux 应用开发基础',
                            //     link: '/Linux/LinuxApp/',
                            //     collapsed: true,
                            //     items: [
                            //         {text:'a',link:''},
                            //         {text:'b',link:''},
                            //     ]
                            // },
                            {
                                text: 'Linux 基础知识',
                                // link: '/Linux/LinuxNotes/',
                                collapsed: true,
                                items: [
                                    { text: 'tar命令', link: '/Linux/LinuxNotes/tar' },
                                    { text: 'tmux', link: '/Linux/LinuxNotes/tmux' },
                                ]
                            }
                        ],
                        link: '/Linux/',
                        collapsed: true
                    }
                ]
            }
        ],

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/juduAB' }
        ],
    }
})
