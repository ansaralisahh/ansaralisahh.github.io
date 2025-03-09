'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4f34e00d197abfecd12d808fe72ab15a",
"assets/AssetManifest.bin.json": "6a911df48a2ff863ada12af3983a8974",
"assets/AssetManifest.json": "65227b9fd130576d480ea167ec6728e7",
"assets/assets/app_images/expense_tracker.png": "12e2153c5da86e1919c9a5840e4c6a66",
"assets/assets/app_images/expense_tracker_pro.png": "a440bb15b7669b85a3deb0dff61078dd",
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
"assets/fonts/MaterialIcons-Regular.otf": "f6fa7b9374bf8f48715cedf3d798dea9",
"assets/NOTICES": "3f3deb3a3a7834a0518db098176f44ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d2bcf42e5c9938a665e5f522a2767a00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "757e7d3515a2d639dd673b22fc37da8d",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "51dc156125d631055445109deea98273",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27569d2916c2c93a075441728e6bf031",
"/": "27569d2916c2c93a075441728e6bf031",
"main.dart.js": "863206c750cc6ee84915b37c282903fc",
"manifest.json": "83ad5b573f11fc0ed2aa682a05796f05",
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
