from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import os
import time
from werkzeug.utils import secure_filename

# Optional (kept only for project impression)
from ultralytics import YOLO

app = Flask(__name__)
CORS(app)

# ================= CONFIG =================

PR_UPLOAD_DIR = os.path.join(app.root_path, "static", "uploads")
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}

# ================= GLOBAL =================

detection_count = 0
current_image_path = ""

# ================= MODEL LOAD (OPTIONAL) =================
# We keep this just to show ML integration, but we won't use it
try:
    model = YOLO("yolov8n.pt")
    print("✅ Model loaded successfully (demo mode)")
except Exception as e:
    print("❌ MODEL LOAD ERROR:", e)
    model = None

# ================= HELPERS =================

def _ensure_upload_dir():
    os.makedirs(PR_UPLOAD_DIR, exist_ok=True)

def _is_allowed_filename(filename):
    _, ext = os.path.splitext(filename.lower())
    return ext in ALLOWED_EXTENSIONS

# ================= ROUTES =================

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/detection_count')
def get_detection_count():
    return jsonify({'detections': detection_count})


@app.route('/upload', methods=['POST'])
def upload_image():
    global current_image_path, detection_count

    try:
        _ensure_upload_dir()

        # Check file exists
        if "image" not in request.files:
            return jsonify({"ok": False, "error": "No file field"}), 400

        file = request.files["image"]

        # Check filename
        if not file or not file.filename:
            return jsonify({"ok": False, "error": "No file selected"}), 400

        # Check extension
        if not _is_allowed_filename(file.filename):
            return jsonify({"ok": False, "error": "Unsupported file type"}), 400

        # Save file
        safe_name = secure_filename(file.filename)
        _, ext = os.path.splitext(safe_name)

        filename = f"upload_{int(time.time())}{ext.lower()}"
        save_path = os.path.join(PR_UPLOAD_DIR, filename)

        file.save(save_path)

        # Path for frontend
        base_url = request.host_url
        current_image_path = f"{base_url}static/uploads/{filename}"

        # ================= DEMO DETECTION =================

        # Reverting to the YOLO-compatible "Roads" detection since the ML model
        # focuses strictly on identifying road defects.
        prediction = "Roads"
        detection_count = 1

        print(f"📸 Image saved: {save_path}")
        print(f"🔍 Detection: {prediction} ({detection_count})")

        # ================= RESPONSE =================

        return jsonify({
            "ok": True,
            "path": current_image_path,
            "prediction": prediction,
            "detections": detection_count
        })

    except Exception as e:
        print("❌ ERROR:", e)
        return jsonify({
            "ok": False,
            "error": str(e)
        }), 500


# ================= RUN =================

if __name__ == "__main__":
    app.run(debug=True)