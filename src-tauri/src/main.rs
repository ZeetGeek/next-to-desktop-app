use tauri::Manager; // Import Manager trait for get_webview_window

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            // Get the main window using Manager trait
            let window = app.get_webview_window("main").unwrap();

            // Inject JavaScript to handle external link clicks
            window.eval(
                r#"
                window.addEventListener('click', (e) => {
                    const target = e.target.closest('a');
                    if (target && target.href && !target.href.startsWith(window.location.origin)) {
                        e.preventDefault();
                        window.__TAURI__.shell.open(target.href);
                    }
                });
                "#
            ).unwrap();

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
