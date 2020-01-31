# BayAreaTechnologies

BayAreaTechnologies is a data visualization of technologies statistics, created with the D3.js library.

## Background

The San Francisco Bay Area is the home of many top tech companies, such as Google, Facebook, and Apple. Each of those companies uses different technologies or even created their own internal tools.

With this project, my goal is to create a data visualization of various technologies used in the Bay Area top tech companies, including programming language, framework, and other information. So software engineers could use this website to prepare them for learning new tools following trending technologies.

Users will be able to check various selectors such as location or company type to filter data they are interested in or to fulfill different purposes for themselves. They will be able to mouse over individual company logo and view the detailed information about that particular company. Additionally, there is also a bar chart to show the top 10 web frameworks used in 2019.

## Functionality and MVP

With BayAreaTechnologies, users will be able to:

* Company logos
  * View data on technology statistics as they relate to top tech companies in the Bay Area.
  * View data on a particular tech company including company type, location, and main technologies used by hovering over a       specific company.
  * Check selectors that filter by location or company type specifying what data should be shown.

* Bar chart
  * View data on trending web frameworks statistics in 2019.
  * Hovering the bar chart to see different data rendered.

## Architecture and Technologies

This project will be implemented with the following technologies:

* D3 for overall structure and DOM manipulation and some styling
* CSS for the remainder of the styling
* Vanilla javascript for general logic

## Highlights

Utilized D3 forcesimulation to populate company logos in a circular structure.

```Javascript
const simulation = d3.forceSimulation()
        .force("x", d3.forceX().strength(.000))
        .force("y", d3.forceY().strength(.000))
        .force("collide", d3.forceCollide(80))
    
    const companyBubbles = svgContainer.selectAll('.company-bubble')
        .data(companyData)
        .enter().append('circle')
        .attr("class", "company-bubble")
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
 ```

Implemented D3.js Grid System to improve graph readability by adding grid lines.





