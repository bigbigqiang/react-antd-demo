const menus = [
    { key: 'index', title: '首页', icon: 'mobile', },
    {
        key: 'ui', title: 'UI', icon: 'scan',
        sub: [
            { key: 'ui/buttons', title: '按钮', icon: '', },
            { key: 'ui/icons', title: '图标', icon: '', },
            { key: 'ui/spins', title: '加载中', icon: '', },
            { key: 'ui/modals', title: '对话框', icon: '', },
            { key: 'ui/notifications', title: '通知提醒框', icon: '', },
            { key: 'ui/tabs', title: '标签页', icon: '', },
            { key: 'ui/banners', title: '轮播图', icon: '', },
            { key: 'ui/wysiwyg', title: '富文本', icon: '', },
            { key: 'ui/drags', title: '拖拽', icon: '', },
            { key: 'ui/gallery', title: '画廊', icon: '', },
            { key: 'ui/map', title: '地图'},
        ],
    },
    {
        key: 'animation', title: '动画', icon: 'rocket',
        sub: [
            { key: 'animation/basicAnimations', title: '基础动画', icon: '', },
            { key: 'animation/exampleAnimations', title: '动画案例', icon: '', },
        ],
    },
    {
        key: 'table', title: '表格', icon: 'copy',
        sub: [
            { key: 'table/basicTable', title: '基础表格', icon: '', },
            { key: 'table/advancedTable', title: '高级表格', icon: '', },
            { key: 'table/asynchronousTable', title: '异步表格', icon: '', },
        ],
    },
    {
        key: 'form', title: '表单', icon: 'edit',
        sub: [
            { key: 'form/basicForm', title: '基础表单', icon: '', },
        ],
    },
    {
        key: 'chart', title: '图表', icon: 'area-chart',
        sub: [
            { key: 'chart/echarts', title: 'echarts', icon: '', },
            { key: 'chart/recharts', title: 'recharts', icon: '', },
        ],
    },
    {
        key: 'sub4', title: '页面', icon: 'switcher',
        sub: [
            { key: 'login', title: '登录', icon: '', },
            { key: '404', title: '404', icon: '', },
        ],
    },
    {
        key: 'auth', title: '权限管理', icon: 'safety',
        sub: [
            { key: 'auth/basic', title: '基础演示', icon: '', },
            { key: 'auth/routerEnter', title: '路由拦截', icon: '', },
        ],
    },
    {
        key: 'cssModule', title: 'cssModule', icon: 'star',
    },
];

export default menus;