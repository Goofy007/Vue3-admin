// 1. 导入所有的svg图标
// 2. 完成 SvgIcon 的全局注册

import SvgIcon from '@/components/SvgIcon'

const svgRequire = require.context('../svg', false, /\.svg$/)
// 此时返回了一个Require函数 ， 可以接收一个request的参数，用于require的导入
// 该函数提供了三个属性,可以通过 svgRequire.keys()获得所有的 svg 图标
// 遍历图标， 把图标作为request参数参入到 svgRequire 导入函数中，完成本地svg图标的导入
console.log(svgRequire.keys())
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

export default app => {
  app.component('svg-icon', SvgIcon)
}
