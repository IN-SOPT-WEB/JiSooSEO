import styled from 'styled-components'
import lock from '../assets/lock.png';

export default function RockModal() {
  return (
    <>
    <StLockModalWrapper>
      <img src={lock} alt="자물쇠사진"/>
    </StLockModalWrapper>
    </>
  )
}

const StLockModalWrapper=styled.section`
  position: absolute;
  z-index: 2;

  width: 7rem;
  height: 7rem;

  border-radius: 0.5rem;
  background-color: aliceblue;

  cursor: pointer;

  & > img{
    width: 7rem;
    height: 7rem;
  }
`