
import { CONSTANTS } from '../constants/Constants'

export async function getStories(stories, firstIndex, lastIndex){

  try {
    const paginatedStories = await stories
      .slice(firstIndex, lastIndex)
      .map(id => {
        return mapToJson(id)
      });

    return await Promise.all(paginatedStories);
  } catch (err) {
    console.log("Error:", err)
  }
}

function mapToJson(id) {
  return fetch(CONSTANTS.BASE_URL + `item/${id}.json`)
    .then(response => response.json())
    .catch((err) => {
      console.log("Error:", err)
    })
}
