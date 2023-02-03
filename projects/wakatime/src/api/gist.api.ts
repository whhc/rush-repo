// const TOKEN = ``
const GIST_ID = `50136de400dbee1221ced41a306f5f44`;
// const GIST_FILENAME = `summaries_2023-01-05.json`

export async function getGistData() {
  const req = await fetch(`https://api.github.com/gists/${GIST_ID}`);
  const gist = await req.json();
  return gist.files;
}
