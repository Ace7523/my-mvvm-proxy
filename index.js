
// 用最简化的模型来模式vue3的mvvm实现原理

// 用这个方法来模式视图更新
function updateView() {
    console.log('触发视图更新啦')
}
// 把原目标对象 转变 为响应式的对象
function reactive(target) {
    // todo 具体如何转变，以及绑定视图更新方法
    let proxyed = new Proxy(target, options)
    return proxyed
}

// 测试数据
let obj = {
    name: 'Ace7523',
    array: ['a', 'b', 'c']
}

// 把原数据转变响应式的数据
let reactivedObj = reactive(obj)

// 改变数据，期望会触发updateView() 方法 从而更新视图
reactivedObj.name = 'change'