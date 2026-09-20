# For Rena

A small letter made for you.

## Files

- `index.html` — the page structure and your letter
- `style.css` — the dreamy pink design, animations, and responsive layout
- `script.js` — letter opening, music controls, and interactions
- `audio/` — put your legally obtained music file here

## Adding "Dearly Beloved"

The website expects this exact file:

    audio/dearly-beloved.mp3

So:

1. Obtain the audio through a source that gives you the right to use it.
2. Rename the file to `dearly-beloved.mp3`.
3. Put it inside the `audio` folder.
4. Open `index.html` in your browser.
5. Click **Open the letter**. The music will attempt to start after the click.

Browsers often block music that starts without a user interaction, which is why the site starts the music after the "Open the letter" button is clicked.

## Run locally

You can simply double-click `index.html` for the visual page. For the most reliable audio behavior, use a local web server.

If you have Python installed, open a terminal in this folder and run:

    python -m http.server 8000

Then visit:

    http://localhost:8000

## Put it online

You can upload these files to a static hosting service such as GitHub Pages, Netlify, or Vercel.

Keep the folder structure intact:

    index.html
    style.css
    script.js
    audio/
        dearly-beloved.mp3

## Editing the letter

Open `index.html` and edit the text inside:

    <div class="letter-body">
        ...
    </div>

The current version contains the letter exactly as provided.

## Important

"Dearly Beloved" is copyrighted music associated with Kingdom Hearts II. This project does not include the audio file. Add only an audio copy you are legally allowed to use.
