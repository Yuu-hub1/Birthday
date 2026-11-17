import HomeLayout from "../../views/layouts/home";
import HomePage from "../../views/pages/home";
import ClosingSection from "../../views/pages/last-page";
import BirthdayLetter from "../../views/pages/letter";

export const homeRoutes = {
  path: "/",
  element: <HomeLayout/> ,
  children: [
    { index: true, element: <HomePage/> },
    { path: "letter", element: <BirthdayLetter/> },
    { path: "last", element: <ClosingSection/> },
  ],
};
