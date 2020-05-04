This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).



## Next.js react with typescript tsx , scss style modules, supports PWA , for static use in nginx integrated with headless wordpress api[+elementor static rendering]

uses Atomic UX design

[ igal abachi - יגאל אבאצ'י ]




steps 1-5 were already done:
## 1) create next.js proj: 
npm init next-app my-blog
(Default starter app)


## 2) output to nginx static web site instead of node.js ssr:
package.json:

"scripts": {

  "build": "next build && next export"
  
}

## 3) styling .scss / .module.scss file support:
npm install sass

## 4) typescript .tsx file support:
npm install --save-dev typescript @types/react @types/node

create empty tsconfig.json file

then: npm run dev

## 5) http REST:
npm i axios

npm i swr

for server (in addition to wp-api) you can use:

micro-server.js (node.js):
https://github.com/igal-abachi-dev/micro-server.js

or, these should be fast for http, [good for multi-threading too]:

 asp.net core 3.1(c#),
 
 tokio-minihttp (rust), [slower: nickle.rs / rocket.rs / actix.rs],
 
 atreugo (go)
 
 use ubuntu/lubuntu for best server performance , not windows
 

## 6) use mobx-state-tree , eventemitter3

npm i eventemitter3

npm i --save-dev @babel/plugin-proposal-decorators

https://github.com/zeit/next.js/tree/master/examples/with-mobx-state-tree

https://github.com/fadiquader/next.js-mst/tree/master/stores

markdown pages:

https://jekyllrb.com/

jekyll build , markdown folder -> static pages 

## UI controls:
react-bootstrap

https://github.com/react-bootstrap/react-bootstrap


npm install react-bootstrap bootstrap


ant design

https://ant.design/docs/react/introduce

## PWA
https://github.com/shadowwalker/next-pwa

https://github.com/hanford/next-offline

## more controls & plugins

react-perfect-scrollbar

d3

font awesome

slick carousel

next-i18next + i18next + react-i18next

msgpack-lite

lodash

ag-grid-community + ag-grid-react

brotli

classnames

dexie

dompurify


react-popper + tippy.js


filepond + react-filepond

moment

react-quill (+ quill-delta + katex + highlight.js + react-highlight)

v8n

## testing
npm install — save-dev jest enzyme enzyme-adapter-react-16

npm install — save-dev @types/jest @types/enzym @types/enzyme-adapter-react-16

import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });

https://medium.com/@kjaer/setting-up-jest-and-enzyme-for-typescript-next-js-apps-ce383167643

https://github.com/kulshekhar/ts-jest

debugging:
https://dev.to/vvo/5-steps-to-debugging-next-js-node-js-from-vscode-or-chrome-devtools-497o

## linter

	npm i -D babel-eslint eslint-config-airbnb eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
  
  eslint --init
  
  npm install --save-dev stylelint stylelint-scss stylelint-config-standard stylelint-config-wordpress --save-dev

## deploy site to free/fast static hosting: 
zeit now.sh / google Firebase , free & fast

(surge.sh with git hooks , probably slower perf... then now.sh/firebase)

## host headless wordpress REST API  
on vultr hfc cloud [6$/month cheap]  


or on best managed wordpress hosting: kinsta [30$/month]

(better then wp-engine, cloudways(vultr 6$) , costs more but very optimized & simple to manage)

but vultr hfc[24$/month] outperforms kinsta[vultr might be used with cloudways]
which need to be configured carefully and optimally 

so best to put wordpress rest api on kista , and next.js UI on now.sh




then:
[use elementor json from wordpress api,in widget translator to html on static site]

or use other headless cms like butterCMS / strapi.io / prismic / ghost

that doesn't have visual web page editor

then it can by connected to 

https://www.bigcommerce.com/ 

or https://github.com/helloiamelliot/elliot-serverless-ecommerce


## add domain & https (let's Encrypt / PositiveSSL)
.com:
https://www.namecheap.com/domains/

.xyz:
https://gen.xyz/register

.co.il:
https://jetserver.co.il/%D7%A8%D7%99%D7%A9%D7%95%D7%9D-%D7%93%D7%95%D7%9E%D7%99%D7%99%D7%9F

## Getting Started

First, run the nginx server:

```
see "nginx\conf\vhosts\localhost.conf"
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
