Title:
Leftover Food Exchange Website(MERN Stack)

Description:
The Leftover Food Exchange Platform is a full-stack web application developed using the MERN stack. The system is designed to reduce food wastage by enabling users within a local community to share surplus food. Users can post available food with relevant details, and other users can view and book the food based on availability. The application includes real-time quantity tracking, booking validation, and a notification system to ensure proper communication between users.

Features:
User registration and login using name, address, and contact number
Post leftover food with details such as food name, type, quantity, and unit
View available food items in a dynamic list
Book food with automatic quantity reduction
Prevent users from booking their own posted food
Display food availability status (available or booked)
Notification system for both food provider and requester

Tech Stack
Frontend:
React.js, CSS
Backend:
Node.js, Express.js
Database:
MongoDB with Mongoose
API Communication:
Axios

Sample Input

User Login Input:
Name: Kannan
Address: Coimbatore
Phone: 1234567890
Food Posting Input:
Food Name: Idly
Type: Rice
Quantity: 5
Unit: pieces
Address: Coimbatore
Food Booking Input:
User: Rohit
Quantity Requested: 2



Sample Output

After Posting Food:
Food appears in the available food list with details such as name, quantity, type, and address.
After Booking Food:
Quantity reduces from 5 to 3
Food status updates dynamically
Booking details are stored
Notification is sent to the food provider

Notification Example:
"Rohit booked 2 pieces of Idly from your post."

Screenshots
<img width="2181" height="1485" alt="Screenshot 2026-04-13 143028" src="https://github.com/user-attachments/assets/fdfba4dc-9183-439e-aa74-987c9c16233c" />
<img width="2136" height="1452" alt="Screenshot 2026-04-13 143054" src="https://github.com/user-attachments/assets/af528929-20f5-4f4a-8b00-700eb23a9e01" />



