export default function guardrail(matchFunction) {
  const queue = [];
  const message = 'Guardrail was processed';
  try {
    const result = matchFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
    queue.push(message);
  }
  return queue;
}
