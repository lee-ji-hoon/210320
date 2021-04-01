import React, { useState } from 'react'
//const [값, 값을 바꾸는 함수] = useState(기본값)
function Form() {
  const [formValues, setFormValues] = useState({
    title: '',
    imageUrl: '',
    description: '',
    author: '',
  })

  const handleFormValues = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)

    setFormValues({
      ...formValues, //기존의 값을 다 복사해서
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log('저장 !!', formValues)
  }

  //console.log(formValues)

  return (
    <div>
      <input
        name="imageUrl"
        placeholder="이미지 url"
        value={formValues.imageUrl}
        onChange={handleFormValues}
      />
      <input
        name="title"
        placeholder="웹툰 타이틀"
        value={formValues.title}
        onChange={handleFormValues}
      />
      <input
        name="author"
        placeholder="웹툰 작가"
        value={formValues.author}
        onChange={handleFormValues}
      />
      <input
        name="description"
        placeholder="웹툰 설명"
        value={formValues.description}
        onChange={handleFormValues}
      />
      <button onClick={handleSubmit}>저장</button>
    </div>
  )
}

export default Form
