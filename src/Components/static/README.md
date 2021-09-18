### Making a ```Courses.csv```

**An example file is given** [here](https://github.com/priyansh71/6x9-Generator/blob/main/src/Components/static/Courses.csv)

It takes in the following columns in order :-
-  `Code` - (mandatory, need not be unique, String) Use the Course code as this value.
-  `Name` - (mandatory, must be unique, String) Use the Course name as this value
-  `Days` - (mandatory, use example file abbreviations, String) 
    - Refers to the day the course is took on
    - 
-  `Time`- (mandatory, 24 hour format, integer) 
     - All lectures and tutorials are lengthed 1 hour by default, enter starting hour
     - All labs rows require time as `starting hour`-`ending hour` format

- `Section` - (not mandatory, need not ne unique, String) Use your section number, instructor or group number as this value


**Make sure to run `python3 jsonCreator.py` after saving your .csv file**