<?php
header('Content-Type: application/json');
$host = 'localhost';
$db = 'hotel_management';
$user = 'root';
$pass = '';

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    $room_id = $_POST['room_id'];
    $guest_name = $_POST['guest_name'];
    $check_in_date = $_POST['check_in_date'];
    $check_out_date = $_POST['check_out_date'];
    $status = $_POST['status'];

    $stmt = $pdo->prepare('INSERT INTO reservations (room_id, guest_name, check_in_date, check_out_date, status) VALUES (?, ?, ?, ?, ?)');
    $stmt->execute([$room_id, $guest_name, $check_in_date, $check_out_date, $status]);

    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
