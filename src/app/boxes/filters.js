import React from 'react';
import {CheckboxLabel, CheckboxSymbol, CheckboxTrigger, Wrapper, HiddenCheckbox, TextWrapper} from "./filters.styled";
export default function Filter({ name, id, htmlfor, labelName, change, isChecked }) {
  return (
    <Wrapper>
      <CheckboxLabel htmlFor={htmlfor}>
        <CheckboxTrigger
          id={id}
          name={name}
          checked={isChecked}
          onChange={() => change()}
        />
        <CheckboxSymbol>
          <svg
            aria-hidden="true"
            className="icon-checkbox"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            width="28px"
            height="28px"
          >
            <path d="M4 14l8 7L24 7"></path>
          </svg>
        </CheckboxSymbol>
        <TextWrapper>{labelName}</TextWrapper>
      </CheckboxLabel>
    </Wrapper>
  );
}