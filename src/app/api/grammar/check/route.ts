import { NextRequest, NextResponse } from 'next/server';

interface Replacement {
  value: string;
}

interface Match {
  message: string;
  shortMessage?: string;
  offset: number;
  length: number;
  replacements?: Replacement[];
  rule?: {
    id?: string;
    category?: {
      id?: string;
    };
    issueType?: string;
  };
}

interface LanguageToolResponse {
  matches?: Match[];
}

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

export async function POST(request: NextRequest) {
  try {
    const { text, language = 'en-US' } = await request.json();
    
    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, language }),
    });

    if (!response.ok) {
      throw new Error('External API error');
    }

    const data: LanguageToolResponse = await response.json();
    
    const errors: GrammarError[] = (data.matches || []).map((match: Match) => ({
      message: match.message,
      shortMessage: match.shortMessage || match.message,
      offset: match.offset,
      length: match.length,
      replacements: match.replacements?.map((r: Replacement) => r.value) || [],
      type: match.rule?.issueType || 'grammar',
      rule: {
        id: match.rule?.id || 'unknown',
        category: match.rule?.category?.id || 'grammar',
      },
    }));

    return NextResponse.json({
      text,
      errors,
      language,
      matches: errors.length,
    });
  } catch (error) {
    console.error('Grammar check error:', error);
    return NextResponse.json(
      { error: 'Failed to check grammar' },
      { status: 500 }
    );
  }
}