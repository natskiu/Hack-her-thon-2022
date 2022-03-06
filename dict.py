import csv

# Making a food_dict to look up later
myTuples = []
with open("data/carbon_footprint.csv") as f:
    next(f)  # Skip the header
    reader = csv.reader(f, skipinitialspace=True)
    for row in reader:
        food_item = row[1]
        carbon_footprint = row[2]
        myTuples.append(tuple([food_item, carbon_footprint]))

food_dict = dict(myTuples)

