export const singleCompany = async (companyID) =>  {
  const response = await fetch('http://localhost:3000/companies/' + companyID, {
    method: 'GET',
  });
  return await response.json();
}
