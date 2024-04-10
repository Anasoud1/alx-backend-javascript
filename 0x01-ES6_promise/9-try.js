export default function guardrail(mathFunction) {
  const arr = [];
  try {
    mathFunction();
  } catch (error) {
    arr.push(String(error));
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
