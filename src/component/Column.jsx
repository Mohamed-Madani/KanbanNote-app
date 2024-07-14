import { useState } from "react";
import Card from "./Card";

// Composant qui représente une colonne dans le tableau Kanban
const Column = ({ title, headingColor, column, cards, setCards }) => {
  
  // État pour gérer l'activation de la colonne
  const [active, setActive] = useState(false);

  // Filtre les cartes en fonction de la colonne actuelle
  const filterCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filterCards.length}
        </span>{" "}
        
        {/* Affiche le nombre de cartes */}
      </div>
      <div
        className={`h-full w-full rounded transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        
        {/* Affiche les cartes filtrées */}
        {filterCards.map((c) => (
          <Card key={c.id} title={c.title} id={c.id} column={c.column} />
        ))}
      </div>
    </div>
  );
};

export default Column;
