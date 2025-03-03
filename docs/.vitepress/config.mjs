import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Judu's Wiki",
    description: "学习、记录",
    lang: 'zh-CN',
    head: [
        ['link', { rel: 'icon', href: '/icon.ico' }]
    ],
    cleanUrls: true,
    // srcDir: './src',
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
            { text: '嵌入式 & 软件开发', link: '/ESWDev/', },
            { text: '生活 & 玩乐', link: '/Journal/Blog', }
        ],

        sidebar: {
            '/ESWDev': [
                {
                    text: '嵌入式 & 软件开发',
                    items: [
                        {
                            text: 'Linux Notes',
                            // link: '/ESWDev/LinuxNotes/',
                            collapsed: true,
                            items: [
                                { text: 'tar命令', link: '/ESWDev/LinuxNotes/tar' },
                                { text: 'tmux', link: '/ESWDev/LinuxNotes/tmux' },
                                //{ text: '257&DEP', link: '/ESWDev/LinuxNotes/257&DEP' },
                                { text: '多线程编程', link: '/ESWDev/LinuxNotes/多线程编程' },
                                { text: '虚拟机磁盘扩展', link: '/ESWDev/LinuxNotes/虚拟机磁盘扩展' },
                                { text: '多核处理器基础', link: '/ESWDev/LinuxNotes/多核处理器基础' },
                            ],
                        },
                        {
                            text: 'Linux 驱动',
                            // link: '/ESWDev/LinuxNotes/',
                            collapsed: true,
                            items: [
                                {
                                    text: 'ASLA 子系统', 
                                    collapsed: true,
                                    items: [
                                        { text: 'ASLA 子系统（一）概述', link: '/ESWDev/LinuxDriver/ALSA/概述.md' },
                                    ]
                                },
                            ],
                        }
                    ],
                    // link: '/ESWDev'
                }
            ],
            '/Journal': [
                {
                    text: '生活 & 玩乐',
                    items: [
                        {
                            text: 'Blog',
                            collapsed: true,
                            items: [
                                { text: 'a', link: '/Journal/Blog/a.md' },
                                { text: 'b', link: '/Journal/Blog/b.md' },
                            ]
                        }
                    ],
                    link: '/Journal/Blog',
                }
            ]
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        editLink: {
            pattern: 'https://github.com/JuduAB/juduAB/tree/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        outline: {
            label: '页面导航',
            level: 'deep'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/juduAB' }
        ],
    }
})
