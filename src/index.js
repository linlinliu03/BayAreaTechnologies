function logoSelection(location = "all") {
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

    let companyData = [
        { "Number": 1, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 2, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 3, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 4, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 5, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 6, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 7, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 8, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 9, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 10, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 11, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 12, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 13, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 14, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 15, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 16, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 17, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 18, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        // { "Number": 19, "Name": "Google", "Type": "Internet", "Location": "Mountain View", "PNG":"https://i2.cdn.turner.com/money/dam/assets/150901123238-google-new-logo-640x640.png"},
        { "Number": 20, "Name": "Facebook", "Type": "Internet", "Location": "Menlo Park", "PNG":"http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png"}
        
    ]
    
    let graphSelection = d3.select('.main').html("")
    let radiusScale = d3.scaleSqrt().domain([5, 145]).range([10, 46]);

    // let logos = graphSelection
    //     .selectAll("img")
    //     .data(companyData)
    //     .enter()
    //     .append("img")
    //     .attr("class", "company-pattern")
    //     .attr("height",100)
    //     .attr("width",100)
    //     .attr("id", function (d) {
    //         return `${d.Name}`;
    //     })
    //     .attr("src", function (d) {
    //         return `${d.PNG}`;
    //     });



    // 2nd
    let width = 1200;
    let height = 900;

    // container for all our pokemon bubbles.
    let svgContainer = graphSelection
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "logo-svg-container")
        .append("g")
        .attr("transform", function () {
            if (location === 'all') {
                return `translate(${width / 2},${height / 2})`;
            } else {
                return `translate(${width / 2}, ${height / 2 - 40})`
            }
        });

    // display box
    let companyInfo = graphSelection
        .append("div")
        .attr("class", "company-info")
        .style("height", '130px')
        .style("width", "230px")
        .style("left", "48px")
        .style("top", "171px");
    
    let companySprite = companyInfo.append("img")
        .attr("class", "company-sprite");

    let companyInfoDetails = companyInfo.append("div")
        .attr("class", "company-info-details")
        .text("Mouse over a Company to select!");

    // let companyTechnologies = companyInfo.append("div")
    // box end 
    
    const container = svgContainer.append('container')

    container.selectAll(".company-pattern")
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
        .attr("height", 50)
        .attr("width", 50)
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
        .attr("r", 60)
        // need to fix this
        // .attr("fill", "red")
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
  
    
    d3.selectAll('.company-bubble').on('mouseover', function (d) {
        let company = d;
        let companyName = company.Name
        let target = d3.event.target;


        companyInfo.transition()
            .duration(100)
            .style("opacity", 1);

        companyInfo
            .style("height", '130px')
            .style("width", "230px")
            .style("left", "48px")
            .style("top", "171px");
        
        companySprite
            .style("height", '100px')
            .style("width", '100px')
            .attr('src', () => {
                return `${company.PNG}`;
            });
        
        companyInfoDetails
            .html(
                "Industry: " + company.Type + "<br/><br/>" +
                "Location: " + company.Location 
            );

    })

    



    // })
}

logoSelection();