function logoSelection(location = "all", type = "all") {
    // file = '../company-data/company-technologies.csv'

    // d3.csv(file, function (data) {
    //     data.forEach(d => {
    //         d.Name = d.Name.toLowerCase();
    //     })

   

    // let companyData;
    // if (location === "all") {
    //     companyData = data;
    // } else {
    //     companyData = data.filter(company => company["Location"].toLowerCase() === location)
    //     radiusScale = d3.scaleSqrt().domain([5, 145]).range([20, 100]);
    // }

    let data = [
        { "Number": 1, "Name": "Facebook", "Type": "Internet", "Location": "Menlo Park", "PNG": "http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png", "Technologies":"PHP, React, GraphQL"},
        { "Number": 2, "Name": "Ebay", "Type": "E-Commerce", "Location": "San Jose", "PNG": "https://pngimg.com/uploads/ebay/ebay_PNG9.png", "Technologies":"Javascript, Node.js, Java" },
        { "Number": 3, "Name": "Amazon", "Type": "Internet", "Location": "Sunnyvale", "PNG": "https://the-peak.ca/wp-content/uploads/2018/07/amazon-logo-preview.png", "Technologies":"Java, MySQL, AngularJS"},
        { "Number": 4, "Name": "Uber", "Type": "Internet", "Location": "San Francisco", "PNG": "https://i.ya-webdesign.com/images/uber-logo-png-3.png", "Technologies":"jQuery, ngix, Python"},
        { "Number": 5, "Name": "Tesla", "Type": "Automotive", "Location": "Palo Alto", "PNG": "http://pngimg.com/uploads/tesla_logo/tesla_logo_PNG9.png", "Technologies": "PHP, Underscore" },
        { "Number": 6, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG": "https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png", "Technologies": "Pytho, Java, AngularJS" },
        { "Number": 7, "Name": "Airbnb", "Type": "Internet", "Location": "San Francisco", "PNG": "http://pluspng.com/img-png/airbnb-logo-png-logo-black-transparent-airbnb-329.png", "Technologies":"JavaScript, nginx, React"},
        { "Number": 8, "Name": "Twitter", "Type": "Social", "Location": "San Francisco", "PNG": "https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-11-512.png", "Technologies":"jQuery, Bootstrap, Node.js"},
        { "Number": 9, "Name": "Netflix", "Type": "Entertainment", "Location": "Los Gatos", "PNG": "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png", "Technologies":"Python, Node.js, React"},
        { "Number": 10, "Name": "Oracle", "Type": "IT Services", "Location": "Redwood City", "PNG": "https://cdn.freebiesupply.com/logos/large/2x/oracle-1-logo-png-transparent.png", "Technologies":"jQuery, Veu.js, Slick"},
        { "Number": 11, "Name": "Cisco", "Type": "Software", "Location": "San Jose", "PNG": "https://assets.cloud.im/prod/ux1/images/logos/cisco/cisco-2x.png", "Technologies":"jQuery, Javascript, nginx"},
        { "Number": 12, "Name": "Linkedin", "Type": "Internet", "Location": "Sunnyvale", "PNG": "https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png", "Technologies":"jQuery, nginx, Bootstrap"},
        { "Number": 13, "Name": "Slack", "Type": "Software", "Location": "San Francisco", "PNG": "https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png", "Technologies": "jQuery, PHP, Javascript" },
        { "Number": 14, "Name": "Adobe", "Type": "Software", "Location": "San Jose", "PNG": "https://i.ya-webdesign.com/images/adobe-logo-png-1.png", "Technologies": "Javascript, Apache Cordova" },
        { "Number": 15, "Name": "Salesforce", "Type": "Internet", "Location": "San Francisco", "PNG": "http://pluspng.com/img-png/salesforce-logo-vector-png-salesforce-logo-png-2300.png", "Technologies": "Cloudant, ClearDB" },
        { "Number": 16, "Name": "HuaWei", "Type": "Electronics", "Location": "Mountain View", "PNG": "https://www.freepnglogos.com/uploads/huawei-logo-png/huawei-logo-communication-13.png", "Technologies": "jQuery, Google Fonts" },
        { "Number": 17, "Name": "Pinterest", "Type": "Internet", "Location": "San Francisco", "PNG": "https://pngimg.com/uploads/pinterest/pinterest_PNG63.png", "Technologies": "nginx, Python, React" },
        { "Number": 18, "Name": "Eventbrite", "Type": "Internet", "Location": "San Francisco", "PNG": "https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/2/7/7/2775_3333_1667_original.png", "Technologies":"nginx, React, Django"},
        { "Number": 19, "Name": "Youtube", "Type": "Internet", "Location": "San Bruno", "PNG": "https://pngimg.com/uploads/youtube/youtube_PNG5.png", "Technologies":"Google Fonts, Google Compute Engine"},
        { "Number": 20, "Name": "Apple", "Type": "Electronics", "Location": "Cupertino", "PNG": "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19666.png", "Technologies": "Swift, Objective-C, Cocoa Touch(iOS)" },
    ]
    
    if (location === "all" && type === "all") {
        companyData = data;
    } else if (location !== "all") {
        companyData = data.filter(company => company["Location"] === location)
    } else if (type !== "all") {
        companyData = data.filter(company => company["Type"] === type)
    }
    
    let graphSelection = d3.select('.main').html("")
    let radiusScale = d3.scaleSqrt().domain([5, 145]).range([10, 46]);

    let width = 1300;
    let height = 1000;

    // container for all our pokemon bubbles.
    let svgContainer = graphSelection
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "logo-svg-container")
        .append("g")
        .attr("transform", function () {
            if (location === 'all') {
                return `translate(${width * 0.60},${height / 2})`;
            } else {
                return `translate(${width * 0.60}, ${height / 2 - 40})`
            }
        });

    // display box
    let companyInfo = graphSelection
        .append("div")
        .attr("class", "company-info")
        .style("height", '60px')
        .style("width", "260px")
        .style("left", "48px")
        .style("top", "120px");
    
    let companySprite = companyInfo.append("img")
        .attr("class", "company-sprite");

    let companyInfoDetails = companyInfo.append("div")
        .attr("class", "company-info-details")
        .text("Mouse over a Company to select!");

    // box end 
    
    const defs = svgContainer.append('defs')

    defs.selectAll(".company-pattern")
        .data(companyData)
        .enter()
        .append("pattern")
        .attr("class", "company-pattern")
        .attr("id", function (d) {
            return `${d.Name}`;
        })
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("patternContentUnits", "objectBoundingBox")
        .append("svg:image")
        .attr("height", 1)
        .attr("width", 1)
        .attr("preserveAspectRatio", "none")
        .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
        .attr("xlink:href", function (d) {
            return `${d.PNG}`;
        });

    const simulation = d3.forceSimulation()
        .force("x", d3.forceX().strength(.000))
        .force("y", d3.forceY().strength(.000))
        // changed this
        .force("collide", d3.forceCollide(80))
    
    const companyBubbles = svgContainer.selectAll('.company-bubble')
        .data(companyData)
        .enter().append('circle')
        .attr("class", "company-bubble")
        // changed this
        .attr("r", 80)
        .attr("fill", function (d) {
            return `url(#${d.Name})`;
        });

    let count = 20;
    simulation.nodes(companyData)
        .on('tick', function () {

            if (count > 0) {
                ticked()
            }
            // process = 1 - process;
            count -= 1;
        });

    function ticked() {
        companyBubbles
            .attr("cx", function (d) {
                return d.x
            })
            .attr("cy", function (d) {
                return d.y
            })
    }

    d3.selectAll('.location').on('click', function () {
        logoSelection(d3.event.target.dataset.info)
    })

    d3.selectAll('.type').on('click', function () {
        logoSelection("all", d3.event.target.dataset.info)
    })
  
    
    d3.selectAll('.company-bubble').on('mouseover', function (d) {
        let company = d;
        // let target = d3.event.target;
        let mouseNode = d3.select(this);
        
        mouseNode
            .attr("r", 100)
            .attr("fill", function (d) {
                return `url(#${company.Name})`;
            });


    
        companyInfo.transition()
            .duration(100)
            .style("opacity", 1);

        companyInfo
            .style("height", '250px')
            .style("width", "230px")
            .style("left", "48px")
            .style("top", "300px");
        
        companySprite
            .style("height", '100px')
            .style("width", '100px')
            .attr('src', () => {
                return `${company.PNG}`;
            });
        
        companyInfoDetails
            .html(
                company.Type + "<br/><br/>" +
                company.Location + "<br/><br/>" +
                company.Technologies
            );
        

    })

    d3.selectAll('.company-bubble').on('mouseleave', function (d) {
        let company = d;
        let mouseNode = d3.select(this);

        mouseNode
            .attr("r", 80)
            .attr("fill", function (d) {
                return `url(#${company.Name})`;
            });

        companyInfo
            .style("height", '60px')
            .style("width", "260px")
            .style("left", "48px")
            .style("top", "120px");

        companySprite
            .style("height", '0px')
            .style("width", '0px')

        companyInfoDetails
            .text("Mouse over a Company to select!");

    })
  



    // })
}

logoSelection();