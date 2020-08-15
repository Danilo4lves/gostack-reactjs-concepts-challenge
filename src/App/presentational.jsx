// Dependencies
import React from 'react';

// Styles
import "../styles.css";

function AppPresentational(props) {
  const {
    repositories,

    handleAddRepository,
    handleRemoveRepository,
  } = props;

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories?.map((repository) => {
          const { id, title } = repository;

          return (
            <li key={id}>
              {title}

              <button onClick={() => handleRemoveRepository(id)}>
                Remover
              </button>
            </li>
          );
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default AppPresentational;