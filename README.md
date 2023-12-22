**Delivery system**

Overview :</br>
This project implements a backend service that provides an internal API for managing card statuses. It includes functionality to update card statuses from CSV files provided by partner companies and exposes an endpoint to query the status of a user's card based on their phone number or card ID.

**Technologies Used** 
Node.js </br>
Express.js (for the web server) </br>
MongoDB (as the database) </br>
Mongoose (MongoDB object modeling for Node.js) </br>


**Getting Started** </br>
 step1  - Install dependencies: npm install </br>
 step2 -  Run the server: npm  start </br>

 
**API Endpoints** </br>
GET /api/v1/card/status. </br>
Accepts either phoneNumber or cardId as query parameters. </br>
Returns the status of the user's card. </br>

POST /api/v1/user/add-user </br>
Accepts either phoneNumber and cardId as request body. </br>
creates user




Example requests: </br>
GET /api/v1/card/status?phoneNumber=123456789 </br>
GET /api/v1/card/status?cardId=your_card_id </br>
