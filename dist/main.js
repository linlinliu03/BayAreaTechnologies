/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function logoSelection(location = \"all\") {\n    // file = '../company-data/company-technologies.csv'\n\n    // d3.csv(file, function (data) {\n    //     data.forEach(d => {\n    //         d.Name = d.Name.toLowerCase();\n    //     })\n\n   \n\n    // let companyData;\n    // if (location === \"all\") {\n    //     companyData = data;\n    // } else {\n    //     companyData = data.filter(company => company[\"Location\"].toLowerCase() === location)\n    //     radiusScale = d3.scaleSqrt().domain([5, 145]).range([20, 100]);\n    // }\n\n    let companyData = [\n        { \"Number\": 1, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 2, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 3, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 4, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 5, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 6, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 7, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 8, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 9, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 10, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 11, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 12, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 13, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 14, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 15, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 16, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 17, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 18, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        // { \"Number\": 19, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\":\"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\"},\n        { \"Number\": 20, \"Name\": \"Facebook\", \"Type\": \"Internet\", \"Location\": \"Menlo Park\", \"PNG\":\"http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png\"}\n        \n    ]\n    \n    let graphSelection = d3.select('.main').html(\"\")\n    let radiusScale = d3.scaleSqrt().domain([5, 145]).range([10, 46]);\n\n    // let logos = graphSelection\n    //     .selectAll(\"img\")\n    //     .data(companyData)\n    //     .enter()\n    //     .append(\"img\")\n    //     .attr(\"class\", \"company-pattern\")\n    //     .attr(\"height\",100)\n    //     .attr(\"width\",100)\n    //     .attr(\"id\", function (d) {\n    //         return `${d.Name}`;\n    //     })\n    //     .attr(\"src\", function (d) {\n    //         return `${d.PNG}`;\n    //     });\n\n\n\n    // 2nd\n    let width = 1200;\n    let height = 900;\n\n    // container for all our pokemon bubbles.\n    let svgContainer = graphSelection\n        .append(\"svg\")\n        .attr(\"width\", width)\n        .attr(\"height\", height)\n        .attr(\"class\", \"logo-svg-container\")\n        .append(\"g\")\n        .attr(\"transform\", function () {\n            if (location === 'all') {\n                return `translate(${width / 2},${height / 2})`;\n            } else {\n                return `translate(${width / 2}, ${height / 2 - 40})`\n            }\n        });\n\n    // display box\n    let companyInfo = graphSelection\n        .append(\"div\")\n        .attr(\"class\", \"company-info\")\n        .style(\"height\", '130px')\n        .style(\"width\", \"230px\")\n        .style(\"left\", \"48px\")\n        .style(\"top\", \"171px\");\n    \n    let companySprite = companyInfo.append(\"img\")\n        .attr(\"class\", \"company-sprite\");\n\n    let companyInfoDetails = companyInfo.append(\"div\")\n        .attr(\"class\", \"company-info-details\")\n        .text(\"Mouse over a Company to select!\");\n\n    // let companyTechnologies = companyInfo.append(\"div\")\n    // box end \n    \n    const container = svgContainer.append('container')\n\n    container.selectAll(\".company-pattern\")\n        .data(companyData)\n        .enter()\n        .append(\"pattern\")\n        .attr(\"class\", \"company-pattern\")\n        .attr(\"id\", function (d) {\n            return `${d.Name}`;\n        })\n        .attr(\"height\", \"100%\")\n        .attr(\"width\", \"100%\")\n        .attr(\"patternContentUnits\", \"objectBoundingBox\")\n        .append(\"svg:image\")\n        .attr(\"height\", 50)\n        .attr(\"width\", 50)\n        .attr(\"preserveAspectRatio\", \"none\")\n        .attr(\"xmlns:xlink\", \"http://www.w3.org/1999/xlink\")\n        .attr(\"xlink:href\", function (d) {\n            return `${d.PNG}`;\n        });\n\n    const simulation = d3.forceSimulation()\n        .force(\"x\", d3.forceX().strength(.000))\n        .force(\"y\", d3.forceY().strength(.000))\n        // changed this\n        .force(\"collide\", d3.forceCollide(80))\n    \n    const companyBubbles = svgContainer.selectAll('.company-bubble')\n        .data(companyData)\n        .enter().append('circle')\n        .attr(\"class\", \"company-bubble\")\n        // changed this\n        .attr(\"r\", 60)\n        // need to fix this\n        // .attr(\"fill\", \"red\")\n        .attr(\"fill\", function (d) {\n            return `url(#${d.Name})`;\n        });\n\n    let count = 20;\n    simulation.nodes(companyData)\n        .on('tick', function () {\n\n            if (count > 0) {\n                ticked()\n            }\n            // process = 1 - process;\n            count -= 1;\n        });\n\n    function ticked() {\n        companyBubbles\n            .attr(\"cx\", function (d) {\n                return d.x\n            })\n            .attr(\"cy\", function (d) {\n                return d.y\n            })\n    }\n  \n    \n    d3.selectAll('.company-bubble').on('mouseover', function (d) {\n        let company = d;\n        let companyName = company.Name\n        let target = d3.event.target;\n\n\n        companyInfo.transition()\n            .duration(100)\n            .style(\"opacity\", 1);\n\n        companyInfo\n            .style(\"height\", '130px')\n            .style(\"width\", \"230px\")\n            .style(\"left\", \"48px\")\n            .style(\"top\", \"171px\");\n        \n        companySprite\n            .style(\"height\", '100px')\n            .style(\"width\", '100px')\n            .attr('src', () => {\n                return `${company.PNG}`;\n            });\n        \n        companyInfoDetails\n            .html(\n                \"Industry: \" + company.Type + \"<br/><br/>\" +\n                \"Location: \" + company.Location \n            );\n\n    })\n\n    \n\n\n\n    // })\n}\n\nlogoSelection();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });