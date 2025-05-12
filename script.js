fetch('https://raw.githubusercontent.com/taguchip/20250430test/refs/heads/develop/feature/employees.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('employeeList');
    data.employees.forEach(emp => {
      const item = document.createElement('li');
      item.textContent = `${emp.name}（${emp.department}） - ${emp.email}`;
      if (!emp.isActive) {
        item.style.color = 'gray';
        item.style.textDecoration = 'line-through';
      }
      list.appendChild(item);
    });
  })
  .catch(error => console.error('読み込みエラー:', error));