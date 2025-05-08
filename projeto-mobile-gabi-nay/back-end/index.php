<?php
// index.php
$request = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

switch ($request) {
    case '/api/register':
        if ($method === 'POST') {
            require 'register.php';
        }
        break;

    case '/api/login':
        if ($method === 'POST') {
            require 'login.php';
        }
        break;

    case '/api/products':
        if ($method === 'GET') {
            require 'list_products.php';
        }
        break;

    case '/api/products/create':
        if ($method === 'POST') {
            require 'create_product.php';
        }
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Endpoint não encontrado']);
        break;
}
