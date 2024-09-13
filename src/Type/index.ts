export interface Product{
    category:string;
}

export interface FetchResponse{
    products:Product[]
}

export interface FilterContextType{
    searchQuery:string;
    setSearchQuery:(query:string)=>void;
    selectedCategory:string;
    setSelectedCategory:(category:string)=>void;
    minPrice:number|undefined;
    setMinPrice:(price:number|undefined)=>void;
    max:number|undefined;
    setMaxPrice:(price:number|undefined)=>void;
    keyword:string;
    setKeyword:(keyword:string)=>void;
}

