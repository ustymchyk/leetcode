function canConstruct(ransomNote: string, magazine: string): boolean {
  const lettersMagazine = new Magazine(magazine);

  for (let i = 0; i < ransomNote.length; i++) {
    if (!lettersMagazine.get(ransomNote[i])) {
      return false;
    }
  }

  return true;
}

class Magazine {
  private map: Record<string, number> = {};

  constructor(magazine: string) {
    for (let i = 0; i < magazine.length; i++) {
      this.add(magazine[i]);
    }
  }

  private add(letter: string): void {
    const capacity = this.map[letter];

    this.map[letter] = capacity + 1 || 1;
  }

  public get(letter: string): boolean {
    const capacity = this.map[letter];
    const result = Boolean(capacity);

    this.map[letter] = capacity - 1;
    return result;
  }
}
