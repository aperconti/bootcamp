import os
import csv

cereal_csv = os.path.join("..", "Resources", "cereal.csv")


with open(cereal_csv,'r') as cereal_data:
    csvreader = csv.reader(cereal_data)
    print(csvreader)

    csv_header = next(csvreader)
    print(csv_header)

    #first_row = next(csvreader)
    #print(first_row)
    for i in csvreader:
            if float(i[7]) >= 5: 
                print(i)

