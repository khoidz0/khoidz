export default function NavBarComponent(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="col-xxl-9">
                <a class="nav-link" href="#"><b>{props.content}</b></a>
            </div>
            <form class="d-flex justify-content-center">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </nav>
    )
}
