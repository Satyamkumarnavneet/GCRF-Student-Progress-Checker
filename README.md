# GCRF Student Progress Checker
The GCRF Student Progress Checker is a web application that automates the process of generating daily student reports for GCR facilitators. It is designed to work with data received from the 2022 daily student report sent from Google Cloud, making it most compatible with the 2022 GCRF daily student report format. This application eliminates the need for manual report generation and saves time and resources. It allows GCR facilitators to easily track and monitor student progress, making it an efficient tool for managing student performance.




See the application here: https://gcrf-chandigarhuniversity-2022.web.app/

You can use below registered mail Ids: 
- gauravpreet812@gmail.com
- ayushijangid60@gmail.com
- soham25.official@gmail.com
- geniusavinashraj@gmail.com


## Authors

- [@Satyamkumarnavneet](https://github.com/Satyamkumarnavneet)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Satyamkumarnavneet/GCRF-Student-Progress-Checker.git
```

Go to the project directory

```bash
  cd GCRF-Student-Progress-Checker
```

Install dependencies

- Install node: You can use the Windows installer available on the Node.js website. The installer can be downloaded by visiting the Node.js website (https://nodejs.org/en/) and clicking on the "Windows Installer" button.
- Once the installer has been downloaded, you can run it by opening a Command Prompt window and navigating to the location where the installer was saved. Then, use the following command to install Node.js:

```bash
  node-v<version>-x64.msi
```
- Replace <version> with the version of Node.js you want to install. You can also install Node.js via chocolatey package manager.
```bash
  choco install nodejs
```
- Install yarn
```bash
   yarn install
```
- Great! After successful installation, start the local server so as to test the application. To start the server locally type in 
```bash
  yarn start
```
You will see the server running on `localhost:3000`

- Open the web browser and goto `localhost:3000` to test the application.


## Deployment

To deploy this project follow the step properly!

-  Build deploy
```bash
  yarn build
```
- Goto to https://firebase.google.com/products/hosting/ and click "Goto Console". You will be asked to sign in with your Google account.
- Click "Add project". Then give a project name, and click continue. You can turn off Google analytics. Then click continue.

- Wait till your project is ready and click continue.
- Goto sidebar menu -> Hosting! Then click get started.
- Follow the on-screen instructions. First, install Firebase tools as shown instruction.
- After installation of the Firebase tool, goto the terminal and navigate to the project folder. Then initialize the project as shown in the instructions. 

## Feedback

If you have any feedback, please reach out to us at navneetsatyamkumar@gmail.com 


## Screenshots

![Screenshot (434)](https://user-images.githubusercontent.com/76639713/213879401-a83cc475-6437-4a86-b666-74f24ef934a1.png)
![Screenshot (435)](https://user-images.githubusercontent.com/76639713/213879459-2f888ac7-0d6a-4eb6-a64e-7e47c3b2d740.png)

