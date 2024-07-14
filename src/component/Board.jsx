import Column from "./Column"; // Importation du composant Column
import { useState } from "react"; // Hook pour gérer l'état local

// Données par défaut des cartes
const DEFAULT_CARDS = [
  // Backlog
  { title: "Design a new landing page", id: "1", column: "backlog" },
  { title: "Brainstorm a new feature", id: "2", column: "backlog" },
  { title: "Implement a new feature", id: "3", column: "backlog" },
  // TODO
  { title: "Design a new landing page", id: "4", column: "todo" },
  { title: "Brainstorm a new feature", id: "5", column: "todo" },
  { title: "Implement a new feature", id: "6", column: "todo" },
  // DOING
  { title: "Design a new landing page", id: "7", column: "doing" },
  { title: "Brainstorm a new feature", id: "8", column: "doing" },
  { title: "Implement a new feature", id: "9", column: "doing" },
  // DONE
  { title: "Design a new landing page", id: "10", column: "done" },
  { title: "Brainstorm a new feature", id: "11", column: "done" },
  { title: "Implement a new feature", id: "12", column: "done" },
];

// Composant qui affiche les colonnes de cartes
const Board = () => {
  // État local pour stocker les cartes
  const [cards, setCards] = useState(DEFAULT_CARDS); // useState initialise l'état avec les cartes par défaut

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      
      {/* Chaque colonne affiche des cartes filtrées par type */}
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

export default Board;
