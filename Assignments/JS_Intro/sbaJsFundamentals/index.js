function getLearnerData(CourseInfo, AssignmentGroups, LearnerSubmissions) {
    // Check if input data is valid
    if (!CourseInfo || !AssignmentGroups || !Array.isArray(LearnerSubmissions)) {
        throw new Error("Invalid input data");
    }
    
    let Learners = {}; // Object to store learner data
    let CurrentDate = new Date(); // Get current date for comparison
    
    for (let Group of AssignmentGroups) {
        // Ensure assignment group belongs to the correct course
        if (Group.course_id !== CourseInfo.id) {
            throw new Error(`AssignmentGroup ${Group.id} does not belong to Course ${CourseInfo.id}`);
        }
        
        for (let Assignment of Group.assignments) {
            let DueDate = new Date(Assignment.due_at);
            // Skip assignments that are not due yet
            if (DueDate > CurrentDate) continue;
            
            for (let Submission of LearnerSubmissions) {
                // Skip submissions that do not belong to the current assignment
                if (Submission.assignment_id !== Assignment.id) continue;
                
                let { learner_id, submission: { submitted_at, score } } = Submission;
                // Initialize learner object if it does not exist
                if (!Learners[learner_id]) {
                    Learners[learner_id] = { id: learner_id, avg: 0, totalPoints: 0, totalPossible: 0 };
                }
                
                let PointsPossible = Assignment.points_possible;
                // Skip assignments with no points possible
                if (PointsPossible === 0) continue;
                
                let Percentage = score / PointsPossible;
                let SubmittedDate = new Date(submitted_at);
                // Apply late penalty if submission is past due date
                if (SubmittedDate > DueDate) {
                    Percentage = Math.max(0, Percentage - 0.1);
                }
                
                // Store assignment percentage score in the learner object
                Learners[learner_id][Assignment.id] = (Percentage * 100).toFixed(2);
                // Calculate total points and total possible points for the learner
                Learners[learner_id].totalPoints += score;
                Learners[learner_id].totalPossible += PointsPossible;
            }
        }
    }
    
    return Object.values(Learners).map(Learner => {
        // Calculate average percentage score for each learner
        Learner.avg = ((Learner.totalPoints / Learner.totalPossible) * 100).toFixed(2);
        delete Learner.totalPoints;
        delete Learner.totalPossible;
        return Learner;
    });
  }
  
  // Data 
  const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
        { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
        { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 }
    ]
  };
  const LearnerSubmissions = [
    { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
    { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 } },
    { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-01-25", score: 400 } },
    { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 } },
    { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 } }
  ];
  
  console.log(getLearnerData(CourseInfo, [AssignmentGroup], LearnerSubmissions));
  
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
      { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
      { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
      { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 }
  ]
};
const LearnerSubmissions = [
  { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
  { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 } },
  { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-01-25", score: 400 } },
  { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 } },
  { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 } }
];

console.log(getLearnerData(CourseInfo, [AssignmentGroup], LearnerSubmissions));
