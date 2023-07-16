import { styled } from 'styled-components';

export const Item = styled.li`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  list-style: none;

  font-size: 16px;
  font-weight: 600;
`;

export const Name = styled.span`
  width: 70px;
  margin-right: 16px;

  font-size: 18px;
  font-weight: 700;
`;

export const Number = styled.span`
  margin-right: auto;
`;

export const Btn = styled.button`
  padding: 4px;

  background-color: #3869f1;
  color: #ececec;

  font-size: 12px;
  font-weight: 400;

  border-radius: 6px;

  border: none;

  &:hover {
    background-color: #315bcf;
  }
`;
