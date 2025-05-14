import { Outlet } from "react-router-dom"
import {TopNavBar} from "../../components/front/nav.component.jsx"

const HomeLayout = () =>{
    return (
        <>
            <TopNavBar/>
            <Outlet/>
        </>
    )
}
export default HomeLayout;