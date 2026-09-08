"""
MediGuid Local Development Server
Simple zero-dependency HTTP server with automatic port selection.
Run with: python server.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys

DEFAULT_PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Keep console output clean
        sys.stdout.write(f"[{self.log_date_time_string()}] {args[0]}\n")

def run_server(port=DEFAULT_PORT):
    for p in range(port, port + 20):
        try:
            with socketserver.TCPServer(("", p), QuietHandler) as httpd:
                url = f"http://localhost:{p}"
                print("=" * 60)
                print(f" MediGuid Application is Live!")
                print(f" Serving at: {url}")
                print(f" Press Ctrl+C to stop the server")
                print("=" * 60)
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
        except OSError:
            continue
    print(f"Could not bind to ports {port}-{port+20}")

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\nMediGuid server stopped.")
