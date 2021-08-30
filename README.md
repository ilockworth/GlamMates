# Project1

STEP 1: Read the Directions
1.	Read ALL of the directions before you start. We will know...

STEP 2: Pitch Your Project
Before you start any actual coding, you must meet with your Squad Leader for ~10 minutes to get your app idea approved. Prepare the following materials before your meeting and put them in your README.md:

•	App Title: The name of your app.

GlamMates

•	App Description: What your app will do.

GlamMates will serve as an on demand beauty service platform. Users will be able to search the nearest beauty, hair and nail salons with the click of a button. This will allow users to locate the nearest salons and book appointments. 

•	API: The API you are using and the information you plan to get from it.
https://www.yelp.com/developers/v3/manage_app?app_created=True

API Key
OjHnIZWm4ZLZKVa99o5eN-KsQABLLYnkLIxJb2eBqG2UPhvrB-sK5CcFKbJRUSW2ThJgHC2ieNDG0hAKvH8kaBLus5VwVw5ZYhLTF4o2VAgBk7IBG3Bobsor8FksYXYx


•	API Snippet: A sample snippet of JSON from a successful GET request you have made to your API using Postman.

```"businesses": [
        {
            "id": "kG42_Vig-Y3mM4Mpb-njtw",
            "alias": "code-salon-san-francisco",
            "name": "CODE salon",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/TGfgQPhLVlQ87D4C8gvNgA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/code-salon-san-francisco?adjust_creative=IWx6kfrVARoksD6l0QXxyQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=IWx6kfrVARoksD6l0QXxyQ",
            "review_count": 1016,
            "categories": [
                {
                    "alias": "hair",
                    "title": "Hair Salons"
                },
                {
                    "alias": "waxing",
                    "title": "Waxing"
                },
                {
                    "alias": "skincare",
                    "title": "Skin Care"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.78102872,
                "longitude": -122.400261
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "370 4th St",
                "address2": "Fl 2",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94107",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "370 4th St",
                    "Fl 2",
                    "San Francisco, CA 94107"
                ]
            },
            "phone": "+14156248340",
            "display_phone": "(415) 624-8340",
            "distance": 651.3496531949692
        },
        {
            ```



Wireframes: The proposed layout and design of your app. Create mockups for your views. If your are creating multiple views including both desktop and mobile formats, and consider whether or not you need to account for landscape and portrait orientations. Please use a digital tool to complete your wireframe.

<!-- Low Fidelity Wireframes Template (1).jpg -->

https://miro.com/app/board/o9J_lziVlhI=/

![wire frame](https://miro.com/app/board/o9J_lziVlhI=/)

#MVP: A list of features you will need to build in order to meet the Minimum Viable Product. This will be the rubric your project will be graded against.

-search box
-salon locator
-service selector
-address input
-salon selector
-result page
-appointment booking page

Post-MVP: A list of additional/advanced features you would like to include in your app after you have met MVP.

TBD upon construction/implementation(maybe a recent appointment page??)

•	Goals: What you plan to accomplish for each day of the project week.

| Day             | Task/Objective       |
|-----------------|:---------------------|
| Monday          |Proposal/approval     |
|Tuesday          |Getting to the code   |
|Wednesday        |Continued/functioning |
|Thursday         | Finished,debugging   |
|Friday           | Presenting/Final prj |





•	Priority Matrix: A graph of your intended areas of development (Pseudocoding, Design, HTML, CSS, JavaScript, Testing, etc) plotted on an X/Y axis where X represents time to completion and Y represents priority. Use a professional tool or upload a well drawn image using an image hosting site such as Cloudinary or a similar hosting service.

https://app.conceptboard.com/board/u16y-7b7u-szr1-hu88-aqkb

![wire frame](https://app.conceptboard.com/board/u16y-7b7u-szr1-hu88-aqkb)



•	Timeframes: How long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Components should be broken down into a maximum of 3 hours time blocks.

| Timeframe     | ET            |  AT |
| ------------- |:-------------:| -----:|
| JS            |   3hr         |  TBD  |
| Html          |   3hr         |  TBD  |
| CSS           |   3hr         |  TBD  |
| Features      |   3hr         |  TBD  |
| Debugging     |   3hr         |  TBD  |
| Functions     |   3hr         |  TBD  |






Are you interested in styling your README.md to make it look nice? Don't know how to include photos or create links? Check out this Markdown Cheetsheet!





















STEP 3: Make a New Repo
1.	Make a new personal GitHub repo for your project. DO NOT FORK THIS REPO.
2.	This new repo should be under your personal Github account, not you GA Eneterprize account.
3.	Make sure your new repo is set to "Public" and initialize it with a README.md file. This will be your project worksheet.
4.	Send a link for your repository to your Squad Leader.
5.	After your have been approved, clone this new repository down to your machine.
6.	CD into the project directory and touch index.html, style.css and script.js files.
7.	Test a commit and push it to make sure everything is connected with git commit -m "Go Bees!".
Note: Your repository should not be called project-1! Think of a name for your application, and then name your repository after your application.


STEP 4: 🔴 Build Your Project MVP — Mandatory To Pass
Your application must meet these requirements:
1.	Built with HTML, CSS, and JavaScript.
2.	Styled using Flexbox or Grid.
3.	Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
4.	Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
5.	Fulfill the build requirements you have specified in your MVP.
6.	Deployed site to a hosting service like Github Pages.
7.	Make commits to GitHub every day.
8.	A README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.

📋 List of APIs
Below is a non-exhaustive list of some free APIs you can use. There are many APIs out there, however, so if you find one not on this list, feel free to use it. No matter what API you decide on, make sure you can successfully make a GET request before you commit to using it.
1.	Weather: https://openweathermap.org/api
2.	News: https://newsapi.org/
3.	Giphy: https://developers.giphy.com/
4.	Pokemon: http://pokeapi.co/
5.	Card Deck: https://deckofcardsapi.com/
6.	City of Chicago: https://data.cityofchicago.org/
7.	Beer: https://www.brewerydb.com/developers
8.	Chuck Norris: http://www.icndb.com/
9.	Rick and Morty: https://rickandmortyapi.com/documentation/#rest
This site lists a collection APIs as well. Take a look through their libraries and try to find one that interests you. Please note, however, that many APIs will require an authentication key, and some APIs require payment. We highly suggest using a free API for your first project dealing with one.


STEP 5: 🔵 Ideas for Post-MVP - Not Mandatory
•	Look into localstorage so you can save data to the user's browser
•	Add a second API.
•	Add creative use of event listeners and UI interaction.
•	Add media queries for responsive design.
•	Add animations.
•	Get input from a UX student on how to make your app have intuitive UI and design.

STEP 6: Technical Demonstration
All projects will be presented to the class. Your presentation should:
•	Be no longer than 5 minutes in length
•	Show off all features of the app
•	Explain the technical details
•	Explain the technical challenges
•	Explain which improvements you might make
Your presentation should NOT:
•	Focus on what you didn't accomplish.
You will be sharing your project and your code. Be prepared to answer questions from the instructors and other students.
Did you read all of the directions before starting? If so write git commit -m "bee's bee buzz'n" instead of git commit -m "first commit" for your first commit.


Step 7: Help and Support
1.	Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. Tokens cannot be transferred between students - there is no black market for tokens.
2.	Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your issue ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates.
3.	Sign up here for help with your squad lead.


Step 8: Grading
Hard Requirements
The following requirements must be met in order for the project to be considered complete:
•	The project is deployed to GitHub Pages or a custom domain
•	The application renders in the browser and runs without errors
•	The repo has a README that adequately documents the project
We do not give letter grades; it is either a pass/fail. The real benchmark is how much you grow and learn each unit.
You will receive feedback in a secret gist. The gist will be Slacked out independent of your P1 repo to keep feedback confidential.
An example of the gist can be found here: Secret Gist
If you would like more feedback than the gist, instructors will be available to meet one on one. Please feel free to reach out and schedule a time with your squad leader.
Incomplete Projects
Incomplete projects will be given an extension. An instructor will follow up with you to discuss the details of the resubmission. Note that you are allowed one extension on only one of the four projects.


PLAGIARISM
Remember. We have a zero-tolerance policy towards plagiarism. More on our plagiarism policy can be found in our course wiki's plagiarism page.

