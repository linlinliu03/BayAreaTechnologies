# BayAreaTechnologies

## Background and Overview 

The San Francisco Bay Area is the home of many top tech companies, such as Google, Facebook, and Apple. Each of those companies uses different technologies or even created their own internal tools.

With this project, my goal is to create a data visualization of various technologies used in the Bay Area top tech companies, including programming language, framework, and other information. So software engineers could use this website to prepare them for learning new knowledge or get a sense of trending technologies.

Users will be able to check various selectors to modify the data and be able to view it in different ways or to fulfill different purposes for themselves. Additionally, users will be able to mouse over individual company logo and view more detailed information about that particular company.

## Functionality and MVP

With BayAreaTechnologies, users will be able to:

* View data on technology statistics as they relate to top tech companies in the Bay Area.
* View individual data on a particular tech company including company name, type, location, technologies used, and introduction.
* Check selectors that filter by location or company type specifying what data should be shown.

In addition, the project will include:

* A production README.

## Wireframes

The app will consist of a main section showing the data visualization with company logos, sidebar selectors to filter data, links to my Github and Linkedin.

Possible filters will include which location or company type to display. In the main section, users can mouse over a company logo to display additional information such as company name, type, location, technologies used, and introduction.

![proposalphoto](https://user-images.githubusercontent.com/53238880/73205075-17484980-40f5-11ea-956b-2ba4d392c11d.png)

## Architecture and Technologies

This project will be implemented with the following technologies:

* D3 for overall structure and DOM manipulation and some styling
* CSS for the remainder of the styling
* Vanilla javascript for general logic

## Implementation Timeline

**Day 1:** Setup necessary node modules, get webpack up and running. Create webpack.config.js and package.json. Write a basic entry file and finish prep for D3. 
Goals for the day:
- [ ] Acquire csv files for company data
- [ ] Get webpack serving files and frame out index.html
- [ ] Understand d3 enough to actually be able to render some default graphs
