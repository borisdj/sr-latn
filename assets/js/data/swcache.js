const resource = [ /* --- CSS --- */ '/sr-latn/assets/css/style.css', /* --- PWA --- */ '/sr-latn/app.js', '/sr-latn/sw.js', /* --- HTML --- */ '/sr-latn/index.html', '/sr-latn/404.html', '/sr-latn/categories/', '/sr-latn/tags/', '/sr-latn/archives/', '/sr-latn/about/', '/sr-latn/lang/', /* --- Favicons & compressed JS --- */ '/sr-latn/assets/img/favicons/android-chrome-192x192.png', '/sr-latn/assets/img/favicons/android-chrome-384x384.png', '/sr-latn/assets/img/favicons/apple-touch-icon.png', '/sr-latn/assets/img/favicons/browserconfig.xml', '/sr-latn/assets/img/favicons/favicon-16x16.png', '/sr-latn/assets/img/favicons/favicon-32x32.png', '/sr-latn/assets/img/favicons/favicon.ico', '/sr-latn/assets/img/favicons/mstile-150x150.png', '/sr-latn/assets/img/favicons/site.webmanifest', '/sr-latn/assets/img/favicons/android-chrome-512x512.png', '/sr-latn/assets/js/dist/categories.min.js', '/sr-latn/assets/js/dist/commons.min.js', '/sr-latn/assets/js/dist/misc.min.js', '/sr-latn/assets/js/dist/page.min.js', '/sr-latn/assets/js/dist/post.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'infopedia.io/sr-latn', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];