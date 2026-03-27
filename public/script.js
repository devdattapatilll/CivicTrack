/* ----------------- REACT SAMPLE DATA ----------------- */
const issues = [
    {
        id: 1,
        title: "Pothole on MG Road",
        category: "Roads",
        location: "MG Road, Pune",
        status: "Pending",
        upvotes: 32,
        comments: 12,
        image: "https://images.pexels.com/photos/1570378/pexels-photo-1570378.jpeg"
    },
    {
        id: 2,
        title: "Garbage not collected",
        category: "Garbage",
        location: "Sector 14, Gurugram",
        status: "In Progress",
        upvotes: 10,
        comments: 3,
        image: "https://images.pexels.com/photos/5931/dirty-paper-corrugated-waste.jpg"
    }
];

const categories = ["All", "Roads", "Garbage", "Water", "Electricity", "Other"];

/* ----------------- STATS COMPONENT ----------------- */
function Stats() {
    return (
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-card-header">
                    <div className="stat-icon">📌</div>
                    <div className="stat-value">120</div>
                </div>
                <div className="stat-label">Total Issues</div>
            </div>

            <div className="stat-card">
                <div className="stat-card-header">
                    <div className="stat-icon">⚙️</div>
                    <div className="stat-value">45</div>
                </div>
                <div className="stat-label">In Progress</div>
            </div>

            <div className="stat-card">
                <div className="stat-card-header">
                    <div className="stat-icon">✔️</div>
                    <div className="stat-value">52</div>
                </div>
                <div className="stat-label">Resolved</div>
            </div>
        </div>
    );
}

/* ----------------- CATEGORY FILTER ----------------- */
function CategoryFilter() {
    const [active, setActive] = React.useState("All");

    return (
        <div className="categories">
            {categories.map(cat => (
                <button
                    key={cat}
                    className={`category-btn ${active === cat ? "active" : ""}`}
                    onClick={() => setActive(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}

/* ----------------- ISSUES GRID ----------------- */
function IssuesGrid() {
    return (
        <div className="issues-grid">
            {issues.map(issue => (
                <div key={issue.id} className="issue-card">
                    <div className="issue-image">
                        <img src={issue.image} />
                        <span className={`issue-status ${
                            issue.status === "Pending"
                                ? "status-pending"
                                : issue.status === "In Progress"
                                ? "status-progress"
                                : "status-resolved"
                        }`}>
                            {issue.status}
                        </span>
                    </div>

                    <div className="issue-content">
                        <h4 className="issue-title">{issue.title}</h4>
                        <div className="issue-location">📍 {issue.location}</div>

                        <div className="issue-footer">
                            <div className="issue-interactions">
                                <div className="interaction">👍 {issue.upvotes}</div>
                                <div className="interaction">💬 {issue.comments}</div>
                            </div>
                            <div>{issue.category}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ----------------- RENDER REACT COMPONENTS ----------------- */
ReactDOM.createRoot(document.getElementById("stats-root")).render(<Stats />);
ReactDOM.createRoot(document.getElementById("categories-root")).render(<CategoryFilter />);
ReactDOM.createRoot(document.getElementById("issues-root")).render(<IssuesGrid />);

/* ----------------- NAVIGATION BUTTONS ----------------- */
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.target;
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
});

/* ----------------- SIGN-IN POPUP ----------------- */
document.getElementById("signinBtn").addEventListener("click", () => {
    alert("Sign In system coming soon!");
});

/* ----------------- FORMSPREE FORM ----------------- */
document.getElementById("reportForm").addEventListener("submit", (e) => {
    alert("Issue submitted successfully!");
});



