This is a Trello Clone built using React + Redux + React-dnd + Ant Design.

Store is made up of Board and Card states, these can be seen in their respective reducers. Each board holds the id's of the cards it contains and will access them through the Store.cards array where their content is held.
React-dnd drop triggers the move action in the BoardActions, and will update store state.

To setup:
  1) Clone the repo
  2) CD into the folder
  3) in terminal, run: "npm install"
  4) then run: "npm start"
