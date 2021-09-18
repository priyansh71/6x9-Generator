import json,csv

lunchHour = 13
labHourLength = 2

def dayNum(day):
    if day == 'M': 
        num = 0
    elif day == 'T':
        num = 1
    elif day == 'W':
        num = 2
    elif day == 'Th':
        num = 3
    elif day == 'F':
        num = 4
    elif day == 'S':
        num = 5
    else:
        num = None
    return num


array = []

with open('Courses.csv', 'r') as read_obj:
    csv_reader = csv.reader(read_obj)
    next(csv_reader, None)  # skip the headers
    hour = 0
    i = 1
    for row in csv_reader:
        hourArray = []
        index = i
        code = row[0]
        name = row[1]
        numberOfDay = dayNum(row[2])
        try:
            if row[4].split(',')[0] != "Lecture":
                row[4].split(',')[1] = 1
        except:
            pass
        classtype = row[4].split(',')[0] 
        if classtype == "Lab":
            repeat = int(row[3].split('-')[1]) - int(row[3].split('-')[0])
            firstHour = int(row[3].split('-')[0] )
        elif classtype == "Lecture" :
            repeat = row[4].split(',')[1]
            firstHour = int(row[3])
        else:
            repeat = 1
            firstHour = int(row[3])

        if firstHour >= lunchHour + 1 :
            firstHour -= 1
        hour = numberOfDay * 9 + (firstHour - 8)
        hourArray.append(hour)

        
        if isinstance(row[5], str):
            Instructor = row[5]
        array.append({
            "ID" : index,   
            "Code" : code,
            "Name" : name,
            "Type" : classtype,
            "Hour" : hourArray,
            "Repeat" : repeat,
            "Section" : Instructor
          })
        i+=1
        

with open('Course.js', "w") as writeJSON:
    writeJSON.write('const Course = \n')
    json.dump(array, writeJSON, ensure_ascii=False)
    writeJSON.write('\n')
    writeJSON.write('export default Course;')