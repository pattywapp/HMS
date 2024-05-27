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
    $stmt = $pdo->query('SELECT * FROM reservations');
    $reservations = $stmt->fetchAll();
    echo json_encode($reservations);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
