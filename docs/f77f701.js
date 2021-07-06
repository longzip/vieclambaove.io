(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(n,e,t){t(157),n.exports=t(158)},198:function(n,e,t){var content=t(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(109).default)("382a115c",content,!0,{sourceMap:!1})},199:function(n,e,t){var r=t(108)((function(i){return i[1]}));r.push([n.i,"/*! tailwindcss v2.2.4 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n[type='text'],[type='email'],[type='number'],[type='time'],textarea,select{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  background-color:#fff;\n  border-color:#6b7280;\n  border-width:1px;\n  border-radius:0px;\n  padding-top:0.5rem;\n  padding-right:0.75rem;\n  padding-bottom:0.5rem;\n  padding-left:0.75rem;\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n[type='text']:focus, [type='email']:focus, [type='number']:focus, [type='time']:focus, textarea:focus, select:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:#2563eb;\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  border-color:#2563eb;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder{\n  color:#6b7280;\n  opacity:1;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder{\n  color:#6b7280;\n  opacity:1;\n}\n\ninput::placeholder,textarea::placeholder{\n  color:#6b7280;\n  opacity:1;\n}\n\nselect{\n  background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n  background-position:right 0.5rem center;\n  background-repeat:no-repeat;\n  background-size:1.5em 1.5em;\n  padding-right:2.5rem;\n  -webkit-print-color-adjust:exact;\n          color-adjust:exact;\n}\n\n.sr-only{\n  position:absolute;\n  width:1px;\n  height:1px;\n  padding:0;\n  margin:-1px;\n  overflow:hidden;\n  clip:rect(0, 0, 0, 0);\n  white-space:nowrap;\n  border-width:0;\n}\n\n.static{\n  position:static;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.inset-x-0{\n  left:0px;\n  right:0px;\n}\n\n.inset-y-0{\n  top:0px;\n  bottom:0px;\n}\n\n.top-0{\n  top:0px;\n}\n\n.right-0{\n  right:0px;\n}\n\n.z-10{\n  z-index:10;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-1{\n  margin-top:0.25rem;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-5{\n  margin-top:1.25rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mt-10{\n  margin-top:2.5rem;\n}\n\n.-mr-2{\n  margin-right:-0.5rem;\n}\n\n.ml-3{\n  margin-left:0.75rem;\n}\n\n.ml-16{\n  margin-left:4rem;\n}\n\n.block{\n  display:block;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-8{\n  height:2rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-56{\n  height:14rem;\n}\n\n.h-full{\n  height:100%;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-12{\n  width:3rem;\n}\n\n.w-48{\n  width:12rem;\n}\n\n.w-auto{\n  width:auto;\n}\n\n.w-full{\n  width:100%;\n}\n\n.max-w-2xl{\n  max-width:42rem;\n}\n\n.max-w-7xl{\n  max-width:80rem;\n}\n\n.flex-1{\n  flex:1 1 0%;\n}\n\n.flex-shrink-0{\n  flex-shrink:0;\n}\n\n.flex-grow{\n  flex-grow:1;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.origin-top-right{\n  transform-origin:top right;\n}\n\n.translate-x-1\\/2{\n  --tw-translate-x:50%;\n}\n\n.scale-95{\n  --tw-scale-x:.95;\n  --tw-scale-y:.95;\n}\n\n.scale-100{\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.space-y-1 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(0.25rem * var(--tw-space-y-reverse));\n}\n\n.space-y-6 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(1.5rem * var(--tw-space-y-reverse));\n}\n\n.space-y-10 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(2.5rem * var(--tw-space-y-reverse));\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.rounded-none{\n  border-radius:0px;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-r-md{\n  border-top-right-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-transparent{\n  border-color:transparent;\n}\n\n.border-gray-300{\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n}\n\n.focus\\:border-indigo-500:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(99, 102, 241, var(--tw-border-opacity));\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-50{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n\n.bg-indigo-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(224, 231, 255, var(--tw-bg-opacity));\n}\n\n.bg-indigo-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(99, 102, 241, var(--tw-bg-opacity));\n}\n\n.bg-indigo-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-50:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-100:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-indigo-50:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(238, 242, 255, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-indigo-200:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(199, 210, 254, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-indigo-700:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(67, 56, 202, var(--tw-bg-opacity));\n}\n\n.object-cover{\n  -o-object-fit:cover;\n     object-fit:cover;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-5{\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n}\n\n.px-8{\n  padding-left:2rem;\n  padding-right:2rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-3{\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n}\n\n.py-5{\n  padding-top:1.25rem;\n  padding-bottom:1.25rem;\n}\n\n.py-12{\n  padding-top:3rem;\n  padding-bottom:3rem;\n}\n\n.pt-2{\n  padding-top:0.5rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pt-6{\n  padding-top:1.5rem;\n}\n\n.pb-3{\n  padding-bottom:0.75rem;\n}\n\n.pb-8{\n  padding-bottom:2rem;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-right{\n  text-align:right;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-extrabold{\n  font-weight:800;\n}\n\n.uppercase{\n  text-transform:uppercase;\n}\n\n.leading-6{\n  line-height:1.5rem;\n}\n\n.leading-8{\n  line-height:2rem;\n}\n\n.tracking-tight{\n  letter-spacing:-0.025em;\n}\n\n.tracking-wide{\n  letter-spacing:0.025em;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.text-gray-900{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.text-indigo-600{\n  --tw-text-opacity:1;\n  color:rgba(79, 70, 229, var(--tw-text-opacity));\n}\n\n.text-indigo-700{\n  --tw-text-opacity:1;\n  color:rgba(67, 56, 202, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-500:hover{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-900:hover{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.hover\\:text-indigo-500:hover{\n  --tw-text-opacity:1;\n  color:rgba(99, 102, 241, var(--tw-text-opacity));\n}\n\n.opacity-0{\n  opacity:0;\n}\n\n.opacity-100{\n  opacity:1;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-sm{\n  --tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.ring-1{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-2:focus{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-inset:focus{\n  --tw-ring-inset:inset;\n}\n\n.ring-black{\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(0, 0, 0, var(--tw-ring-opacity));\n}\n\n.focus\\:ring-indigo-500:focus{\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(99, 102, 241, var(--tw-ring-opacity));\n}\n\n.ring-opacity-5{\n  --tw-ring-opacity:0.05;\n}\n\n.focus\\:ring-offset-2:focus{\n  --tw-ring-offset-width:2px;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.duration-100{\n  transition-duration:100ms;\n}\n\n.duration-150{\n  transition-duration:150ms;\n}\n\n.ease-in{\n  transition-timing-function:cubic-bezier(0.4, 0, 1, 1);\n}\n\n.ease-out{\n  transition-timing-function:cubic-bezier(0, 0, 0.2, 1);\n}\n\n@media (min-width: 640px){\n  .sm\\:mx-auto{\n    margin-left:auto;\n    margin-right:auto;\n  }\n\n  .sm\\:mt-0{\n    margin-top:0px;\n  }\n\n  .sm\\:mt-5{\n    margin-top:1.25rem;\n  }\n\n  .sm\\:mt-8{\n    margin-top:2rem;\n  }\n\n  .sm\\:mt-12{\n    margin-top:3rem;\n  }\n\n  .sm\\:ml-3{\n    margin-left:0.75rem;\n  }\n\n  .sm\\:flex{\n    display:flex;\n  }\n\n  .sm\\:h-10{\n    height:2.5rem;\n  }\n\n  .sm\\:h-72{\n    height:18rem;\n  }\n\n  .sm\\:max-w-xl{\n    max-width:36rem;\n  }\n\n  .sm\\:justify-center{\n    justify-content:center;\n  }\n\n  .sm\\:overflow-hidden{\n    overflow:hidden;\n  }\n\n  .sm\\:rounded-md{\n    border-radius:0.375rem;\n  }\n\n  .sm\\:p-6{\n    padding:1.5rem;\n  }\n\n  .sm\\:px-0{\n    padding-left:0px;\n    padding-right:0px;\n  }\n\n  .sm\\:px-6{\n    padding-left:1.5rem;\n    padding-right:1.5rem;\n  }\n\n  .sm\\:pb-16{\n    padding-bottom:4rem;\n  }\n\n  .sm\\:text-center{\n    text-align:center;\n  }\n\n  .sm\\:text-sm{\n    font-size:0.875rem;\n    line-height:1.25rem;\n  }\n\n  .sm\\:text-lg{\n    font-size:1.125rem;\n    line-height:1.75rem;\n  }\n\n  .sm\\:text-4xl{\n    font-size:2.25rem;\n    line-height:2.5rem;\n  }\n\n  .sm\\:text-5xl{\n    font-size:3rem;\n    line-height:1;\n  }\n}\n\n@media (min-width: 768px){\n  .md\\:col-span-1{\n    grid-column:span 1 / span 1;\n  }\n\n  .md\\:col-span-2{\n    grid-column:span 2 / span 2;\n  }\n\n  .md\\:mt-0{\n    margin-top:0px;\n  }\n\n  .md\\:mt-5{\n    margin-top:1.25rem;\n  }\n\n  .md\\:mt-16{\n    margin-top:4rem;\n  }\n\n  .md\\:ml-10{\n    margin-left:2.5rem;\n  }\n\n  .md\\:block{\n    display:block;\n  }\n\n  .md\\:grid{\n    display:grid;\n  }\n\n  .md\\:hidden{\n    display:none;\n  }\n\n  .md\\:h-96{\n    height:24rem;\n  }\n\n  .md\\:w-auto{\n    width:auto;\n  }\n\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:gap-6{\n    gap:1.5rem;\n  }\n\n  .md\\:gap-x-8{\n    -moz-column-gap:2rem;\n         column-gap:2rem;\n  }\n\n  .md\\:gap-y-10{\n    row-gap:2.5rem;\n  }\n\n  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse:0;\n    margin-right:calc(2rem * var(--tw-space-x-reverse));\n    margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse:0;\n    margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom:calc(0px * var(--tw-space-y-reverse));\n  }\n\n  .md\\:px-10{\n    padding-left:2.5rem;\n    padding-right:2.5rem;\n  }\n\n  .md\\:py-4{\n    padding-top:1rem;\n    padding-bottom:1rem;\n  }\n\n  .md\\:pr-4{\n    padding-right:1rem;\n  }\n\n  .md\\:pb-20{\n    padding-bottom:5rem;\n  }\n\n  .md\\:text-lg{\n    font-size:1.125rem;\n    line-height:1.75rem;\n  }\n\n  .md\\:text-xl{\n    font-size:1.25rem;\n    line-height:1.75rem;\n  }\n\n  .md\\:text-6xl{\n    font-size:3.75rem;\n    line-height:1;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:absolute{\n    position:absolute;\n  }\n\n  .lg\\:inset-y-0{\n    top:0px;\n    bottom:0px;\n  }\n\n  .lg\\:right-0{\n    right:0px;\n  }\n\n  .lg\\:mx-0{\n    margin-left:0px;\n    margin-right:0px;\n  }\n\n  .lg\\:mx-auto{\n    margin-left:auto;\n    margin-right:auto;\n  }\n\n  .lg\\:mt-0{\n    margin-top:0px;\n  }\n\n  .lg\\:mt-20{\n    margin-top:5rem;\n  }\n\n  .lg\\:block{\n    display:block;\n  }\n\n  .lg\\:flex{\n    display:flex;\n  }\n\n  .lg\\:h-full{\n    height:100%;\n  }\n\n  .lg\\:w-1\\/2{\n    width:50%;\n  }\n\n  .lg\\:w-full{\n    width:100%;\n  }\n\n  .lg\\:max-w-2xl{\n    max-width:42rem;\n  }\n\n  .lg\\:flex-shrink-0{\n    flex-shrink:0;\n  }\n\n  .lg\\:flex-grow-0{\n    flex-grow:0;\n  }\n\n  .lg\\:items-center{\n    align-items:center;\n  }\n\n  .lg\\:justify-start{\n    justify-content:flex-start;\n  }\n\n  .lg\\:justify-between{\n    justify-content:space-between;\n  }\n\n  .lg\\:px-8{\n    padding-left:2rem;\n    padding-right:2rem;\n  }\n\n  .lg\\:py-16{\n    padding-top:4rem;\n    padding-bottom:4rem;\n  }\n\n  .lg\\:pb-28{\n    padding-bottom:7rem;\n  }\n\n  .lg\\:text-left{\n    text-align:left;\n  }\n\n  .lg\\:text-center{\n    text-align:center;\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:mt-28{\n    margin-top:7rem;\n  }\n\n  .xl\\:inline{\n    display:inline;\n  }\n\n  .xl\\:pb-32{\n    padding-bottom:8rem;\n  }\n}\n\n@media (min-width: 1536px){\n}",""]),r.locals={},n.exports=r}},[[156,7,1,8]]]);