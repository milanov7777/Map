"""Inline Leaflet's CSS and the data files into one self-contained index.html.

Usage: python3 build.py path/to/leaflet.css
"""
import pathlib
import sys

root = pathlib.Path(__file__).parent
html = (root / "src/app.html").read_text()
html = html.replace("/*LEAFLET_CSS*/", pathlib.Path(sys.argv[1]).read_text())
html = html.replace("/*PLACES_JS*/", (root / "src/places.js").read_text())
html = html.replace("/*ROADS_JS*/", (root / "src/roads.js").read_text())
# Bare page for claude.ai artifacts (the publisher adds the document skeleton).
(root / "dist").mkdir(exist_ok=True)
(root / "dist/artifact.html").write_text(html)
# Standalone page for GitHub Pages or opening locally.
head = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<style>body{margin:0}[hidden]{display:none!important}</style>\n</head>\n<body>\n'
(root / "index.html").write_text(head + html + "\n</body>\n</html>\n")
print("wrote index.html and dist/artifact.html", len(html), "bytes")
