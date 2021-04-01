import React from 'react'
import styled, { css } from 'styled-components'

//스타일을 가진 컴포넌트 만들기
//장점: class name이라던지 우선순위라던지를 고민안해도됩니다.
const Container = styled.div`
  margin-top: 5px;
  width: 100px;
  height: 100px;
  border: 1px;
`

const grayColor1 = css`
  font-size: 12px;
  color: #999;
  margin-top: 2px;
`

const grayColor2 = css`
  font-size: 12px;
  color: #999;
  margin-bottom: 4px;
`

const blackColor = css`
  font-size: 14px;
  color: black;
`

const Image = styled.img``
const Title = styled.div`
  ${blackColor}
`
const Author = styled.div`
  ${grayColor1}
`
const Description = styled.div`
  ${grayColor2}
`

const Badge = styled.div``

function Webtoon({ webtoon }) {
  const { title, author, description, isUp, imageUrl } = webtoon

  return (
    <Container>
      <Image src={imageUrl} />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Description>{description}</Description>
      {isUp && <Badge>UP</Badge>}
    </Container>
  )
}

export default Webtoon
