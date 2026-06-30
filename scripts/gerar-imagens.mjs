// Gera as imagens do site (hero + pratos do cardápio) via API de imagens da OpenAI,
// depois comprime/redimensiona pra JPEG com o `sips` (macOS) — sem isso, as imagens
// saem em PNG de ~1.5-2MB cada e derrubam a performance (LCP) do site.
// Uso: node scripts/gerar-imagens.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Carrega OPENAI_API_KEY do .env sem dependências externas.
const envPath = join(root, ".env");
const envText = readFileSync(envPath, "utf-8");
const apiKey = envText
  .split("\n")
  .map((l) => l.trim())
  .find((l) => l.startsWith("OPENAI_API_KEY="))
  ?.split("=")[1]
  ?.trim();

if (!apiKey) {
  console.error("OPENAI_API_KEY não encontrada em .env");
  process.exit(1);
}

const outDir = join(root, "public", "images");
mkdirSync(outDir, { recursive: true });

const styleSuffix =
  "fotografia profissional de alta gastronomia, estilo editorial luxuoso, fundo escuro preto/grafite, " +
  "luz dramática lateral quente, detalhes dourados sutis, alta definição, sem texto, sem logotipos, sem pessoas";

const jobs = [
  {
    file: "hero.jpg",
    size: "1536x1024",
    resampleWidth: 1536,
    quality: 76,
    prompt:
      "Mesa de restaurante sofisticado posta para jantar, talheres dourados, taça de vinho, " +
      "ambiente de alta gastronomia paulista, " +
      styleSuffix,
  },
  {
    file: "pao-de-alho.jpg",
    size: "1024x1024",
    resampleWidth: 480,
    quality: 78,
    prompt: "Pão de alho grelhado na brasa com manteiga de ervas derretida, prato de pedra escura, " + styleSuffix,
  },
  {
    file: "carpaccio.jpg",
    size: "1024x1024",
    resampleWidth: 480,
    quality: 78,
    prompt: "Carpaccio de carne fatiado fino com alcaparras e lascas de parmesão, prato branco sobre fundo escuro, " + styleSuffix,
  },
  {
    file: "picanha.jpg",
    size: "1024x1024",
    resampleWidth: 480,
    quality: 78,
    prompt: "Picanha grelhada na brasa fatiada, suculenta, com farofa e vinagrete ao lado, " + styleSuffix,
  },
  {
    file: "risoto.jpg",
    size: "1024x1024",
    resampleWidth: 480,
    quality: 78,
    prompt: "Risoto cremoso de filé mignon com funghi secco e lascas de parmesão, prato fundo escuro, " + styleSuffix,
  },
  {
    file: "bacalhau.jpg",
    size: "1024x1024",
    resampleWidth: 480,
    quality: 78,
    prompt: "Bacalhau assado com azeite extra virgem, batatas e azeitonas, apresentação rústica elegante, " + styleSuffix,
  },
  {
    file: "petit-gateau.jpg",
    size: "1024x1024",
    resampleWidth: 480,
    quality: 78,
    prompt: "Petit gâteau de chocolate quente derretendo ao corte, bola de sorvete de creme ao lado, " + styleSuffix,
  },
];

async function gerarImagem({ file, prompt, size, resampleWidth, quality }) {
  const dest = join(outDir, file);
  if (existsSync(dest)) {
    console.log(`↷ ${file} já existe, pulando`);
    return;
  }

  console.log(`→ gerando ${file}...`);
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size,
      n: 1,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Falha ao gerar ${file}: ${res.status} ${errText}`);
  }

  const data = await res.json();
  const b64 = data.data[0].b64_json;
  const raw = join(outDir, `_raw-${file}.png`);
  writeFileSync(raw, Buffer.from(b64, "base64"));

  execFileSync("sips", [
    "-s", "format", "jpeg",
    "-s", "formatOptions", String(quality),
    "--resampleWidth", String(resampleWidth),
    raw,
    "--out", dest,
  ]);
  unlinkSync(raw);
  console.log(`✓ ${file} salvo (otimizado)`);
}

for (const job of jobs) {
  await gerarImagem(job);
}

console.log("Concluído.");
