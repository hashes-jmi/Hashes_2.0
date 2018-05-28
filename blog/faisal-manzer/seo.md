---
layout: blog

date: 2018-05-28
title: S.E.O. Basics
category: WEB Development
description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

author: Faisal Manzer
twitter: faisal_manzer
facebook: i.am.faisal.manzer
---
# Search Engine Optimisation Guide

S.E.O. not so easy as look. After all you earn money from here.  

The key steps:
- [URL design](#url-design)
- [HTML improvements](#html-improvements)
- Best practices
- Meta follow
- robots.txt
- Site Map
- Submitting to Google/Bing search console

Advanced Topic:
- Structured data
- Rich Cards

## URL design
Ok See this is a important aspect and all have different views on it.  
URL should be short and descriptive *if possible*.  
Some important points are given here.

#### design application structure
`/faisal-manzer/setting` leads to the setting page of your page.  
`/rounak-narayan/escrib/about` is `user-name/post/page-lead`

#### use hyphen to separate words
`/learn/regex-tutorial` is way better than `/learn/regextutorial`, `/learn/regexTutorial`, `/learn/regex_tutorial`  
Search engine index these type of url better and are user-friendly also.  
Using underscore is not a good idea, because Google treats it as separate character.
also space is converted into %20 which confuses the user.

#### Don't worry about file extension
Google ignores file extension. and trailing slashes are also of no use just get rid of that.
`/something/more-something.html` should be converted to `/something/more-something`  
`/something` should be preferred over  `/something/`

#### use dates if you are into dates type of stuff
`/yyyy/mm/dd/some-article-is-here` is good design as user-friendly and SEO friendly too.  
`/2018/12/11/faisal-manzer`

#### pagination should be addressed
`about/fox1`, `about/fox2`, `about/fox3`  
should be converted to `about/fox/1`, `about/fox/2`, `about/fox/3`  

this is also helpful to go previous and next pagination.

#### about canonicals
`/Help`, `/HELP`, `/help` all will  be treated as different url. Should be redirected by 301 response.  
use a single-case structure.

#### long pages loading trough Ajax
when u load data from Ajax, append `#` to url  
like `home` then `home#2` then `home#3`.

## HTML improvements
u improve SEO from on page SEO which is generally done by HTML tags.  

#### Title design
title should be descriptive and should contain information about page and site.  
`Best WEB Guide - LearnVidFM`.  
Also it is good that the title of tag is in the document `<h1>Best WEB Guide</h1>`,  
Title should be most user-friendly and it is also important for SEO.

#### Meta description
`<meta name="description" content="A page's description,
  usually one or two sentences."/>`.  
This is the thing which will appear in Google Search.
a good description should be 250-270 character. and be descriptive.
