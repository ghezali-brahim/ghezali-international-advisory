# 🚀 Checklist de Déploiement - GHEZALI BUSINESS MASTERY

## Avant le Déploiement

### 1. Vérifications Techniques

#### Build et Tests
```bash
# Installer les dépendances
npm install

# Vérifier qu'il n'y a pas d'erreurs de build
npm run build

# Tester localement le build de production
npm run preview
```

#### Fichiers Manquants à Créer

1. **Favicon et Images OG** (Important pour SEO)
   ```
   Créer ces fichiers dans /public/ :
   - favicon.svg (32x32px minimum)
   - og-image.jpg (1200x630px) - Pour Facebook/LinkedIn
   - twitter-image.jpg (1200x630px) - Pour Twitter
   - logo.png (500x500px) - Pour Schema.org
   ```

2. **Pages Légales** (Important pour conformité RGPD)
   ```
   À créer dans /src/pages/ :
   - Privacy.tsx - Politique de confidentialité
   - Legal.tsx - Mentions légales
   - Terms.tsx - Conditions générales
   ```

### 2. Configuration des URLs

⚠️ **IMPORTANT** : Remplacer toutes les occurrences de `https://www.ghezali-business.com/` par votre URL réelle

**Fichiers à modifier :**
```
- index.html (ligne 19, 22-40)
- src/config/seo.ts (toutes les canonical URLs)
- public/sitemap.xml (toutes les <loc>)
- public/.htaccess (pas de changement nécessaire)
```

**Commande de recherche :**
```bash
# Trouver toutes les occurrences
grep -r "ghezali-business.com" .
```

### 3. Informations de Contact

Remplacer les informations fictives :
```
Fichiers concernés :
- src/components/Footer.tsx (téléphone, email)
- src/pages/Contact.tsx (téléphones des bureaux)
- index.html (téléphone dans Schema.org, ligne 59)
```

**À remplacer :**
- `+33 (0)1 XX XX XX XX` → Votre numéro réel
- `contact@ghezali-business.com` → Votre email réel

---

## Déploiement

### Option 1 : Serveur Apache/Nginx

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Upload sur serveur**
   ```bash
   # Le dossier 'dist/' contient tout votre site
   # Uploader via FTP/SFTP ou :
   rsync -avz dist/ user@server:/var/www/html/
   ```

3. **Configuration serveur**
   - Vérifier que `.htaccess` est bien transféré
   - S'assurer que mod_rewrite est activé (Apache)
   - Configurer HTTPS/SSL

### Option 2 : Vercel (Recommandé pour React)

1. **Installation Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Déploiement**
   ```bash
   vercel deploy --prod
   ```

3. **Configuration Vercel**
   ```json
   // vercel.json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

### Option 3 : Netlify

1. **Via interface web**
   - Drag & drop du dossier `dist/`
   - Ou connecter votre repository GitHub

2. **Configuration Netlify**
   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

---

## Juste Après le Déploiement

### 1. Google Search Console (PRIORITÉ 1)

1. **Créer un compte**
   - Aller sur : https://search.google.com/search-console
   - Ajouter votre propriété

2. **Vérifier la propriété**
   - Méthode recommandée : Balise HTML (ajoutée dans `<head>`)
   - Ou via Google Analytics
   - Ou via fichier dans /public/

3. **Soumettre le sitemap**
   ```
   URL à soumettre : https://votre-domaine.com/sitemap.xml
   ```

4. **Demander l'indexation**
   - Aller dans "Inspection de l'URL"
   - Entrer votre URL homepage
   - Cliquer "Demander l'indexation"

### 2. Google Analytics 4 (PRIORITÉ 1)

1. **Créer un compte GA4**
   - https://analytics.google.com/

2. **Obtenir le code de tracking**
   ```html
   <!-- À ajouter dans index.html avant </head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Configurer les conversions**
   - Formulaire de contact soumis
   - Clics sur CTA "Demander une consultation"
   - Téléchargements de brochures

### 3. Google Business Profile (PRIORITÉ 2)

1. **Créer/Revendiquer votre fiche**
   - https://www.google.com/business/

2. **Informations à renseigner**
   ```
   Nom : GHEZALI BUSINESS MASTERY
   Catégorie : Cabinet de conseil en stratégie d'entreprise
   Adresse : Tour Majunga, 6 Place de la Pyramide, 92400 Courbevoie
   Téléphone : +33 (0)1 XX XX XX XX
   Site web : https://votre-domaine.com
   Horaires : Lun-Ven 8h-20h
   ```

3. **Optimiser la fiche**
   - Ajouter 10+ photos professionnelles
   - Rédiger description (750 caractères max)
   - Ajouter services et attributs
   - Obtenir les premiers avis (demander à clients satisfaits)

### 4. Bing Webmaster Tools

1. **Créer un compte**
   - https://www.bing.com/webmasters

2. **Soumettre le sitemap**
   ```
   URL : https://votre-domaine.com/sitemap.xml
   ```

---

## Tests Post-Déploiement

### Checklist de Tests

#### Fonctionnalité
- [ ] Tous les liens internes fonctionnent
- [ ] Formulaire de contact fonctionne
- [ ] Navigation mobile fluide
- [ ] Boutons et CTAs cliquables
- [ ] Images se chargent correctement

#### SEO
- [ ] Toutes les pages s'affichent (pas de 404)
- [ ] URLs propres (sans #)
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] Balises meta visibles (inspecter source)

#### Performance
- [ ] PageSpeed Insights > 85 (mobile et desktop)
- [ ] Temps de chargement < 3 secondes
- [ ] Images optimisées
- [ ] HTTPS actif (cadenas vert)

#### Validation
- [ ] W3C HTML Validator : https://validator.w3.org/
- [ ] Schema.org Validator : https://validator.schema.org/
- [ ] Open Graph Checker : https://www.opengraph.xyz/
- [ ] Twitter Card Validator : https://cards-dev.twitter.com/validator
- [ ] Mobile-Friendly Test : https://search.google.com/test/mobile-friendly

---

## Outils de Test

### Performance
```bash
# PageSpeed Insights
https://pagespeed.web.dev/

# GTmetrix
https://gtmetrix.com/

# WebPageTest
https://www.webpagetest.org/
```

### SEO
```bash
# Screaming Frog (gratuit jusqu'à 500 URLs)
https://www.screamingfrog.co.uk/seo-spider/

# Semrush Site Audit (essai gratuit)
https://www.semrush.com/

# Ahrefs Webmaster Tools (gratuit)
https://ahrefs.com/webmaster-tools
```

---

## Configuration DNS (Si nouveau domaine)

### Records DNS à configurer

```
Type    Nom     Valeur                  TTL
A       @       [IP de votre serveur]   3600
CNAME   www     @                       3600
TXT     @       [Verification Google]   3600
```

### Propagation DNS
- Vérifier : https://www.whatsmydns.net/
- Délai : 24-48h maximum

---

## Suivi des Premiers Jours

### Jour 1-3
- [ ] Vérifier indexation Google (site:votre-domaine.com)
- [ ] Checker erreurs dans Search Console
- [ ] Analyser premiers visiteurs dans Analytics
- [ ] Corriger erreurs éventuelles

### Semaine 1
- [ ] 5+ pages indexées par Google
- [ ] Pas d'erreurs dans Search Console
- [ ] Google Business Profile vérifié
- [ ] Premiers backlinks créés (annuaires)

### Mois 1
- [ ] 50+ visites organiques
- [ ] 10+ backlinks de qualité
- [ ] 3+ articles de blog publiés
- [ ] Premiers mots-clés positionnés

---

## Backup et Sécurité

### Avant de partir en production

1. **Sauvegarder le code source**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Production ready"
   git remote add origin [votre-repo]
   git push -u origin main
   ```

2. **Configurer backups automatiques**
   - Base de données (si applicable)
   - Fichiers uploadés par utilisateurs
   - Configuration serveur

3. **Sécurité**
   - [ ] HTTPS configuré et forcé
   - [ ] Firewall activé
   - [ ] Mises à jour serveur à jour
   - [ ] Monitoring activé (UptimeRobot, etc.)

---

## Support d'Urgence

### En cas de problème après déploiement

1. **Site ne s'affiche pas**
   ```
   - Vérifier DNS (whatsmydns.net)
   - Vérifier configuration serveur
   - Checker logs serveur
   ```

2. **Erreur 404 sur les routes React**
   ```
   - Vérifier .htaccess présent
   - Vérifier mod_rewrite activé
   - Voir fichier de config serveur
   ```

3. **Images ne se chargent pas**
   ```
   - Vérifier chemins relatifs/absolus
   - Checker permissions fichiers (644)
   - Vérifier CORS si images externes
   ```

4. **Formulaire ne fonctionne pas**
   ```
   - Configurer backend/API
   - Ou utiliser service tiers (Formspree, Netlify Forms)
   - Tester en local d'abord
   ```

---

## Contacts Utiles

### Services Recommandés

**Hébergement**
- OVH : support@ovh.com
- O2Switch : support@o2switch.fr
- Vercel : support via dashboard

**Email Professionnel**
- Google Workspace : workspace.google.com
- Microsoft 365 : microsoft.com/microsoft-365

**SSL/HTTPS**
- Let's Encrypt (gratuit) : letsencrypt.org
- Cloudflare (gratuit) : cloudflare.com

---

## Résumé des Actions Critiques

### À faire IMMÉDIATEMENT après déploiement
1. ✅ Vérifier que le site s'affiche correctement
2. ✅ Soumettre sitemap à Google Search Console
3. ✅ Installer Google Analytics
4. ✅ Tester formulaire de contact
5. ✅ Vérifier HTTPS actif

### À faire dans les 48h
1. ✅ Créer Google Business Profile
2. ✅ Soumettre à Bing Webmaster
3. ✅ Premiers posts réseaux sociaux
4. ✅ Newsletter aux contacts existants
5. ✅ Demander premiers avis clients

### À faire dans les 2 semaines
1. ✅ 3 articles de blog publiés
2. ✅ 10 backlinks créés
3. ✅ Annuaires professionnels
4. ✅ Optimisations selon Analytics
5. ✅ Campagne emailing lancée

---

**Bon déploiement ! 🚀**

*En cas de doute, n'hésitez pas à consulter les fichiers SEO-GUIDE.md et OPTIMISATIONS-COMPLETEES.md pour plus de détails.*

