function toggleTheme() {
    var body = document.body;
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // define o tema padrão com base nas preferências do usuário
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
  