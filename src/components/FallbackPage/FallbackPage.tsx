import { fallbackMessageType } from "../../interface";

export default function FallbackPage({
  heading = 'OOPS! Something went wrong',
  description = 'Sorry, we are facing some techincal issue, please try after sometime'
}:fallbackMessageType) {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8" data-testid="fallback-ui">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{heading}</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
          </div>
        </main>
      </>
    )
  }