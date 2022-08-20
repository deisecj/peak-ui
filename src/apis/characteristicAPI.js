export const getCharacteristics = async () => {
  const response = await fetch('/api/characteristics/', {
    method: 'GET',
  });
  return await response.json();
}
