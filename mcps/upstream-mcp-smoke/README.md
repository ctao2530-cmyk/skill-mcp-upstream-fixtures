# Upstream MCP smoke fixture

Revision 1. A local Node stdio MCP with one tool, `echo_label`. It accepts a short text label and returns the same text. It does not open files, use the network, execute supplied text, or require credentials. No package installation is needed.

This fixture is intended for static import, review, and version detection checks. The platform must not run it as part of reviewing the package.
