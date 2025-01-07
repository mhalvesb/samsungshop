import styled from "styled-components";


export const ArrowL = styled.div`
  cursor: pointer;
  width: 50px;
  height: 60px;
  position: absolute;
  left: 50px;
  transform: translateX(-50%) translateY(-50%);
  transition: transform 0.1s;
  &:active {
    transform: translateX(-50%) translateY(-50%) scale(1);
    
  }
`;

// Componente para a parte superior da seta
export const ArrowTopL = styled.div`
border: 0;
  background-color: #047857;
  width: 35px;
  height: 4px;
  position: absolute;
  top: 47.5%;
  right: 100%;
  transform: rotate(135deg);
  transform-origin: bottom right;
  
  &::after {
    content: "";
    background-color: #022c22;
    position: absolute;
    top: 0;
    height: 100%;
    left: 100%;
    right: 0;
    transition: all 0.1s;
  }

  ${ArrowL}:hover &::after {
    left: 0;
    transition-delay: 0.15s;
  }
`;

// Componente para a parte inferior da seta
export const ArrowBottomL = styled.div`
border: none;
  background-color: #047857;
  width: 35px;
  height: 4px;
  position: absolute;
  top: 53.5%;
  right: 100%;
  transform: rotate(-135deg);
  transform-origin: top right;
  
  &::after {
    content: "";
    background-color: #022c22;
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    right: 100%;
    transition: all 0.2s;
  }

  ${ArrowL}:hover &::after {
    right: 0;
    transition-delay: 0s;
  }
`;



export const ArrowR = styled.div`
  cursor: pointer;
  width: 50px;
  height: 60px;
  position: absolute;
  right: 0px;
  transform: translateX(-50%) translateY(-50%);
  transition: transform 0.1s;
  &:active {
    transform: translateX(-50%) translateY(-50%) scale(1);
    
  }
`;

// Componente para a parte superior da seta
export const ArrowTopR = styled.div`
border: 0;
  background-color: #047857;
  width: 35px;
  height: 4px;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: rotate(45deg);
  transform-origin: bottom right;
  
  &::after {
    content: "";
    background-color: #022c22;
    position: absolute;
    top: 0;
    height: 100%;
    left: 100%;
    right: 0;
    transition: all 0.15s;
  }

  ${ArrowR}:hover &::after {
    left: 0;
    transition-delay: 0.1s;
  }
`;

// Componente para a parte inferior da seta
export const ArrowBottomR = styled.div`
border: none;
  background-color: #047857;
  width: 35px;
  height: 4px;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: rotate(-45deg);
  transform-origin: top right;
  
  &::after {
    content: "";
    background-color: #022c22;
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    right: 100%;
    transition: all 0.2s;
  }

  ${ArrowR}:hover &::after {
    right: 0;
    transition-delay: 0s;
  }
`;