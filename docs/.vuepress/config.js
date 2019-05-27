// import sidebar from '../../config/sidebarConf'

module.exports = {
    title: '沃德美肌 ( 前端开发规范 )',
    themeConfig: {
        lastUpdated: 'Last Updated',
        markdown: {
            lineNumbers: true // 代码块显示行号
        },
        sidebar: [
            {
                title: '目录结构',
                children: ['/document/directory']
            },

            {
                title: '命名规范',
                children: ['/document/naming']
            },

            {
                title: '代码规范',
                children: ['/document/jsStandard', '/document/cssStandard','/document/htmlStandard']
            },
            {
                title: '更新记录',
                children: ['/document/updateRecord']
            }

        ]
    }
}
