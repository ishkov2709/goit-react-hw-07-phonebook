import { styled } from 'styled-components';
import { Input } from 'antd';

export const Title = styled.h1`
  margin: 0 0 20px 0;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 300px;
  margin-bottom: 20px;
`;

export const TextWrapper = styled.span`
  display: inline-block;
  margin-right: auto;

  font-size: 18px;
  font-weight: 600;
`;

export const InputField = styled(Input)`
  height: 30px;
  width: 220px;

  &::placeholder {
    color: #7e7e7e;
  }
`;

export const Btn = styled.button`
  padding: 10px;

  background-color: #3869f1;
  color: #ffffff;

  border-radius: 6px;

  border: none;

  &:hover {
    background-color: #315bcf;
  }
`;
