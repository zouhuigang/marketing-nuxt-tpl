# marketing-nuxt-tpl


#第一次使用nuxt

	npx create-nuxt-app marketing-nuxt-tpl

然后一直回车


[参考官方安装文档](https://zh.nuxtjs.org/guide/installation)



### 开始项目

	cd marketing-nuxt-tpl
	npm run dev



----

#从空文件开始

创建package.json:

	{
    "name": "marketing-nuxt-tpl",
    "scripts": {
      "dev": "nuxt"
    }
  	}

安装nuxt

	npm install --save nuxt



创建pages目录:


添加文件index.vue:

	<template>
	  <h1>Hello world!</h1>
	</template>


然后运行:

	npm run dev


注意：Nuxt.js 会监听 pages 目录中的文件更改，因此在添加新页面时无需重新启动应用程序。