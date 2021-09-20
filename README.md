## [🗓️](https://priyansh71.github.io/6x9-Generator/) 6x9 Generator

#### This project is made for AUGSD Software Team Inductions , 2021.

#### Technolgies used :-
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DCFE&width=lg" />    <img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" />     <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />      <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

<img width="1397" alt="Screenshot 2021-09-19 at 13 45 51" src="https://user-images.githubusercontent.com/77532581/133920580-0c6abc72-4018-413a-8c86-4729f2a6e893.png">

----

- Course can be chosen from the input dropdown or searched using Course code, name, course section, or class Type.

<img width="1397" alt="Screenshot 2021-09-19 at 13 46 51" src="https://user-images.githubusercontent.com/77532581/133920563-30c83709-b34a-4778-8470-65b93c4ce565.png">

----

***Adding courses :-***
- Courses can be added by using the green themed `Add` button.
- Also, <kbd>return</kbd> on macOS and <kbd>Enter</kbd> on Windows keyboards' respectively would do the same job if the course is selected in the input box.

***Removing Courses :-***
- Courses can be removed by using the red themed `Remove` button.
- Devices with large screens (> 1200 px) can remove all instances of a rendered course by clicking the `-` icon in each courseitem.

<img width="1397" alt="Screenshot 2021-09-19 at 14 12 30" src="https://user-images.githubusercontent.com/77532581/133921147-2a13de19-0df7-42d0-a1ac-58688ff421f4.png">

----

- Additionally the application :
     - has dark mode option , with all the same functionalities as light mode.
     - provides the `⟳` button to reset the whole grid instantly.
     - facility of using a custom (personal) time table csv file for rendering.


<img width="1397" alt="Screenshot 2021-09-19 at 14 18 22" src="https://user-images.githubusercontent.com/77532581/133921313-3bb0dd89-4ff1-48d8-acb1-44d9e1c9d36c.png">

**The application works best in landscape mode or devices having screen-width >= 470px.**


**To run the project  :-**
1. default configuration
     (make sure you have [Git](https://git-scm.com/) and [node.js](https://nodejs.org/en/) installed on your system)
```
git clone https://github.com/priyansh71/6x9-Generator.git
cd 6x9-Generator/
npm install
npm start
```
---
2. custom configuration
```
git clone https://github.com/priyansh71/6x9-Generator.git
cd 6x9-Generator/
npm install
cd src/Components/static/
rm Courses.csv
```

- add your own Courses.csv file (Refer [Customization](https://github.com/priyansh71/6x9-Generator/blob/main/src/Components/static/README.md)
     and make sure you have [Git](https://git-scm.com/), [node.js](https://nodejs.org/en/) and [python](https://www.python.org/downloads/) installed on your system))
     
On macOs and Linux :- 
```
python3 index.py
npm start
```

On Windows :-
```
python index.py
npm start
```

---


**Working of the project**
- Frontend is made with ReactJS, [Chakra-UI](https://chakra-ui.com/) while the data management is done with a [index.py script](https://github.com/priyansh71/6x9-Generator/blob/main/src/Components/static/index.py)
- The application takes in a non-clashing ```Courses.csv``` file and generates a `Course.js` file based on it
   - Refer [Customization](https://github.com/priyansh71/6x9-Generator/tree/main/src/Components/static/README.md) for steps on how to use a custom time-table.
- The returned `Course.js` file is used to render course options to the frontend Input Box
- Users can select courses from the Input as per need
- On addition or removal of a course from the table, the React DOM is re-rendering the table component
- Theme and styling management of the project is all handled by Chakra-Ui


**Important points**
- All lectures are 1 hour in duration and follow the series format i.e. Monday series, Tuesday series but the amount of time it occurs in the week (1,2,3) as such is customizable.
- All tutorials are 1 hour in duration and occur once a week.
- Labs time duration is customizable in the csv file ,  however they occur once a week.
- Break timing is 13:00 - 14:00, this `lunchHour` variable can be changed [here](https://github.com/priyansh71/6x9-Generator/blob/77653fc005345277c0374d9e375ef57e4e9b64e4/src/Components/static/index.py#L3) for the data part, but for rendering, it will also require a change [here](https://github.com/priyansh71/6x9-Generator/blob/9cbf31badf6541de6c632caaaf85ff904c42fd0f/src/Components/dynamic/Time.jsx#L7) in the `time` array.
- Sunday is a day off.

___

About me :- 

[<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/priyansh71)

&copy; Priyansh Vyas, 2021.
