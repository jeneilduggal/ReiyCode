# ReiyCode — C++ Practice Lab

A static browser-based C++ practice workspace. It includes a C++17 editor, topic prompts, custom stdin/expected output, Judge0 submission polling, and execution time/memory display.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **GitHub Actions** if a workflow is present, or **Deploy from a branch → main → /(root)**.
3. Save and wait for the Pages deployment to finish.
4. Your site should appear at https://jeneilduggal.github.io/ReiyCode/

## C++ execution

The page submits source code to the public Judge0 CE endpoint at https://ce.judge0.com. It does not run C++ on GitHub Pages. The public service may impose rate limits, temporary downtime, CORS restrictions, or other usage policies. There is no guaranteed unlimited free quota. Source code and stdin are sent to that provider when Run Code is clicked.

No API key is embedded in this public repository. Do not put private API keys in frontend JavaScript.

## Notes

- The editor currently runs complete C++ console programs using stdin/stdout.
- Runtime and memory are reported when the execution provider returns them.
- The Time/Space complexity selectors are learner notes; Big-O is not automatically inferred.
- If the public Judge0 endpoint blocks browser requests, a small server-side proxy is required. A proxy must keep any API secret on the server.

## ReiyAd features

- Stack and queue problem library with LeetCode links
- Pattern practice section with 22 original pattern exercises
- Striver A2Z roadmap link to the maintained official sheet
- C++ syntax highlighting, custom test cases, Run and Submit
- Pass-count summary, Judge0 runtime and memory reporting
- Obsidian dark and ivory beige themes
- Local draft autosave; optional Firebase Google sign-in and cloud sync

Problem descriptions are original summaries with examples and links to the official source. The site does not reproduce complete copyrighted LeetCode statements. The catalogue is curated, not a claim that it contains every question ever tagged Stack or Queue.

## Enable Firebase Google sign-in and cloud sync

Firebase is prepared but **not active until you configure your own Firebase project**:

1. Create a project at https://console.firebase.google.com/ and register a Web App.
2. In **Authentication → Sign-in method**, enable **Google**.
3. In **Authentication → Settings → Authorized domains**, add `jeneilduggal.github.io`.
4. Create a **Cloud Firestore** database.
5. Open `firebase-config.js` in this repository and replace the placeholder values with the Web App config shown by Firebase. The web config is public client configuration; never paste a service-account private key here.
6. In Firestore → Rules, publish the contents of `firestore.rules`. These rules restrict each signed-in user to their own documents.
7. Commit the config change, wait for GitHub Pages to redeploy, then use **Dashboard → Profile / Login → Continue with Google**.

Until these steps are completed, the app continues to use browser-local profile and draft storage. The Firebase config file intentionally contains placeholders; no credentials were fabricated.
