### Making a ```Courses.csv```

**Please refer the example (default) file provided here** [here](https://github.com/priyansh71/6x9-Generator/blob/main/src/Components/static/Courses.csv)

It takes in the following columns in order :-
-  `Code` - (mandatory, need not be unique, String) Use the Course code as this value.
-  `Name` - (mandatory, must be unique, String) Use the Course name as this value
-  `Series` - (mandatory, use abbreviations like that in example file, String) 
    - Refers to the type of series the course is on
    - Example :- T (Tuesday series) [refer `Type` column for more information]
-  `Time`- (mandatory, 24 hour format, integer) 
     - Enter starting hour of Lecture/Tutorial here.
     - All labs rows require time as `starting hour - ending hour` format
- `Type` - (mandatory) Takes the following values
    -  `Lecture , int` (where int is the amount of time this class repeats in a week)
       - Example :- Lecture, 2 in above mentioned example means the lecture occurs on Tuesday and Thursday only.
    -  `Tutorial` (no requirement of int here, by default value of int here is set to 1)
    -  `Lab` (no requirement of int, timing of labs is managed by data given in the `Time` column)
- `Section` - (not mandatory, need not be unique, String) Use your section number, instructor or group number as this value.


**Make sure to run `python3 index.py` after saving your .csv file.**
