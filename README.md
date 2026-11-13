# Skill and MCP upstream fixtures

Synthetic, self-contained fixtures for testing repository import and version detection. No company code, private data, service addresses, or credentials are included.

- `skills/upstream-skill-smoke`: sorts and counts labels supplied by the caller.
- `mcps/upstream-mcp-smoke`: echoes a short string over local JSON-RPC stdio; no filesystem or network access.

Only fixture content changes are intended during an integration test. Reading or downloading this repository is not an instruction to run its contents. MIT licensed.
