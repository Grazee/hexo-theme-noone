# hexo-theme-noone
一个非常简单朴素性冷淡的Hexo主题。  
[English READEME](./README-en.md)  
[效果展示](https://www.ichenxiaoyu.com)  
![](simple.jpg)

# 安装
由于Noone使用less引擎渲染css文件，因此需要安装[hexo-renderer-less](https://github.com/hexojs/hexo-renderer-less)。  
在Hexo博客**根目录**下执行如下shell指令即可。  
```shell
npm install hexo-renderer-less --save
```
然后就可以在Hexo中安装Noone主题了。  
以下shell指令依然是基于Hexo博客**根目录**的。  
```shell
git pull https://github.com/Grazee/hexo-theme-noone.git themes/noone
```

# 配置
## 站点配置
修改Hexo博客根目录下的`_config.yml`文件，以开启使用Noone主题。  
```yml
theme: noone
```

## 主题配置
修改Noone主题下的`_config.yml`文件，也就是`[Hexo博客根目录]/themes/noone/_config.yml`。  
该配置文件中大部分内容也是不需要修改的，以下是一些可以用于自定义的修改项。  

### 图片相关（Images）
* banner_image: 用于主页banner的背景图片（会被降低亮度），以及作为文章页默认的banner背景图片。  
* avatar_image: 个人头像，会出现在首页。  

### 评论相关（Comment）
目前Nonne支持[Valine评论系统](https://valine.js.org/)，而Valine又是基于[LeanCloud](https://www.leancloud.cn/)的，所以要先**注册LeanCloud用户，并在LeanCloud中创建App**，用于存储评论相关数据，从而得到**app id**和**app key**。  
* enable: 是否开启Valine评论系统
* leancloud_appid: LeanCloud App的app id
* leancloud_appkey: LeanCloud App的app key
* placeholder: 显示在留言板的半透明提示句子

### 备案相关
* enable: 是否开启底部备案信息显示
* record: 备案主体号，如`闽ICP备xxxxxxxxx号`
* record_url: 工信部备案网站url，一般是不用改的
