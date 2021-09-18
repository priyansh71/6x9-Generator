## [6x9 Generator](https://priyansh71.github.io/6x9-Generator/)
#### This project is made for AUGSD Software Team Inductions , 2021.

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
   - add your own Courses.csv file ([Customization](https://github.com/priyansh71/6x9-Generator/blob/main/src/Components/static/README.md))
  
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

**Important points**
- All lectures are 1 hour in duration and follow the series format i.e. Monday series, Tuesday series but the amount of time it occurs in the week (1,2,3) as such is customizable.
- All tutorials are 1 hour in duration and occur once a week.
- Labs time duration is customizable in the scipt ,  however they occur once a week.
- Break timing is 13:00 - 14:00, this `lunchHour` variable can be changed [here](https://github.com/priyansh71/6x9-Generator/blob/0047bbf71816c08b258e9dee4af6659db87bab34/src/Components/static/jsonCreator.py#L3).
- Sunday is a day off.
