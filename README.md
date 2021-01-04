## Marvel API w/ React, Typescript & Ionic

In order to run this application successfully you should have a version of Node.js of v12.0.0.
a version of npm of 6.9.0 (or a recent version of yarn ( today's date is: 16.12.2020) )
plus an internet browser (Preferably google Chrome)

## App

This application is built using React(17.0.1), Typescript (4.1.3) and Ionic (5.5.2)

The API used is from the Marvel Website.

Further notes on the Marvel API can be found here:

https://developer.marvel.com/account

## Download
To use this application you simply download the .zip file by clicking the green "Code" button on this page (https://github.com/cwoolf123/yap-cwoolf) then Download ZIP and your down load should begin immediately.

### OR
## Clone via Terminal

An alternative option would be to copy the url from the green code button (HTTPS) and type:

git clone https://github.com/cwoolf123/yap-cwoolf.git  marvel-search-app

in a new Terminal window.

## Installation - node_modules

Once you have downloaded and unzipped or cloned into your machine. Please open a new Terminal window inside the root folder (ie. marvel-search-app) and type:

npm install

If you receive any errors be sure to delete the package-lock.json file and run the command again.

## Starting the server - w/ react scripts
Once you have installed the node modules a local server can by started by typing the following in the root folder:

npm run start

a browser window chould open at the search page of the application. if not just go to the url

http://localhost:3000/

## OR

## Start the server - w/ a global server on your machine 

To install a server globally to your machine just type the following into a terminal window:

npm install -g serve

or with yarn :

yarn global add serve
### then 

  serve -s build

  to run the server at the same url:

  http://localhost:3000/

## Additional Notes

### SEARCH PAGE 

The Marvel API does not have a great selection of images when pulling through from the /characters endpoint. Quite a lot are given a generic "Image not found" thumbnail.
The are ways to set different sizes but none of them went up to 800px so I did a little CSS on the largest images I could pull through.

The Private Key of mine is encrypted with the publice key and a timestamp... Is this what you were referring to in the document about keeping keys in repos?

### CHARACTER DETAILS PAGE - Rick Jones IS A-Bomb ! 

There are some links in the API of the marvel characters under urls { href } in the character response
that may look like they redirect to a different url ( for example, I discovered that A-Bomb redireccts to Rick Jones ). 

I believe this is intentional as you will see down the right hand side of the page on the marvel website that Rick Jones has the name A-Bomb in brackets next to his character height and weight etc. information. Given that a lot of marvel characters have pseudo identities and alter egos this sort of data discrepancy may come up alot.

