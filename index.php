<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Management System</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="container">
        <nav id="sidebar">
            <h2>JBTK</h2>
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
                <div class="stats">
                    <div class="stat">
                        <h2>Occupancy Rate</h2>
                        <p id="occupancyRate">Loading...</p>
                    </div>
                    <div class="stat">
                        <h2>Total Reservations</h2>
                        <p id="totalReservations">Loading...</p>
                    </div>
                    <div class="stat">
                        <h2>Revenue</h2>
                        <p id="revenue">Loading...</p>
                    </div>
                    <div class="stat">
                        <h2>Available Rooms</h2>
                        <p id="availableRooms">Loading...</p>
                    </div>
                </div>
                <div class="charts">
                    <div class="chart">
                        <h2>Occupancy Over Time</h2>
                        <canvas id="occupancyChart"></canvas>
                    </div>
                    <div class="chart">
                        <h2>Revenue Over Time</h2>
                        <canvas id="revenueChart"></canvas>
                    </div>
                </div>

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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="index.js"></script>
</body>
</html>
