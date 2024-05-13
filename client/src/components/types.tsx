// types.ts

export interface ComponentData {
    id: number;
    component_name: string;
    components: Component[];
  }
  
  export interface Component {
    id: number;
    heading: string;
    code: string;
  }
  