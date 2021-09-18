## [6x9 Generator](https://github.com/priyansh71/6x9-Generator/)
### This project is made for AUGSD Software Team Inductions , 2021.

**To run the project  :-**
- default configuration
``` 
git clone https://github.com/priyansh71/6x9-Generator.git
cd 6x9-Generator/
npm install
npm start
```
- custom configuration
``` 
git clone https://github.com/priyansh71/6x9-Generator.git
cd 6x9-Generator/
npm install
cd src/Components/static/
rm Courses.csv
```
- - add your own Courses.csv file ([Customization](https://github.com/priyansh71/6x9-Generator/tree/main/src/Components/static))
``` 
python3 jsonCreator.py
npm start
```
**This application**
- has its frontend made with React, Chakra-Ui while the data management is done with a [python script](https://github.com/priyansh71/6x9-Generator/blob/main/src/Components/static/jsonCreator.py)
- takes in a non-clashing ```Courses.csv``` file and generates a .js file based on it
   - Refer [Customization](https://github.com/priyansh71/6x9-Generator/tree/main/src/Components/static/README.md) for steps on how to use a custom time-table.
- returned .js file is used to render courses options to the frontend
- users can thus add and remove courses from their time-table from the client side 