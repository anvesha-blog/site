# Anvesha blog [![Netlify Status](https://api.netlify.com/api/v1/badges/0c2f8f1e-6021-49aa-bf6a-79974a89339c/deploy-status)](https://app.netlify.com/teams/anvesha-blog/sites) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal website running on Gatsby, React, and Node.js! The theme here is based on the
[Novela Theme](https://github.com/narative/gatsby-theme-novela).

Using a heavily modified version of the Novela theme. Here are some major changes:

- Updated logic for finding related posts based on number of matched tags (more number of matches
  get higher priority) and time difference with the current post (less time difference get higher
  priority)
- Custom 404 page
- Additional pages like code stats
- Table of Contents for larger posts with smooth scrolling
- Image Gallery in Posts
- Scroll to Top button
- Optional Line numbers, and title in Code Blocks
- Next/Previous article links in all non-secret posts
- Draft posts based on frontmatter or future date, disabled during development
- About 'info' page in the navigation header
- Additional custom CSS modifications as per my liking

## Installation

Run local server:

```bash
## for development run,
git clone https://github.com/anvesha-blog/site.git
cd site
yarn
yarn dev

## for publishing run,
# yarn build
```

During development to see the live preview,
Navigate to `localhost:8000`.

## License

This project is open source and available under the [MIT License](LICENSE).
