import { Injectable } from '@angular/core';


interface Link {
  self: string;
  related?: string;
}

interface Relationship {
  authors: Link;
  publishers: Link;
}

interface BookDisplay {
  type: string;
  image: string;
}

interface Attribute {
  urn: string;
  created_at: Date;
  updated_at: Date;
  content: string;
  properties: string;
  display_properties: BookDisplay;
}

@Injectable({
  providedIn: 'root'
})
export class BookModel {
  id: string;
  type: string;
  links: Link;
  attributes: Attribute;
  relationships: Relationship;

  constructor() { }

  deserialize(input: any): BookModel {
    Object.assign(this, input);
    this.attributes.created_at = new Date(this.attributes.created_at);
    this.attributes.updated_at = new Date(this.attributes.updated_at);
    return this;
  }
}
