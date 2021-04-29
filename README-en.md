# hexo-theme-noone
A simple and tidy Hexo theme.  
[中文README](./README.md)  
[Demo](https://www.ichenxiaoyu.com)  
![](simple.jpg)

# Installation
Noone uses [less](https://less.bootcss.com/) to render its css files, so [hexo-renderer-less](https://github.com/hexojs/hexo-renderer-less) is required.  
To install hexo-rendered-less, run following shell script in **hexo's root directory**.  
```shell
npm install hexo-renderer-less --save
```
Then install Noone for hexo blog.  
run following script in **hexo's root directory**.  
```shell
git pull https://github.com/Grazee/hexo-theme-noone.git themes/noone
```

# Configuration
## Site Configuration
Edit hexo's `_config.yml` to use Noone theme.  
```yml
theme: noone
```

## Theme Configuration
Edit Noone's `_config.yml`, which locates in `[Hexo root]/themes/noone/_config.yml`。  

### Images
* banner_image: image used as banner background in the main page, also as default background in post pages.
* avatar_image: author's avatar, will display in the main page.

### Comment
Noone supports [Valine](https://valine.js.org/) to show comments in post pages. While Valine uses [LeanCloud](https://www.leancloud.cn/) to store its data. So **sign up to LeanCloud and create an LeanCloud app**, and copy its **app id** and **app key**.  
* enable: use valine or not
* leancloud_appid: app id of LeanCloud App
* leancloud_appkey: app key of LeanCloud App
* placeholder: sentence displayed in the comment input area
