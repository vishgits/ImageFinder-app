import { ReactElement, ReactEventHandler } from "react";
import { Errors } from "unsplash-js/dist/helpers/errors";

interface FormType {
  name: string;
  surname: string;
  topic: string;
  othertopic: string;
}
interface BreadcrumbType {
  labels: {
    [key: string]: string;
  };
  page: string;
  onLinkClick: (page: string) => void;
}
export interface Pages {
  HOME: string | number | symbol;
  CARD: string | number | symbol;
}

interface PromiseErrorType {
  message?: string;
  code?: number;
}
interface fallbackMessageType {
  heading?: string;
  description?: string;
}

interface APIResponseType {
  results: Photo[] | undefined;
  total?: number;
  total_pages?: number;
}
interface Photo {
  alt_description: string | null;
  blur_hash: string;
  breadcrumbs: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
  };
  promoted_at: string | null;
  slug: string;
  sponsorship: string | null;
  tags: {
    type: string;
    title: string;
  }[];
  topic_submissions: {
    [key: string]: {
      status: string;
      approved_on: string;
    };
  };
  updated_at: string;
  urls: {
    [key: string]: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
  };
  width: number;
}

interface ApiResponse {
  type?: string;
  response?: Photo;
  originalResponse?: Response;
  errors?: Errors;
  status?: number;
}

interface LocationType {
  page: string;
}

interface ApiRequest {
  perPage: number;
  data: string;
  pageCounter: number;
}

interface ButtonProps {
  title: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
}

interface ModalProps {
  content: ReactElement | null;
  title: string | undefined;
  primaryButton?: ButtonProps | null;
  secondaryButton?: ButtonProps | null;
  loading?: boolean;
  show: boolean;
}


interface axiosRequestType {
  data: string;
  pageCounter: number;
  perPage: number;
  getRespose: (arg0: APIResponseType) => void;
  finished: () => void;
  getError: (arg0: PromiseErrorType) => void;
}


export type {
  FormType,
  BreadcrumbType,
  fallbackMessageType,
  PromiseErrorType,
  APIResponseType,
  Photo,
  ApiResponse,
  LocationType,
  ApiRequest,
  ModalProps,
  axiosRequestType
};
