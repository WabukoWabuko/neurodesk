# NeuroDesk - AI Research Assistant

**Docker-First Development** (Windows + WSL2 Recommended)

## Quick Start (VS Code)

1. Open project in VS Code
2. Install **Dev Containers** extension
3. Press `Ctrl+Shift+P` → **Dev Containers: Reopen in Container**
4. Wait for setup (first time takes 5-10 mins)

## Available Services
- `dev` → Main development container (Node + Python + Rust)
- Postgres + pgvector
- Redis
- Ollama (local LLMs)

## Development Commands (Inside Container)

```bash
# Install all deps
pnpm install

# Start backend services
pnpm --filter gateway dev

# Start Desktop App (Tauri)
cd apps/desktop && pnpm tauri dev