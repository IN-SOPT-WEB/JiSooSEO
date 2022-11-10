import styled from "styled-components";

export default function Score(props) {//props로 스코어값 받아오기
    return (
      <ScoreDom>{props.score} 점</ScoreDom>
    )
  }

const ScoreDom=styled.h1`
    background-color: skyblue;
    padding: 10px;
    margin:0;
`