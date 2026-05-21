# josesantoyoguilarte.github.io

Personal portfolio for **Jose Arturo Santoyo Guilarte**, published at
<https://josesantoyoguilarte.github.io/>.

Static site built with **HTML5 + Bootstrap 5** — no build step required.

## Run locally

Just open `index.html` in your browser, or serve the folder with any static
server, for example:

```powershell
# Python
python -m http.server 8080

# Or Node
npx serve .
```

Then visit <http://localhost:8080>.

## Project structure

```
.
??? index.html            # Main page
??? 404.html              # Custom 404
??? CNAME                 # Custom domain for GitHub Pages
??? css/portfolio.css     # Site styles (new)
??? js/portfolio.js       # Site scripts (new)
??? img/                  # Images
??? resume/               # Resume (PDF + DOCX)
??? css/, js/, font-awesome-4.2.0/, fonts/   # Legacy assets from the old theme
```

The `css/` and `js/` folders still contain the original Bootstrap-3 theme
assets. They are no longer referenced by `index.html` and can be safely
deleted once you're happy with the new look.

## Deployment

The site is deployed automatically by **GitHub Pages** on every push to the
`master` branch.
