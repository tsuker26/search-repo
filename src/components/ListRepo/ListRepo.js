import createElement from "../../utils/createElement";

class ListRepo {

    _render() {
        return createElement(`
           <div class='list__container container'>
                 <h1>Repositories</h1>
                 <div class="list"></div>
           <div>
        `)
    }

    get elem() {
        return this._render()
    }

}

export default ListRepo