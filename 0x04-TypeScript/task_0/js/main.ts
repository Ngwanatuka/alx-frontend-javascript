interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const studentsList: Student[] = [
    {
      firstName: 'Moses',
      lastName: 'Doe',
      age: 27,
      location: 'South Africa',
    },
    {
      firstName: 'Sello',
      lastName: 'Ramare',
      age: 27,
      location: 'South Africa',
    },
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = 'First Name';
    const th2 = document.createElement('th');
    th2.textContent = 'Location';
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    table.appendChild(headerRow);
  
    studentsList.forEach((student) => {
      const row = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.textContent = student.firstName;
      const td2 = document.createElement('td');
      td2.textContent = student.location;
      row.appendChild(td1);
      row.appendChild(td2);
      table.appendChild(row);
    });
  
    document.body.appendChild(table);
  });
  