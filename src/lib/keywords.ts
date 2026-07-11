/** Normalise une chaîne pour comparaison mots-clés (accents, casse). */
export function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Évalue une réponse ouverte.
 * Chaque entrée de `requiredGroups` est un groupe OU séparé par `|`
 * (ex. "unité|sku|référence"). Tous les groupes doivent être trouvés.
 */
export function scoreOpenAnswer(
  answer: string,
  requiredGroups: string[],
  optionalKeywords: string[] = [],
): { score: number; matchedRequired: string[]; matchedOptional: string[] } {
  const normalized = normalizeText(answer);
  const matchedRequired: string[] = [];
  const matchedOptional: string[] = [];

  for (const group of requiredGroups) {
    const options = group.split("|").map((o) => normalizeText(o));
    const found = options.find((opt) => opt && normalized.includes(opt));
    if (found) matchedRequired.push(group);
  }

  for (const kw of optionalKeywords) {
    const n = normalizeText(kw);
    if (n && normalized.includes(n)) matchedOptional.push(kw);
  }

  if (requiredGroups.length === 0) {
    return { score: 0, matchedRequired, matchedOptional };
  }

  const ratio = matchedRequired.length / requiredGroups.length;
  let score = ratio;

  if (ratio === 1 && matchedOptional.length > 0) {
    score = 1;
  } else if (ratio > 0 && ratio < 1) {
    score = 0.5;
  }

  return { score, matchedRequired, matchedOptional };
}
