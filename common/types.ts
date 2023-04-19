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

  createdAt: string;
  updatedAt?: string;
}
