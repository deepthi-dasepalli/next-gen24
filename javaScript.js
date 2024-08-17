document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
        { title: 'Web Development Fundamentals', description: 'Understand the fundamentals of web development.' },
        { title: 'Data Structures and Algorithms', description: 'Get to know the essential data structures and algorithms.' },
    ];

    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        `;
        courseList.appendChild(courseDiv);
    });

    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your message has been sent!');
    });
});
