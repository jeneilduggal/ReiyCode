# ReiyAI setup

The public ReiyCode website is hosted on GitHub Pages, which cannot keep an AI provider secret. ReiyAI therefore calls a separate server-side Worker. The website UI never asks the learner for an API key.

## Deploy the ReiyAI Worker

1. Create a free Cloudflare account and install Wrangler.
2. Run `npx wrangler deploy reiyai-worker.js --name reiycode-ai`.
3. Add the provider key as a server-side secret: `npx wrangler secret put GROQ_API_KEY --name reiycode-ai`.
4. Copy the deployed Worker URL.
5. In `index.html`, replace the empty `REIYAI_ENDPOINT` value with that Worker URL and commit the change.

The provider key belongs only in the Worker secret. Never paste it into `index.html`, GitHub Pages, or browser local storage.

## Current ReiyAI capabilities

- Receives the selected problem title, description, difficulty and current editor code.
- Provides progressive hints, problem explanations, debugging guidance and optimization suggestions.
- Keeps recent chat context for follow-up questions.
- Does not claim that it executed code; use the Run and Submit controls for that.

## Hosting note

GitHub Pages serves the static website. The Worker is a separate deployment and must be configured once before live AI replies work.
