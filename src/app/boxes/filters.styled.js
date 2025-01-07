import React from "react";
import styled, {keyframes} from "styled-components";


export const ripple = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(20);
  }
`;

// Estilos principais
export const Wrapper = styled.div`
  --s-xsmall: 0.625em;
  --s-small: 1.2em;
  --border-width: 1px;
  --c-primary: #5f11e8;
  --c-primary-20-percent-opacity: rgb(95 17 232 / 20%);
  --c-primary-10-percent-opacity: rgb(95 17 232 / 10%);
  --t-base: 0.4s;
  --t-fast: 0.2s;
  --e-in: ease-in;
  --e-out: cubic-bezier(0.11, 0.29, 0.18, 0.98);
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: var(--s-small);
  color:	#5D3FD3;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  clip: rect(0 0 0 0);
  border: 0;
`;

export const CheckboxSymbol = styled.span`
  display: flex;
  margin-right: calc(var(--s-small) * 0.7);
  border: var(--border-width) solid var(--c-primary);
  position: relative;
  border-radius: 0.1em;
  width: 1.5em;
  height: 1.5em;
  transition: box-shadow var(--t-base) var(--e-out), background-color var(--t-base);
  box-shadow: 0 0 0 0 var(--c-primary-10-percent-opacity);

  &:after {
    content: "";
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    width: 0.25em;
    height: 0.25em;
    background-color: var(--c-primary-20-percent-opacity);
    opacity: 0;
    border-radius: 3em;
    transform: scale(1);
    transform-origin: 50% 50%;
  }

  svg {
    width: 1em;
    height: 1em;
    margin: auto;
    fill: none;
    stroke-width: 3;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    color: var(--c-primary);
  }

  path {
    transition: stroke-dashoffset var(--t-fast) var(--e-in);
    stroke-dasharray: 30px, 31px;
    stroke-dashoffset: 31px;
  }
`;

export const TextWrapper = styled.p`
  margin: 0;
`;

// Estilos quando o checkbox está checado
export const CheckboxTrigger = styled(HiddenCheckbox)`
  &:checked + ${CheckboxSymbol}:after {
    animation: ${ripple} 1.5s var(--e-out);
  }

  &:checked + ${CheckboxSymbol} svg path {
    transition: stroke-dashoffset var(--t-base) var(--e-out);
    stroke-dashoffset: 0;
  }

  &:focus + ${CheckboxSymbol} {
    box-shadow: 0 0 0 0.25em var(--c-primary-20-percent-opacity);
  }
`;

