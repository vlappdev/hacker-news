import { CONSTANTS } from '../constants/Constants'

export function mapToJson(storyID){
  return fetch(`${ CONSTANTS.BASE_URL }item/${storyID}.json`)
    .then(response => response.json())
    .catch(error => {
      console.error('Error:', error);
    });
}
