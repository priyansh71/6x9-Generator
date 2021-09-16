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

def checker(element):
    if element == "Lab":
        return True
    else:
        return False

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
        classType = row[4]

        firstDay = row[2].split(',')[0]
        numberOfDay = dayNum(firstDay) 
        firstHour = row[3]
        firstHour = int(firstHour)
        if firstHour >= lunchHour + 1 :
            firstHour -= 1
        hour = numberOfDay * 9 + (firstHour - 8)
        hourArray.append(hour)

        if checker(classType):
                repeat = len(row[2].split(',')) + labHourLength - 1
        else:
            repeat = len(row[2].split(','))

        Instructor = row[5]
        array.append({
            "ID" : index,   
            "Code" : code,
            "Name" : name,
            "Type" : classType,
            "Hour" : hourArray,
            "Repeat" : repeat,
            "Section" : Instructor
          })
        i+=1
        

with open('file.js', "w") as writeJSON:
    writeJSON.write('const Course = \n')
    json.dump(array, writeJSON, ensure_ascii=False)
    writeJSON.write('\n')
    writeJSON.write('export default Course;')