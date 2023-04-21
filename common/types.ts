export type Collection = {
  id: string;
  name: string;
  description: string;
  imageFile: string;
};

export type Recipe = {
  id: string;
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
};

export type Ingredient = {
  quantity: number;
  measure: string;
  name: string;
  comment: string;
  section: string;
};

export type Instruction = {
  text: string;
  section: string;
};
