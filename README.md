# Deobfuscated and commented TikTok Pixel source code

I had a lot of help from [JSFiddle](hxxps://jsfiddle.net/) to deobfuscate the code and determine what the code does. I commented it the best I can but if you find places that are not commented it means I couldn't get it to run successfully. Do whatever you want with this info.

# Signatures

### URLs
- hxxps://admin[.]myshopline[.]com/user/signIn
- hxxps://admin[.]thebase[.]in/users/login
- hxxps://ads[.]tiktok[.]com
- hxxps://ads[.]tiktok[.]com/help/article/custom-events?lang=en
- hxxps://ads[.]tiktok[.]com/help/article/standard-events-parameters?redirected=2
- hxxps://ads[.]tiktok[.]com/marketing_api/docs?id=1739585700402178
- hxxps://ads[.]tiktok[.]com/marketing_api/docs?rid=5ipocbxyw8v
- hxxps://ads[.]us[.]tiktok[.]com
- hxxps://analytics[.]pangle-ads[.]com/api/v2/pangle_disable_cookie
- hxxps://analytics[.]pangle-ads[.]com/api/v2/pangle_pixel
- hxxps://analytics[.]tiktok[.]com/api/v2/interaction
- hxxps://analytics[.]tiktok[.]com/api/v2/pcm
- hxxps://analytics[.]tiktok[.]com/api/v2/performance
- hxxps://analytics[.]tiktok[.]com/api/v2/performance_interaction
- hxxps://analytics[.]tiktok[.]com/api/v2/pixel
- hxxps://analytics[.]tiktok[.]com/api/v2/pixel/act
- hxxps://analytics[.]tiktok[.]com/api/v2/shopify_pixel
- hxxps://analytics[.]tiktok[.]com/i18n/pixel/
- hxxps://analytics[.]tiktok[.]com/i18n/pixel/config[.]js
- hxxps://analytics[.]tiktok[.]com/i18n/pixel/disable_cookie
- hxxps://analytics[.]tiktok[.]com/i18n/pixel/enable_cookie
- hxxps://analytics[.]tiktok[.]com/i18n/pixel/identify[.]js
- hxxps://analytics[.]tiktok[.]com/i18n/pixel/pickup[.]js
- hxxps://analytics[.]tiktok[.]com/i18n/pixel/static/
- hxxps://app[.]adjust[.]com/iw6jqsy
- hxxps://apps[.]shopify[.]com
- hxxps://apps[.]vtex[.]com/
- hxxps://auth[.]prestashop[.]com/login
- hxxps://boei18n-ads[.]byteoversea[.]net
- hxxps://community[.]tealiumiq[.]com/t5/Client-Side-Tags/TikTok-Pixel-Tag-Setup-Guide/ta-p/36583
- hxxps://eclogin[.]cafe24[.]com/Shop/
- hxxps://fb[.]me/react-polyfills
- hxxps://git[.]io/JUIaE
- hxxps://io-tx[.]tiktokd[.]org
- hxxps://lf16-adcdn-gcp[.]tiktokcdn-in[.]com
- hxxps://lf16-adcdn-gcp[.]tiktokcdn-in[.]com/obj/meteor-i18n-static
- hxxps://lf16-adcdn-sg[.]ibytedtos[.]com
- hxxps://lf16-adcdn-sg[.]ibytedtos[.]com/obj/meteor-i18n-static-sg
- hxxps://login[.]bigcommerce[.]com/login
- hxxps://lojaintegrada[.]com[.]br/?utm_source=tiktok
- hxxps://maliva-mcs[.]byteoversea[.]com
- hxxps://mcs-va-useast2a[.]tiktokv[.]com
- hxxps://my[.]ecwid[.]com/cp/
- hxxps://reactjs[.]org/docs/error-decoder[.]html?invariant=
- hxxps://schema[.]org/
- hxxps://segment[.]com/docs/connections/destinations/catalog/tiktok-conversions/
- hxxps://sf16-muse-va[.]ibytedtos[.]com
- hxxps://sf16-muse-va[.]ibytedtos[.]com/obj/meteor-i18n-static
- hxxps://sgali-mcs[.]byteoversea[.]com
- hxxps://squareup[.]com/dashboard/online-channels/overview
- hxxps://starling-oversea-useast2a[.]byteoversea[.]com
- hxxps://starling-sg[.]byteoversea[.]com
- hxxps://starling-va[.]byteoversea[.]com
- hxxps://starling[.]us[.]tiktokv[.]com
- hxxps://tosv[.]tiktokd[.]org
- hxxps://tosv[.]tiktokd[.]org/obj/meteor-i18n-static-tx
- hxxps://woocommerce[.]com/signin-with-wordpress/
- hxxps://www[.]opencart[.]com/index[.]php?route=account/login
- hxxps://www[.]tray[.]com[.]br/integracoes/

### Hashes
- a270f237e9d82e86980bef9662b2211109ee6329e4eccf06c33b978c8b47f764  config.js
- 8f361c72e6968d7dec7db4bfb7b03cd47490382da7482399107c8bd1ebfb80fe  identify.js
- 87260ecf581a44a18ca2165015348383b430e6b77ca0b0ec4a9a3b1ebff57160  main.MWNkZmM2YTcxMA.js
- e660ab3f35c84ade5ae6c4b58e0c1194a6e99830995985db10a60e3ffccc44a6  pickup.js

### Detection Inidicators
- `window\[window\[\"TiktokAnalyticsObject.+\]\]`
- `id\ \:\ \"(MWNkZmM2YTcxM.+|MWNkZmM2YTcxN.+|MWNkZmM2YTcxO.+)`
- `useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`
- `;ext=" + redo_if("20") + "|" + (to + "(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u`
- `w\.TiktokAnalyticsObject`