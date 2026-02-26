<?php
// =========================
// CORS
// =========================
$allowedOrigins = [
  "https://payinfinite.net",
  "https://www.payinfinite.net",
  "http://localhost:5173",
  "http://localhost:3000"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
  header("Access-Control-Allow-Origin: " . $origin);
} else {
  // If you want to hard block unknown origins, uncomment:
  // http_response_code(403); echo "forbidden_origin"; exit;
  header("Access-Control-Allow-Origin: https://payinfinite.net");
}

header("Vary: Origin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo "invalid_method";
  exit;
}

// =========================
// COMMON FIELD
// =========================
$email = isset($_POST['email']) ? trim($_POST['email']) : "";

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "invalid_email";
  exit;
}

// =========================
// FORM FIELDS (optional)
// =========================
$businessname = isset($_POST['businessname']) ? trim($_POST['businessname']) : "";
$fullname     = isset($_POST['fullname']) ? trim($_POST['fullname']) : "";
$phone        = isset($_POST['phone']) ? trim($_POST['phone']) : "";
$message      = isset($_POST['message']) ? trim($_POST['message']) : "";

// A small hint of which form
$formType     = isset($_POST['form_type']) ? trim($_POST['form_type']) : ""; // hero/footer/contact

// =========================
// EXTERNAL INFO
// =========================
$date = date("F j, Y");
$time = date("g:i a");
$pageUrl = $_SERVER['HTTP_REFERER'] ?? 'N/A';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'N/A';
$ip = $_SERVER['HTTP_CF_CONNECTING_IP']
    ?? $_SERVER['HTTP_X_FORWARDED_FOR']
    ?? $_SERVER['REMOTE_ADDR']
    ?? 'N/A';

// =========================
// EMAIL SETUP
// =========================
$to = "leads@payinfinite.net";

// From should be a real mailbox on your domain (best delivery)
$fromEmail = "leads@payinfinite.net";
$fromName  = "PayInfinite Leads";

$headers  = "From: {$fromName} <{$fromEmail}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// =========================
// CASE 1: Email-only form (Hero/Footer)
// =========================
$isEmailOnly = ($fullname === "" && $phone === "" && $businessname === "" && $message === "");

if ($isEmailOnly) {
  $subject = "New Email Lead - PayInfinite (" . ($formType ?: "unknown") . ")";

  $body  = "A new email lead came from PayInfinite website.\n\n";
  $body .= "Form Type: " . ($formType ?: "unknown") . "\n";
  $body .= "Email: {$email}\n\n";

  $body .= "--------------------------\n";
  $body .= "External Info:\n";
  $body .= "Date: {$date}\n";
  $body .= "Time: {$time}\n";
  $body .= "Page URL: {$pageUrl}\n";
  $body .= "User Agent: {$userAgent}\n";
  $body .= "Remote IP: {$ip}\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
  exit;
}

// =========================
// CASE 2: Full contact form
// =========================
$subject = "New Lead Submission - PayInfinite (Contact Form)";

$body  = "New Lead Submission:\n\n";
$body .= "Full Name: {$fullname}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n";
$body .= "Business Name: {$businessname}\n\n";
$body .= "Message:\n{$message}\n\n";

$body .= "--------------------------\n";
$body .= "External Info:\n";
$body .= "Date: {$date}\n";
$body .= "Time: {$time}\n";
$body .= "Page URL: {$pageUrl}\n";
$body .= "User Agent: {$userAgent}\n";
$body .= "Remote IP: {$ip}\n";

if (mail($to, $subject, $body, $headers)) {
  echo "success";
} else {
  echo "error";
}
?>