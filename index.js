
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

  
    sections.forEach(section => section.style.display = 'none');
    document.querySelector('#dashboard').style.display = 'block';

    // fetch data galing db
    fetch('dashboard.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('occupancyRate').innerText = data.occupancy_rate + '%';
            document.getElementById('totalReservations').innerText = data.total_reservations;
            document.getElementById('revenue').innerText = '₱' + data.revenue;
            document.getElementById('availableRooms').innerText = data.available_rooms;

            const ctx1 = document.getElementById('occupancyChart').getContext('2d');
            const occupancyChart = new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'], 
                    datasets: [{
                        label: 'Occupancy Rate',
                        data: [75, 80, 85, 90, 85],
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


            const ctx2 = document.getElementById('revenueChart').getContext('2d');
            const revenueChart = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May'], 
                    datasets: [{
                        label: 'Revenue (PHP)',
                        data: [1000000, 1100000, 1250000, 1200000, 1300000], 
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
                reservationList.innerHTML = ''; 
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

    // display teh resercations
    fetchReservations();

    // adding res
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
                fetchReservations(); 
                addReservationForm.reset(); 
            } else {
                console.error('Error adding reservation:', data.error);
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
