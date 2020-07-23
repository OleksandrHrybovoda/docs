/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.727e7545.css",
    "revision": "7eca325aa96e760fd23e68f0bdb223a3"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/architecture.30de09c7.png",
    "revision": "30de09c7c6530bc11ece7d9553497563"
  },
  {
    "url": "assets/img/connex.186d320e.jpg",
    "revision": "186d320e35a63378da3873e4c359aae7"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/js/10.ea619ca3.js",
    "revision": "5fbda109f5d4759a5770f24f7797f575"
  },
  {
    "url": "assets/js/11.5557e91e.js",
    "revision": "5b4288ad3f7f452766023e52f6bad426"
  },
  {
    "url": "assets/js/12.86c19ea2.js",
    "revision": "4b70ef445e6358687e4da239c1f060b0"
  },
  {
    "url": "assets/js/13.a8ed1307.js",
    "revision": "4035353b09411aaf610054d9d5118333"
  },
  {
    "url": "assets/js/14.1283300a.js",
    "revision": "7f300bc1f12dcdd1c83a252345a659fb"
  },
  {
    "url": "assets/js/15.2166d056.js",
    "revision": "d7cfa1626f801d8cb5471982e7c16463"
  },
  {
    "url": "assets/js/16.a05bb904.js",
    "revision": "82e6aed3cd5823304f63f3e0d29fc93b"
  },
  {
    "url": "assets/js/17.9da18bbc.js",
    "revision": "474ca68b36ea7792b52c0d89cb467a44"
  },
  {
    "url": "assets/js/18.57d00023.js",
    "revision": "dc372975d20fbb097d47a82bb0c27d02"
  },
  {
    "url": "assets/js/19.40aa8734.js",
    "revision": "bf15e495c63dec8bef4658ef974f52e5"
  },
  {
    "url": "assets/js/20.8cb58c1e.js",
    "revision": "0602827bae1334831d07c48aa670f9bd"
  },
  {
    "url": "assets/js/21.52c33a17.js",
    "revision": "b7f2ff6f098ade23cac2075bdf54abd4"
  },
  {
    "url": "assets/js/22.6dff57a3.js",
    "revision": "1903f83ead913a9e14dd01cca6d36312"
  },
  {
    "url": "assets/js/23.6bfb969d.js",
    "revision": "4f70653403ec62380e2e83b0ec0e95f3"
  },
  {
    "url": "assets/js/24.44b7716f.js",
    "revision": "6693e8c28f8b9347c6d592355885ba02"
  },
  {
    "url": "assets/js/25.c8c583d5.js",
    "revision": "c90e0cbc31db66673b0fe44a92457264"
  },
  {
    "url": "assets/js/26.c9d896a1.js",
    "revision": "2670845563160d22434f0ad59ac747e1"
  },
  {
    "url": "assets/js/27.e27f4cb8.js",
    "revision": "41b481975b044d131b9e7e0d60e0a281"
  },
  {
    "url": "assets/js/28.306478c0.js",
    "revision": "8a9c33e92e89914a69456ab09b322118"
  },
  {
    "url": "assets/js/29.5fd52193.js",
    "revision": "e1f5fa279700cd83d9efdf0a664f2098"
  },
  {
    "url": "assets/js/3.b4a9e1a9.js",
    "revision": "1454d9f6fce0e672a1336bd7f0656a38"
  },
  {
    "url": "assets/js/30.42427fe8.js",
    "revision": "efbba081258a6fb225540067a58e5537"
  },
  {
    "url": "assets/js/31.030b20b3.js",
    "revision": "55a87fcc21fdb617bc888d99aa680c0b"
  },
  {
    "url": "assets/js/32.c6982e54.js",
    "revision": "5cf2fe8e3764756621989d0aa0c1a855"
  },
  {
    "url": "assets/js/33.c1ce93b2.js",
    "revision": "3306eb441ef6bc7bc059e59aec04e4d6"
  },
  {
    "url": "assets/js/34.eaa6f819.js",
    "revision": "9dc6f1d553d90a28e445fd05d8f04ee0"
  },
  {
    "url": "assets/js/35.95dcba5e.js",
    "revision": "e3a75460952c5c3aead54a680e5839a3"
  },
  {
    "url": "assets/js/36.54b1fe82.js",
    "revision": "9994436c51337569d07eb32e664848d8"
  },
  {
    "url": "assets/js/37.bbf14b99.js",
    "revision": "1fa3b9b461bcd226a9d7c5b61ec03f86"
  },
  {
    "url": "assets/js/38.7d53e192.js",
    "revision": "5410d7808e5179f05437dad1bdc337c8"
  },
  {
    "url": "assets/js/39.1dfab5b6.js",
    "revision": "7361b8059d191dcc960562ced788ec39"
  },
  {
    "url": "assets/js/4.9fbef010.js",
    "revision": "dea51d6e08ba423935ceb7688d137358"
  },
  {
    "url": "assets/js/40.ffcf8941.js",
    "revision": "e8f3886115ae3751d566196d75c07482"
  },
  {
    "url": "assets/js/41.90f59d3b.js",
    "revision": "b1bd3dda00121f77cf36cd46f2b7ac03"
  },
  {
    "url": "assets/js/42.ba529dcf.js",
    "revision": "60a741ab18d45e268f1d120a70a39a9f"
  },
  {
    "url": "assets/js/43.b32cbe1f.js",
    "revision": "174321de191910140918e289ab0f5371"
  },
  {
    "url": "assets/js/44.8bd65a8b.js",
    "revision": "5250438062f991f3740c35656ddd884c"
  },
  {
    "url": "assets/js/45.4f15ee9d.js",
    "revision": "318b24fa44f0d09a005bc1ee600f0424"
  },
  {
    "url": "assets/js/46.3e43704f.js",
    "revision": "7ef836737b37ac4a9411423379e6fb5a"
  },
  {
    "url": "assets/js/47.d5b1169f.js",
    "revision": "a2c94a3313d8b22c38c46a42f816b3fb"
  },
  {
    "url": "assets/js/48.19c560d9.js",
    "revision": "d30c60bc8cb5524d8f2980079218b30d"
  },
  {
    "url": "assets/js/5.5d2a96e6.js",
    "revision": "fe3aa5d0c99cf2ea92a98e75185a6240"
  },
  {
    "url": "assets/js/6.0779f2ad.js",
    "revision": "af0bd9aacc7e4a4af42da514ef841ea3"
  },
  {
    "url": "assets/js/7.d14b27ba.js",
    "revision": "aebd2b5327e2d31296b2e8704d61b16b"
  },
  {
    "url": "assets/js/8.77fe2b1e.js",
    "revision": "c4b451fe69490443fd7f63303041b222"
  },
  {
    "url": "assets/js/9.885e62d8.js",
    "revision": "0d32aa145c7441df6b83c6a7e98afb2c"
  },
  {
    "url": "assets/js/app.81e1a330.js",
    "revision": "fe70a6e322a0a2db806621e6e5c69600"
  },
  {
    "url": "assets/js/vendors~docsearch.f7385de5.js",
    "revision": "0e139e7e3e0d0e8bc373456260e50940"
  },
  {
    "url": "connex/api.html",
    "revision": "c891988c54af20c1558aefc380361926"
  },
  {
    "url": "connex/demos-and-service.html",
    "revision": "3b7a3df9185533252188d6b930148510"
  },
  {
    "url": "connex/implementation.html",
    "revision": "94fba922394394648a65070905893046"
  },
  {
    "url": "connex/index.html",
    "revision": "ca56bd3ce6e56a20be06f4ba451222cd"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "bed4dc6096a3046cdd616df70dcc5690"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/index.html",
    "revision": "bf2e51c97acfc2d858962479321d3dd3"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "24acd003d2d87f8a3ee872bd0526dcc3"
  },
  {
    "url": "sync/faq.html",
    "revision": "fa156cea75a1c712aae001f66b0924d3"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "1bc68196da5a8d69e5b671c34bf4785a"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "46fc3a99f6bd3a55c3cfe200c8554ce1"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "7629f3c9d04ef1cde565bc4f7c4534af"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "29fb11783b5612e217eb3a6a78c7e4bd"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "f0d97c6e843037ae18fca249a6349108"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "df1e0ea47985094cb5aa296169315287"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "6aee19e364ad59e4b8131461546203ac"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "ca2c849e90dd443d9b738adf0fc36b08"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "6c311a335b8eb7c6e5b5d64de34bcb56"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "af496856aa336b55767d35daa88b0ac1"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "3c20c9508b7622ac4f41240aae3deff5"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "c8fbafa74884875ea0087da26b0d5f3d"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "ea2df9adb15f7ca6536131f3a49f6128"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "fa7e6194c7a4f1e3fb14f54aaf08ed28"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "f7f84adb7a84ce01875a61d17ccacdf7"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "b6efb008d7ff5fb36fa03567d11d5764"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "81e0ecea59ec814605a7990863e9b438"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "b716eb3d145b441e83b866cfe65cb9ca"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "a35bb7ca8ed8dfe6977c0873654c8561"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "0c0936a46ed1bdce213ea5687fa2cb8f"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "72f82af6fa4566d73263d6624e2a1957"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "a344948314b6392189aacc3415607c33"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "b4fb4e3bca68dfeeb55bdb869f5101c6"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "6ff6203dd2d57ecc9ba8d9d88be8824a"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "aec3907c9c00c35ca37babbedcd4d6ee"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "ec7988bd11c64f3a828db1bedee9265c"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "77d603850753e69ab6ece0170847d4e8"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "f3d90c633d0ad41cf05030346a28fd74"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "d17b5dd0a9405494fd4a06cfcbd4a986"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "d1d6cc2ea3dbe101ab0aa08d5039fd06"
  },
  {
    "url": "tutorials/index.html",
    "revision": "787355ca940ebf0bf723dd313e2e12f7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
