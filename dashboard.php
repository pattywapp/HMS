<?php

include 'db.php';

$response = [];

// Fetch ng occupancy rate
$stmt = $pdo->query("SELECT (COUNT(*) / (SELECT COUNT(*) FROM rooms)) * 100 AS occupancy_rate FROM reservations WHERE status = 'occupied'");
$response['occupancy_rate'] = $stmt->fetch()['occupancy_rate'];

// Fetch ng total reservations
$stmt = $pdo->query("SELECT COUNT(*) AS total_reservations FROM reservations");
$response['total_reservations'] = $stmt->fetch()['total_reservations'];

// Fetch ng revenue
$stmt = $pdo->query("SELECT SUM(amount) AS revenue FROM payments");
$response['revenue'] = $stmt->fetch()['revenue'];

// Fetch ng mga available rooms
$stmt = $pdo->query("SELECT COUNT(*) AS available_rooms FROM rooms WHERE status = 'available'");
$response['available_rooms'] = $stmt->fetch()['available_rooms'];

header('Content-Type: application/json');
echo json_encode($response);
?>