// Dependencies
import React from 'react';

// Styled components
import { Container, List, ListItem, RemoveButton, AddButton } from './styles';

function AppPresentational(props) {
  const {
    repositories,

    handleAddRepository,
    handleRemoveRepository,
  } = props;

  return (
    <Container>
      <List>
        {repositories?.map((repository) => {
          const { id, title } = repository;

          return (
            <ListItem key={id}>
              <span>{title}</span>

              <AddButton onClick={() => handleRemoveRepository(id)}>
                Remover
              </AddButton>
            </ListItem>
          );
        })}
      </List>

      <RemoveButton onClick={handleAddRepository}>Adicionar</RemoveButton>
    </Container>
  );
}

export default AppPresentational;