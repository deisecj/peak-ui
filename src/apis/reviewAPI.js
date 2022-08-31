export const getAllReviews = async (companyID) =>  {
  const response = await fetch(`/api/companies/${companyID}/reviews`, {
    method: 'GET',
  });
  return await response.json();
} 
