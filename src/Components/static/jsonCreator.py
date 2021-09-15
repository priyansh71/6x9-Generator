import json,csv

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
        index = int(row[0])
        code = row[1]
        name = row[2]
        classType = row[-1]
        firstDay = row[3].split(',')[0]
        numberOfDay = dayNum(firstDay) 
        firstHour = row[-2]
        firstHour = int(firstHour)
        if firstHour >= 14 :
            firstHour -= 1
        hour = numberOfDay * 9 + (firstHour - 8)
        hourArray.append(hour)
        if checker(classType):
            repeat = len(row[3].split(',')) + 1
        else:
            repeat = len(row[3].split(','))
        array.append({
            "ID" : index,   
            "Code" : code,
            "Name" : name,
            "Type" : classType,
            "Hour" : hourArray,
            "Repeat" : repeat
          })
        

with open('file.js', "w") as writeJSON:
    writeJSON.write('const Course = \n')
    json.dump(array, writeJSON, ensure_ascii=False)
    writeJSON.write('\n')
    writeJSON.write('export default Course;')