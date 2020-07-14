#!/bin/bash

BLUE='\033[1;34m'
NC='\033[0m'

printf "${BLUE}█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n"
printf "${BLUE}█${NC}  Publishing Brewkit...                                  ${BLUE}█\n"
printf "${BLUE}█▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅█${NC}\n"

# run our tests
jest

# run our build scripts
npm run build

# publish the package from the dist folder
npm publish dist


printf "${BLUE}█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█\n"
printf "${BLUE}█${NC}  A new version of Brewkit was successfully published.   ${BLUE}█\n"
printf "${BLUE}█                                                         █\n"
printf "${BLUE}█${NC}  You may want to run ${BLUE}npm run deploy-storybook${NC} to        ${BLUE}█\n"
printf "${BLUE}█${NC}  ensure the online documentation is up-to-date.         ${BLUE}█\n"
printf "${BLUE}█▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅█${NC}\n"
