'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_24.part.js": "c7fc7da147268b01e18cc894d9695e72",
"main.dart.js_34.part.js": "cf1fa7876cae94d6890b58499902ad37",
"main.dart.js_46.part.js": "ebb78ca6967f8ef39db5846f95113c0b",
"main.dart.js_56.part.js": "89d769cf12286a7fef9ab89c65f5e2f6",
"version.json": "056f384927d8e2d09d8231af787b20ad",
<<<<<<< Updated upstream
"main.dart.js_7.part.js": "cff5aedc89c3622c176b0414117ccc17",
"main.dart.js_12.part.js": "0883ca32fe1b87c91eb8f3f9fb078596",
"main.dart.js_6.part.js": "80b87cb56cabc1edf9be31d1fc3da1e3",
"index.html": "6935a96ab12bb6261ce80cb46da14568",
"/": "6935a96ab12bb6261ce80cb46da14568",
"main.dart.js_13.part.js": "148c4e07c2f09e4b4068550c54d1ace4",
"main.dart.js_25.part.js": "8340d42b5cbcda6735a466c13a95bc62",
"main.dart.js_11.part.js": "62953fabe24fadd3812903ea578a1d86",
"main.dart.js": "e019828b01b23c0fffac2c0c517d5211",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432",
"main.dart.js_18.part.js": "eba59dadde19b0a4c485ee33f5049806",
"main.dart.js_19.part.js": "0ef70f9ed122f65c75d8e377ac035653",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js_10.part.js": "5365a153bcf172649bf52147e8586cf3",
"main.dart.js_5.part.js": "3a3de8908d58b763301c4b18518561cd",
"main.dart.js_15.part.js": "334caa2a63ce98574990613e53444f8e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"StreamObtener.js": "43957b4336ad2551d7c9b8b56a9116c3",
"main.dart.js_23.part.js": "dfe4ed66628dd09f0d2f564418a0a84b",
"main.dart.js_22.part.js": "ed12d1efd16bc49fcb9d07193826e0f3",
"main.dart.js_8.part.js": "e4be045037ef7e0cfe598a009aa0b199",
=======
"main.dart.js_7.part.js": "500ce9eb63e4c50691b2ab6661f3bfa8",
"main.dart.js_12.part.js": "09695e528d0c6deeb1c29a3863c18d89",
"main.dart.js_6.part.js": "7a91e0ff1f8a4559c6e7dcd6539fdccb",
"index.html": "4b5d50b4d30ef5f7debcd153409fb9cb",
"/": "4b5d50b4d30ef5f7debcd153409fb9cb",
"main.dart.js_13.part.js": "7acfc22cebb4b875a234208019db3873",
"main.dart.js_35.part.js": "b0dbe4b935792ccd420497fd3d2a3dd1",
"main.dart.js_25.part.js": "70110e8d09e6aa319d44be41a7c5c6e2",
"main.dart.js_57.part.js": "3a419932d09ed04b3e995c93ecffe55a",
"main.dart.js_47.part.js": "e49b41299f30890e85981ff69f8bd5f0",
"main.dart.js_11.part.js": "ba712eb5971afbe1d132221fee35d3d6",
"main.dart.js_4.part.js": "e1f676d769bf86a8d5a48cf271dd4441",
"main.dart.js": "a8a29ab4f09fc396f2f171d5cb543c01",
"main.dart.js_18.part.js": "8e4499a3b11d45ca5a1f4cd701da72e9",
"main.dart.js_45.part.js": "8c5a729de365c2751580ef821685232d",
"main.dart.js_55.part.js": "0ee8e732059d0f8c459f2a1f9d723802",
"main.dart.js_27.part.js": "797e00a76a9af614644ca014a29ec678",
"main.dart.js_37.part.js": "74495eaf5d776c1e9297f3ab7fe2e8ba",
"main.dart.js_19.part.js": "d2d90f1ab152c4a14a8fd4cae8671ef7",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js_54.part.js": "04b5e7c9d97330f697480a7372a3ee08",
"main.dart.js_44.part.js": "89a95c410c16dc3bda7d9e357eef7116",
"main.dart.js_36.part.js": "2bafff405c36fbe1310caf3cd9083d37",
"main.dart.js_26.part.js": "e958eb7aecc2f2664d5db75a0684db6d",
"main.dart.js_10.part.js": "ea4ab801a47532a8f2608a9a97164ff2",
"main.dart.js_5.part.js": "2ead828998d8f463e94b5adecc8f2318",
"main.dart.js_48.part.js": "a09a7c21228c2362137cc1a22554331c",
"main.dart.js_15.part.js": "a7d7f98741596f23717c2da30f793b3e",
"favicon.png": "1a35dc15b79da98394fea701ee0768c6",
"main.dart.js_41.part.js": "c2752561058993c7952c782e07ed4602",
"main.dart.js_51.part.js": "c05ade2687534d0a32cbe60a0e0108b8",
"main.dart.js_23.part.js": "e99a4041a88cea677afe90073a74ef90",
"main.dart.js_33.part.js": "3b13214101c05b81fca6483cf3ecf85e",
"main.dart.js_9.part.js": "04f407cec4da04d41e6e0d746a6c1111",
"main.dart.js_40.part.js": "54d1daee7f5cd4895adf45ed1f1241f6",
"main.dart.js_32.part.js": "b1d117cfb40c906e2545195a907d521d",
"main.dart.js_22.part.js": "9a162b390c35c3f92d82ae1faa29936b",
"main.dart.js_8.part.js": "08e5bf9ca374dfb28de8933dcaf8455b",
>>>>>>> Stashed changes
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb958d1d1c5997b266e86ed6222a11bc",
<<<<<<< Updated upstream
"main.dart.js_14.part.js": "38baa878272339003cba1b34d3ab972a",
"main.dart.js_1.part.js": "5810ad590cc378583e7216ae552cf330",
"main.dart.js_20.part.js": "900132fb785c6a66b2dd8db7084d7d65",
"main.dart.js_30.part.js": "c5cd85433e1a55bf203105f9206f7742",
"main.dart.js_3.part.js": "ff944222255e651c878582222f4ebfa9",
"main.dart.js_16.part.js": "812de8f70950964c14f97600a6964d2b",
=======
"main.dart.js_49.part.js": "c5deedb8a550e9aedbbc5946e59f8660",
"main.dart.js_14.part.js": "f9ba8e460698485d2f09b6592f490e8c",
"main.dart.js_1.part.js": "3e2ef9563b01e8314294023345918f86",
"main.dart.js_20.part.js": "ed40f7854b3fce2173ef883c49cf3896",
"main.dart.js_30.part.js": "1978d9bcbda767931bb62d96e0fdc0d1",
"main.dart.js_42.part.js": "ce79ac4fd64d4d0f0392de09917c91b9",
"main.dart.js_39.part.js": "e87a1494287c8e285c2b0a5f0b0690ff",
"main.dart.js_29.part.js": "30d9010eef696ce64689126e844de452",
"main.dart.js_3.part.js": "a7ba4a2cd2f1af02e6623849338b6938",
"main.dart.js_16.part.js": "bf92ee0a50e6834557329e7eccbc3d8d",
>>>>>>> Stashed changes
"assets/AssetManifest.json": "66196d167c5f888b6d1196d26f610255",
"assets/NOTICES": "acbd3607ce8d9e6e34696b3c3d07ebc1",
"assets/FontManifest.json": "ce1d0ae664e14238869feff07c71ce21",
"assets/AssetManifest.bin.json": "4331258ac9541b487bc79e4751e6a382",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2188c80b878e160123b99ab4853c244c",
<<<<<<< Updated upstream
"assets/fonts/MaterialIcons-Regular.otf": "6a74ad660b0e791ccd96f203bcc3678d",
"main.dart.js_28.part.js": "ffe9f0840e539a81e7861a4285733e62",
"main.dart.js_2.part.js": "bf9806197614ed9cf1de0af969a0a894",
"main.dart.js_17.part.js": "3a4164ea87247fec8850a41e4dde1bfe",
"main.dart.js_21.part.js": "af4795619b71c6fb0a9a551dba92281e",
=======
"assets/fonts/MaterialIcons-Regular.otf": "29bdc4db7420f89146ada04ebf92b2c1",
"main.dart.js_28.part.js": "c644dee2ce1e680a0f0a77f5c66e9e7d",
"main.dart.js_38.part.js": "e7ef4a531100681abf7c0d71580cc3cd",
"main.dart.js_2.part.js": "33675a82dbfa5bb5db6b05581496a0cb",
"main.dart.js_17.part.js": "3298af3fbae7ce7e45833a01b6aa73ca",
"main.dart.js_31.part.js": "ec87362e8726803a6445a43ddfe870a4",
"main.dart.js_21.part.js": "eee05acb92966c35ec21abeba7f05f5a",
"main.dart.js_53.part.js": "caee4500123db945e9ae16a4cbcc949b",
"main.dart.js_43.part.js": "4879a32b2b7887b8b07e762a879ed233",
>>>>>>> Stashed changes
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
