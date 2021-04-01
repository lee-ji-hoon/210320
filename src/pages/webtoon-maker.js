import React from 'react'

import Form from '../components/webtoon-maker/form'
import Webtoon from '../components/webtoon-maker/webtoon'

function WebtoonMaker() {
  // state
  return (
    <div>
      <Form />
      <Webtoon
        webtoon={{
          title: '독립일기',
          author: '자까',
          description: '관심 50만+',
          isUp: true,
          imageUrl:
            'https://image-comic.pstatic.net/webtoon/748105/thumbnail/thumbnail_IMAG19_d8bd40f2-76f6-448b-8650-126c0d5137b6.jpg',
        }}
      />
    </div>
  )
}

export default WebtoonMaker
