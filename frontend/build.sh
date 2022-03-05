#!/bin/sh

echo "### start npm build ###"

npm run build 

#echo "### cp frontend files to backend ###"

#cp -R dist/static/* ../backend/static                    
#cp dist/home.html ../backend/templates
#cp dist/post_detail.html  ../backend/blog/templates/blog
#cp dist/post_list.html ../backend/blog/templates/blog

