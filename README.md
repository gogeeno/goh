<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Webpage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <p>A simple, modern, and responsive webpage</p>
        <a href="#about" class="btn">Learn More</a>
    </header>

    <section id="about">
        <h2>About This Page</h2>
        <p>This is a basic webpage built with HTML, CSS, and JavaScript. It is mobile-friendly and easy to customize.</p>
    </section>

    <footer>
        <p>© 2025 My Website | Built with ❤️</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    text-align: center;
    background: #f5f5f5;
    color: #333;
}

header {
    background: #4CAF50;
    color: white;
    padding: 60px 20px;
}

h1 {
    font-size: 2.5em;
}

p {
    margin: 10px 0;
    font-size: 1.2em;
}

.btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    background: #fff;
    color: #4CAF50;
    text-decoration: none;
    font-size: 1.2em;
    border-radius: 5px;
    transition: 0.3s;
}

.btn:hover {
    background: #45a049;
    color: white;
}

section {
    padding: 50px 20px;
}

footer {
    background: #333;
    color: white;
    padding: 20px;
    margin-top: 20px;
}


document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
