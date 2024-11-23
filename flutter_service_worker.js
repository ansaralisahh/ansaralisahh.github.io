'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "da2a93536d1932c4089a17aabed2c6ec",
"assets/AssetManifest.bin.json": "5b9796246dac9631555700b74eb181b8",
"assets/AssetManifest.json": "3d7b45364621182cb1dd66b67cbb1268",
"assets/assets/app_images/expense_tracker.png": "807189dae2272690c4efa232f57d1f60",
"assets/assets/app_images/fps.png": "ce9b65120b4d3739d0868e93a6b22bc5",
"assets/assets/app_images/game_booster.png": "36d48802e4ec949518a4b1bf23d11af2",
"assets/assets/app_images/habit.png": "bcc6591d981622d56893be5f35c483b2",
"assets/assets/app_images/qr_code.png": "cc7ffcbab626977698c267385b0fadfb",
"assets/assets/app_images/widget_count.png": "237d6223790da89c3b94eb8184ffb45a",
"assets/assets/images/ansar.png": "6afba0581d7421d590a17e387657680c",
"assets/assets/images/code.svg": "08ef2959de363732dd5205007d0e77fb",
"assets/assets/images/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/dot.png": "1bff7b7757789f485fdb27d2a1042ebb",
"assets/assets/images/github.svg": "f26802b8dbef596268dd36546a50a0b0",
"assets/assets/images/header.png": "a1c16cff66290b15f92d3332396f6e70",
"assets/assets/images/instagram.svg": "3dbb024e6338467bcbb27dc7a8c27d9a",
"assets/assets/images/item1.png": "c1cee21df3fddac98f360611c463ae95",
"assets/assets/images/item2.png": "47442c384a19bd7f32ed47274d7cab33",
"assets/assets/images/item3.png": "dece3ae7847a067525a0af0d56355067",
"assets/assets/images/linkedin.svg": "07c1f76692e2893642a4801f609894d8",
"assets/assets/images/logo.png": "757e7d3515a2d639dd673b22fc37da8d",
"assets/assets/images/nehal.png": "6b2ca2df15192eb11ccb7d743f4bd147",
"assets/assets/images/play_store.svg": "bd8f2843df647e82df054df459b65bb1",
"assets/assets/images/project.png": "7cb89cd78b23b1a3ed1684014edab547",
"assets/assets/images/project2.png": "b53123061c98c6f782450d761d1b26d3",
"assets/assets/images/project3.png": "476ee7013f38008880a375a0173fcb0d",
"assets/assets/images/sohail.png": "b9dd83723f7c2134ee0b6bf13e836f84",
"assets/assets/images/twitter.svg": "f893bc26d86272a2a2dc3918b3ca05b0",
"assets/assets/lotties/apps.json": "d8205f6df461988d08ce3992b94bdf5b",
"assets/assets/lotties/social.json": "6879a64629072e82dd410eadfe09f7ba",
"assets/assets/lotties/webs.json": "b8592806799a867df529988bd6be4834",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "140e0752f322438aadef5f745d31153a",
"assets/NOTICES": "5117d3380b9b4795e746cbc8bd59858a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "014cd6b7504c6afe226a1508b63952cc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "757e7d3515a2d639dd673b22fc37da8d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ec14b2618e6bc434477643f02ad1f173",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5824312309500a42d874e9c0f025f50",
"/": "d5824312309500a42d874e9c0f025f50",
"main.dart.js": "afd0ae234c375d375e9b6f3ec7bcb437",
"manifest.json": "1046394ca1d2d7fc9beb00b62118f232",
"version.json": "e1bb1aee23c9585ebc05f68a098a877f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
