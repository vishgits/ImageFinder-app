import Form from "../Form/Form";

export default function Home() {
  return (
    <div
      className="mx-auto w-full max-w-7xl  bg-white  px-4  sm:px-6 lg:px-8"
      data-testid="home-component"
    >
      <Form />
    </div>
  );
}
