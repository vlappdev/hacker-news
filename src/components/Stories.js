import React, {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Story from './Story'
import Pagination from './Pagination'
import { CONSTANTS } from '../constants/Constants'

function Stories() {

  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { location } = useHistory();
  const pathName = location.pathname;

  const [ displayedStories, setDisplayedStories ] = useState([]);

  useEffect(()=>{

    fetch(`${ CONSTANTS.BASE_URL }${ pathName === "/" ? CONSTANTS.TOPSTORIES : pathName }.json`)
      .then(response => response.json())
      .then(data => {
        setStories(data);
        setIsLoading(true)
      })
      .catch((err) => {
        console.log("Error:", err)
      })
  }, [pathName]);

  const [pageTitle] = useState(() => {
    return pathName === "/" ?
      CONSTANTS.TOP_STORIES :
      pathName.slice(1).replace(/sto/g, " sto")
  });

  return (
    <main role="main" className="container">
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <h6 className="border-bottom border-gray pb-2 mb-0 text-capitalize">{ pageTitle }</h6>
        { displayedStories.map(story => {
            return <Story story={ story } key={ story.id } />
          })
        }
        { isLoading &&
          <Pagination stories={ stories } setDisplayedStories={ setDisplayedStories }/>
        }
      </div>
    </main>
  )
}

export default Stories;
