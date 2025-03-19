Blog App (Next.js + Tauri)
A simple blog application built with Next.js (App Router, JSX, Tailwind CSS) and converted into a desktop app using Tauri. It fetches blog posts from the JSONPlaceholder API and supports dynamic routing for individual posts.

Features
List blog posts on the home page.
View individual post details via dynamic routes (/posts/[id]).
Styled with Tailwind CSS.
Runs as a lightweight desktop app with Tauri.
Prerequisites
Before running the project, ensure you have the following installed:

Node.js: v18 or later (Download).
Rust: Install via rustup (Instructions).
bash

Collapse

Wrap

Copy
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
Tauri CLI: Installed globally or as a dev dependency.
bash

Collapse

Wrap

Copy
npm install -g @tauri-apps/cli
Project Structure
text

Collapse

Wrap

Copy
next-to-desktop-app/
├── src/
│   ├── app/
│   │   ├── layout.js         # Root layout with Tailwind
│   │   ├── page.js           # Home page (post list)
│   │   ├── posts/[id]/page.js # Dynamic route for post details
│   │   ├── globals.css       # Tailwind styles
├── src-tauri/
│   ├── src/
│   │   ├── main.rs          # Tauri Rust entry point
│   ├── Cargo.toml           # Rust dependencies
│   ├── tauri.conf.json      # Tauri configuration
├── next.config.js           # Next.js config for static export
├── package.json             # Node.js dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── README.md                # This file
Setup Instructions
1. Clone or Navigate to the Project
If you’re starting fresh, clone the repository (if applicable) or navigate to the project directory:

bash

Collapse

Wrap

Copy
cd "E:\Zeet Geek\Personal Work\next-to-desktop-app"
2. Install Node.js Dependencies
Install the required npm packages:

bash

Collapse

Wrap

Copy
npm install
3. Verify Rust Setup
Ensure Rust is installed and up-to-date:

bash

Collapse

Wrap

Copy
rustup update
Check the Tauri Rust dependencies:

bash

Collapse

Wrap

Copy
cd src-tauri
cargo build
cd ..
4. Configure Tauri
The Tauri configuration is already set up in src-tauri/tauri.conf.json. Ensure it points to the Next.js static output:

json

Collapse

Wrap

Copy
"build": {
  "beforeDevCommand": "npm run dev",
  "beforeBuildCommand": "npm run build",
  "devUrl": "http://localhost:3000",
  "distDir": "../out"
}
Running the App
Development Mode
Run the app in development mode (uses Next.js dev server with Tauri):

bash

Collapse

Wrap

Copy
npm run tauri dev
This starts the Next.js server at http://localhost:3000 and opens a Tauri desktop window.
Changes to Next.js or Rust code will hot-reload.
Build the Desktop App
Build the app as a standalone desktop executable:

bash

Collapse

Wrap

Copy
npm run tauri build
This runs npm run build to export the Next.js app to the out/ folder.
Tauri then compiles it into a desktop app (e.g., .exe on Windows).
Find the output in src-tauri/target/release/.
Troubleshooting
"Missing script: 'tauri'":
Ensure package.json has:
json

Collapse

Wrap

Copy
"scripts": {
  "tauri": "tauri"
}
Install Tauri CLI locally if needed:
bash

Collapse

Wrap

Copy
npm install --save-dev @tauri-apps/cli
Rust Compilation Errors:
Check src-tauri/Cargo.toml for consistent Tauri versions (e.g., tauri = "2.3.1", tauri-build = "2.3.1").
Run cargo update in src-tauri/ to sync dependencies.
Tauri CLI Not Found:
Verify global installation:
bash

Collapse

Wrap

Copy
tauri --version
If missing, reinstall: npm install -g @tauri-apps/cli.
Window Not Opening:
Ensure src-tauri/src/main.rs uses the correct API (e.g., app.get_webview_window("main") with use tauri::Manager;).
Notes
The app uses the JSONPlaceholder API for demo purposes. Replace the API URLs in page.js and [id]/page.js with your own if desired.
Dynamic routes are pre-rendered for IDs 1–100. For fully dynamic data, switch to client-side fetching (see comments in [id]/page.js).
