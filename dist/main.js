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

eval("function logoSelection(location = \"all\", type = \"all\") {\n    // file = '../company-data/company-technologies.csv'\n\n    // d3.csv(file, function (data) {\n    //     data.forEach(d => {\n    //         d.Name = d.Name.toLowerCase();\n    //     })\n\n   \n\n    // let companyData;\n    // if (location === \"all\") {\n    //     companyData = data;\n    // } else {\n    //     companyData = data.filter(company => company[\"Location\"].toLowerCase() === location)\n    //     radiusScale = d3.scaleSqrt().domain([5, 145]).range([20, 100]);\n    // }\n\n    let data = [\n        { \"Number\": 1, \"Name\": \"Facebook\", \"Type\": \"Internet\", \"Location\": \"Menlo Park\", \"PNG\": \"http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png\", \"Technologies\":\"PHP, React, GraphQL\"},\n        { \"Number\": 2, \"Name\": \"Ebay\", \"Type\": \"E-Commerce\", \"Location\": \"San Jose\", \"PNG\": \"https://pngimg.com/uploads/ebay/ebay_PNG9.png\", \"Technologies\":\"Javascript, Node.js, Java\" },\n        { \"Number\": 3, \"Name\": \"Amazon\", \"Type\": \"Internet\", \"Location\": \"Sunnyvale\", \"PNG\": \"https://the-peak.ca/wp-content/uploads/2018/07/amazon-logo-preview.png\", \"Technologies\":\"Java, MySQL, AngularJS\"},\n        { \"Number\": 4, \"Name\": \"Uber\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"https://i.ya-webdesign.com/images/uber-logo-png-3.png\", \"Technologies\":\"jQuery, ngix, Python\"},\n        { \"Number\": 5, \"Name\": \"Tesla\", \"Type\": \"Automotive\", \"Location\": \"Palo Alto\", \"PNG\": \"http://pngimg.com/uploads/tesla_logo/tesla_logo_PNG9.png\", \"Technologies\": \"PHP, Underscore\" },\n        { \"Number\": 6, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\": \"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\", \"Technologies\": \"Pytho, Java, AngularJS\" },\n        { \"Number\": 7, \"Name\": \"Airbnb\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"http://pluspng.com/img-png/airbnb-logo-png-logo-black-transparent-airbnb-329.png\", \"Technologies\":\"JavaScript, nginx, React\"},\n        { \"Number\": 8, \"Name\": \"Twitter\", \"Type\": \"Social\", \"Location\": \"San Francisco\", \"PNG\": \"https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-11-512.png\", \"Technologies\":\"jQuery, Bootstrap, Node.js\"},\n        { \"Number\": 9, \"Name\": \"Netflix\", \"Type\": \"Entertainment\", \"Location\": \"Los Gatos\", \"PNG\": \"https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png\", \"Technologies\":\"Python, Node.js, React\"},\n        { \"Number\": 10, \"Name\": \"Oracle\", \"Type\": \"IT Services\", \"Location\": \"Redwood City\", \"PNG\": \"https://cdn.freebiesupply.com/logos/large/2x/oracle-1-logo-png-transparent.png\", \"Technologies\":\"jQuery, Veu.js, Slick\"},\n        { \"Number\": 11, \"Name\": \"Cisco\", \"Type\": \"Software\", \"Location\": \"San Jose\", \"PNG\": \"https://assets.cloud.im/prod/ux1/images/logos/cisco/cisco-2x.png\", \"Technologies\":\"jQuery, Javascript, nginx\"},\n        { \"Number\": 12, \"Name\": \"Linkedin\", \"Type\": \"Internet\", \"Location\": \"Sunnyvale\", \"PNG\": \"https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png\", \"Technologies\":\"jQuery, nginx, Bootstrap\"},\n        { \"Number\": 13, \"Name\": \"Slack\", \"Type\": \"Software\", \"Location\": \"San Francisco\", \"PNG\": \"https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png\", \"Technologies\": \"jQuery, PHP, Javascript\" },\n        { \"Number\": 14, \"Name\": \"Adobe\", \"Type\": \"Software\", \"Location\": \"San Jose\", \"PNG\": \"https://i.ya-webdesign.com/images/adobe-logo-png-1.png\", \"Technologies\": \"Javascript, Apache Cordova\" },\n        { \"Number\": 15, \"Name\": \"Salesforce\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"http://pluspng.com/img-png/salesforce-logo-vector-png-salesforce-logo-png-2300.png\", \"Technologies\": \"Cloudant, ClearDB\" },\n        { \"Number\": 16, \"Name\": \"HuaWei\", \"Type\": \"Electronics\", \"Location\": \"Mountain View\", \"PNG\": \"https://www.freepnglogos.com/uploads/huawei-logo-png/huawei-logo-communication-13.png\", \"Technologies\": \"jQuery, Google Fonts\" },\n        { \"Number\": 17, \"Name\": \"Pinterest\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"https://pngimg.com/uploads/pinterest/pinterest_PNG63.png\", \"Technologies\": \"nginx, Python, React\" },\n        { \"Number\": 18, \"Name\": \"Eventbrite\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/2/7/7/2775_3333_1667_original.png\", \"Technologies\":\"nginx, React, Django\"},\n        { \"Number\": 19, \"Name\": \"Youtube\", \"Type\": \"Internet\", \"Location\": \"San Bruno\", \"PNG\": \"https://pngimg.com/uploads/youtube/youtube_PNG5.png\", \"Technologies\":\"Google Fonts, Google Compute Engine\"},\n        { \"Number\": 20, \"Name\": \"Apple\", \"Type\": \"Electronics\", \"Location\": \"Cupertino\", \"PNG\": \"http://pngimg.com/uploads/apple_logo/apple_logo_PNG19666.png\", \"Technologies\": \"Swift, Objective-C, Cocoa Touch(iOS)\" },\n    ]\n    \n    if (location === \"all\" && type === \"all\") {\n        companyData = data;\n    } else if (location !== \"all\") {\n        companyData = data.filter(company => company[\"Location\"] === location)\n    } else if (type !== \"all\") {\n        companyData = data.filter(company => company[\"Type\"] === type)\n    }\n    \n    let graphSelection = d3.select('.main').html(\"\")\n    let radiusScale = d3.scaleSqrt().domain([5, 145]).range([10, 46]);\n\n    let width = 1300;\n    let height = 1000;\n\n    // container for all our pokemon bubbles.\n    let svgContainer = graphSelection\n        .append(\"svg\")\n        .attr(\"width\", width)\n        .attr(\"height\", height)\n        .attr(\"class\", \"logo-svg-container\")\n        .append(\"g\")\n        .attr(\"transform\", function () {\n            if (location === 'all') {\n                return `translate(${width * 0.60},${height / 2})`;\n            } else {\n                return `translate(${width * 0.60}, ${height / 2 - 40})`\n            }\n        });\n\n    // display box\n    let companyInfo = graphSelection\n        .append(\"div\")\n        .attr(\"class\", \"company-info\")\n        .style(\"height\", '60px')\n        .style(\"width\", \"260px\")\n        .style(\"left\", \"48px\")\n        .style(\"top\", \"120px\");\n    \n    let companySprite = companyInfo.append(\"img\")\n        .attr(\"class\", \"company-sprite\");\n\n    let companyInfoDetails = companyInfo.append(\"div\")\n        .attr(\"class\", \"company-info-details\")\n        .text(\"Mouse over a Company to select!\");\n\n    // box end \n    \n    const defs = svgContainer.append('defs')\n\n    defs.selectAll(\".company-pattern\")\n        .data(companyData)\n        .enter()\n        .append(\"pattern\")\n        .attr(\"class\", \"company-pattern\")\n        .attr(\"id\", function (d) {\n            return `${d.Name}`;\n        })\n        .attr(\"height\", \"100%\")\n        .attr(\"width\", \"100%\")\n        .attr(\"patternContentUnits\", \"objectBoundingBox\")\n        .append(\"svg:image\")\n        .attr(\"height\", 1)\n        .attr(\"width\", 1)\n        .attr(\"preserveAspectRatio\", \"none\")\n        .attr(\"xmlns:xlink\", \"http://www.w3.org/1999/xlink\")\n        .attr(\"xlink:href\", function (d) {\n            return `${d.PNG}`;\n        });\n\n    const simulation = d3.forceSimulation()\n        .force(\"x\", d3.forceX().strength(.000))\n        .force(\"y\", d3.forceY().strength(.000))\n        // changed this\n        .force(\"collide\", d3.forceCollide(80))\n    \n    const companyBubbles = svgContainer.selectAll('.company-bubble')\n        .data(companyData)\n        .enter().append('circle')\n        .attr(\"class\", \"company-bubble\")\n        // changed this\n        .attr(\"r\", 80)\n        .attr(\"fill\", function (d) {\n            return `url(#${d.Name})`;\n        });\n\n    let count = 20;\n    simulation.nodes(companyData)\n        .on('tick', function () {\n\n            if (count > 0) {\n                ticked()\n            }\n            // process = 1 - process;\n            count -= 1;\n        });\n\n    function ticked() {\n        companyBubbles\n            .attr(\"cx\", function (d) {\n                return d.x\n            })\n            .attr(\"cy\", function (d) {\n                return d.y\n            })\n    }\n\n    d3.selectAll('.location').on('click', function () {\n        logoSelection(d3.event.target.dataset.info)\n    })\n\n    d3.selectAll('.type').on('click', function () {\n        logoSelection(\"all\", d3.event.target.dataset.info)\n    })\n  \n    \n    d3.selectAll('.company-bubble').on('mouseover', function (d) {\n        let company = d;\n        // let target = d3.event.target;\n        let mouseNode = d3.select(this);\n        \n        mouseNode\n            .attr(\"r\", 100)\n            .attr(\"fill\", function (d) {\n                return `url(#${company.Name})`;\n            });\n\n\n    \n        companyInfo.transition()\n            .duration(100)\n            .style(\"opacity\", 1);\n\n        companyInfo\n            .style(\"height\", '250px')\n            .style(\"width\", \"230px\")\n            .style(\"left\", \"48px\")\n            .style(\"top\", \"300px\");\n        \n        companySprite\n            .style(\"height\", '100px')\n            .style(\"width\", '100px')\n            .attr('src', () => {\n                return `${company.PNG}`;\n            });\n        \n        companyInfoDetails\n            .html(\n                company.Type + \"<br/><br/>\" +\n                company.Location + \"<br/><br/>\" +\n                company.Technologies\n            );\n        \n\n    })\n\n    d3.selectAll('.company-bubble').on('mouseleave', function (d) {\n        let company = d;\n        let mouseNode = d3.select(this);\n\n        mouseNode\n            .attr(\"r\", 80)\n            .attr(\"fill\", function (d) {\n                return `url(#${company.Name})`;\n            });\n\n        companyInfo\n            .style(\"height\", '60px')\n            .style(\"width\", \"260px\")\n            .style(\"left\", \"48px\")\n            .style(\"top\", \"120px\");\n\n        companySprite\n            .style(\"height\", '0px')\n            .style(\"width\", '0px')\n\n        companyInfoDetails\n            .text(\"Mouse over a Company to select!\");\n\n    })\n  \n\n\n\n    // })\n}\n\nlogoSelection();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });