import csv
results=[]
with open('data.csv', mode ='r') as file:    
       csvFile = csv.DictReader(file)
       for lines in csvFile:
           results.append(lines) 

print("first result")
print(results)

def calculate():
      for data in results:
            print(data['first'])
            x = int(data['first'])
            y = int(data['second'])
            if(data['operation']== " +"):
                  data.update({"result": x+y})
                  print(x+y)
            if(data['operation']== " -"):
                  data.update({"result": x-y})


calculate()
print("second result")
print(results)
