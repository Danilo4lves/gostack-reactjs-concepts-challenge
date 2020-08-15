// Dependencies
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 20px;
`;

export const List = styled.ul.attrs({
  "data-testid": "repository-list",
})``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-top: 15px;
  }

  > span {
    margin-right: 15px;
  }
`;

export const AddButton = styled.button`
  padding: 10px 15px;

  color: #ffffff;
  font-weight: 700;
  font-size: 14px;

  background-color: #7159c1;
  border: 0;

  cursor: pointer;
`;

export const RemoveButton = styled(AddButton)`
  margin-top: 15px;
  margin-bottom: 15px;

  background-color: #ca4949;
`;
