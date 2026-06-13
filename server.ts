import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is missing from environment. Please add it in the Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Simulated static logs when Gemini key is offline or calls fail
const staticGalaxyLogs = [
  {
    origin: "Kepler-186f Orbit [Sector 9]",
    year: "2184 AD",
    status: "anomalous",
    payload: "Intercepted weak acoustic oscillations. Analysis suggests ancient resonance pattern from a dead stellar engine. Coordinates locked, but no thermal signatures detected. 'The engine sleeps but still sings.'",
    recommends: "Deploy deep-space survey drone immediately."
  },
  {
    origin: "Vela Pulsar boundary, Void-7",
    year: "2204 AD",
    status: "critical",
    payload: "Transient gravity well detected where empty space should be. Quantum sensors show rapid fluctuations in local spacetime curvature. Signal contains repeating binary sequence: 101100111. It feels... intentional.",
    recommends: "Raise deflectors to max capacity and initiate micro-warp jump."
  },
  {
    origin: "Pleiades Cluster, Station Iris",
    year: "2168 AD",
    status: "warning",
    payload: "Atmospheric harvesters report faint crystalline compounds forming on direct intake ports. Compound behaves like organic code, slowly compiling under solar heat. Thermal purge failed to remove growth.",
    recommends: "Quarantine Station Sector 4 and vent plasma exhaust."
  },
  {
    origin: "Orion Belt, Frontier Outpost Beta",
    year: "2199 AD",
    status: "info",
    payload: "Hyper-wave beacon received echo of a broadcast sent 400 years ago. The echo, however, contains modified voice signatures of the current crew. No local temporal rifts logged.",
    recommends: "Initiate psych evaluation for radar team and run systemic diagnostics."
  }
];

// Server-side API endpoint for deep space signal decryption
app.post("/api/gemini/decrypted-transmission", async (req, res) => {
  const { frequency, encryptionKey } = req.body;

  try {
    const ai = getGeminiClient();

    const prompt = `You are a high-end Deep Space Signal Decoder.
Frequency Channel: ${frequency || "1420 MHz (Hydrogen line)"}
Encryption Cipher: ${encryptionKey || "None"}

Please generate a highly atmospheric, mysterious, and poetic sci-fi intercepted telemetry/communication log. It should read like a transmission from humanity's deep space exploration era.

Format your response strictly as a JSON object with the following schema:
{
  "origin": "Short stellar origin name (e.g. Sagittarius A* Outer Boundary, Void-9)",
  "year": "A future year (e.g. 2196 AD)",
  "status": "One of these strings: 'info', 'warning', 'critical', 'anomalous'",
  "payload": "The intercepted transmission details, atmospheric and poetic (2-3 sentences)",
  "recommends": "A direct exploration recommendation or action query based on the transmission."
}

Do not include any markdown format tags like \`\`\`json or backticks. Return the raw JSON string directly.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const responseText = response.text || "{}";
    const data = JSON.parse(responseText);
    res.json({ success: true, ...data, datasource: "gemini" });

  } catch (error: any) {
    console.warn("Gemini decryption failed or key missing, falling back to offline telemetry databanks:", error.message);
    
    // Choose a random static logs item but add some flavor
    const randomIndex = Math.floor(Math.random() * staticGalaxyLogs.length);
    const mockLog = staticGalaxyLogs[randomIndex];

    res.json({
      success: true,
      origin: mockLog.origin,
      year: mockLog.year,
      status: mockLog.status,
      payload: mockLog.payload,
      recommends: mockLog.recommends,
      datasource: "offline_fallback",
      message: "Simulation active. Add a real GEMINI_API_KEY secret to unlock real-time cosmic AI intercept transmissions."
    });
  }
});

// Start integration with Vite middleware in development view, and static serving in production
async function runServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Cosmos Portal server active on http://0.0.0.0:${PORT}`);
  });
}

runServer();
