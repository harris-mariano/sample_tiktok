import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { object } from 'prop-types';

const Home = ({ tiktok_objects }) => {
  // const [tiktokUrls, setTiktokUrls] = useState([])

  // useEffect(() => {
  //   urls.map((url) => {
  //     axios.get(`https://www.tiktok.com/oembed?url=${url}`)
  //       .then((res) => {
  //         console.log(res.data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   })
  // })

  const objects = tiktok_objects.map((object, index) => {
    return (
      <div key={ index } className="col-md-4">
        <div className="card-body" dangerouslySetInnerHTML={{ __html: object.html }}></div>
      </div>
    )
  })

  return (
    <div className="">
      <div className="row">
        { objects }
      </div>
    </div>
  );
};

export default Home