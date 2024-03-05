import Home from "../components/Home/Home";
import { useSystem } from "../contexts/SystemContext/useSystem";
import { PAGES, ImagePerPage } from "../config/appConstants";
import Header from "../components/Elements/Header/Header";
import Footer from "../components/Elements/Footer/Footer";
import Modal from "../components/Elements/Modal/Modal";
import Card from "../components/Card/Card";
import FallbackPage from "../components/FallbackPage/FallbackPage";
import Breadcrumb from "../components/Elements/BreadCrumbs/BreadCrumbs";
import { makeunSplashRequest } from "../utlis/common";

export default function ModuleLoader() {
  const {
    location,
    showModal,
    image,
    setshowModal,
    loading,
    navigateToPage,
    error,
    imageCounter,
    setImageCouter,
    formValue,
    setImage,
    setError,
    setloading,
    pageCounter,
    setPageCounter,
  } = useSystem();
 console.log(image)
  const imgaeModalConetent =
    image && image.length > 0 ? (
      <img
        src={image[imageCounter]?.urls.small}
        className="object-scale-down h-96 w-screen "
      />
    ) : (
      <p className="h-96 w-screen">No Image Found</p>
    );
  const renderComponent = () => {
    switch (location?.page) {
      case PAGES.HOME:
        return <Home />;
      case PAGES.CARD:
        return <Card />;
      default:
        return <FallbackPage heading={'404'} description={'Page not found'}/>;
    }
  };

  return (
    <div className="flex flex-col h-screen" data-testid="module-loader">
      <Header />
      <main className="flex-1 overflow-y-auto">
        {location?.page === "CARD" && (
          <Breadcrumb
            labels={PAGES}
            page={location.page}
            onLinkClick={(page) => navigateToPage(page)}
          />
        )}
        {renderComponent()}
      </main>
      {showModal && (
        <Modal
          content={imgaeModalConetent}
          title={
            formValue?.topic === "Other"
              ? `${formValue?.topic} - ${formValue?.othertopic}`
              : formValue?.topic
          }
          loading={loading}
          show={showModal}
          primaryButton={
            image && image.length > 0
              ? {
                  title: "Accept",
                  onClick: () => {
                    setshowModal(false);
                    navigateToPage(PAGES.CARD);
                  },
                }
              : null
          }
          secondaryButton={
            image && image.length > 0
              ? {
                  title: "Reject",
                  onClick: () => {
                    if (imageCounter === ImagePerPage - 1) {
                      setImageCouter(0);
                      makeunSplashRequest(
                        formValue,
                        pageCounter,
                        setImage,
                        setloading,
                        setError,
                        setPageCounter
                      );
                    } else {
                      setImageCouter(imageCounter + 1);
                    }
                  },
                }
              : {
                  title: "Close",
                  onClick: () => {
                    setshowModal(false);
                  },
                }
          }
        />
      )}
      {showModal && error && (
        <Modal
          content={<FallbackPage />}
          title=""
          show={showModal}
          secondaryButton={{
            title: "Close",
            onClick: () => {
              setshowModal(false);
            },
          }}
        />
      )}
      <Footer />
    </div>
  );
}
