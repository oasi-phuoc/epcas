/** Détecte le tableau standard des pages glossaire (Terme | Lien | Définition). */
export function isGlossaryTableHeader(header: string[]): boolean {
  if (header.length !== 3) return false;
  const norm = header.map((c) =>
    c
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim(),
  );
  return (
    norm[0].includes("terme") &&
    norm[1].includes("lien") &&
    norm[2].includes("definition")
  );
}

export function glossaryTableColumnIndexes(): {
  termIdx: number;
  linkIdx: number;
  defIdx: number;
} {
  return { termIdx: 0, linkIdx: 1, defIdx: 2 };
}
