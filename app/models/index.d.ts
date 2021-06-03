import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Post {
  readonly id: string;
  readonly image: string;
  readonly gearType: string;
  readonly title: string;
  readonly bags: number;
  readonly passengers: number;
  readonly doors: number;
  readonly oldPrice: number;
  readonly newPrice: number;
  readonly description: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}