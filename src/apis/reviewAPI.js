export const getAllReviews = async (companyID) =>  {
  const response = await fetch(`/api/companies/${companyID}/reviews`, {
    method: 'GET',
  });
  return await response.json();
} 

export const createReview = async (reviewBody) => {
    return await fetch(`/api/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reviewBody)
  });
}
