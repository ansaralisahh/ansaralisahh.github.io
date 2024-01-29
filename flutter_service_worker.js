'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4fbe1d79698c63fb16d4e648b03c52bd",
"assets/AssetManifest.bin.json": "790e106b284dbc1d45f0d46f3ad19bc7",
"assets/AssetManifest.json": "8665814697f7fc84113e03ff96b7ed72",
"assets/assets/a.png": "372303e7d0c6ef61a60dfa68557abe1a",
"assets/assets/app_development.png": "97e37df4d096cd4f691696d80943399e",
"assets/assets/arrow.png": "a8b68ccf99b3ccbebab6be425f72781e",
"assets/assets/exten.png": "e29c85e1e44e26dc7e87f5b036eb8930",
"assets/assets/icons/ai.svg": "d19338044cb79aea0bd2d65526b85048",
"assets/assets/icons/api.svg": "c94c2eb503d26e3cef4c83f6fec530f6",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/firebase.svg": "92ed4416ef316b0a25440b0222573da7",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/location.svg": "36428bc81427e6bbd77ca6dbc202897e",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/payment.svg": "678932ba0773c05f5f8fcce2e9654624",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/settings.svg": "da1961e61b63ce6f008ddfae83018343",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/upload.svg": "a5baaaac424c2d08ec4f965a85ac4a27",
"assets/assets/icons/utils.svg": "8e506615bbb2702ecaf01e08ed0f02ca",
"assets/assets/icons/widgets.svg": "a74dbb24ab96ea2a22465fd9490df54c",
"assets/assets/images/mockup-2.png": "43ca138b1424c2cd672abe8e0fedc204",
"assets/assets/images/mockup-3.png": "22734f8af1b16dd47b4cd5c326f09203",
"assets/assets/images/mockup.png": "2ec9e0b08217f7a2383a961ce73c0e63",
"assets/assets/images/profile_pic.png": "14fadd39309977174ebbf611aa064f64",
"assets/assets/img.png": "e7576f863f044a860be9ed3904e9c7f9",
"assets/assets/loading.gif": "e5e9172fc240993bd699f593370b2a56",
"assets/assets/login.jpg": "10294fc6e864afd2a48f47d9d8c656e5",
"assets/assets/logo/logo.png": "2af7b2e72abedc2bce98944653429354",
"assets/assets/logo/logo.svg": "9ea047f78b876895c33cdafd6087fd05",
"assets/assets/logo/logo_icon.png": "aa04971f5a403dd24bcaf06f55b093c1",
"assets/assets/logo/logo_name.svg": "5d4852f0217d0205c68baa9395a2f67c",
"assets/assets/logo/logo_text.png": "0b78ae381bd4c66c0394fc37cea78284",
"assets/assets/profile.png": "364027a26ccd8e8c874b363e8aa94568",
"assets/assets/slides/background-1.jpeg": "f8ed4d3704b14706eb036222b7ca4045",
"assets/assets/slides/background-2.jpeg": "2a495deff8fae15f2b30f535d1576ca1",
"assets/assets/slides/background-3.jpeg": "a1789d9a53f146cb6178e9db14b5e244",
"assets/assets/slides/background.jpeg": "d9418faee4ffef09d5142d2281040011",
"assets/assets/social.png": "15da04b25c7b3bd2ee2c59954f600661",
"assets/assets/testing.jpg": "5113df5e36f132046cc70c694dd066e4",
"assets/assets/view.jpg": "294d56d206c77d6dc696470822f1ac9e",
"assets/assets/web_development.png": "76e18cd3c86870d2caa7e7c8094a6631",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f905f57081943a580e70e3874dc8f97a",
"assets/NOTICES": "48fc203e68a352c8f3edd5e4d8dd62e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f9774e8ed7c45b31c13771ee4b9c53bc",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/img.png": "c1cdf291d73df1ad389bd1bf2085d45d",
"img.png": "c1cdf291d73df1ad389bd1bf2085d45d",
"index.html": "2920cf5ef80d240901d200eea9fe1729",
"/": "2920cf5ef80d240901d200eea9fe1729",
"main.dart.js": "5386789dd8316792ea6c0b030660bead",
"manifest.json": "83ad5b573f11fc0ed2aa682a05796f05",
"version.json": "e1bb1aee23c9585ebc05f68a098a877f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
