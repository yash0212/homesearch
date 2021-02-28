# HomeSearch
A Springboot/React stack based webpage that lists property listings based on cities

---
## Prerequisites
* [Node.js 12.13.0](https://nodejs.org/en/) or higher installed on your system
* NPM - generally comes bundled with Node.js

---
## Setup Guide

### Cloning the repository
1. Open command prompt/terminal/bash
2. `cd` to the desired directory where you want to setup the project
3. Clone the repository using `git clone https://github.com/yash0212/homesearch.git`
4. Run `cd homesearch`

### Setting up the frontend
1. Go into the frontend directory using `cd frontend`
2. Install the dependencies using `npm install`

### Starting the website
* Start up the website locally using `npm start` 
* Generally the website will open at http://localhost:3000 but you can check the terminal screen for exact website address. Open this address in any internet browser and the website will be displayed.

### Setting up the backend
1. Install and setup the Spring Tool Suite from `https://spring.io/tools`
2. Lauch Spring Tool Suite.
3. Click File -> Import -> Maven -> Existing Maven Project. Click Next.
4. Browse and select backend directory from the cloned repository.
5. Select the pom.xml file and click next.

### Starting the backend
1. In Spring Tool Suite -> Package Explorer. Right click on the project folder.
2. Select Run As -> Spring Boot App.