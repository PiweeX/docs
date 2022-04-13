"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9986],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8424:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={sidebar_label:"Edit a Universal Profile",sidebar_position:2},s="Edit a Universal Profile",p={unversionedId:"guides/universal-profile/edit-profile",id:"guides/universal-profile/edit-profile",title:"Edit a Universal Profile",description:"You will need a Universal Profile that you control to follow this guide.",source:"@site/docs/guides/universal-profile/edit-profile.md",sourceDirName:"guides/universal-profile",slug:"/guides/universal-profile/edit-profile",permalink:"/guides/universal-profile/edit-profile",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-profile/edit-profile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Edit a Universal Profile",sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Create a Universal Profile",permalink:"/guides/universal-profile/create-profile"},next:{title:"Transfer LYX",permalink:"/guides/universal-profile/transfer-lyx"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Step 1 - Create a new LSP3Profile JSON file",id:"step-1---create-a-new-lsp3profile-json-file",level:2},{value:"1.1 - Add profile details (links, tags, etc.)",id:"11---add-profile-details-links-tags-etc",level:3},{value:"1.2 - Add a profile and background image",id:"12---add-a-profile-and-background-image",level:3},{value:"Step 2 - Upload the JSON file to IPFS",id:"step-2---upload-the-json-file-to-ipfs",level:2},{value:"Step 3 - Encode data with erc725.js",id:"step-3---encode-data-with-erc725js",level:2},{value:"3.1 - Setup erc725.js",id:"31---setup-erc725js",level:3},{value:"3.2 - Encode the LSP3Profile data",id:"32---encode-the-lsp3profile-data",level:3},{value:"Step 4 - Edit the Universal Profile",id:"step-4---edit-the-universal-profile",level:2},{value:"4.1 - Load an EOA",id:"41---load-an-eoa",level:3},{value:"4.2 - Create instances of Contracts",id:"42---create-instances-of-contracts",level:3},{value:"4.3 - Set data on the Universal Profile",id:"43---set-data-on-the-universal-profile",level:3},{value:"Visualize the updated Universal Profile",id:"visualize-the-updated-universal-profile",level:2},{value:"Final Code",id:"final-code",level:2}],u={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edit-a-universal-profile"},"Edit a Universal Profile"),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Requirements")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will need a Universal Profile that you control to follow this guide. ",(0,r.kt)("br",null),"\n\u2b05\ufe0f If you haven't created a Universal Profile yet, you can follow our previous guide: ",(0,r.kt)("a",{parentName:"p",href:"/guides/universal-profile/create-profile"},(0,r.kt)("strong",{parentName:"a"},"Create a Universal Profile")),"."))),(0,r.kt)("p",null,"This guide will teach you how to ",(0,r.kt)("strong",{parentName:"p"},"customize our Universal Profile")," programmatically in JavaScript and includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adding a profile and cover picture to our Universal Profile,"),(0,r.kt)("li",{parentName:"ul"},"editing our Universal Profile infos (e.g., description, badges, links),"),(0,r.kt)("li",{parentName:"ul"},"see the updated profile details and images of our Universal Profile on the ",(0,r.kt)("a",{parentName:"li",href:"https://universalprofile.cloud"},"universalprofile.cloud")," website.")),(0,r.kt)("p",null,"To achieve this goal, we will perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a JSON file that contains our profile details (",(0,r.kt)("inlineCode",{parentName:"li"},"LSP3Profile")," metadata)."),(0,r.kt)("li",{parentName:"ol"},"Upload this JSON file to ",(0,r.kt)("a",{parentName:"li",href:"https://ipfs.io/"},"IPFS")," using our ",(0,r.kt)("a",{parentName:"li",href:"/tools/lsp-factoryjs/deployment/universal-profile#uploading-lsp3-metadata-to-ipfs)"},"lsp-factory.js")," tool."),(0,r.kt)("li",{parentName:"ol"},"Encode + set our new ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp3profile"},"LSP3Profile")," metadata key in our profile with our ",(0,r.kt)("a",{parentName:"li",href:"/tools/erc725js/writing-data#example)"},"erc725.js")," library and web3.js.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Universal Profile with pictures and infos on universalprofile.cloud",src:a(3788).Z,width:"1502",height:"913"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A Universal Profile is a smart contract that uses a generic key-value store (ERC725Y) as a storage design. The structure makes it possible to attach any piece of information to our Universal Profile by setting any particular ",(0,r.kt)("strong",{parentName:"p"},"value")," to any specific ",(0,r.kt)("strong",{parentName:"p"},"key"),"."),(0,r.kt)("p",null,"A set of ERC725Y keys is defined as an ",(0,r.kt)("strong",{parentName:"p"},"ERC725Y schema"),". The schema is an array of keys, where an object represents each key. Each of the objects describes the key ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyType")," (",(0,r.kt)("em",{parentName:"p"},"e.g., singleton, array, mapping"),"), and the type of the data it contains (",(0,r.kt)("inlineCode",{parentName:"p"},"valueType"),")."),(0,r.kt)("p",null,"A schema lets us know which ERC725Y keys we can set and ",(0,r.kt)("strong",{parentName:"p"},"which information we can retrieve and edit from our Universal Profile"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Universal Profile + ERC725Y JSON schema (diagram)",src:a(1912).Z,width:"1692",height:"590"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more details, see: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md#specification"},"LSP2 - ERC725Y JSON Schema"))),(0,r.kt)("p",null,"One of the main ERC725Y keys of the Universal Profile is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp3profile"},(0,r.kt)("inlineCode",{parentName:"a"},"LSP3Profile"))," key. It is a standardized key that refers to the ",(0,r.kt)("strong",{parentName:"p"},"metadata of the Universal Profile"),". This metadata takes the form of a reference to a JSON file."),(0,r.kt)("p",null,"This guide will store our Universal Profile metadata on ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS"),", a distributed file storage."),(0,r.kt)("p",null,"We can add (or edit) any pieces of informations related to our UP by the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new JSON file with new or updated info."),(0,r.kt)("li",{parentName:"ol"},"Upload the file to IPFS."),(0,r.kt)("li",{parentName:"ol"},"Change the reference of our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md#lsp3profile"},"LSP3Profile")," key to point to our uploaded JSON file.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"LSP3Profile Metadata as JSON file on IPFS (diagram)",src:a(6190).Z,width:"1199",height:"833"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Learn More")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"IPFS is just one place among many")," where you can store your Universal Profile metadata.",(0,r.kt)("br",null),"\nYou can use other file storage options to store your JSON file (",(0,r.kt)("em",{parentName:"p"},"e.g., ",(0,r.kt)("a",{parentName:"em",href:"https://www.ethswarm.org/"},"Swarm"),", ",(0,r.kt)("a",{parentName:"em",href:"https://www.storj.io/index.html"},"Storj"),", Google Drive, or a private FTP server"),")."))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"We will use a new tool in this guide: ",(0,r.kt)("a",{parentName:"p",href:"/tools/erc725js/writing-data#example)"},"erc725.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install web3 @lukso/lsp-factory.js @lukso/lsp-smart-contracts @erc725/erc725.js --save\n")),(0,r.kt)("h2",{id:"step-1---create-a-new-lsp3profile-json-file"},"Step 1 - Create a new LSP3Profile JSON file"),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Recommendation")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Complete "ready to use" JSON and JS files are available at the end in the ',(0,r.kt)("a",{parentName:"p",href:"#final-code"},(0,r.kt)("strong",{parentName:"a"},"Final Code"))," section."))),(0,r.kt)("p",null,"We will start by creating a ",(0,r.kt)("strong",{parentName:"p"},"new JSON file")," that will contain our ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP3Profile")," metadata."),(0,r.kt)("p",null,"Use the JSON template file below, and follow ",(0,r.kt)("strong",{parentName:"p"},"steps 1.1 and 1.2")," to fill the blank fields marked with dots."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="UniversalProfileMetadata.json"',title:'"UniversalProfileMetadata.json"'},'{\n  "LSP3Profile": {\n    "name": "...", // a self chosen username\n    "description": "...", // A description, describing the person, company, organisation or creator of the profile.\n    "links": [\n      // links related to the profile\n      {\n        "title": "...", // a title for the link.\n        "url": "..." // the link itself\n      }\n      // add more links...\n    ],\n    "tags": ["...", "..."], // tags related to the profile\n    "profileImage": [\n      {\n        "width": 640, // in pixels\n        "height": 609, // in pixels\n        "hashFunction": "keccak256(bytes)", // do not change!\n        "hash": "0x...", // add the keccak256 hash of the image here\n        "url": "ipfs://..." // IPFS image identifier (CID)\n      }\n    ],\n    "backgroundImage": [\n      {\n        "width": 1024, // in pixels\n        "height": 576, // in pixels\n        "hashFunction": "keccak256(bytes)", // do not change!\n        "hash": "0x...", // add the keccak256 hash of the image here\n        "url": "ipfs://..." // IPFS image identifier (CID)\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"11---add-profile-details-links-tags-etc"},"1.1 - Add profile details (links, tags, etc.)"),(0,r.kt)("p",null,"Add more details about the Universal Profile for the entity's name, description, links, and tags."),(0,r.kt)("p",null,"Be as creative as you want to make your Universal Profile as unique as possible! \ud83c\udfa8"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Learn More")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The properties ",(0,r.kt)("inlineCode",{parentName:"p"},"links")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," accept an array of objects or strings, so you can add as many as you need!"),(0,r.kt)("p",{parentName:"div"},"For editing the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundImage"),", see ",(0,r.kt)("strong",{parentName:"p"},"Step 1.2")," below \u2b07\ufe0f"))),(0,r.kt)("h3",{id:"12---add-a-profile-and-background-image"},"1.2 - Add a profile and background image"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Image sizes should be written as numbers, not as strings."),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("strong",{parentName:"p"},"max image width")," allowed on ",(0,r.kt)("a",{parentName:"p",href:"https://universalprofile.cloud"},"universalprofile.cloud")," is: ",(0,r.kt)("inlineCode",{parentName:"p"},"profileImage <= 800px"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundImage <= 1800px")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The JSON file for LSP3Profile accepts an array of images so that you have pictures of different sizes and dimensions.",(0,r.kt)("br",null),"\nThis way, client interfaces can know which files to pick based on the container size in their interface."))),(0,r.kt)("p",null,"For the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"profileImage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundImage"),", we will need to add the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hash"),": use this ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://emn178.github.io/online-tools/keccak_256_checksum.html"},"keccak256 image hash generator")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url"),": upload your images to the LUKSO IPFS Gateway.")),(0,r.kt)("p",null,"Use this ",(0,r.kt)("a",{parentName:"p",href:"https://anarkrypto.github.io/upload-files-to-ipfs-from-browser-panel/public/#"},"IPFS file uploader tool")," with the settings shown below in green."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node Address: ",(0,r.kt)("inlineCode",{parentName:"li"},"api.ipfs.lukso.network")),(0,r.kt)("li",{parentName:"ul"},"API Port / Gateway Port: ",(0,r.kt)("inlineCode",{parentName:"li"},"443"))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:a(9885).Z,width:"475",height:"318"})),(0,r.kt)("p",null,"Drag & Drop your images (you can upload multiple images at once) and ",(0,r.kt)("em",{parentName:"p"},"upload")," them. Once the process is completed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the IPFS file identifier (",(0,r.kt)("inlineCode",{parentName:"li"},"CID"),") shown in the ",(0,r.kt)("inlineCode",{parentName:"li"},"hash")," field marked with green below."),(0,r.kt)("li",{parentName:"ol"},"Paste the ",(0,r.kt)("inlineCode",{parentName:"li"},"CID")," into the ",(0,r.kt)("inlineCode",{parentName:"li"},"url")," field in our JSON file, beginning with ",(0,r.kt)("inlineCode",{parentName:"li"},"ipfs://")," at the start.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:a(3141).Z,width:"1002",height:"645"})),(0,r.kt)("p",null,"Make sure to save your JSON file after you have added all your details and images."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Don't forget to delete the comments in the JSON file!"))),(0,r.kt)("p",null,"We are now ready to apply these changes to our Universal Profile. We will see how in the next section \u2b07\ufe0f"),(0,r.kt)("h2",{id:"step-2---upload-the-json-file-to-ipfs"},"Step 2 - Upload the JSON file to IPFS"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notice")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should do the rest of this tutorial should be done in a ",(0,r.kt)("strong",{parentName:"p"},"new file")," (",(0,r.kt)("inlineCode",{parentName:"p"},"main.js"),")."))),(0,r.kt)("p",null,"We will now start writing the main code of the tutorial.\nCreate a new file, ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js"),"."),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/tools/lsp-factoryjs/deployment/universal-profile#uploading-lsp3-metadata-to-ipfs)"},"lsp-factory.js")," tool provides convenience to upload our profile Metadata to IPFS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const { LSP3UniversalProfile } = require('@lukso/lsp-factory.js');\n// reference to the previously created JSON file (LSP3Profile metadata)\nconst jsonFile = require('./UniversalProfileMetadata.json');\n\nasync function uploadMetadataToIPFS() {\n  const uploadResult = await LSP3UniversalProfile.uploadProfileData(\n    jsonFile.LSP3Profile,\n  );\n\n  /*\n    uploadResult = {\n        profile: {\n            LSP3Profile: {\n                name: '...',\n                description: '...',\n                links: [Array],\n                tags: [Array],\n                profileImage: [Array],\n                backgroundImage: [Array]\n            }\n        },\n        url: 'ipfs://Q...'\n    }\n    */\n\n  const profileMetadataIPFSUrl = uploadResult.url;\n  return profileMetadataIPFSUrl;\n}\nuploadMetadataToIPFS();\n")),(0,r.kt)("h2",{id:"step-3---encode-data-with-erc725js"},"Step 3 - Encode data with erc725.js"),(0,r.kt)("p",null,"The next step is to ",(0,r.kt)("strong",{parentName:"p"},"prepare the data")," used to edit our Universal Profile. ",(0,r.kt)("em",{parentName:"p"},"Preparing the data")," means ",(0,r.kt)("strong",{parentName:"p"},"encoding it")," to write in on our Universal Profile."),(0,r.kt)("p",null,"To do so, we will use our ",(0,r.kt)("a",{parentName:"p",href:"/tools/erc725js/writing-data#example)"},"erc725.js")," library, which helps us encode the data easily."),(0,r.kt)("h3",{id:"31---setup-erc725js"},"3.1 - Setup erc725.js"),(0,r.kt)("p",null,"To set up the erc725.js library, we will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The address of our Universal Profile contract: this is the address of our profile mentioned in the URL on the ",(0,r.kt)("a",{parentName:"li",href:"https://universalprofile.cloud/"},"profile explorer"),"."),(0,r.kt)("li",{parentName:"ul"},"An ERC725Y JSON Schema: A set of ERC725Y key-value pairs (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md"},"LSP2 - ERC725Y JSON Schema"),")"),(0,r.kt)("li",{parentName:"ul"},"A provider: Pinning to our LUKSO L14 endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://rpc.l14.lukso.network"))),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"same file"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js"),", set up the erc725.js library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const Web3 = require('web3');\nconst { ERC725 } = require('@erc725/erc725.js');\n\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\n// constants\nconst jsonFile = require('./UniversalProfileMetadata.json');\nconst profileAddress = '0x...';\n\n// Step 3.1 - Setup erc725.js\nconst schema = [\n  {\n    name: 'LSP3Profile',\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',\n    keyType: 'Singleton',\n    valueContent: 'JSONURL',\n    valueType: 'bytes',\n  },\n];\n\nconst erc725 = new ERC725(schema, profileAddress, web3.currentProvider, {\n  ipfsGateway: 'https://ipfs.lukso.network/ipfs/',\n});\n\n> ERC725 {\n    options: {\n        schema: [ [Object] ],\n        address: '0x...',\n        provider: Web3ProviderWrapper { type: 'WEB3', provider: [HttpProvider] },\n        config: { ipfsGateway: 'https://ipfs.lukso.network/ipfs/' }\n    }\n}\n")),(0,r.kt)("h3",{id:"32---encode-the-lsp3profile-data"},"3.2 - Encode the LSP3Profile data"),(0,r.kt)("p",null,"Once our erc725.js is initialized, we can now encode our ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP3Profile")," data."),(0,r.kt)("p",null,"To do so, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"encodeData(...)")," function, passing an ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP3Profile: { ... } ")," object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hashFunction"),": we use ",(0,r.kt)("inlineCode",{parentName:"li"},"keccak256")," (standard hash function). Since we are hashing a JSON file that contains strings, we also specify the data type as ",(0,r.kt)("inlineCode",{parentName:"li"},"utf8"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hash:")," obtianed after hashing the JSON file with ",(0,r.kt)("inlineCode",{parentName:"li"},"keccak256"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," of the file: this is the IPFS URL of the file, obtained in ",(0,r.kt)("strong",{parentName:"li"},"step 2."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const Web3 = require('web3');\nconst { ERC725 } = require('@erc725/erc725.js');\n\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\n// constants\nconst jsonFile = require('./UniversalProfileMetadata.json');\nconst profileAddress = '0x...';\n\n// Step 3.1 - Setup erc725.js\n// ...\n\n// Step 3.2 - Encode the LSP3Profile data (to be written on our UP)\nconst encodedData = erc725.encodeData({\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    // hash the JSON file (LSP3Profile metadata)\n    hash: web3.utils.keccak256(JSON.stringify(jsonFile)),\n    url: profileMetadataIPFSUrl, // obtained in Step 2\n  },\n});\n\n> {\n  LSP3Profile: {\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5'\n    value: '0x...',\n  }\n}\n")),(0,r.kt)("h2",{id:"step-4---edit-the-universal-profile"},"Step 4 - Edit the Universal Profile"),(0,r.kt)("p",null,"Now that our updated data is encoded, we are ready to set it in our Universal Profile. To do so, we will interact with our Universal Profile smart contract via web3.js."),(0,r.kt)("h3",{id:"41---load-an-eoa"},"4.1 - Load an EOA"),(0,r.kt)("p",null,"We will need to interact with the smart contracts from an externally owned account (EOA)."),(0,r.kt)("p",null,"The first step is to load our EOA using our private key from ",(0,r.kt)("a",{parentName:"p",href:"./create-profile#step-1---create-an-eoa"},"previous steps"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const Web3 = require('web3');\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\nconst PRIVATE_KEY = '0x...'; // your EOA private key (previously created)\nconst myEOA = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);\n\n> {\n    address: \"0x...\",\n    privateKey: \"0x...\",\n    signTransaction: function(tx){...},\n    sign: function(data){...},\n    encrypt: function(password){...}\n}\n")),(0,r.kt)("h3",{id:"42---create-instances-of-contracts"},"4.2 - Create instances of Contracts"),(0,r.kt)("p",null,"The first step is to create new instances of the Universal Profile and the Key Manager. We will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the contract ABIs (from our npm package ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@lukso/lsp-smart-contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts")),") and"),(0,r.kt)("li",{parentName:"ul"},"the contract addresses.")),(0,r.kt)("p",null,"If you haven't done it in the ",(0,r.kt)("a",{parentName:"p",href:"#setup"},"setup"),", install our npm package to obtain the smart contracts ABIs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @lukso/lsp-smart-contracts --save\n")),(0,r.kt)("p",null,"If you have deployed your Universal Profile with our ",(0,r.kt)("a",{parentName:"p",href:"/guides/universal-profile/create-profile"},"lsp-factory.js")," tool (like in our previous guide), the UP owner will point to the address of the Key Manager."),(0,r.kt)("p",null,"Therefore, you can quickly obtain the address of your Key Manager by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner()")," function on your Universal Profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const Web3 = require('web3');\nconst UniversalProfile = require('@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json');\nconst KeyManager = require('@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json');\n\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\n// create an instance of your Universal Profile\nconst myUP = new web3.eth.Contract(UniversalProfile.abi, profileAddress);\n\n// if deployed with lsp-factory.js,\n// the Key Manager is the owner of the UP,\n// so retrieve your Key Manager address via `owner()` (= getter function)\nconst keyManagerAddress = await myUP.methods.owner().call();\nconst myKM = new web3.eth.Contract(KeyManager.abi, keyManagerAddress);\n")),(0,r.kt)("h3",{id:"43---set-data-on-the-universal-profile"},"4.3 - Set data on the Universal Profile"),(0,r.kt)("p",null,"The final step is to edit our ",(0,r.kt)("inlineCode",{parentName:"p"},"LSP3Profile")," key on our Universal Profile with the new value obtained in ",(0,r.kt)("strong",{parentName:"p"},"Step 3.2"),". We can easily access the key-value pair from the encoded data obtained with erc725.js."),(0,r.kt)("p",null,"Since a Key Manager owns our Universal Profile, the call will first check permissions through the Key Manager. We then need to ",(0,r.kt)("strong",{parentName:"p"},"encode")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"setData")," payload and pass it to our Universal Profile to perform this last step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"// encode the setData payload\n// (`encodedData` is the value obtain from Step 3.2)\nconst abiPayload = await myUP.methods\n  .setData([encodedData.LSP3Profile.key], [encodedData.LSP3Profile.value])\n  .encodeABI();\n\n// execute via the KeyManager, passing the UP payload\nawait myKM.methods\n  .execute(abiPayload)\n  .send({ from: myEOA.address, gasLimit: 300_000 });\n")),(0,r.kt)("h2",{id:"visualize-the-updated-universal-profile"},"Visualize the updated Universal Profile"),(0,r.kt)("p",null,"You can now check your UP on the ",(0,r.kt)("a",{parentName:"p",href:"https://universalprofile.cloud/"},"profile explorer")," website by pasting the returned address after the slash of the base URL:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://universalprofile.cloud/[UP ADDRESS]")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Universal Profile with pictures and infos on universalprofile.cloud",src:a(3788).Z,width:"1502",height:"913"})),(0,r.kt)("h2",{id:"final-code"},"Final Code"),(0,r.kt)("p",null,"Below is the complete code snippet of this guide, with all the steps compiled together."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("code",null,"UniversalProfileMetadata.json")," (example) - click to expand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "LSP3Profile": {\n    "name": "LUKSO Profile - Getting Started",\n    "description": "Congratulation! You have successfully edited your profile, and completed step 2 of the Getting Started guide \ud83d\ude03",\n    "links": [\n      {\n        "title": "Website",\n        "url": "https://mywebsite.me"\n      }\n    ],\n    "tags": ["Public Profile"],\n    "profileImage": [\n      {\n        "width": 640,\n        "height": 609,\n        "hashFunction": "keccak256(bytes)",\n        "hash": "0xe459e5769af85b09fb43bb8eaac561e196d58c0f5da3c5e150b6695898089402",\n        "url": "ipfs://QmPCz896rcZmq8F3FuUkJinRUmPgnZGjPvZL71nAaL7Fsx"\n      }\n    ],\n    "backgroundImage": [\n      {\n        "width": 1024,\n        "height": 576,\n        "hashFunction": "keccak256(bytes)",\n        "hash": "0x1c19780d377a7b01f7dcf16e0ebffd225e29d2235625009f67cf9d86a32a79e1",\n        "url": "ipfs://QmPMmEpKnmgACsWjhDUheF8TEKpspzQhAkjbY4EBbR4jgP"\n      }\n    ]\n  }\n}\n'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="main.js"',title:'"main.js"'},"const Web3 = require('web3');\nconst { ERC725 } = require('@erc725/erc725.js');\nconst { LSP3UniversalProfile } = require('@lukso/lsp-factory.js');\n\nconst UniversalProfile = require('@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json');\nconst KeyManager = require('@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json');\n\nconst web3 = new Web3('https://rpc.l14.lukso.network');\n\n// constants\nconst PRIVATE_KEY = '0x...';\nconst profileAddress = '0x...';\n\n// Step 1 - Create a new LSP3Profile JSON file\nconst jsonFile = require('./UniversalProfileMetadata.json');\n\nasync function editProfileInfos() {\n  // Step 2 - Upload our JSON file to IPFS\n  const uploadResult = await LSP3UniversalProfile.uploadProfileData(\n    jsonFile.LSP3Profile,\n  );\n  const lsp3ProfileIPFSUrl = uploadResult.url;\n\n  // Step 3.1 - Setup erc725.js\n  const schema = [\n    {\n      name: 'LSP3Profile',\n      key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',\n      keyType: 'Singleton',\n      valueContent: 'JSONURL',\n      valueType: 'bytes',\n    },\n  ];\n\n  const erc725 = new ERC725(schema, profileAddress, web3.currentProvider, {\n    ipfsGateway: 'https://ipfs.lukso.network/ipfs/',\n  });\n\n  // Step 3.2 - Encode the LSP3Profile data (to be written on our UP)\n  const encodedData = erc725.encodeData({\n    LSP3Profile: {\n      hashFunction: 'keccak256(utf8)',\n      // hash our LSP3 metadata JSON file\n      hash: web3.utils.keccak256(JSON.stringify(jsonFile)),\n      url: lsp3ProfileIPFSUrl,\n    },\n  });\n\n  // Step 4.1 - Load our EOA\n  const myEOA = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);\n\n  // Step 4.2 - Create instances of our Contracts\n  const myUP = new web3.eth.Contract(UniversalProfile.abi, profileAddress);\n\n  const keyManagerAddress = await myUP.methods.owner().call();\n  const myKM = new web3.eth.Contract(KeyManager.abi, keyManagerAddress);\n\n  // Step 4.3 - Set data (updated LSP3Profile metadata) on our Universal Profile\n\n  // encode the setData payload\n  const abiPayload = await myUP.methods\n    .setData([encodedData.LSP3Profile.key], [encodedData.LSP3Profile.value])\n    .encodeABI();\n\n  // execute via the KeyManager, passing the UP payload\n  await myKM.methods\n    .execute(abiPayload)\n    .send({ from: myEOA.address, gasLimit: 300_000 });\n}\neditProfileInfos();\n")))}m.isMDXComponent=!0},3788:function(e,t,a){t.Z=a.p+"assets/images/edit-profile-303f615e8946d2c8c06fbaaec8f3bc64.png"},3141:function(e,t,a){t.Z=a.p+"assets/images/ipfs-file-upload-0e460f4d156422c28a7358d3225ecacc.jpg"},9885:function(e,t,a){t.Z=a.p+"assets/images/ipfs-lukso-settings-f05fdffe93eb5341def5749ce919c6ff.jpg"},6190:function(e,t,a){t.Z=a.p+"assets/images/profile-metadata-ipfs-explained-926cfc5a823a5e38b57ac27ef045908f.jpeg"},1912:function(e,t,a){t.Z=a.p+"assets/images/ERC725Y-JSON-Schema-explained-ebb9fd1e6c2c1c77fa7bf75232737ef9.jpeg"}}]);