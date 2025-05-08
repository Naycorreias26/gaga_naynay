<?php
include 'config.php';

$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$limit = 5;
$offset = ($page - 1) * $limit;
$categoria = isset($_GET['categoria']) ? $_GET['categoria'] : null;

if ($categoria) {
    $sql = "SELECT * FROM produtos WHERE categoria = ? LIMIT ? OFFSET ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$categoria, $limit, $offset]);
} else {
    $sql = "SELECT * FROM produtos LIMIT ? OFFSET ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$limit, $offset]);
}

$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($produtos);
?>
