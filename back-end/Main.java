// import com.sun.net.httpserver.HttpServer;
// import com.sun.net.httpserver.HttpHandler;
// import com.sun.net.httpserver.HttpExchange;
// import javax.mail.*;
// import javax.mail.internet.*;
// import java.io.*;
// import java.net.InetSocketAddress;
// import java.util.Properties;

// public class Main {
//     public static void main(String[] args) throws Exception {
//         HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
//         server.createContext("/", new StaticFileHandler());
//         server.createContext("/submit-contact-form", new ContactFormHandler());
//         server.setExecutor(null);
//         server.start();
//         System.out.println("Server running on http://localhost:8000");
//     }
// }

// class StaticFileHandler implements HttpHandler {
//     @Override
//     public void handle(HttpExchange exchange) throws IOException {
//         String response = "<html><body><h1>Welcome to My Digital Art Portfolio!</h1></body></html>";
//         exchange.sendResponseHeaders(200, response.getBytes().length);
//         OutputStream os = exchange.getResponseBody();
//         os.write(response.getBytes());
//         os.close();
//     }
// }

// class ContactFormHandler implements HttpHandler {
//     @Override
//     public void handle(HttpExchange exchange) throws IOException {
//         if ("POST".equals(exchange.getRequestMethod())) {
//             // Read the form data
//             InputStreamReader isr = new InputStreamReader(exchange.getRequestBody(), "utf-8");
//             BufferedReader br = new BufferedReader(isr);
//             StringBuilder sb = new StringBuilder();
//             String line;
//             while ((line = br.readLine()) != null) {
//                 sb.append(line);
//             }
            
//             // Here you can parse the form data (use libraries like `URLEncoder` for this)
//             String[] params = sb.toString().split("&");
//             String name = params[0].split("=")[1];
//             String email = params[1].split("=")[1];
//             String message = params[2].split("=")[1];

//             // Send the email
//             sendEmail(name, email, message);

//             // Respond to the client
//             String response = "Thank you for your message!";
//             exchange.sendResponseHeaders(200, response.getBytes().length);
//             OutputStream os = exchange.getResponseBody();
//             os.write(response.getBytes());
//             os.close();
//         } else {
//             String response = "Invalid request method!";
//             exchange.sendResponseHeaders(405, response.getBytes().length);
//             OutputStream os = exchange.getResponseBody();
//             os.write(response.getBytes());
//             os.close();
//         }
//     }

//     // Function to send the email
//     private void sendEmail(String name, String email, String messageContent) {
//         String to = "mara_chirica1411@yahoo.com"; // Your email address
//         String from = "your_email@gmail.com"; // The email you're sending from (must be a valid email)
//         String host = "smtp.gmail.com"; // Gmail SMTP server

//         // Set up the SMTP properties
//         Properties properties = System.getProperties();
//         properties.put("mail.smtp.host", host);
//         properties.put("mail.smtp.port", "587");
//         properties.put("mail.smtp.starttls.enable", "true");
//         properties.put("mail.smtp.auth", "true");

//         // Create a session with authentication
//         Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
//             protected PasswordAuthentication getPasswordAuthentication() {
//                 return new PasswordAuthentication(from, "your_email_password"); // Your email and password
//             }
//         });

//         try {
//             // Create the email message
//             MimeMessage message = new MimeMessage(session);
//             message.setFrom(new InternetAddress(from));
//             message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
//             message.setSubject("New Contact Form Submission");
//             message.setText("You have received a new message from: \n\n"
//                             + "Name: " + name + "\n"
//                             + "Email: " + email + "\n"
//                             + "Message: \n" + messageContent);

//             // Send the email
//             Transport.send(message);
//             System.out.println("Email sent successfully!");
//         } catch (MessagingException mex) {
//             mex.printStackTrace();
//         }
//     }
// }
