// Course Data
const courses = [
  {
      code: "CSE 110",
      name: "Programming Building Blocks",
      credits: 3,
      completed: true,
      type: "CSE"
  },
  {
      code: "CSE 111",
      name: "Programming with Functions",
      credits: 3,
      completed: true,
      type: "CSE"
  },
  {
      code: "CSE 210",
      name: "Programming with Classes",
      credits: 3,
      completed: false,
      type: "CSE"
  },
  {
      code: "WDD 130",
      name: "Web Fundamentals",
      credits: 3,
      completed: true,
      type: "WDD"
  },
  {
      code: "WDD 131",
      name: "Intro to CSS and HTML",
      credits: 3,
      completed: true,
      type: "WDD"
  },
  {
      code: "WDD 231",
      name: "Advanced CSS",
      credits: 3,
      completed: false,
      type: "WDD"
  }
];

function getCourseWorkItems() {
  return courses.map(course => `• ${course.name}`);
}

function displayCourses(coursesToDisplay) {
  const courseContainer = document.getElementById('course-container');
  courseContainer.innerHTML = '';

  coursesToDisplay.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.className = course.completed ? 'course-card course-completed' : 'course-card course-not-completed';
      
      courseCard.innerHTML = `
          <h3>${course.code}</h3>
          <p>${course.name}</p>
          <p>${course.credits} Credits</p>
      `;
      
      courseContainer.appendChild(courseCard);
  });

  const totalCredits = coursesToDisplay.reduce((sum, course) => sum + course.credits, 0);
  document.getElementById('total-credits').textContent = totalCredits;

  const courseWorkList = document.querySelector('.course-work ul');
  courseWorkList.innerHTML = '';
  getCourseWorkItems().forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    courseWorkList.appendChild(listItem);
  });
}

displayCourses(courses);

document.getElementById('all-btn').addEventListener('click', () => {
  displayCourses(courses);
});

document.getElementById('cse-btn').addEventListener('click', () => {
  const cseFilter = courses.filter(course => course.type === "CSE");
  displayCourses(cseFilter);
});

document.getElementById('wdd-btn').addEventListener('click', () => {
  const wddFilter = courses.filter(course => course.type === "WDD");
  displayCourses(wddFilter);
});