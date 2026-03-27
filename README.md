# CivicTrack – AI-Based Civic Issue Reporting System

##  Overview

CivicTrack is a full-stack web application designed to help citizens report civic issues such as potholes, garbage overflow, water leakage, and electricity problems.

The platform combines a modern frontend with an AI-assisted backend to simplify issue reporting and improve user experience.

---

##  Key Features

### 🔹 Dual Reporting Modes

* **AI Detection Mode**

  * Upload an image
  * System auto-detects issue type (e.g., pothole → Roads)
  * Auto-fills category and assists user

* **Manual Mode**

  * Users manually enter:

    * Title
    * Category
    * Location
    * Description
    * Image (optional)

---

### 🔹 AI Integration (Flask Backend)

* Image uploaded via frontend
* Sent to Flask API (`/upload`)
* Backend processes image
* Returns:

  * Predicted category
  * Detection count
  * Image path

---

### 🔹 Firebase Integration

* Stores issues in **Firestore Database**
* Each issue contains:

  * Title
  * Category
  * Location
  * Description
  * Image
  * Status (Pending / Resolved)
  * Timestamp

---

### 🔹 Smart UI/UX

* Toggle between AI and Manual modes
* Real-time detection feedback
* Clean and responsive interface

---

##  Project Structure

```
capstone shi/
│
├── public/                  # Frontend (Firebase Hosting)
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── 404.html
│
├── ml-model/                # Backend (Flask + AI)
│   ├── app.py
│   ├── yolov8n.pt          # Model file
│   ├── templates/
│   │   └── index.html
│   └── static/
│       └── uploads/        # Uploaded images (runtime)
│
├── firebase.json           # Firebase config
├── .gitignore
└── README.md
```

---

##  How It Works

###  Workflow

1. User opens CivicTrack website
2. Selects **AI Detection Mode** or **Manual Mode**

### 📸 AI Detection Flow

1. User uploads an image
2. Frontend sends image to Flask backend:

   ```
   POST http://127.0.0.1:5000/upload
   ```
3. Backend processes image (ML / demo logic)
4. Returns response:

   ```json
   {
     "ok": true,
     "prediction": "Roads",
     "detections": 1,
     "path": "static/uploads/image.jpg"
   }
   ```
5. Frontend:

   * Displays detection result
   * Auto-fills category
6. User submits form
7. Data stored in Firebase

---

##  Running the Project Locally

### 🔹 Step 1 — Clone Repository

```
git clone <your-repo-link>
cd capstone shi
```

---

### 🔹 Step 2 — Run Backend (Flask)

```
cd ml-model
python app.py
```

Backend will start at:

```
http://127.0.0.1:5000
```

---

### 🔹 Step 3 — Run Frontend

Open `public/index.html` using:

* VS Code Live Server
  OR
* Browser directly

---

### 🔹 Step 4 — Use the App

* Upload image → auto detection
* Fill form → submit issue
* Data stored in Firebase

---

##  Important Notes

* Flask backend must be running for AI detection to work
* Frontend communicates with backend via API
* Firebase handles database and hosting
* Uploaded images are stored locally in backend

---

##  Project Objective

To build a smart civic reporting system that:

* Reduces manual effort
* Uses AI for classification
* Improves reporting efficiency
* Enhances user experience

---

##  Future Enhancements

* Deploy Flask backend (Render / Railway)
* Real YOLO trained model integration
* Admin dashboard for authorities
* Map-based issue visualization
* Authentication system

---

##  Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Flask (Python)
* **AI Model:** YOLO (Ultralytics)
* **Database:** Firebase Firestore
* **Hosting:** Firebase Hosting

---

##  Conclusion

CivicTrack demonstrates how AI can be integrated into civic systems to automate issue detection and improve public service workflows.

---

##  Acknowledgement

Developed as a capstone project to explore AI + Web integration for real-world problem solving.
