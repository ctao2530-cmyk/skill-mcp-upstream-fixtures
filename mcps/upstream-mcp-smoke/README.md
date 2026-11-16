# Upstream MCP smoke fixture

Revision 2. A local Node stdio MCP with one tool, `echo_label`.

Input `{ "label": "alpha" }` returns one text item containing exactly `alpha`.
Missing label, a non-string label, more than 128 ASCII characters, or extra
arguments returns an error.

The entry, tool declaration and access remain unchanged. This package does not
open files, use the network, execute supplied text or require credentials.
No package installation is needed.
