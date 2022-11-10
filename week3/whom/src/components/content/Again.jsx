import styled from "styled-components"

export default function Again({onClick}) {
    return (
      <AgainDom onClick={()=>onClick()}>다시하기</AgainDom>
    )
  }

const AgainDom=styled.h1`
    background-color: gray;
    padding: 10px;
    margin:0;
    cursor: pointer;
`