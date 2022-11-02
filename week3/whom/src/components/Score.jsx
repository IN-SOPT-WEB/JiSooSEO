import styled from "styled-components";
import { useState } from "react";

export default function Score() {
    const [score,setScore] = useState(0)
    return (
      <ScoreDom>{score} 점</ScoreDom>
    )
  }

const ScoreDom=styled.h1`
    background-color: skyblue;
    padding: 10px;
    margin:0;
`