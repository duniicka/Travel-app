# Travel-app
Welcome to my Travel-app! Travel-app contains all the necessary information, resources, and materials related to travels. Below is a breakdown of the contents and a guide on how to use them. This project demonstrates a basic web structure that uses HTML for content markup and SCSS for styling. The SCSS is organized using the 7-1 Pattern, making it easy to scale and maintain the stylesheets.
##Installation
1.**Clone this repository**
```
git clone https://github.com/dunnyaa/Travel-app.git
```
2. **Navigate to the Project Directory**
```
cd travel
```
3. **Install Dependencies**
```
npm install
```
4. **Compile SCSS**
To compile your SCSS files into CSS, you need to run:
```
npm run build
```
5. **Open the Project**
You can now open the index.html file in your browser to view the project.
##Folder structure
This project follows the 7-1 pattern for organizing SCSS files. Here’s the folder structure:
![image](https://github.com/user-attachments/assets/fce8fc05-3aa9-4d32-af9d-e1c9da3d1b43)

##Technologies used:
***HTML**: For structuring the content of the website.
***SCSS**: For styling the web pages, using the 7-1 pattern to keep the styles modular and organized.
***Node.js** & npm: For managing dependencies and compiling SCSS to CSS.

##How to Use
1. **Developing the Project:**
You can modify the SCSS files in the src/ directory. Any changes you make to the SCSS will need to be compiled into CSS by running npm run build.
2. **Adding New Styles:**
When you want to add new styles, create a new SCSS file in the appropriate sub-folder under src/scss/. For instance:
*Add a new component style in src/scss/components/
*Add a new page style in src/scss/pages/
*Modify global variables in src/scss/abstracts/
3. **Compiling SCSS:**
After making changes to the SCSS files, compile them to CSS by running the following command:
```
npm run build
```

