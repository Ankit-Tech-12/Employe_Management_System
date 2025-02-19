const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Prepare Report",
          "description": "Complete the monthly sales report",
          "date": "2025-02-10",
          "category": "Reporting",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client Meeting",
          "description": "Discuss project progress with client",
          "date": "2025-02-12",
          "category": "Meetings",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Email Follow-up",
          "description": "Send follow-up emails to leads",
          "date": "2025-02-08",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Fix Website Bug",
          "description": "Resolve the login issue on the company website",
          "date": "2025-02-09",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Deploy Update",
          "description": "Deploy latest security update to production",
          "date": "2025-02-11",
          "category": "IT",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Server Maintenance",
          "description": "Perform routine maintenance on database server",
          "date": "2025-02-07",
          "category": "Infrastructure",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design New Logo",
          "description": "Create a new logo for the rebranding project",
          "date": "2025-02-14",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Update UI",
          "description": "Enhance the dashboard UI for better user experience",
          "date": "2025-02-15",
          "category": "UI/UX",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Mockup Review",
          "description": "Review and finalize wireframe mockups",
          "date": "2025-02-10",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Social Media Campaign",
          "description": "Launch the new marketing campaign on social media",
          "date": "2025-02-13",
          "category": "Marketing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "SEO Optimization",
          "description": "Improve website SEO ranking",
          "date": "2025-02-16",
          "category": "SEO",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Write Blog Post",
          "description": "Write an article for the company blog",
          "date": "2025-02-09",
          "category": "Content",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Customer Support Calls",
          "description": "Follow up with customers regarding service inquiries",
          "date": "2025-02-11",
          "category": "Customer Service",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Training Session",
          "description": "Conduct a training session for new hires",
          "date": "2025-02-14",
          "category": "HR",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Survey Analysis",
          "description": "Analyze customer feedback survey",
          "date": "2025-02-08",
          "category": "Analytics",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
    export const setLocalStorage=()=>{
        localStorage.setItem("employees",JSON.stringify(employees));
        localStorage.setItem("admin",JSON.stringify(admin));
    }
    export const getLocalStorage=()=>{
        const employees=JSON.parse(localStorage.getItem("employees"));
        const admin=JSON.parse(localStorage.getItem("admin"));
        console.log(employees,admin);
    }
  