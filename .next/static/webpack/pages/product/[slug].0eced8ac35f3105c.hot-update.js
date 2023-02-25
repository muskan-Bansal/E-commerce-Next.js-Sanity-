"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"./components/index.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProductDetails = ({\n  product,\n  products\n}) => {\n  _s();\n\n  const {\n    image,\n    name,\n    details,\n    price\n  } = product;\n  const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const {\n    decQty,\n    incQty,\n    qty,\n    onAdd,\n    setShowCart,\n    f\n  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)();\n  console.log(qty);\n  console.log(f);\n  console.log(85);\n\n  const handleBuyNow = () => {\n    onAdd(product, qty);\n    setShowCart(true);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"image-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(image && image[index]),\n    className: \"product-detail-image\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"small-images-container\"\n  }, image?.map((item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    key: i,\n    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_1__.urlFor)(item),\n    className: i === index ? 'small-image selected-image' : 'small-image',\n    onMouseEnter: () => setIndex(i)\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-detail-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"reviews\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineStar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"(20)\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"Details: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, details), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"price\"\n  }, \"$\", price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"quantity\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Quantity:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"quantity-desc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"minus\",\n    onClick: decQty\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMinus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"num\"\n  }, qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"plus\",\n    onClick: incQty\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"buttons\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"add-to-cart\",\n    onClick: () => onAdd(product, qty)\n  }, \"Add to Cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"buy-now\",\n    onClick: handleBuyNow\n  }, \"Buy Now\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"maylike-products-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"You may also like\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"marquee\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"maylike-products-container track\"\n  }, products.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Product, {\n    key: item._id,\n    product: item\n  }))))));\n};\n\n_s(ProductDetails, \"nsgbkhq0FVv3mAqofsLa6JLf/lA=\", false, function () {\n  return [_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext];\n});\n\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YjtJQUFzQixTQUFTLEVBQUMsU0FBaEM7SUFBMEMsT0FBTyxFQUFFTTtFQUFuRCxHQUFpRSxTQUFqRSxDQVJGLENBM0JGLENBdEJGLENBREYsZUFpRUU7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRSx1RUFBSSxtQkFBSixDQURGLGVBRUU7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLEdBQ0dmLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBY0MsSUFBRCxpQkFDWiwyREFBQyxnREFBRDtJQUFTLEdBQUcsRUFBRUEsSUFBSSxDQUFDRSxHQUFuQjtJQUF3QixPQUFPLEVBQUVGO0VBQWpDLEVBREQsQ0FESCxDQURGLENBRkYsQ0FqRUYsQ0FERjtBQThFRCxDQTdGRDs7R0FBTW5CO1VBR21ERDs7O0tBSG5EQzs7QUFtSU4sK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQWlPdXRsaW5lTWludXMsXHJcbiAgQWlPdXRsaW5lUGx1cyxcclxuICBBaUZpbGxTdGFyLFxyXG4gIEFpT3V0bGluZVN0YXIsXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5cclxuaW1wb3J0IHsgY2xpZW50LCB1cmxGb3IgfSBmcm9tICcuLi8uLi9saWIvY2xpZW50JztcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7IHByb2R1Y3QsIHByb2R1Y3RzIH0pID0+IHtcclxuICBjb25zdCB7IGltYWdlLCBuYW1lLCBkZXRhaWxzLCBwcmljZSB9ID0gcHJvZHVjdDtcclxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgZGVjUXR5LCBpbmNRdHksIHF0eSwgb25BZGQsIHNldFNob3dDYXJ0LCBmIH0gPSB1c2VTdGF0ZUNvbnRleHQoKTtcclxuXHJcbiAgY29uc29sZS5sb2cocXR5KTtcclxuICBjb25zb2xlLmxvZyhmKTtcclxuICBjb25zb2xlLmxvZyg4NSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1eU5vdyA9ICgpID0+IHtcclxuICAgIG9uQWRkKHByb2R1Y3QsIHF0eSk7XHJcblxyXG4gICAgc2V0U2hvd0NhcnQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZSAmJiBpbWFnZVtpbmRleF0pfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWltYWdlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1pbWFnZXMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtpbWFnZT8ubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICBpID09PSBpbmRleCA/ICdzbWFsbC1pbWFnZSBzZWxlY3RlZC1pbWFnZScgOiAnc21hbGwtaW1hZ2UnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEluZGV4KGkpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtZGVzY1wiPlxyXG4gICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3NcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxyXG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XHJcbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cclxuICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxyXG4gICAgICAgICAgICAgIDxBaU91dGxpbmVTdGFyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD4oMjApPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDQ+RGV0YWlsczogPC9oND5cclxuICAgICAgICAgIDxwPntkZXRhaWxzfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcbiAgICAgICAgICAgIDxoMz5RdWFudGl0eTo8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJxdWFudGl0eS1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWludXNcIiBvbkNsaWNrPXtkZWNRdHl9PlxyXG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZU1pbnVzIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bVwiPntxdHl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsdXNcIiBvbkNsaWNrPXtpbmNRdHl9PlxyXG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZVBsdXMgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtdG8tY2FydFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGQocHJvZHVjdCwgcXR5KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidXktbm93XCIgb25DbGljaz17aGFuZGxlQnV5Tm93fT5cclxuICAgICAgICAgICAgICBCdXkgTm93XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLXdyYXBwZXJcIj5cclxuICAgICAgICA8aDI+WW91IG1heSBhbHNvIGxpa2U8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLWNvbnRhaW5lciB0cmFja1wiPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtpdGVtLl9pZH0gcHJvZHVjdD17aXRlbX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCJdIHtcclxuICAgIHNsdWcge1xyXG4gICAgICBjdXJyZW50XHJcbiAgICB9XHJcbiAgfVxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogcHJvZHVjdC5zbHVnLmN1cnJlbnQsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6ICdibG9ja2luZycsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH0gfSkgPT4ge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICcke3NsdWd9J11bMF1gO1xyXG4gIGNvbnN0IHByb2R1Y3RzUXVlcnkgPSAnKltfdHlwZSA9PSBcInByb2R1Y3RcIl0nO1xyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChwcm9kdWN0c1F1ZXJ5KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocHJvZHVjdCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9kdWN0cywgcHJvZHVjdCB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBaU91dGxpbmVNaW51cyIsIkFpT3V0bGluZVBsdXMiLCJBaUZpbGxTdGFyIiwiQWlPdXRsaW5lU3RhciIsInVybEZvciIsIlByb2R1Y3QiLCJ1c2VTdGF0ZUNvbnRleHQiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImltYWdlIiwibmFtZSIsImRldGFpbHMiLCJwcmljZSIsImluZGV4Iiwic2V0SW5kZXgiLCJkZWNRdHkiLCJpbmNRdHkiLCJxdHkiLCJvbkFkZCIsInNldFNob3dDYXJ0IiwiZiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVCdXlOb3ciLCJtYXAiLCJpdGVtIiwiaSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});