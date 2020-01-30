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

eval("function logoSelection(location = \"all\", type = \"all\") {\n\n    let data = [\n        { \"Number\": 1, \"Name\": \"Facebook\", \"Type\": \"Internet\", \"Location\": \"Menlo Park\", \"PNG\": \"http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png\", \"Technologies\":\"PHP, React, GraphQL\"},\n        { \"Number\": 2, \"Name\": \"Ebay\", \"Type\": \"E-Commerce\", \"Location\": \"San Jose\", \"PNG\": \"https://pngimg.com/uploads/ebay/ebay_PNG9.png\", \"Technologies\":\"Javascript, Node.js, Java\" },\n        { \"Number\": 3, \"Name\": \"Amazon\", \"Type\": \"Internet\", \"Location\": \"Sunnyvale\", \"PNG\": \"https://the-peak.ca/wp-content/uploads/2018/07/amazon-logo-preview.png\", \"Technologies\":\"Java, MySQL, AngularJS\"},\n        { \"Number\": 4, \"Name\": \"Uber\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"https://i.ya-webdesign.com/images/uber-logo-png-3.png\", \"Technologies\":\"jQuery, ngix, Python\"},\n        { \"Number\": 5, \"Name\": \"Tesla\", \"Type\": \"Automotive\", \"Location\": \"Palo Alto\", \"PNG\": \"http://pngimg.com/uploads/tesla_logo/tesla_logo_PNG9.png\", \"Technologies\": \"PHP, Underscore\" },\n        { \"Number\": 6, \"Name\": \"Google\", \"Type\": \"Internet\", \"Location\": \"Mountain View\", \"PNG\": \"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png\", \"Technologies\": \"Pytho, Java, AngularJS\" },\n        { \"Number\": 7, \"Name\": \"Airbnb\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"http://pluspng.com/img-png/airbnb-logo-png-logo-black-transparent-airbnb-329.png\", \"Technologies\":\"JavaScript, nginx, React\"},\n        { \"Number\": 8, \"Name\": \"Twitter\", \"Type\": \"Social\", \"Location\": \"San Francisco\", \"PNG\": \"https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-11-512.png\", \"Technologies\":\"jQuery, Bootstrap, Node.js\"},\n        { \"Number\": 9, \"Name\": \"Netflix\", \"Type\": \"Entertainment\", \"Location\": \"Los Gatos\", \"PNG\": \"https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png\", \"Technologies\":\"Python, Node.js, React\"},\n        { \"Number\": 10, \"Name\": \"Oracle\", \"Type\": \"IT Services\", \"Location\": \"Redwood City\", \"PNG\": \"https://cdn.freebiesupply.com/logos/large/2x/oracle-1-logo-png-transparent.png\", \"Technologies\":\"jQuery, Veu.js, Slick\"},\n        { \"Number\": 11, \"Name\": \"Cisco\", \"Type\": \"Software\", \"Location\": \"San Jose\", \"PNG\": \"https://assets.cloud.im/prod/ux1/images/logos/cisco/cisco-2x.png\", \"Technologies\":\"jQuery, Javascript, nginx\"},\n        { \"Number\": 12, \"Name\": \"Linkedin\", \"Type\": \"Internet\", \"Location\": \"Sunnyvale\", \"PNG\": \"https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png\", \"Technologies\":\"jQuery, nginx, Bootstrap\"},\n        { \"Number\": 13, \"Name\": \"Slack\", \"Type\": \"Software\", \"Location\": \"San Francisco\", \"PNG\": \"https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png\", \"Technologies\": \"jQuery, PHP, Javascript\" },\n        { \"Number\": 14, \"Name\": \"Adobe\", \"Type\": \"Software\", \"Location\": \"San Jose\", \"PNG\": \"https://i.ya-webdesign.com/images/adobe-logo-png-1.png\", \"Technologies\": \"Javascript, Apache Cordova\" },\n        { \"Number\": 15, \"Name\": \"Salesforce\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"http://pluspng.com/img-png/salesforce-logo-vector-png-salesforce-logo-png-2300.png\", \"Technologies\": \"Cloudant, ClearDB\" },\n        { \"Number\": 16, \"Name\": \"HuaWei\", \"Type\": \"Electronics\", \"Location\": \"Mountain View\", \"PNG\": \"https://www.freepnglogos.com/uploads/huawei-logo-png/huawei-logo-communication-13.png\", \"Technologies\": \"jQuery, Google Fonts\" },\n        { \"Number\": 17, \"Name\": \"Pinterest\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"https://pngimg.com/uploads/pinterest/pinterest_PNG63.png\", \"Technologies\": \"nginx, Python, React\" },\n        { \"Number\": 18, \"Name\": \"Eventbrite\", \"Type\": \"Internet\", \"Location\": \"San Francisco\", \"PNG\": \"https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/2/7/7/2775_3333_1667_original.png\", \"Technologies\":\"nginx, React, Django\"},\n        { \"Number\": 19, \"Name\": \"Youtube\", \"Type\": \"Internet\", \"Location\": \"San Bruno\", \"PNG\": \"https://pngimg.com/uploads/youtube/youtube_PNG5.png\", \"Technologies\":\"Google Fonts, Google Compute Engine\"},\n        { \"Number\": 20, \"Name\": \"Apple\", \"Type\": \"Electronics\", \"Location\": \"Cupertino\", \"PNG\": \"http://pngimg.com/uploads/apple_logo/apple_logo_PNG19666.png\", \"Technologies\": \"Swift, Objective-C, Cocoa Touch(iOS)\" },\n    ]\n    \n    if (location === \"all\" && type === \"all\") {\n        companyData = data;\n    } else if (location !== \"all\") {\n        companyData = data.filter(company => company[\"Location\"] === location)\n    } else if (type !== \"all\") {\n        companyData = data.filter(company => company[\"Type\"] === type)\n    }\n    \n    let graphSelection = d3.select('.main').html(\"\")\n    let radiusScale = d3.scaleSqrt().domain([5, 145]).range([10, 46]);\n\n    let width = 1300;\n    let height = 1000;\n\n    // container for all our pokemon bubbles.\n    let svgContainer = graphSelection\n        .append(\"svg\")\n        .attr(\"width\", width)\n        .attr(\"height\", height)\n        .attr(\"class\", \"logo-svg-container\")\n        .append(\"g\")\n        .attr(\"transform\", function () {\n            if (location === 'all') {\n                return `translate(${width * 0.60},${height / 2})`;\n            } else {\n                return `translate(${width * 0.60}, ${height / 2 - 40})`\n            }\n        });\n\n    // display box\n    let companyInfo = graphSelection\n        .append(\"div\")\n        .attr(\"class\", \"company-info\")\n        .style(\"height\", '60px')\n        .style(\"width\", \"260px\")\n        .style(\"left\", \"48px\")\n        .style(\"top\", \"120px\");\n    \n    let companySprite = companyInfo.append(\"img\")\n        .attr(\"class\", \"company-sprite\");\n\n    let companyInfoDetails = companyInfo.append(\"div\")\n        .attr(\"class\", \"company-info-details\")\n        .text(\"Mouse over a Company to select!\");\n\n    // box end \n    \n    const defs = svgContainer.append('defs')\n\n    defs.selectAll(\".company-pattern\")\n        .data(companyData)\n        .enter()\n        .append(\"pattern\")\n        .attr(\"class\", \"company-pattern\")\n        .attr(\"id\", function (d) {\n            return `${d.Name}`;\n        })\n        .attr(\"height\", \"100%\")\n        .attr(\"width\", \"100%\")\n        .attr(\"patternContentUnits\", \"objectBoundingBox\")\n        .append(\"svg:image\")\n        .attr(\"height\", 1)\n        .attr(\"width\", 1)\n        .attr(\"preserveAspectRatio\", \"none\")\n        .attr(\"xmlns:xlink\", \"http://www.w3.org/1999/xlink\")\n        .attr(\"xlink:href\", function (d) {\n            return `${d.PNG}`;\n        });\n\n    const simulation = d3.forceSimulation()\n        .force(\"x\", d3.forceX().strength(.000))\n        .force(\"y\", d3.forceY().strength(.000))\n        .force(\"collide\", d3.forceCollide(80))\n    \n    const companyBubbles = svgContainer.selectAll('.company-bubble')\n        .data(companyData)\n        .enter().append('circle')\n        .attr(\"class\", \"company-bubble\")\n        .attr(\"r\", 80)\n        .attr(\"fill\", function (d) {\n            return `url(#${d.Name})`;\n        });\n\n    let count = 20;\n    simulation.nodes(companyData)\n        .on('tick', function () {\n\n            if (count > 0) {\n                ticked()\n            }\n            // process = 1 - process;\n            count -= 1;\n        });\n\n    function ticked() {\n        companyBubbles\n            .attr(\"cx\", function (d) {\n                return d.x\n            })\n            .attr(\"cy\", function (d) {\n                return d.y\n            })\n    }\n\n    d3.selectAll('.location').on('click', function () {\n        logoSelection(d3.event.target.dataset.info)\n    })\n\n    d3.selectAll('.type').on('click', function () {\n        logoSelection(\"all\", d3.event.target.dataset.info)\n    })\n  \n    \n    d3.selectAll('.company-bubble').on('mouseover', function (d) {\n        let company = d;\n        let mouseNode = d3.select(this);\n        \n        mouseNode\n            .attr(\"r\", 100)\n            .attr(\"fill\", function (d) {\n                return `url(#${company.Name})`;\n            });\n\n\n    \n        companyInfo.transition()\n            .duration(100)\n            .style(\"opacity\", 1);\n\n        companyInfo\n            .style(\"height\", '250px')\n            .style(\"width\", \"230px\")\n            .style(\"left\", \"48px\")\n            .style(\"top\", \"350px\");\n        \n        companySprite\n            .style(\"height\", '100px')\n            .style(\"width\", '100px')\n            .attr('src', () => {\n                return `${company.PNG}`;\n            });\n        \n        companyInfoDetails\n            .html(\n                company.Type + \"<br/><br/>\" +\n                company.Location + \"<br/><br/>\" +\n                company.Technologies\n            );\n        \n\n    })\n\n    d3.selectAll('.company-bubble').on('mouseleave', function (d) {\n        let company = d;\n        let mouseNode = d3.select(this);\n\n        mouseNode\n            .attr(\"r\", 80)\n            .attr(\"fill\", function (d) {\n                return `url(#${company.Name})`;\n            });\n\n        companyInfo\n            .style(\"height\", '60px')\n            .style(\"width\", \"260px\")\n            .style(\"left\", \"48px\")\n            .style(\"top\", \"120px\");\n\n        companySprite\n            .style(\"height\", '0px')\n            .style(\"width\", '0px')\n\n        companyInfoDetails\n            .text(\"Mouse over a Company to select!\");\n\n    })\n  \n}\n\nlogoSelection();\n\nconst sample = [\n    {\n       webFramework: 'jQuery',\n        value: 48.7,\n        color: '#000000'\n    },\n    {\n       webFramework: 'React.js',\n        value: 31.3,\n        color: '#00a2ee'\n    },\n    {\n       webFramework: 'Angular.js',\n        value: 30.7,\n        color: '#fbcb39'\n    },\n    {\n       webFramework: 'ASP.NET',\n        value: 26.3,\n        color: '#007bc8'\n    },\n    {\n       webFramework: 'Express',\n        value: 19.7,\n        color: '#65cedb'\n    },\n    {\n       webFramework: 'Spring',\n        value: 16.2,\n        color: '#ff6e52'\n    },\n    {\n       webFramework: 'Vue.js',\n        value: 15.2,\n        color: '#f9de3f'\n    },\n    {\n       webFramework: 'Django',\n        value: 13.0,\n        color: '#5d2f8e'\n    },\n    {\n       webFramework: 'Flask',\n        value: 12.1,\n        color: '#008fc9'\n    },\n    {\n       webFramework: 'Laravel',\n        value: 10.5,\n        color: '#507dca'\n    },\n    // {\n    //    webFramework: 'Ruby on Rails',\n    //     value: 8.2,\n    //     color: '#507dca'\n    // },\n    // {\n    //    webFramework: 'Drupal',\n    //     value: 3.5,\n    //     color: '#507dca'\n    // }\n];\n\n\n// const svg = d3.select('svg');\nconst svgContainer = d3.select('#container').append('svg');\n\nconst margin = 80;\nconst width = 1200 - 2 * margin;\nconst height = 600 - 2 * margin;\n\nconst chart = svgContainer.append('g')\n    .attr('transform', `translate(${margin}, ${margin})`);\n\nconst xScale = d3.scaleBand()\n    .range([0, width])\n    .domain(sample.map((s) => s.webFramework))\n    .padding(0.4)\n\nconst yScale = d3.scaleLinear()\n    .range([height, 0])\n    .domain([0, 50]);\n\n// vertical grid lines\n// const makeXLines = () => d3.axisBottom()\n//   .scale(xScale)\n\nconst makeYLines = () => d3.axisLeft()\n    .scale(yScale)\n\nchart.append('g')\n    .attr('transform', `translate(0, ${height})`)\n    .call(d3.axisBottom(xScale));\n\nchart.append('g')\n    .call(d3.axisLeft(yScale));\n\n// vertical grid lines\n// chart.append('g')\n//   .attr('class', 'grid')\n//   .attr('transform', `translate(0, ${height})`)\n//   .call(makeXLines()\n//     .tickSize(-height, 0, 0)\n//     .tickFormat('')\n//   )\n\nchart.append('g')\n    .attr('class', 'grid')\n    .call(makeYLines()\n        .tickSize(-width, 0, 0)\n        .tickFormat('')\n    )\n\nconst barGroups = chart.selectAll()\n    .data(sample)\n    .enter()\n    .append('g')\n\nbarGroups\n    .append('rect')\n    .attr('class', 'bar')\n    .attr('x', (g) => xScale(g.webFramework))\n    .attr('y', (g) => yScale(g.value))\n    .attr('height', (g) => height - yScale(g.value))\n    .attr('width', xScale.bandwidth())\n    .on('mouseenter', function (actual, i) {\n        d3.selectAll('.value')\n            .attr('opacity', 0)\n\n        d3.select(this)\n            .transition()\n            .duration(300)\n            .attr('opacity', 0.6)\n            .attr('x', (a) => xScale(a.webFramework) - 5)\n            .attr('width', xScale.bandwidth() + 10)\n\n        const y = yScale(actual.value)\n\n        line = chart.append('line')\n            .attr('id', 'limit')\n            .attr('x1', 0)\n            .attr('y1', y)\n            .attr('x2', width)\n            .attr('y2', y)\n\n        barGroups.append('text')\n            .attr('class', 'divergence')\n            .attr('x', (a) => xScale(a.webFramework) + xScale.bandwidth() / 2)\n            .attr('y', (a) => yScale(a.value) + 30)\n            .attr('fill', 'white')\n            .attr('text-anchor', 'middle')\n            .text((a, idx) => {\n                const divergence = (a.value - actual.value).toFixed(1)\n\n                let text = ''\n                if (divergence > 0) text += '+'\n                text += `${divergence}%`\n\n                return idx !== i ? text : '';\n            })\n\n    })\n    .on('mouseleave', function () {\n        d3.selectAll('.value')\n            .attr('opacity', 1)\n\n        d3.select(this)\n            .transition()\n            .duration(300)\n            .attr('opacity', 1)\n            .attr('x', (a) => xScale(a.webFramework))\n            .attr('width', xScale.bandwidth())\n\n        chart.selectAll('#limit').remove()\n        chart.selectAll('.divergence').remove()\n    })\n\nbarGroups\n    .append('text')\n    .attr('class', 'value')\n    .attr('x', (a) => xScale(a.webFramework) + xScale.bandwidth() / 2)\n    .attr('y', (a) => yScale(a.value) + 30)\n    .attr('text-anchor', 'middle')\n    .text((a) => `${a.value}%`)\n\nsvgContainer\n    .append('text')\n    .attr('class', 'label')\n    .attr('x', -(height / 2) - margin)\n    .attr('y', margin / 2.4)\n    .attr('transform', 'rotate(-90)')\n    .attr('text-anchor', 'middle')\n    .text('Percentage (%)')\n\nsvgContainer.append('text')\n    .attr('class', 'label')\n    .attr('x', width / 2 + margin)\n    .attr('y', height + margin * 1.7)\n    .attr('text-anchor', 'middle')\n    .text('Web Frameworks')\n\nsvgContainer.append('text')\n    .attr('class', 'title')\n    .attr('x', width / 2 + margin)\n    .attr('y', 40)\n    .attr('text-anchor', 'middle')\n    .text('Top 10 Web Frameworks in 2019 ( try hovering on the chart )')\n\nsvgContainer.append('text')\n    .attr('class', 'source')\n    .attr('x', width - margin / 2)\n    .attr('y', height + margin * 1.7)\n    .attr('text-anchor', 'start')\n    .text('Source: Stack Overflow, 2019')\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });