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

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display reservations
    function fetchReservations() {
        fetch('fetch_reservations.php')
            .then(response => response.json())
            .then(data => {
                const reservationList = document.getElementById('reservationList');
                reservationList.innerHTML = ''; // Clear previous data
                data.forEach(reservation => {
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <p>Room ID: ${reservation.room_id}</p>
                        <p>Guest Name: ${reservation.guest_name}</p>
                        <p>Check-in Date: ${reservation.check_in_date}</p>
                        <p>Check-out Date: ${reservation.check_out_date}</p>
                        <p>Status: ${reservation.status}</p>
                    `;
                    reservationList.appendChild(div);
                });
            })
            .catch(error => console.error('Error fetching reservations:', error));
    }

    // Call the function to fetch and display reservations
    fetchReservations();

    // Handle form submission for adding new reservation
    const addReservationForm = document.getElementById('addReservationForm');
    addReservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(addReservationForm);
        fetch('add_reservation.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fetchReservations(); // Refresh the list after adding new reservation
                addReservationForm.reset(); // Clear the form
            } else {
                console.error('Error adding reservation:', data.error);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
