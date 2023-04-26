export type Category__ = {
  original: {
    imageUrl: string;
  };
  name: string;
  description: string;
  imageUrl: string;
};

export type Recipe__ = {
  category: string;
  name: string;
  description: string;
  imageUrl: string;

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

  ingredients: {
    quantity: number;
    measure: string;
    name: string;
    comment: string;
    section: string;
  }[];

  instructions: {
    text: string;
    section: string;
  }[];

  original: {
    author: {
      name: string;
      href: string;
    };
    pageUrl: string;
    imageUrl: string;
  };
};
