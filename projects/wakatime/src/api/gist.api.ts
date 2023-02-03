import api from './api';

// const TOKEN = ``
const GIST_ID = `50136de400dbee1221ced41a306f5f44`;
// const GIST_FILENAME = `summaries_2023-01-05.json`
const GIST_URL = `https://api.github.com/gists/${GIST_ID}`;

export async function getGistData() {
  const req = await fetch(GIST_URL);
  const gist = await req.json();
  return gist.files;
}

export type GistData = {
  files: {
    [key: string]: {
      content: string;
      filename: string;
      language: 'JSON' | 'Markdown';
      raw_url: string;
      size: 38;
      truncated: boolean;
      type: 'text/markdown' | 'application/json';
    };
  };
  [key: string]: any;
};

export const fetchGistData = async () => {
  const response = await api.get<GistData>(GIST_URL);
  return response.data;
};
