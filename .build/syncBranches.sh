#!/bin/bash


BLUE='\033[1;34m'
NC='\033[0m'


printf "${BLUE}█${NC}  Pushing and Syncing main and next branches...\n"


# run our tests, then build, then publish from the dist folder
git checkout master &&
git push origin master &&
git checkout next &&
git pull origin next &&
git pull origin master &&
git push origin next &&
git checkout master



printf "${BLUE}█${NC}  A new version of Brewkit was successfully published.   ${BLUE}█\n"
