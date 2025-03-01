'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"index.html": "693088ae6f2deb7d1d81f1a08fb67934",
"/": "693088ae6f2deb7d1d81f1a08fb67934",
"assets/NOTICES": "9f6ab3ccb38716545120bd1431d1e2f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b1aa5a17b10999b81d5e5f0871523b9e",
"assets/fonts/MaterialIcons-Regular.otf": "050e41d0e9b5cfaefbc415c9abebec73",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "abfed12140d6e95de5cea749512cdf52",
"assets/lyrics/kanasando/kanasando_romaji.txt": "0e37f737c8f71266da743989c9887a36",
"assets/lyrics/asadoya_yunta/asadoya_yunta_romaji.txt": "b3b50dcae8d26dc7eac5c7c9eab5cb5b",
"assets/lyrics/erabu_shunsami/erabu_shunsami_kana.txt": "d578d7a9217a1d0bb1c007544193c084",
"assets/lyrics/erabu_shunsami/erabu_shunsami_romaji.txt": "f719c2ca97d0a63dc993878ee8a50019",
"assets/lyrics/shurei_no_shima/shurei_no_shima_romaji.txt": "139c595a07d0b904c41cb63412161381",
"assets/lyrics/ashimiji_bushi/ashimiji_bushi_romaji.txt": "481d5d6f4b2ad6a2b02a07af9c3d5550",
"assets/lyrics/chodegwa/chodegwa_romaji.txt": "52f383b81db56d35f736661a5ba40b6e",
"assets/lyrics/chodegwa/chodegwa_kana.txt": "73a761a7cb907f8a5719df392d7fa525",
"assets/lyrics/nmu_nu_jidai/nmu_nu_jidai_romaji.txt": "e0a05f69be9549cdf3d7a29cda587049",
"assets/lyrics/ashibina/ashibina_romaji.txt": "718bf3628dd5610ff3a6434c6824e902",
"assets/lyrics/ashibina/ashibina_jp.txt": "caa8a90c4a7a9a9a25adbcfa0487c5e5",
"assets/lyrics/ashibina/ashibina_kana.txt": "f12d07c1ba44814ef70d1e0db77b0bb7",
"assets/lyrics/aha_bushi/aha_bushi_romaji.txt": "1fb1c8aab95b9fd0536733474ee09300",
"assets/lyrics/hanjo_bushi_+_tumata_machi/hanjo_bushi_+_tumata_machi_romaji.txt": "234a6dcc2705243b464f9b1230e79ef4",
"assets/lyrics/tinsagu_nu_hana/tinsagu_nu_hana_romaji.txt": "bec5df9bc3e1f795fc4bd18a9e29e99b",
"assets/lyrics/bachikwai_bushi/bachikwai_bushi_romaji.txt": "352db7389f46dfa49ff666f6e209c5c8",
"assets/lyrics/shima_meguri/shima_meguri_romaji.txt": "2bb345c1b26e989c9f306f4ad8d95a66",
"assets/lyrics/shima_meguri/shima_meguri_kana.txt": "17e651d0f142ef92a8408a769a4fbf81",
"assets/lyrics/densaa_bushi/densaa_bushi_romaji.txt": "8747e4cbd5cbef02198635343a08647c",
"assets/lyrics/hiyamikachi_bushi/hiyamikachi_bushi_romaji.txt": "334ea8487a179bf8feb36739db0867ca",
"assets/lyrics/ipe_nu_hana/ipe_nu_hana_romaji.txt": "b408b8295abe42c585da2be476630a79",
"assets/lyrics/erabu_yuri_nu_hana/erabu_yuri_nu_hana_romaji.txt": "cc2373771594a98d720a6d5421060b18",
"assets/lyrics/medetai_bushi/medetai_bushi_romaji.txt": "a44febca2743bc4f0ad07ce138bbb9fb",
"assets/lyrics/juku_no_haru/juku_no_haru_romaji.txt": "3fa0d94f69abbfc62b13908e4327837f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.json": "ff3914d6b10a45ae82c2d58bdde2580d",
"version.json": "1ba8d7b509bcdde6d8a85f2e490256ae",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "e4bd720d313e2946d0eae4dbc568fa52",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "be1b3ddebbf305ea18722f8e3a985245",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "1a546c49c23f5124f7dd0f58e15acb1d"};
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
