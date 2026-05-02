# Campus Notifications App (Frontend)

## Overview

A React + TypeScript application that fetches campus notifications from a protected API and displays them with:

* Priority-based sorting (Placement > Result > Event)
* Filtering by notification type
* Viewed vs New tracking (persistent)
* Pagination (page & limit)
* Centralized logging via a reusable logging middleware

---

## Features

### 1. Priority Inbox

Top notifications are sorted by:

1. Type weight (Placement > Result > Event)
2. Recency (latest first)

### 2. Filtering

Dropdown to filter notifications by:

* All
* Event
* Result
* Placement

### 3. Viewed vs New

* Click a notification to mark as viewed
* Stored in localStorage
* UI updates with ✔️ (viewed) and dimmed card

### 4. Pagination

* Navigate using Next / Previous buttons
* API queried with `page` and `limit`

### 5. Logging Middleware

All important actions are logged via:

```
Log(stack, level, package, message)
```

Examples:

* Fetch start / success / failure
* Notification viewed

---

## Tech Stack

* React (Vite)
* TypeScript
* Material UI
* Fetch API

---

## Setup Instructions

1. Install dependencies

```
npm install
```

2. Run the app

```
npm run dev
```

3. Generate token (Thunder Client / Postman)
   POST `/auth`

4. Set token in browser console

```
localStorage.setItem("token", "YOUR_ACCESS_TOKEN")
```

---

## API Endpoints

* GET `/notifications?page=1&limit=10`
* POST `/logs`

---

## Folder Structure

```
src/
 ├── api/
 ├── logging_middleware/
 ├── utils/
 ├── App.tsx
```

---

## Notes

* No hardcoded data used
* Fully API-driven
* Clean UI with Material UI
* Designed for scalability and readability

---
## Screenshots

### Desktop View
![alt text](desktop_view-1.png)

### Mobile View
![alt text](mobile_view.png)
### Filtering Feature
![alt text](filter.png)

### Viewed vs New
![alt text](before_click.png)
![alt text](after_click.png)


### Pagination
![alt text](pagination.png)

### Console Logs
![alt text](console_log.png)
