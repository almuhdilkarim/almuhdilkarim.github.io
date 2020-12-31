#!/bin/bash
rm -fr public;
rm -fr /var/www/devel/yuros/*;
hugo --environment alpha;
cp -fr public/* /var/www/devel/yuros/;