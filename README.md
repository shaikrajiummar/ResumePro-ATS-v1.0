# ResumePro ATS v1.0

A premium, interactive, and ATS-compliant resume builder application designed for **Shaik Rajiummar**. It features a modern visual view for screen reading and an automated print-safe view for generating machine-readable A4 PDFs.

---

## 🚀 How to Run Locally

You can open this application by double-clicking `index.html` in your file explorer, or run it through a local HTTP server:

```bash
# Start a local development server
npx http-server -p 8080
```
Then navigate to **http://localhost:8080** in your browser.

---

## 📤 How to Push Updates to GitHub

When you make changes to your resume using the live editor or editing the code, run these commands in your terminal to save and push your updates to GitHub:

### 1. Stage your changes
```bash
git add .
```

### 2. Commit your changes
```bash
git commit -m "Update resume details"
```

### 3. Push to GitHub
```bash
git push
```

---

## 🖨️ PDF Printing Configuration (A4)
When printing the resume to PDF:
1. Set **Destination** to *Save as PDF*.
2. Set **Paper Size** to **A4**.
3. Set **Margins** to **Default** (the stylesheet applies native margins automatically).
4. **Uncheck** *Headers and footers*.
5. **Uncheck** *Background graphics*.
