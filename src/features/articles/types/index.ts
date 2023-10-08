import type { BaseEntity } from '../../../types';

export type Article = {
  title: string;
  content: string;
} & BaseEntity;
