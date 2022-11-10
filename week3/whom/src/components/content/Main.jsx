import styled from "styled-components";
import data from "../../db/data.json";
import { useState,useEffect } from "react";
import Score from "./Score";
import Again from "./Again";
import Modal from '../modal/Modal';
import Portal from "../modal/Portal";

export default function Main() {
  const [id, setId] = useState(1)//첫 시작을 1로 하고, 정답을 맞출때마다 +1이 되도록. 정답을 모두 맞춰서 id가 6이 되면 종료한다.
  let filteringSet=data.toystorys.filter((toystory)=>toystory.id===id)[0]

  const [img, setImg] = useState(`${filteringSet.img}`) //data로부터 이미지 경로 읽어오기
  const [list, setlist] = useState(`${filteringSet.list}`.split(","))//data로부터 리스트 읽어오기
  const [answer,setAnswer] = useState(`${filteringSet.answer}`)//data로부터 정답 읽어오기
  const [score,setScore]=useState(0)
  const [correct,setCorrect]=useState("1")
  const [modalOn, setModalOn] = useState(false);

  useEffect(() => {
    
  }, [score,setScore])

  let filtering=data.toystorys.filter((toystory)=>toystory.id===id+1)[0];
  const answerClick=(value)=>{
    if (value===answer){
      // 정답을 선택한 경우 = 선택한 정답인 value와 실제 정답인 answer이 같은 경우
      setId(id+1) 
      setImg(`${filtering.img}`) //비동기 이슈로 id에 +1을 더해주었다
      setlist(`${filtering.list}`.split(","))//split이용해서 읽어온 스트링을 리스트화했다
      setAnswer(`${filtering.answer}`)
      setScore(score+1)
      setCorrect("1")

      handleModal()
    }
    else{
      setCorrect("0")
      handleModal()
    }
  }
  let filteringToFirst=data.toystorys.filter((toystory)=>toystory.id===1)[0];
  const againClick=()=>{
    setId(1)
    setScore(0)
    setImg(`${filteringToFirst.img}`) //가장 처음으로 돌아감
    setlist(`${filteringToFirst.list}`.split(","))
    setAnswer(`${filteringToFirst.answer}`)
    setCorrect("1")
  }

  const handleModal = () => {
    setModalOn(!modalOn);
  };

    return (
      <>
      <Score score={score}/>
      {score===5?(<>{{correct}==="1"?(<Portal>{modalOn && <Modal correct={correct} onClose={handleModal}></Modal>}</Portal>):(<Portal>{modalOn && <Modal correct={correct} onClose={handleModal}></Modal>}</Portal>)}<><EndImg src="img/toystory.png" alt="#"/><Font>끝</Font></></>):(
      <>
      {{correct}==="1"?(<Portal>{modalOn && <Modal correct={correct} onClose={handleModal}></Modal>}</Portal>):(<Portal>{modalOn && <Modal correct={correct} onClose={handleModal}></Modal>}</Portal>)}
      <img src={img} alt="#" />
      <AnswerButtonDom> 
        {/* map함수로 정답후보 리스트 하나씩 읽어오기 */}
              {list.map((value)=>(<AnswerButton onClick={()=>answerClick(value)}>{value}</AnswerButton>))}
      </AnswerButtonDom>
      </>
      )}
        <Again onClick={()=>againClick()}/>
      
      </>
    )
  }

const AnswerButtonDom=styled.section`
  display: flex;
  justify-content:center;
`
const AnswerButton=styled.button`
  padding: 5px 15px;
  margin: 10px;
  border-radius: 40px;
  border: 1px solid ;
  font-size: 12pt;
  background-color: skyblue;
  cursor: pointer;
`
const Font=styled.h1`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 50pt;
    margin: 0;
    padding: 0;
`
const EndImg=styled.img`
  width: 500px;
`
