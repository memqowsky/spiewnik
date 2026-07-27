import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const distDir = path.join(__dirname, 'dist');

app.use(express.static(distDir));

// Client-side (Hash) routing means every real path is served the same index.html.
app.use((req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Śpiewnik listening on port ${port}`);
});
