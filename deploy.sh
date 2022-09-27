#!/usr/bin/zsh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd src

# if you are deploying to a custom domain
echo 'deezer.buzl.uk' > dist/CNAME

git add dist
git commit -m 'deploy'
git subtree push --prefix dist origin gh-pages

cd -