
import { render } from '@testing-library/react';
import Card from './Card';

vi.mock('../../contexts/SystemContext/useSystem', () => ({
  useSystem: vi.fn(() => ({
    formValue: { name: 'Vishnu', surname: 'Rajan' },
    image: [
      {
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
      }
    ],
    imageCounter:0
  }))
}));

describe('Card component', () => {
  it('Should render', () => {
    const { getByAltText, getByText } = render(<Card />);
    const img = getByAltText('Selected topic image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'mockThumbUrl');
    expect(getByText('Name : Vishnu')).toBeInTheDocument();
    expect(getByText('Surname : Rajan')).toBeInTheDocument();
  });
});