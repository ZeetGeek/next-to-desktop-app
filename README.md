# Blog App (Next.js + Tauri)

A simple blog application built with Next.js (App Router, JSX, Tailwind CSS) and converted into a desktop app using Tauri. It fetches blog posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) and supports dynamic routing for individual posts.

## Features
- List blog posts on the home page.
- View individual post details via dynamic routes (`/posts/[id]`).
- Styled with Tailwind CSS.
- Runs as a lightweight desktop app with Tauri.

## Prerequisites
Before running the project, ensure you have the following installed:
- **Node.js**: v18 or later ([Download](https://nodejs.org/)).
- **Rust**: Install via `rustup` ([Instructions](https://www.rust-lang.org/tools/install)).
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

-----------------------------------------------------  

npm install -g @tauri-apps/cli

-----------------------------------------------------

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


--------------------------------------------------------

npm install

-------------------------------------------------------

rustup update

-------------------------------------------------------

cd src-tauri
cargo build
cd ..

------------------------------------------------------

4. Configure Tauri
The Tauri configuration is already set up in src-tauri/tauri.conf.json. Ensure it points to the Next.js static output:

"build": {
  "beforeDevCommand": "npm run dev",
  "beforeBuildCommand": "npm run build",
  "devUrl": "http://localhost:3000",
  "distDir": "../out"
}

------------------------------------------------------

Running the App
Development Mode
Run the app in development mode (uses Next.js dev server with Tauri):

------------------------------------------------------

npm run tauri dev

------------------------------------------------------

Build the Desktop App
Build the app as a standalone desktop executable:

-----------------------------------------------------

npm run tauri build

----------------------------------------------------

Ensure package.json has

----------------------------------------------------

npm install --save-dev @tauri-apps/cli

----------------------------------------------------
