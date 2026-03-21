<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New contact message</title>
    <style>
        body { font-family: sans-serif; color: #1a1a1a; background: #f5f5f5; margin: 0; padding: 24px; }
        .card { background: #fff; border-radius: 8px; padding: 32px; max-width: 560px; margin: 0 auto; }
        .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: #888; }
        .value { margin: 4px 0 20px; font-size: 15px; }
        .message { white-space: pre-wrap; border-left: 3px solid #e5e5e5; padding-left: 16px; color: #333; }
    </style>
</head>
<body>
    <div class="card">
        <h2 style="margin-top:0">New contact form submission</h2>

        <p class="label">From</p>
        <p class="value">{{ $senderName }} &lt;{{ $senderEmail }}&gt;</p>

        <p class="label">Subject</p>
        <p class="value">{{ $subject }}</p>

        <p class="label">Message</p>
        <p class="value message">{{ $messageBody }}</p>
    </div>
</body>
</html>