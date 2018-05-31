# Hashes_2.0

https://hashes-jmi.github.io/Hashes_2.0

## Running on local Machine
- install ruby:  
  `sudo apt-get install ruby ruby-dev build-essensital` ( for **linux** )  
  https://rubyinstaller.org/ ( for **windows** )  
  `brew install ruby` ( for **mac** )  

  still have trouble see this https://www.ruby-lang.org/en/documentation/installation/

- install jekyll: `gem install jekyll bundler`
- start server `jekyll serve --watch`

```
brew install ruby
gem install jekyll bundler
git clone https://github.com/hashes-jmi/Hashes_2.0.git
cd Hashes_2.0
jekyll serve --watch
```
**open `http://127.0.0.1:4000`**

still have trouble see this https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

## Writing blogs

- open `blog` folder
- create a directory with name as your github username  ( say: `john-doe` )
- create a `index.md` there and add:
  ```
  ---
  layout: blog-index

  title:
  username:
  ---
  ```
- create your blog page ( say: `blog-something.md` )
  ```
  ---
  layout: blog

  date: 2018-12-30
  title:
  category:
  description: ""

  username:
  ---
  ```

  **username=github username**

- finally add your details in root directory `_data/authors.yml` in the given format
  ```
  - name:
    username:
    about: ""
    links:
      github:
      linkedin:
      twitter:
      instagram:
      website:
  ```
- Add a pull request :)

**Congratulations you wrote a blog**

### Contributions are always welcome

major Contributions: [@faisal-manzer](https://github.com/faisal-manzer), [@oreanroy](https://github.com/oreanroy)
