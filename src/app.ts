

type Award = string;

interface Movie {
    title: string;
    releaseYear: number;
    rating: number;
    awards: Award[];
  }
  
  interface Category {
    name: string;
    movies: Movie[];
  }
  
  interface MatchFilter {
    filter: string;
  }
  
  interface RangeFilter {
    filter: number;
    filterTo: number;
  }
  
  interface ValuesFilter {
    values: string[];
  }
  
  type Filter = MatchFilter | RangeFilter | ValuesFilter;
  
  class MovieList {
    private movies: Movie[];
    private filters: Filter[];
  
    constructor() {
      this.movies = [];
      this.filters = [];
    }
  
    applySearchValue(filter: MatchFilter): void {
      
    }
  
    applyFiltersValue(filters: Filter[]): void {
      
    }
  }
  
  class CategoryList {
    private categories: Category[];
    private filters: Filter[];
  
    constructor() {
      this.categories = [];
      this.filters = [];
    }
  
    applySearchValue(filter: MatchFilter): void {
      
    }
  
    applyFiltersValue(filters: Filter[]): void {
      
    }
  }