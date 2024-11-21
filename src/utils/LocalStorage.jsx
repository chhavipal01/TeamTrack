const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
     // Added Indian name
  }
];

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstname: "Aarav", // Added Indian name
    tasks: [
      {
        active: true,
        newTask: false,
        completion: false,
        failed: true,
        taskTitle: "Submit Report",
        taskDescription: "Submit the quarterly financial report.",
        taskDate: "2024-11-16",
        category: "Finance"
      },
      {
        active: false,
        newTask: true,
        completion: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Prepare for the client presentation.",
        taskDate: "2024-11-17",
        category: "Meetings"
      },
      {
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        taskTitle: "System Update",
        taskDescription: "Update the internal software system.",
        taskDate: "2024-11-20",
        category: "IT"
      }
    ],
    taskNumber: { active: 2, newTask: 2, completion: 1, failed: 1 } // Task summary
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstname: "Riya", // Added Indian name
    tasks: [
      {
        active: true,
        newTask: false,
        completion: true,
        failed: false,
        taskTitle: "Review Proposals",
        taskDescription: "Review and approve project proposals.",
        taskDate: "2024-11-16",
        category: "Management"
      },
      {
        active: false,
        newTask: true,
        completion: false,
        failed: true,
        taskTitle: "Onboarding",
        taskDescription: "Onboard new team members.",
        taskDate: "2024-11-18",
        category: "HR"
      }
    ],
    taskNumber: { active: 1, newTask: 1, completion: 1, failed: 1 } // Task summary
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstname: "Lakshmi", // Added Indian name
    tasks: [
      {
        active: true,
        newTask: true,
        completion: false,
        failed: true,
        taskTitle: "Inventory Check",
        taskDescription: "Perform a full inventory check.",
        taskDate: "2024-11-16",
        category: "Logistics"
      },
      {
        active: true,
        newTask: false,
        completion: true,
        failed: false,
        taskTitle: "Website Maintenance",
        taskDescription: "Update website content and fix bugs.",
        taskDate: "2024-11-17",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completion: false,
        failed: true,
        taskTitle: "Marketing Campaign",
        taskDescription: "Plan the upcoming marketing campaign.",
        taskDate: "2024-11-19",
        category: "Marketing"
      }
    ],
    taskNumber: { active: 2, newTask: 1, completion: 1, failed: 2 } // Task summary
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstname: "Kiran", // Added Indian name
    tasks: [
      {
        active: true,
        newTask: true,
        completion: false,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Discuss project progress.",
        taskDate: "2024-11-16",
        category: "Management"
      },
      {
        active: false,
        newTask: true,
        completion: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Prepare technical documentation.",
        taskDate: "2024-11-18",
        category: "Development"
      }
    ],
    taskNumber: { active: 1, newTask: 2, completion: 1, failed: 0 } // Task summary
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstname: "Meera", // Added Indian name
    tasks: [
      {
        active: false,
        newTask: false,
        completion: true,
        failed: false,
        taskTitle: "Social Media Strategy",
        taskDescription: "Develop a new social media strategy.",
        taskDate: "2024-11-16",
        category: "Marketing"
      },
      {
        active: true,
        newTask: true,
        completion: false,
        failed: true,
        taskTitle: "Budget Planning",
        taskDescription: "Plan the budget for Q1 2025.",
        taskDate: "2024-11-20",
        category: "Finance"
      }
    ],
    taskNumber: { active: 1, newTask: 1, completion: 1, failed: 1 } // Task summary
  }
];


export const setLocalStorage =()=>{
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));

}

export const getLocalStorage =()=>{
  const employeesData = JSON.parse(localStorage.getItem('employees'));
  const adminData = JSON.parse(localStorage.getItem('admin'));
  console.log("Employees:", employeesData);
  console.log("Admin:", adminData);

  return {employees, admin}
}