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

#### When pushing changes, do not push .DS_Store or package-lock.json files. 

# Building and Pushing to Live Server
The team lead needs to have access to Cornell's FTP server. This can be requested by emailing acadtech@cornell.edu (you should also CC Dave at dr.drschneider@gmail.com ) saying that you need FTP access to both

https://cusd.cornell.edu

https://codi.engineering.cornell.edu

Once you have access, and you are on RedRover or have a VPN setup, build the current site with `gatsby build` or `yarn build` or `npm run build`. From here, using your fav FTP client (I prefer Filezilla). Connect to the site at host: uploads.courses.cit.cornell.edu, username: your netID, password: SFAM password that you will set up. You should see the website under the htdocs. Drag and drop the updated content from your local device to the server and you should see the live site updated instantaneously. Further instructions can be found here: https://it.cornell.edu/academic-web-dynamic-web-hosting-static/upload-files-academic-web-hosting. 

