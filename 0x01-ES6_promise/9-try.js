export default function guardrail(matchFunction) {
  const queue = [];
  try {
    const result = matchFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('guardrail was processed');
  }
  return queue;
}
