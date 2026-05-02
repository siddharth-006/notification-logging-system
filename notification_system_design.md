# Notification System Design

## 1. Overview
This project implements a frontend-based Notification System with an integrated Logging Middleware. The system captures application events and sends structured logs to an external logging API.

---

## 2. Architecture

Frontend (React + TypeScript)
        ↓
Logging Middleware (Reusable Function)
        ↓
External Logging API (Test Server)

---

## 3. Components

### Frontend Application
- Built using React (Vite + TypeScript)
- Displays notification messages
- Handles user interface and state

### Logging Middleware
- A reusable function: Log(stack, level, package, message)
- Sends logs to external API
- Uses Bearer Token authentication

### External Logging API
- Endpoint: /evaluation-service/logs
- Stores and processes logs

---

## 4. Workflow

1. User opens the application
2. React component loads
3. Logging middleware is triggered
4. Log data is sent to API
5. API responds with success message

Example:
App Load → Log("frontend", "info", "component", "App initialized")

---

## 5. Logging Strategy

Logs are categorized as:

- **info** → General application flow  
- **debug** → Development-level details  
- **warn** → Performance or delay issues  
- **error** → Failures in components/API  
- **fatal** → Critical system failures  

---

## 6. Token-Based Authentication

- User registers → gets clientID & clientSecret  
- Auth API generates access_token  
- Token stored in localStorage  
- Used in Authorization header:

Authorization: Bearer <token>

---

## 7. Key Features

- Reusable logging middleware  
- Structured logging system  
- Real-time API integration  
- Clean and responsive UI  
- Error handling and debugging support  

---

## 8. Future Improvements

- Add real backend notification service  
- Store notifications in database  
- Add user authentication  
- Implement push notifications  

---

## 9. Conclusion

This system demonstrates a scalable logging approach integrated into a frontend application. It helps in monitoring application behavior, debugging issues, and maintaining production-level code quality.