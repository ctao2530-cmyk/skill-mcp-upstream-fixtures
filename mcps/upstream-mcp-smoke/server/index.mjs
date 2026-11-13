import { createInterface } from 'node:readline';

const tool = {
  name: 'echo_label', description: 'Return the provided synthetic text label.',
  inputSchema: { type: 'object', properties: { label: { type: 'string', maxLength: 128 } }, required: ['label'], additionalProperties: false },
  annotations: { readOnlyHint: true, destructiveHint: false, openWorldHint: false },
};
const send = value => process.stdout.write(JSON.stringify(value) + '\n');
createInterface({ input: process.stdin, crlfDelay: Infinity }).on('line', line => {
  if (line.length > 8192) return;
  let message;
  try { message = JSON.parse(line); }
  catch { send({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Invalid JSON' } }); return; }
  if (!message || typeof message !== 'object' || message.id === undefined) return;
  const reply = result => send({ jsonrpc: '2.0', id: message.id, result });
  if (message.method === 'initialize') {
    reply({ protocolVersion: message.params?.protocolVersion ?? '2025-03-26', capabilities: { tools: {} }, serverInfo: { name: 'upstream-mcp-smoke', version: '1.0.0' } }); return;
  }
  if (message.method === 'ping') { reply({}); return; }
  if (message.method === 'tools/list') { reply({ tools: [tool] }); return; }
  if (message.method === 'tools/call' && message.params?.name === tool.name) {
    const args = message.params.arguments;
    if (!args || typeof args.label !== 'string' || args.label.length > 128 || Object.keys(args).some(key => key !== 'label')) {
      reply({ content: [{ type: 'text', text: 'Provide exactly one label string of up to 128 characters.' }], isError: true }); return;
    }
    reply({ content: [{ type: 'text', text: args.label }], isError: false }); return;
  }
  send({ jsonrpc: '2.0', id: message.id, error: { code: -32601, message: 'Unknown method' } });
});
