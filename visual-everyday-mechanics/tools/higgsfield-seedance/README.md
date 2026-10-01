# Higgsfield Seedance 2.5 SDK smoke test

Server-side TypeScript integration using the official `@higgsfield/client/v2` SDK.

## Local setup

1. Run `npm install`.
2. Copy `.env.local.example` to `.env.local`.
3. In Higgsfield API > API keys, enter the credential locally as:
   `HF_CREDENTIALS=key-id:key-secret`
4. Run `npm run seedance:test`.

The command makes a **billable** 5-second Seedance 2.5 text-to-video request at 720p, 16:9 and prints only the generated video URL on success.

The real `.env.local` is ignored by Git. Never paste credentials into chat, logs, browser code, or commits.
