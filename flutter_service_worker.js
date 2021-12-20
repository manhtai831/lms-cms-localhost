'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2cd6ee2c70b0bde53fbe6cac3c8b8bb1",
".git/config": "7cb1c054086b29c00891f4b4f476afb4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "513ef72ac9bbf9c3ae11c86c3c5cfc20",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d2401d726f8e85f3b8fd0932fe1453e",
".git/logs/refs/heads/master": "0d2401d726f8e85f3b8fd0932fe1453e",
".git/logs/refs/remotes/origin/master": "937afbbe47143d953e35fff08fcec12f",
".git/objects/13/566b81b018ad684f3a35fee301741b2734c8f4": "9c29e6900c9ff7f24c6fa14692f16acf",
".git/objects/28/8b36b1efb71c411d5c27a1ea6c08e41a7fed46": "58a717c6109371969d37342fdb8e534d",
".git/objects/43/d3268f5adb2c8686ae14ed3d6d495d58288d2e": "688d326ada92b54a9622209fd6035ab1",
".git/objects/4a/48b975c39a9f241e1c784a7993349b5a3ddb10": "225504bc9b8742e44e9e91d8ea6aaad4",
".git/objects/4c/0d5df45e5ce0812be284cd2206a13d095954ed": "a6d0b3733de743ed692502c157282f51",
".git/objects/5d/88501444bb2f5893ece8f2d00ce38ce4e8da55": "9d62bbb77d67746b59ad3f4d64c42072",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/68/30ca7b1d77d015856729aafdc6dabe3d9b0770": "2ecf01f730a596c34dd90e8e1ccd8a31",
".git/objects/6a/60449ab752072e7d2c89ce0548fec4c59b35a1": "ad0050d2889e209ac31cd4c6d052e4e4",
".git/objects/6c/0b8635858dc7ad44b93df54b762707ce49eefc": "4301997f66617848371b4f6ad8aeafc1",
".git/objects/79/7acea53eb091cf5b30518802c3073f544adeed": "937cef16b89c98aeaa2dda4bb9500126",
".git/objects/83/b2da90fdba7280aa954706602ef8ab27749b11": "fdbd6deb8d4d1d618af8d2988b7f50da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c9/07e5ed892ce5786e088db051bee1e6b086f476": "3751caca9d3dd18e1ae8f0553fd29665",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f7/6e5d4b14eb24c79cae78df4865c93b06349a5c": "34293e1d7b83952d116e483637e4678b",
".git/objects/f9/0876e5a6df94ba3e7bac7bc0b7f8d74a5dbd57": "07920641a949a8f7b8cb3d8eebc9da9c",
".git/refs/heads/master": "8ff12d72e48700f089389793de163040",
".git/refs/remotes/origin/master": "8ff12d72e48700f089389793de163040",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/runConfigurations.xml": "2fc3380134e865b7a5b714aad6fe21e5",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D/shelved.patch": "ac2340370982d37e37a80421db3bb334",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D1/shelved.patch": "eb670e54ea6bf50136eb163ec3453e62",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D10/shelved.patch": "6656057106ddb1fcf2ff502c2510e036",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D11/shelved.patch": "cdb3180abc7ace31574b6b729e80d8b3",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D12/shelved.patch": "5971b09c654c68a8508b7be1fac67fa1",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D13/shelved.patch": "2fbbca938cfb4b226424dc573a00c93b",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D14/shelved.patch": "eb77f29bdf9624db8d538bde1662bb30",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D15/shelved.patch": "d88baa6dbbb0e3e9612bbadf86bfa5e5",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D16/shelved.patch": "6babd259c11a17ccefbc86d4cf4b1068",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D17/shelved.patch": "e0777770d3ce9f5194b88e5e5ea47fbd",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D18/shelved.patch": "5d11152fa9966b3e32d09adf6c717133",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D19/shelved.patch": "274fc57f6291256462add532e0f27b04",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D2/shelved.patch": "8940799b67fb50aed58e7303c7abbcea",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D20/shelved.patch": "7feb1970eb9042bf7e4ad9f2825bc0c3",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D21/shelved.patch": "4dbce2c10b926e62840bcdd85ae818f9",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D22/shelved.patch": "3730f7b399f5249cc6b4aca7f9a55722",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D23/shelved.patch": "6809b6c3bb44e62537937b0c00e29d19",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D24/shelved.patch": "08c09de1bcf270602adf48060bfd43b8",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D25/shelved.patch": "8b9c591a8aa869c23e3f0e417a41dff3",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D3/shelved.patch": "f4536612564ad38ac95789d0c24806b8",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D4/shelved.patch": "13d49a2db02ce39c34dc2feb3fa15e44",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D5/shelved.patch": "f07e2cc35ba62c0de6af86ac6c83d442",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D6/shelved.patch": "c66ea5c71ee2e37ea7d9fec728a6da3c",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D7/shelved.patch": "a4d56427aace691d5390203c2d704520",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D8/shelved.patch": "8253fb6eb8e34b68b26356f18fa2b4dc",
".idea/shelf/Uncommitted_changes_before_rebase_%5BChanges%5D9/shelved.patch": "98a1e23feb8587177133117ce781d605",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_.xml": "f5d2255038b6f70b490df01bb14b7254",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_1.xml": "2336b8a47db6390d57e4c70824b4a5ad",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_10.xml": "bed071b0a47dd8628a85b4fc54c803a4",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_11.xml": "dad6cac20a82e89786844ea432c19ea8",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_12.xml": "bac60f263de6ce3f26fb9955ea633eed",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_13.xml": "3173faa26053c7f5355781d07b195969",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_14.xml": "ccf8e800a9f2bc641aff067bb61c35b3",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_15.xml": "ebf471ced3fd340a61774a4cb747bebf",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_16.xml": "11a732e34912140e3c6027bb39cc5c44",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_17.xml": "e46c9e5d9a4d27886627e4706db22899",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_18.xml": "667dfcaf6e748a29b3ec48459268610a",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_19.xml": "03c74e0719b6f05e944a196b2cee6251",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_2.xml": "42b5066ed487a0b1b4188592ab46ed55",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_20.xml": "d63866f34639cf76fb1f021814345f36",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_21.xml": "67faa2e1612d136a2365efce293dc351",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_22.xml": "6e7dc695ca6717c2eb7e7e970c1ec419",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_23.xml": "26af7a77220c6f9256525852e6fa4656",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_24.xml": "e29194dfa74c82ac460ff11ed5cbba82",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_25.xml": "e5c207f3f01a832a3bc4960b58c8eb41",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_3.xml": "f68ccb3b7f9a0184aed657a4eed5545a",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_4.xml": "dca62cd931fdfebd6f4681755f57cc1c",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_5.xml": "83575e543a4de73e4879eb8ea06788d7",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_6.xml": "9582e6cef72bdf09bb90d4cec2d088cd",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_7.xml": "e8fa3c098b635757f2fe7291ef016538",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_8.xml": "d4ef86a74d54e46f0a5fc95267ef9458",
".idea/shelf/Uncommitted_changes_before_rebase__Changes_9.xml": "56423a7cf08b3d80b0d84e4879a7459b",
".idea/vcs.xml": "5f1eb3774d94d9489ed9e986c01535cb",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "483c3fff583a7dc15be532e47a4c9170",
"assets/AssetManifest.json": "bc74e831b8e86a2e2f7dba7ef9845ea3",
"assets/assets/icon/ic_it.svg": "514b1bc423b15e4ddd99b11f658fd060",
"assets/assets/icon/ic_smile.png": "9d710030da7fff4c77e3e75f868d648f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5c786b08d9ce752461b317e751e7f97e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ic_main.png": "c7696d137a5823dd4fb1f0916435858d",
"index.html": "665ad7e37f965afd2d6af70192eb1666",
"/": "665ad7e37f965afd2d6af70192eb1666",
"main.dart.js": "69f795ffd384f8c9f2917d281dda6405",
"manifest.json": "5571d9caf6a871a83b2013413f9f176d",
"version.json": "980bf47df371b45fa2d13af905824628"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
