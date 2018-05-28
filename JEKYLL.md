# Hashes_2.O

## How to publish Blogs
- make a directory in `blog` folder of your name (say: `john-doe`)
- add `index.md`
- add a blog (say: `blog-something.md`)

##options: blog.md
```
layout: blog #not to be changed
title: Tile of the Blog
description: A long description 250-270 recommended

author: Your Name #case sensitive.

# optinal
twitter: your_twitter_username
instagram:
facebook:
github:
linkedin:
website: #you website url if any
```

### Options: index.md
```
---
layout: blog-index #not to be changed
title: Blogs by John doe

author: John Doe #case-sensitive
nopublish: true
---
```
`index.md` will not contain any content. All four options are compulsory.
