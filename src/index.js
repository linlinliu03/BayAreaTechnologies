function logoSelection(location = "all", type = "all") {

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
        { "Number": 13, "Name": "Slack", "Type": "Software", "Location": "San Francisco", "PNG": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png", "Technologies": "jQuery, PHP, Javascript" },
        { "Number": 14, "Name": "Adobe", "Type": "Software", "Location": "San Jose", "PNG": "https://i.ya-webdesign.com/images/adobe-logo-png-1.png", "Technologies": "Javascript, Apache Cordova" },
        { "Number": 15, "Name": "Salesforce", "Type": "Internet", "Location": "San Francisco", "PNG": "http://pluspng.com/img-png/salesforce-logo-vector-png-salesforce-logo-png-2300.png", "Technologies": "Cloudant, ClearDB" },
        { "Number": 16, "Name": "Pinterest", "Type": "Internet", "Location": "San Francisco", "PNG": "https://pngimg.com/uploads/pinterest/pinterest_PNG63.png", "Technologies": "nginx, Python, React" },
        { "Number": 17, "Name": "HuaWei", "Type": "Electronics", "Location": "Mountain View", "PNG": "https://www.freepnglogos.com/uploads/huawei-logo-png/huawei-logo-communication-13.png", "Technologies": "jQuery, Google Fonts" },
        { "Number": 18, "Name": "Eventbrite", "Type": "Internet", "Location": "San Francisco", "PNG": "https://www.stickpng.com/assets/images/5841c48ba6515b1e0ad75aa4.png", "Technologies":"nginx, React, Django"},
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
        .style("height", '250px')
        .style("width", "230px")
        .style("left", "48px")
        .style("top", "350px");
    
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
        //.attr("preserveAspectRatio", "none")
        .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
        .attr("xlink:href", function (d) {
            return `${d.PNG}`;
        });

    const simulation = d3.forceSimulation()
        .force("x", d3.forceX().strength(.000))
        .force("y", d3.forceY().strength(.000))
        .force("collide", d3.forceCollide(80))
    
    const companyBubbles = svgContainer.selectAll('.company-bubble')
        .data(companyData)
        .enter().append('circle')
        .attr("class", "company-bubble")
        .attr("r", 60)
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
            .style("top", "350px");
        
        companySprite
            .style("height", '100px')
            .style("width", '100px')
            .style("object-fit", "contain")
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
            .attr("r", 60)
            .attr("fill", function (d) {
                return `url(#${company.Name})`;
            });

        companyInfo
            .style("height", '250px')
            .style("width", "230px")
            .style("left", "48px")
            .style("top", "350px");

        companySprite
            .style("height", '0px')
            .style("width", '0px')

        companyInfoDetails
            .text("Mouse over a Company to select!");

    })
  
}

logoSelection();

const sample = [
    {
       webFramework: 'jQuery',
        value: 48.7,
        color: '#000000'
    },
    {
       webFramework: 'React.js',
        value: 31.3,
        color: '#00a2ee'
    },
    {
       webFramework: 'Angular.js',
        value: 30.7,
        color: '#fbcb39'
    },
    {
       webFramework: 'ASP.NET',
        value: 26.3,
        color: '#007bc8'
    },
    {
       webFramework: 'Express',
        value: 19.7,
        color: '#65cedb'
    },
    {
       webFramework: 'Spring',
        value: 16.2,
        color: '#ff6e52'
    },
    {
       webFramework: 'Vue.js',
        value: 15.2,
        color: '#f9de3f'
    },
    {
       webFramework: 'Django',
        value: 13.0,
        color: '#5d2f8e'
    },
    {
       webFramework: 'Flask',
        value: 12.1,
        color: '#008fc9'
    },
    {
       webFramework: 'Laravel',
        value: 10.5,
        color: '#507dca'
    }
];


// const svg = d3.select('svg');
const svgContainer = d3.select('#container').append('svg');

const margin = 80;
const width = 1200 - 2 * margin;
const height = 600 - 2 * margin;

const chart = svgContainer.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

const xScale = d3.scaleBand()
    .range([0, width])
    .domain(sample.map((s) => s.webFramework))
    .padding(0.4)

const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 50]);

// vertical grid lines
// const makeXLines = () => d3.axisBottom()
//   .scale(xScale)

const makeYLines = () => d3.axisLeft()
    .scale(yScale)

chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

chart.append('g')
    .call(d3.axisLeft(yScale));

// vertical grid lines
// chart.append('g')
//   .attr('class', 'grid')
//   .attr('transform', `translate(0, ${height})`)
//   .call(makeXLines()
//     .tickSize(-height, 0, 0)
//     .tickFormat('')
//   )

chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
    )

const barGroups = chart.selectAll()
    .data(sample)
    .enter()
    .append('g')

barGroups
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.webFramework))
    .attr('y', (g) => yScale(g.value))
    .attr('height', (g) => height - yScale(g.value))
    .attr('width', xScale.bandwidth())
    .on('mouseenter', function (actual, i) {
        d3.selectAll('.value')
            .attr('opacity', 0)

        d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 0.6)
            .attr('x', (a) => xScale(a.webFramework) - 5)
            .attr('width', xScale.bandwidth() + 10)

        const y = yScale(actual.value)

        line = chart.append('line')
            .attr('id', 'limit')
            .attr('x1', 0)
            .attr('y1', y)
            .attr('x2', width)
            .attr('y2', y)

        barGroups.append('text')
            .attr('class', 'divergence')
            .attr('x', (a) => xScale(a.webFramework) + xScale.bandwidth() / 2)
            .attr('y', (a) => yScale(a.value) + 30)
            .attr('fill', 'white')
            .attr('text-anchor', 'middle')
            .text((a, idx) => {
                const divergence = (a.value - actual.value).toFixed(1)

                let text = ''
                if (divergence > 0) text += '+'
                text += `${divergence}%`

                return idx !== i ? text : '';
            })

    })
    .on('mouseleave', function () {
        d3.selectAll('.value')
            .attr('opacity', 1)

        d3.select(this)
            .transition()
            .duration(300)
            .attr('opacity', 1)
            .attr('x', (a) => xScale(a.webFramework))
            .attr('width', xScale.bandwidth())

        chart.selectAll('#limit').remove()
        chart.selectAll('.divergence').remove()
    })

barGroups
    .append('text')
    .attr('class', 'value')
    .attr('x', (a) => xScale(a.webFramework) + xScale.bandwidth() / 2)
    .attr('y', (a) => yScale(a.value) + 30)
    .attr('text-anchor', 'middle')
    .text((a) => `${a.value}%`)

svgContainer
    .append('text')
    .attr('class', 'label')
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Percentage (%)')

svgContainer.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Web Frameworks')

svgContainer.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Top 10 Web Frameworks in 2019 ( try hovering on the chart )')

svgContainer.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'start')
    .text('Source: Stack Overflow, 2019')
