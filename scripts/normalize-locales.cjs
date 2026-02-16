/**
 * Normalise les fichiers de traduction après un `i18nexus pull`.
 * Reformatte common.json et default.json en pretty-print (2 espaces).
 *
 * Usage: node scripts/normalize-locales.cjs
 * Ou après pull: npm run i18n:pull
 */

const fs = require('fs');
const path = require('path');

const LOCALES_DIR = path.join(__dirname, '..', 'locales');
const NAMESPACES = ['common', 'default'];

function normalizeLocales() {
  if (!fs.existsSync(LOCALES_DIR)) {
    console.warn('Dossier locales/ introuvable.');
    return;
  }

  const langDirs = fs.readdirSync(LOCALES_DIR).filter((name) => {
    const full = path.join(LOCALES_DIR, name);
    return fs.statSync(full).isDirectory();
  });

  let normalized = 0;

  for (const lang of langDirs) {
    for (const ns of NAMESPACES) {
      const filePath = path.join(LOCALES_DIR, lang, `${ns}.json`);
      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, 'utf8');
          const data = JSON.parse(raw);
          const formatted = JSON.stringify(data, null, 2);
          fs.writeFileSync(filePath, formatted + '\n', 'utf8');
          normalized++;
        } catch (e) {
          console.error(`${lang}/${ns}.json: erreur (${e.message})`);
        }
      }
    }
  }

  console.log(`Normalisé: ${normalized} fichier(s) (common.json + default.json).`);
}

normalizeLocales();
