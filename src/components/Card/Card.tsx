import { useSystem } from "../../contexts/SystemContext/useSystem";
export default function Card() {
  const { formValue, image,  imageCounter} = useSystem();
  return (
    <div
      className="mx-auto w-full max-w-7xl  bg-white  px-4  sm:px-6 lg:px-8 mt-5"
      aria-label="Cards"
      data-testid="card-component"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
          <div className="flex flex-1 flex-col p-8">
            {image ? (
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={image[imageCounter].urls.thumb}
                alt="Selected topic image"
              />
            ):'Loading...'}
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              Name : {formValue?.name}
            </h3>
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              Surname : {formValue?.surname}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
