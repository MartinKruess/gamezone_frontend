import { useContext } from "react"
import { CreateArticleCA } from "./createArticleCA"
import { CreateItem } from "./createItem/createItem"
import { AppContext } from "../../global/useContext"

export const Dashboard = () => {
    const {token} = useContext(AppContext)

    return(
        <section className="dashboardContainer">
            <article className="dashboard">
                <a className="dashboardMenu" href="#merch">
                    <h2>Merch</h2>
                    <i className="fa-solid fa-plus"></i>
                </a>
                <a className="dashboardMenu" href="#ca">
                    <h2>Blog Post</h2>
                    <i className="fa-solid fa-plus"></i>
                </a>
                <div className="dashboardMenu">
                    <h2>Termin 3</h2>
                    <p>Create new Article</p>
                </div>
            </article>
            <article>
                <CreateItem />
                <CreateArticleCA />
            </article>
        </section>
    )
}

