// scripts.js
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

    // Fetch data from PHP backend
    fetch('dashboard.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('occupancyRate').innerText = data.occupancy_rate + '%';
            document.getElementById('totalReservations').innerText = data.total_reservations;
            document.getElementById('revenue').innerText = '₱' + data.revenue;
            document.getElementById('availableRooms').innerText = data.available_rooms;

            // Update charts with data (assuming you have chart data coming from the backend)
            // Update Occupancy Chart
            const ctx1 = document.getElementById('occupancyChart').getContext('2d');
            const occupancyChart = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'], // Example labels
                    datasets: [{
                        label: 'Occupancy Rate',
                        data: [75, 80, 85, 90, 85], // Example data
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Update Revenue Chart
            const ctx2 = document.getElementById('revenueChart').getContext('2d');
            const revenueChart = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'], // Example labels
                    datasets: [{
                        label: 'Revenue (PHP)',
                        data: [1000000, 1100000, 1250000, 1200000, 1300000], // Example data
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '₱' + value + ' PHP';
                                }
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching dashboard data:', error));
});
