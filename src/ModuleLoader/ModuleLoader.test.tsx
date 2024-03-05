import { render, fireEvent } from "@testing-library/react";
import ModuleLoader from "./ModuleLoader";
import { SystemContext } from "../contexts/SystemContext/SystemContext";
import { Photo } from "../interface";

const mockPhoto: Photo = {
  alt_description: "Mock alt description",
  blur_hash: "mockBlurHash",
  breadcrumbs: [], 
  color: "mockColor",
  created_at: "2024-03-05T12:00:00Z",
  current_user_collections: [], 
  description: "Mock description",
  height: 100,
  id: "mockId",
  liked_by_user: false,
  likes: 0,
  links: {
      self: "mockLink",
  },
  promoted_at: null,
  slug: "mock-slug",
  sponsorship: null,
  tags: [{
      type: "mockType",
      title: "mockTitle",
  }],
  topic_submissions: {},
  updated_at: "2024-03-05T12:00:00Z",
  urls: {
      regular: "mockRegularUrl",
      small: "mockSmallUrl",
      thumb: "mockThumbUrl",
  },
  user: {
      id: "mockUserId",
      updated_at: "2024-03-05T12:00:00Z",
      username: "mockUsername",
  },
  width: 100,
};

const mockContextValue = {
  location: { page: "HOME" },
  showModal: false,
  image: [mockPhoto],
  setshowModal: vi.fn(),
  loading: false,
  navigateToPage: vi.fn(),
  error: null,
  setImage: vi.fn(),
  setloading: vi.fn(),
  formValue: {
    name: "",
    surname: "",
    topic: "-1",
    othertopic: ""
  },
  setFormValue: vi.fn(),
  setError: vi.fn(),
  imageCounter: 0,
  setImageCouter: vi.fn(),
  pageCounter: 1,
  setPageCounter: vi.fn(),
};



describe("ModuleLoader", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("Render home component by default", () => {
    const { getByTestId } = render(
      <SystemContext.Provider value={mockContextValue}>
        <ModuleLoader />
      </SystemContext.Provider>
    );
    expect(getByTestId("home-component")).toBeInTheDocument();
  });

  it("Render card component", () => {
    mockContextValue.location = { page: "CARD" };
    mockContextValue.image = [
      mockPhoto
    ],
    mockContextValue.imageCounter =  0;
    const { getByTestId } = render(
      <SystemContext.Provider value={mockContextValue}>
        <ModuleLoader />
      </SystemContext.Provider>
    );
    expect(getByTestId("card-component")).toBeInTheDocument();
  });

  it("Render Modal component", () => {
    mockContextValue.location = { page: "HOME" };
    mockContextValue.formValue = {
    name: "test",
    surname: "test",
    topic: "Travel",
    othertopic: ""
  };
    mockContextValue.image = [
      mockPhoto
    ],
    mockContextValue.imageCounter =  0;
    mockContextValue.showModal = true;
    mockContextValue.error = null;
    const { getByTestId, getByText} = render(
      <SystemContext.Provider value={mockContextValue}>
        <ModuleLoader />
      </SystemContext.Provider>
    );
    expect(getByTestId("image-modal")).toBeInTheDocument();
    fireEvent.click(getByText('Accept'));
    fireEvent.click(getByText('Submit'));
    fireEvent.click(getByText('Reject'));
    });
  });
  

