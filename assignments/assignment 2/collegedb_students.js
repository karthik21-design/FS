// ============================================================
// collegeDB - Student Management System
// ============================================================

// 1. Switch to database
use("collegeDB");

// Clear previous data
db.students.drop();

// 2. INSERT 8 students
db.students.insertMany([
  {
    rollNo: "24AIML001",
    name: "Karthik",
    branch: "CSE-AIML",
    year: 3,
    marks: 89,
    email: "karthik@example.com"
  },
  {
    rollNo: "24AIML002",
    name: "Ananya",
    branch: "CSE-AIML",
    year: 3,
    marks: 94,
    email: "ananya@example.com"
  },
  {
    rollNo: "24ECE003",
    name: "Rahul",
    branch: "ECE",
    year: 2,
    marks: 71,
    email: "rahul@example.com"
  },
  {
    rollNo: "24MECH004",
    name: "Harsha",
    branch: "MECH",
    year: 1,
    marks: 48,
    email: "harsha@example.com"
  },
  {
    rollNo: "24AIML005",
    name: "Keerthi",
    branch: "CSE-AIML",
    year: 2,
    marks: 82,
    email: "keerthi@example.com"
  },
  {
    rollNo: "24ECE006",
    name: "Vamsi",
    branch: "ECE",
    year: 3,
    marks: 59,
    email: "vamsi@example.com"
  },
  {
    rollNo: "24MECH007",
    name: "Pavan",
    branch: "MECH",
    year: 2,
    marks: 87,
    email: "pavan@example.com"
  },
  {
    rollNo: "24AIML008",
    name: "Divya",
    branch: "CSE-AIML",
    year: 1,
    marks: 42,
    email: "divya@example.com"
  }
]);

print("Inserted 8 students");

// 3. DISPLAY ALL students
print("\nAll Students:");
db.students.find().forEach(printjson);

// 4. DISPLAY students of a particular branch
print("\nStudents in CSE-AIML:");
db.students.find({ branch: "CSE-AIML" }).forEach(printjson);

// 5. DISPLAY students who scored more than 75
print("\nStudents with marks > 75:");
db.students.find({ marks: { $gt: 75 } }).forEach(printjson);

// 6. SEARCH by rollNo
print("\nSearch by rollNo '24ECE003' (Rahul):");
printjson(db.students.findOne({ rollNo: "24ECE003" }));

// 7. SEARCH by condition (year = 2)
print("\nStudents in Year 2:");
db.students.find({ year: 2 }).forEach(printjson);

// 8. UPDATE marks
db.students.updateOne(
  { rollNo: "24ECE003" },
  { $set: { marks: 76 } }
);

print("\nUpdated marks of Rahul:");
printjson(db.students.findOne({ rollNo: "24ECE003" }));

// 9. UPDATE email and branch
db.students.updateOne(
  { rollNo: "24MECH004" },
  {
    $set: {
      email: "harsha.new@college.edu",
      branch: "CIVIL"
    }
  }
);

print("\nUpdated Harsha:");
printjson(db.students.findOne({ rollNo: "24MECH004" }));

// 10. DELETE student
db.students.deleteOne({ rollNo: "24AIML008" });

print("\nDeleted Divya");

// 11. SORT by marks descending
print("\nStudents sorted by marks (descending):");

db.students.find(
  {},
  { _id: 0, name: 1, rollNo: 1, marks: 1 }
)
.sort({ marks: -1 })
.forEach(printjson);

// 12. CREATE INDEX
db.students.createIndex(
  { rollNo: 1 },
  { unique: true }
);

print("\nIndex created on rollNo");

// 13. INDEX DEMONSTRATION
print("\nQuery execution plan:");

printjson(
  db.students.find({
    rollNo: "24AIML001"
  }).explain("executionStats")
);

// ============================================================
// REAL-TIME QUERIES
// ============================================================

// Above 80
print("\nStudents scoring above 80:");

db.students.find(
  { marks: { $gt: 80 } },
  { _id: 0, name: 1, marks: 1 }
).forEach(printjson);

// Below 50
print("\nStudents scoring below 50:");

db.students.find(
  { marks: { $lt: 50 } },
  { _id: 0, name: 1, marks: 1 }
).forEach(printjson);

// Highest scorer
print("\nHighest scoring student:");

printjson(
  db.students.find(
    {},
    { _id: 0, name: 1, marks: 1 }
  )
  .sort({ marks: -1 })
  .limit(1)
  .toArray()[0]
);

// ECE students
print("\nStudents in ECE:");

db.students.find(
  { branch: "ECE" },
  { _id: 0, name: 1, branch: 1, marks: 1 }
).forEach(printjson);

// Ascending order
print("\nStudents sorted by marks (ascending):");

db.students.find(
  {},
  { _id: 0, name: 1, marks: 1 }
)
.sort({ marks: 1 })
.forEach(printjson);

print("\nAll operations completed successfully!");