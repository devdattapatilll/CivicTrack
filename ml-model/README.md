# 🛣️ Pothole Detection System (Group 270)

A computer vision-based web application that detects potholes in images and videos using a deep learning model. The system is built using **Flask**, **OpenCV**, and **YOLO (Ultralytics)**.

---

## 🚀 Features

* 🔍 Detect potholes using a trained YOLO model
* 🖼️ Supports image-based detection
* 🎥 (Optional) Video stream detection
* 📊 Real-time detection count display
* 🌐 Web-based dashboard using Flask

---

## 🧠 Tech Stack

* **Backend:** Flask (Python)
* **Computer Vision:** OpenCV
* **Model:** YOLO (Ultralytics)
* **Frontend:** HTML, CSS
* **Deployment (Local):** Python server

---

## 📁 Project Structure

```
Pothole-Computer-Vision-Project-main/
│
├── app.py                 # Main Flask application
├── best.pt                # Trained YOLO model
├── demo.mp4               # Sample video (optional)
├── test.png               # Sample image input
│
├── templates/
│   └── index.html         # Frontend UI
│
└── README.md              # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
```

---

### 2️⃣ Install dependencies

```bash
pip install flask opencv-python ultralytics
```

---

### 3️⃣ (IMPORTANT) Fix version compatibility

To avoid model errors, install the correct version:

```bash
pip uninstall ultralytics -y
pip install ultralytics==8.4.23
```

---

### 4️⃣ Run the application

```bash
python app.py
```

---

### 5️⃣ Open in browser

```
http://127.0.0.1:5000/
```

---

## 🖼️ Usage

* Place your test image as `test.png` in the root folder
* The system will:

  * Detect potholes
  * Draw bounding boxes
  * Display detection count

---

## 📊 Output

* Bounding boxes drawn on detected potholes
* Detection count shown in dashboard

---

## 🔮 Future Improvements

* 📤 Upload image from UI
* 🎥 Live webcam detection
* 📍 GPS-based pothole mapping
* ☁️ Deployment on cloud (AWS / Render)

---

## 👨‍💻 Team Members

* Mayank Rawat — 22BCE10829
* Rizul Singh Patania — 22BCE10423
* Sarthak Harshal Sant — 22BCE10891
* Devdatta Patil — 22BCE11659

---

## 📌 Project Title

**“Vikram Spot-a-hole” — AI-based Pothole Detection System**

---

## ⭐ Acknowledgements

* Ultralytics YOLO
* OpenCV
* Flask

---

## 📬 Contact

For any queries, feel free to reach out to the team.

---

⭐ *If you like this project, consider giving it a star!*
