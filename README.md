# Cornell University Sustainable Design Website

### Run 'npm install' in your command line and then run 'npm run develop'

### You will be able to view the website at http://localhost:8000/

## Code Structure
All pages that can be routed to are in src/pages. 

Subteam pages are in src/pages/projects.

Components used for each page are in the src/components folder, for example components used for the footer will be in src/components/footer.

Images are found in the src/images folder. Headshots for the 'Connect' page are located in src/images/contact. Photos for the subteam carousels and parallax images are in src/images/project_photos.

Data for the 'Connect' page can be found and updated in src/components/connectData.js. 

## Troubleshooting
#### If getting error regarding dependencies, try installing the following: 
- `npm install gatsby-plugin-styled-components`
- `npm install --save react-chartjs-2 chart.js@^3.0.0`
- `npm install react-cytoscapejs`
- `npm install cytoscape`
- `npm install react-bootstrap bootstrap@5.1.3`

#### If changes are not showing up, try restarting your development env. 
