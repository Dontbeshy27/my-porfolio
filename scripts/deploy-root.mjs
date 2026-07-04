import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

execSync('npm run build', { stdio: 'inherit' });

cpSync('dist/index.html', 'index.html');

if (existsSync('assets')) {
  rmSync('assets', { recursive: true, force: true });
}

mkdirSync('assets', { recursive: true });
cpSync('dist/assets', 'assets', { recursive: true });

if (existsSync('dist/favicon.ico')) {
  cpSync('dist/favicon.ico', 'favicon.ico');
}

writeFileSync('.nojekyll', '');

console.log('Built site copied to repo root.');
