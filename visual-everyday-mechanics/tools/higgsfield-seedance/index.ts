import "dotenv/config";
import dotenv from "dotenv";
import { config, higgsfield } from "@higgsfield/client/v2";

dotenv.config({ path: ".env.local", override: false });

const credentials = process.env.HF_CREDENTIALS;

if (!credentials) {
  console.error(
    "Missing HF_CREDENTIALS. Copy .env.local.example to .env.local and enter your Higgsfield key locally."
  );
  process.exit(2);
}

config({ credentials });

try {
  const result = await higgsfield.subscribe(
    "bytedance/seedance-2.5/text-to-video",
    {
      input: {
        prompt: "A cinematic scene at sunset",
        duration: 5,
        resolution: "720p",
        aspect_ratio: "16:9",
        output_format: "mp4",
        generate_audio: true
      },
      withPolling: true
    }
  );

  if (result.status !== "completed") {
    console.error(`Seedance request ended without success. Status: ${result.status}`);
    process.exit(1);
  }

  const videoUrl = result.video?.url;
  if (!videoUrl) {
    console.error("Seedance completed but returned no video URL.");
    process.exit(1);
  }

  console.log(videoUrl);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Seedance request failed: ${message}`);
  process.exit(1);
}
