

export const statusList = [
    ['icongaojing1', '告警', '' , '#94C6FF'],
    ['iconkanzhibo', '食堂直播', '/pages/platform/live/index' , '#98CFC6'],
    ['icondianpingpinglun', '点评评论', '/pages/platform/comment/index' , '#72BEE4'],
].map(el => (
    {
        iconName: el[0],
        label: el[1],
        path: el[2],
        color: el[3],
    }
))

export const canteenList = [
    ['iconshitangguanli', '食堂管理', '/pages/platform/canteen-manager/index' , '#94C6FF'],
    ['iconshianxinxi', '食安信息', '/pages/platform/check-self/index' , '#98CFC6'],
    ['iconanquanzhishi', '安全知识', '/pages/platform/security-knowledge/index' , '#72BEE4'],
 
].map(el => (
    {
        iconName: el[0],
        label: el[1],
        path: el[2],
        color: el[3],
    }
))
export const dailyList = [
    ['iconchenjianjilu', '晨检纪录', '/pages/platform/morning-check/index' , '#94C6FF'],
    ['iconcaigouyanshou', '采购验收', '/pages/platform/purchase/index' , '#98CFC6'],
    ['iconxiaodutaizhang', '消毒台账', '/pages/platform/disinfectant/index' , '#F1C58E'],
    ['iconliuyangguanli', '留样管理', '/pages/platform/sample/index' , '#8CA3E7'],
    ['iconshitangpingmiantu', '废弃物处理', '/pages/platform/garbage/index' , '#EBCDBF'],
    ['iconshipintianjiaji', '食品添加剂', '/pages/platform/additive/index' , '#A3D9EC'],
    ['iconqingxitaizhang', '清洗台账', '/pages/platform/wash/index' , '#E6BDB5'],
    ['iconpeicangongshi', '陪餐公示', '/pages/platform/company/index' , '#E6BFD5'],
    ['iconcaidangongshi', '菜单公示', '/pages/platform/menu/index' , '#E6BFD5'],
].map(el => (
    {
        iconName: el[0],
        label: el[1],
        path: el[2],
        color:el[3]
    }
))