# SEO international : contenu différencié par pays

Les pages marchés et articles marchés sont servies par pays et par langue (ex. `/en/markets/usa/...`, `/fr/markets/france/...`, `/ar/markets/uae/...`). Pour que les moteurs de recherche ne considèrent pas ces URLs comme du contenu dupliqué, **chaque fichier sous `content/markets/{countrySlug}/` doit être rédigé spécifiquement pour ce pays**. Éviter le copier-coller entre pays avec de légères variations.

## Checklist éditoriale pour les articles marchés

Lors de la rédaction ou de la mise à jour d’un article dans `content/markets/{countrySlug}/*.md`, vérifier que le contenu inclut une vraie différenciation pour le pays concerné :

### 1. Références locales

- Clients, partenaires ou études de cas situés ou actifs dans le pays.
- Chiffres, noms d’entreprises ou de secteurs pertinents pour le marché local.
- Témoignages ou exemples ancrés dans le pays lorsque c’est possible.

### 2. Réglementation locale

- Cadre juridique, fiscal ou sectoriel du pays (obligations, autorités, régulateurs).
- Normes ou pratiques spécifiques au marché (ex. règles M&A, gouvernance, reporting).
- Références aux textes ou organismes locaux quand cela ajoute de la valeur.

### 3. Contexte économique local

- Tendances du marché, PIB, secteurs en croissance ou en restructuration.
- Données ou statistiques locales (sources identifiées).
- Enjeux économiques ou géopolitiques propres au pays ou à la région.

### 4. Terminologie locale

- Vocabulaire métier et juridique utilisé dans le pays (ou la langue cible).
- Formulations attendues par les lecteurs locaux (ex. termes réglementaires, titres, dénominations).
- Éviter une traduction littérale d’un texte générique ; adapter le ton et les références.

## Bonnes pratiques

- **Un pays = un contenu pensé pour ce pays** : ne pas dupliquer un même texte en changeant uniquement le nom du pays.
- **Sources et données** : privilégier des sources et des chiffres locaux ou régionaux quand c’est pertinent.
- **Métadonnées** : remplir `title`, `description` et `keywords` dans le frontmatter en les adaptant au pays et à la langue (références locales, termes de recherche pertinents pour le marché).

## Champs frontmatter suggérés (optionnel)

Pour structurer la différenciation, les rédacteurs peuvent s’appuyer sur des champs comme :

- **local_references** : clients, partenaires ou cas concrets du pays.
- **local_regulation** : éléments clés du cadre juridique ou réglementaire local.
- **local_context** : faits économiques ou de marché spécifiques au pays.

Ces champs peuvent rester en commentaire dans les brouillons ou être utilisés dans le corps de l’article ; ils ne sont pas obligatoires pour l’affichage.
