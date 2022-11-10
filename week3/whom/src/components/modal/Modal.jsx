import styled from "styled-components";
export default function Modal({correct,onClose}) {
    return(
    <ModalDom>
        {correct==="1"?(<Dom><Img src="img/correct.png" alt="#"/>잘했어 친구!</Dom>):(<Dom><Img src="img/wrong.png" alt="#"/>장난해 친구?</Dom>)}
        <Button onClick={()=>onClose()}>X</Button>
    </ModalDom>);
}
const ModalDom=styled.section`
    width: 400px;
    height: 400px;
    border: 1px solid black;
    position: absolute;
    background-color: white;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 15pt;
    border-radius: 10px;
    overflow: hidden;
`
const Dom=styled.div`
    font-size: 15pt;
    text-align: center;
`
const Button=styled.button`
    border:0px;
    background-color: grey;
    border-radius: 50px;
    padding: 10px;
    margin: 20px 0px 10px 0px;
    width: 40px;
    font-size: 15pt;
    height: 40px;
`
const Img=styled.img`
        width: 400px;
    height: 305px;
`