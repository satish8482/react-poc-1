"use strict";var precacheConfig=[["/index.html","a2ba38c7eec65237bb85f9e1c3a984d3"],["/static/css/main.b4e59630.css","33809eec0868b90c6d83a12aa47181e5"],["/static/js/main.d2a3501f.js","3e22bb4863631c33cf0e527eb939a24d"],["/static/media/Bangalore.252b83e1.png","252b83e130f19609961906284e8c3b4b"],["/static/media/Birthdayhall.15fcaa31.png","15fcaa3167a14cb36316d164cd7ae69a"],["/static/media/anchor.84c029c9.png","84c029c91c635bcc4ce1bf9d728de9e1"],["/static/media/annualdinners.a440bd40.png","a440bd4047b80c434b444cafc34bd0fb"],["/static/media/bridal.5698f28d.png","5698f28d8d8a360c00799fcb1e7a8633"],["/static/media/catering.54ed97fb.png","54ed97fbede6400d6f0446c4d18bd52c"],["/static/media/chennai.2bd5e04f.png","2bd5e04fc88637c6626e006fc70c5a30"],["/static/media/contacts.c51858a0.png","c51858a02a85560bc450df3d789e5c42"],["/static/media/deco.e02e7ac4.png","e02e7ac4ef94c9e4735917ac978b4473"],["/static/media/dehli.33f24766.png","33f24766ea2aa01b77dec100fd56a92f"],["/static/media/dj.86f03780.png","86f03780da1553aa18c6724b3248f650"],["/static/media/djhalls.00b0a7cc.png","00b0a7cc9b719f804226b6d28c0153da"],["/static/media/hyderabad.35d1fa94.png","35d1fa94a2bce3ce029b0a2a3235b066"],["/static/media/leftarrow.74618918.png","746189181721024672ce8d39ee4d4a70"],["/static/media/logo.c616b548.png","c616b54833fe970131e6b38ea40c30f4"],["/static/media/mehandi.aa1a7f44.png","aa1a7f4494617bb00a805703d9dabb06"],["/static/media/mumbai.a6820955.png","a682095541171ef876f80e69529bd1da"],["/static/media/partyhall.159ef900.png","159ef9003caaca24d05495c195e6a447"],["/static/media/photo.bcedf7f3.png","bcedf7f34285a441d9493b7dfc324503"],["/static/media/pune.d1e1350a.png","d1e1350a2ac8b4c8c7ccb7e948e9d4a6"],["/static/media/rightarrow.a546514e.png","a546514e46d2e50b7b3fb1ae66cd1da4"],["/static/media/serve.718a7886.png","718a7886e6fe43347caa18309a802fcb"],["/static/media/venue6.4ee2bf53.jpg","4ee2bf53b204edd32b3f41e9718f57b5"],["/static/media/venuefive.8d46ccd2.png","8d46ccd25785da08ceedc512f34dbafd"],["/static/media/venuefour.317309fc.png","317309fccc2e13a1b29cde5838c4e6a4"],["/static/media/venueone.a9639468.png","a963946810d1697916bdc7b944d3cd00"],["/static/media/venuesix.65f3be75.png","65f3be7586b5a01ce527efc80680410f"],["/static/media/venuethree.269bd114.png","269bd11488f450bf35a9306c1fcaf8ff"],["/static/media/venuetwo.108807e2.png","108807e23e34fc3dcc343a2af5aae246"],["/static/media/weddinghall.5b458160.png","5b45816000f29c90688f1bbf2de44776"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});