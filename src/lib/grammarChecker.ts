export interface GrammarError {
  message: string;
  shortMessage: string;
  offset: number;
  length: number;
  replacements: string[];
  type: string;
  rule: {
    id: string;
    category: string;
  };
}

export interface GrammarCheckResult {
  text: string;
  errors: GrammarError[];
  language: string;
  matches: number;
}

export async function checkGrammar(
  text: string,
  language: string = 'en-US'
): Promise<GrammarCheckResult> {
  try {
    const response = await fetch('/api/grammar/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, language }),
    });

    if (!response.ok) {
      throw new Error('Grammar check failed');
    }

    return response.json();
  } catch (error) {
    console.error('Grammar check error:', error);
    return { text, errors: [], language, matches: 0 };
  }
}

export function highlightErrors(
  original: string,
  errors: GrammarError[]
): { text: string; highlights: Array<{ text: string; error: GrammarError | null }> } {
  if (errors.length === 0) {
    return { text: original, highlights: [{ text: original, error: null }] };
  }

  const sortedErrors = [...errors].sort((a, b) => a.offset - b.offset);
  const highlights: Array<{ text: string; error: GrammarError | null }> = [];
  
  let currentIndex = 0;

  for (const error of sortedErrors) {
    if (error.offset > currentIndex) {
      highlights.push({
        text: original.slice(currentIndex, error.offset),
        error: null,
      });
    }

    highlights.push({
      text: original.slice(error.offset, error.offset + error.length),
      error,
    });

    currentIndex = error.offset + error.length;
  }

  if (currentIndex < original.length) {
    highlights.push({
      text: original.slice(currentIndex),
      error: null,
    });
  }

  return {
    text: original,
    highlights,
  };
}

export function getErrorSummary(errors: GrammarError[]): string {
  const categories: Record<string, number> = {};
  
  for (const error of errors) {
    const category = error.rule.category || 'grammar';
    categories[category] = (categories[category] || 0) + 1;
  }

  return Object.entries(categories)
    .map(([category, count]) => `${count} ${category} issue${count > 1 ? 's' : ''}`)
    .join(', ');
}

export function getScoreColor(matches: number): string {
  if (matches === 0) return 'text-[#58cc02]';
  if (matches <= 2) return 'text-[#ff9600]';
  return 'text-[#ff4b4b]';
}

export function getScoreMessage(matches: number): string {
  if (matches === 0) return 'Perfect! No issues found.';
  if (matches === 1) return 'Great job! Just 1 issue found.';
  if (matches <= 3) return `Good work! ${matches} issues found.`;
  if (matches <= 5) return `Keep practicing! ${matches} issues found.`;
  return `${matches} issues found. Keep studying!`;
}