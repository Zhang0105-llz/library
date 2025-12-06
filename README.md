# Book Library Project

A simple **Book Library Management Website** built using **HTML**, **CSS**, and **JavaScript** (no frameworks used).

This project demonstrates core web development concepts including:
- Native front-end development (HTML5, CSS3, Vanilla JavaScript)
- Model-View-Controller (MVC) architecture pattern
- Book data modeling and rendering
- Search, sorting, filtering, and pagination
- Responsive and interactive user interface

---

## 📂 Project Structure
book-library/

├── index.html              # Homepage: Book list with search, sort, filter, pagination

├── book-detail.html        # Book detail page (shows info when a book is clicked)

├── about.html              # About page (project info)

├── /css/

│   └── styles.css          # Custom CSS styles

└── /js/

└── script.js           # Core JavaScript: data, search, sort, filter, pagination, routing

---

## 🚀 How to Run the Project

### Option 1: Open Directly in Browser
- Simply double-click `index.html` to open it in your default browser.
- (Note: Some features like relative paths may work better when served.)

### Option 2: Use a Local Development Server (Recommended)
To ensure all assets load properly and to enable live reload, use one of the following:

#### Using Visual Studio Code + Live Server:
1. Install the [Live Server]extension in VS Code
2. Open the `book-library` folder in VS Code
3. Right-click on `index.html` → **Open with Live Server**
4. The site will open

#### Using Python (if Live Server is not available):
- Navigate to the project folder in terminal:
bash

cd path/to/book-library

- Then run:
bash

For Python 3
python3 -m http.server 8000

For Python 2
python -m SimpleHTTPServer 8000

- Open browser

---

## ✨ Features

- 🔍 **Search**: Search books by title or author (real-time filtering)
- 🔄 **Sort**: Sort books by:
- Title (A–Z or Z–A)
- Year (Oldest or Newest)
- 📅 **Filter**: Filter books by minimum publication year
- 📄 **Pagination**: View 3 books per page with page navigation
- 👆 **Book Detail**: Click on any book to view full details (title, author, year, description)
- 📱 **Responsive Layout**: Works on desktop and tablet views
- 🎨 **Custom Styling**: No Bootstrap or other frameworks — pure CSS

---

## 📸 Screenshots (Used in Report)

The following features are demonstrated in the project report:
- Homepage with book list and controls
- Search and sort in action
- Year filter usage
- Pagination controls
- Book detail page
- Key code snippets (from `script.js` and `styles.css`)

---

## 📄 Report & Submission

- **Project Report (Word)**: `BookLibrary_Project_Report.docx` (included in submission zip)
- **Video Demo (Optional)**: Demonstrates all key functionalities (see ZIP or shared link)
- **Source Code**: All files in this `book-library/` directory
- **Additional Files**:
- `README.md` (this file)
- (Optional) `screenshots/`, `videos/`, etc.

---

## 🧠 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Architecture**: Custom (simulated) MVC pattern
- **Data**: In-memory JavaScript Array of Book Objects
- **Tools**: Visual Studio Code, Live Server (optional)

---

## 🙌 Author

- **Name**: Zhang Ziyan
- **Student ID**: 24009238 
- **Date**: December 1, 2025 

---

## 📌 Notes

- This is a front-end only project with no backend or database.
- All data is stored in-memory in the `script.js` file under the `books` array.
- The project is designed to meet the requirements of a typical undergraduate web development assignment.

---