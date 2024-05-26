<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Management System</title>
</head>
<style>
    
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
}

#container {
    display: flex;
    width: 100%;
}

#sidebar {
    width: 200px;
    background-color: #333;
    color: #fff;
    padding: 20px;
    box-sizing: border-box;
    height: 100vh;
    position: fixed;
}

#sidebar h2 {
    text-align: center;
}

#sidebar ul {
    list-style-type: none;
    padding: 0;
}

#sidebar ul li {
    margin: 20px 0;
}

#sidebar ul li a {
    color: #fff;
    text-decoration: none;
}

#sidebar ul li a:hover {
    text-decoration: underline;
}

#main-content {
    margin-left: 220px;
    padding: 20px;
    box-sizing: border-box;
    width: calc(100% - 220px);
}

section {
    margin-bottom: 40px;
}

section h1 {
    margin-bottom: 10px;
}

</style>
<body>
    <div id="container">
        <nav id="sidebar">
            <h2>Hotel Management System</h2>
            <ul>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#reservations">Reservations (CRM)</a></li>
                <li><a href="#housekeeping">Housekeeping (ERP)</a></li>
                <li><a href="#staff">Staff Management (HRMS)</a></li>
                <li><a href="#inventory">Inventory (SCM)</a></li>
                <li><a href="#content">Website Content (CMS)</a></li>
            </ul>
        </nav>
        <main id="main-content">
            <section id="dashboard">
                <h1>Dashboard</h1>
                <p>Overview of hotel performance metrics.</p>
            </section>
            <section id="reservations">
                <h1>Reservations (CRM)</h1>
                <p>Manage guest reservations and profiles.</p>
            </section>
            <section id="housekeeping">
                <h1>Housekeeping (ERP)</h1>
                <p>Manage room status and housekeeping tasks.</p>
            </section>
            <section id="staff">
                <h1>Staff Management (HRMS)</h1>
                <p>Manage staff schedules and performance.</p>
            </section>
            <section id="inventory">
                <h1>Inventory (SCM)</h1>
                <p>Track and manage inventory levels.</p>
            </section>
            <section id="content">
                <h1>Website Content (CMS)</h1>
                <p>Update and manage website content.</p>
            </section>
        </main>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#sidebar a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.style.display = 'none';
                if (section.id === targetId) {
                    section.style.display = 'block';
                }
            });
        });
    });

    // Display the dashboard section by default
    sections.forEach(section => section.style.display = 'none');
    document.querySelector('#dashboard').style.display = 'block';
});

    </script>
</body>
</html>
