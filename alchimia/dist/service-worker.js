if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return f[e]||(c=new Promise(async c=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=c}else importScripts(e),c()})),c.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},c=(c,f)=>{Promise.all(c.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(c)};self.define=(c,d,r)=>{f[c]||(f[c]=Promise.resolve().then(()=>{let f={};const n={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return f;case"module":return n;default:return e(c)}})).then(e=>{const c=r(...e);return f.default||(f.default=c),f})}))}}define("./service-worker.js",["./workbox-6dd0bd65"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/04d7ce5341ddd3eebbb203c9bf1f4deb.png",revision:"fa3a1201fffe79e4995957f6f899e78c"},{url:"/1.app.bundle.js",revision:"d2f8edbfa2be64421ac34ee739552ec8"},{url:"/49ed74c306c0ed69124b64f7e5c00cc0.png",revision:"280d7e4576efe9b47373cd35231172bc"},{url:"/5906ef641ccddb776449d80ed294e460.png",revision:"2dd35e4f46e01ad78588f00a2d34b986"},{url:"/93157f1360b280a6ef56c2269f1ac6ed.png",revision:"f2cd0260a634f1f5d37de5b1ffe414ce"},{url:"/9a24c5470d8daeec5efe999fc29f44a1.png",revision:"a3b44310325d49779f80d2711a51c93e"},{url:"/a24488f79a69ea929d1ff335f521975d.png",revision:"452a6d7cfe14ef4da091a91c065f16fb"},{url:"/a5272de84cd6925409e7aaddb4f391ae.png",revision:"a5ce45be95d181f1a0423001b8f15e1b"},{url:"/e89e08bced5116a2d77e91990f4ef0b7.png",revision:"ee5efd2478cd6c01a7e5eb67c24338ae"},{url:"/f8554c3a4f76507beb856ba4c71f186e.png",revision:"fdc225fc720b59954042b1c8b92402f9"},{url:"/icon_128x128.9981f8e9ed63c3182bc5ea27068e7732.png",revision:"9981f8e9ed63c3182bc5ea27068e7732"},{url:"/icon_192x192.327f9646ffd5c578995b844b7fcf9079.png",revision:"327f9646ffd5c578995b844b7fcf9079"},{url:"/icon_256x256.e4c79aa48b586d132653b55adeb6c50e.png",revision:"e4c79aa48b586d132653b55adeb6c50e"},{url:"/icon_384x384.82feb68df0b1b7301c08076c12451c92.png",revision:"82feb68df0b1b7301c08076c12451c92"},{url:"/icon_512x512.02647c9a8473e210af3fd7f92ad127b3.png",revision:"02647c9a8473e210af3fd7f92ad127b3"},{url:"/icon_96x96.844ec92d70403f31037478025b305a8d.png",revision:"844ec92d70403f31037478025b305a8d"},{url:"/index.html",revision:"7ec1ad9d331937f187cd54c2ba993c8b"},{url:"/manifest.51acd5ade5e9b1c377f248e23b70e497.json",revision:"51acd5ade5e9b1c377f248e23b70e497"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:15,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/,new e.NetworkFirst,"GET")}));
