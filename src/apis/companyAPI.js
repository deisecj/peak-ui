export const singleCompany = async (companyID) =>  {
  const response = await fetch('/api/companies/' + companyID, {
    method: 'GET',
  });
  return await response.json();
}
