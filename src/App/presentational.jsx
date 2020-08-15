// Dependencies
import React from 'react';

// Styles
import "../styles.css";

function AppPresentational(props) {
  const { handleAddRepository, handleRemoveRepository } = props;

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default AppPresentational;