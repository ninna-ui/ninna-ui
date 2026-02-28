export interface ComponentMeta {
  title: string;
  description: string;
  category: string;
  version?: string;
  status?: "stable" | "beta" | "experimental";
  source?: {
    package: string;
    importName: string;
  };
}

export interface PropDefinition {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
  required?: boolean;
}

export interface ComponentSectionType {
  id: string;
  title: string;
  level?: 2 | 3 | 4;
}

