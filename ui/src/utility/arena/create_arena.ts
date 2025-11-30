import { Transaction } from "@mysten/sui/transactions";

export const createArena = (packageId: string, heroId: string) => {
  const tx = new Transaction();
  
  // TODO: Add moveCall to create a battle place
  // Function: `${packageId}::arena::create_arena`
  tx.moveCall({ 
    target: `${packageId}::arena::create_arena`,
    arguments: [tx.object(heroId)],
  });
  // Arguments: heroId (object)
    // Hints:
    // Use tx.object() for the hero object
    // This creates a shared object that others can battle against
  
  return tx;
};
