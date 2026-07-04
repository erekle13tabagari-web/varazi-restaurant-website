"""
Varazi — local development server with caching disabled.

Run it by double-clicking start.bat, or:
    python serve.py
Then open http://localhost:5599

Because it sends no-cache headers, your browser always loads the latest
files on a normal refresh — no Ctrl+Shift+R needed.
"""
import http.server
import socketserver
import os

PORT = 5599

# Serve files from this script's own folder, wherever it's launched from.
os.chdir(os.path.dirname(os.path.abspath(__file__)))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"\n  Varazi website running at:  http://localhost:{PORT}\n")
        print("  Press Ctrl+C to stop.\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n  Stopped.")
