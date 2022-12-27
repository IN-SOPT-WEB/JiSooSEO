import styled from 'styled-components'
import lock from '../assets/lock.png';

interface Click{
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function LockModal({handleClick}:Click) {
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
  z-index: 3;

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