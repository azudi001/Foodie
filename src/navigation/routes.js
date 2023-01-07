
import stack from "./stack"
import { routeNames } from "./names"
import Home from "../home/New-screen/landing/Home"
import HomePage from "../home/New-screen/screens/HomePage"
import Recipe from "../home/New-screen/screens/Recipe/Recipe"
import PrivacyandPolicy from "../home/New-screen/screens/Privacy_Policy/PrivacyandPolicy"
import WishList from "../home/New-screen/screens/WishList/WishList"

export const routes = [
    {
        name: routeNames.landing,
        stack: stack.Landing,
        component : Home
    },
    //  ...Requires Auth
    {
        name: routeNames.homepage,
        stack: stack.AUTH,
        component : HomePage
    },
    {
        name: routeNames.recipe,
        stack: stack.AUTH,
        component : Recipe
    },
    {
        name: routeNames.privacy,
        stack: stack.AUTH,
        component : PrivacyandPolicy
    },
    {
        name: routeNames.wishlist,
        stack: stack.AUTH,
        component : WishList,
    }
]