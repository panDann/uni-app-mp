# regulation

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
//监管端
yarn dev:custom mp-supervision
//学校端
yarn dev:custom mp-school
//家长端
yarn dev:custom mp-family
```

### Compiles and minifies for production
```
//打包监管端
yarn build:custom mp-supervision
//打包学校端
yarn build:custom mp-school
//打包家长端
yarn build:custom mp-family
```

### 条件编译
```
// #ifdef MP-SUPERVISION
监管端特有代码
// #endif

// #ifdef MP-SCHOOL
学校端特有代码
// #endif

// #ifdef MP-FAMILY
家长端特有代码
// #endif

注意： 条件编译是利用注释实现的，在不同语法里注释写法不一样，
js使用 // 注释、css 使用 /* 注释 */、vue/nvue 模板里使用 <!-- 注释 -->；
```


### 运行期判断
```
if(process.env.MP_TYPE === 'mp-supervision'){
  console.log('监管端')
}
if(process.env.MP_TYPE === 'mp-school'){
  console.log('学校端')
}
if(process.env.MP_TYPE === 'mp-family'){
  console.log('家长端')
}
```
