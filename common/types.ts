export interface Recipe {
  id?: string;
  user: null;
  author: { name: string };
  collection: string;

  name: string;
  description: string;
  imageFile: string;

  cookInfo: {
    prepTime: number;
    cookTime: number;
    difficulty: number;
    servings: number;
  };

  statistics: {
    averageRating: number;
    averageRepeat: number;
    totalFeedbacks: number;
  };

  tags: string[];

  ingredients: Ingredient[];

  instructions: Instruction[];

  createdAt: string;
  updatedAt?: string;
}

export interface Ingredient {
  quantity: number;
  measure: string;
  name: string;
  comment: string;
  section: string;
}

export interface Instruction {
  text: string;
  section: string;
}
