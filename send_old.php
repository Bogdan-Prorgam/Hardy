

<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_REQUEST['name'];
$phone = $_REQUEST['number'];
$email = $_REQUEST['mail'];
$city = $_REQUEST['city'];
$organization = $_REQUEST['organization'];
$comment = $_REQUEST['comment'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.beget.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'td1ruy4a@hardy-drinks.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'aUV2WpWt5-55'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('td1ruy4a@hardy-drinks.ru'); // от кого будет уходить письмо?
$mail->addAddress('aromanova1606@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка Hardy';
$mail->Body    = 'Имя:' .$name . 
                 '<br>Телефон:' .$phone. 
                 '<br>Почта: ' .$email. 
                 '<br>Город:' .$city. 
                 '<br>Организация:' .$organization.
                 '<br>Комментарий:' .$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thanks.html');
}
?>

