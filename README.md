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
