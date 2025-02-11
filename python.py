import csv
import json

# Define input and output file paths
input_file = "data.tsv"
output_file = "data.json"

# Read the TSV file and process data
with open(input_file, mode="r", encoding="utf-8") as tsv_file:
    reader = csv.DictReader(tsv_file, delimiter="\t")
    data = [{"FullName": row["Full Name"], "Email": row["Email"]} for row in reader]

# Keep only the last 11 entries
filtered_data = data[-11:]

# Write to JSON file
with open(output_file, mode="w", encoding="utf-8") as json_file:
    json.dump(filtered_data, json_file, indent=4)

print(f"Successfully saved the last 11 entries to {output_file}")
