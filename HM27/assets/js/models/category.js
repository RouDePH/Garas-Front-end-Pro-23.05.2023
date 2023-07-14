
class Category {
    constructor(id, src) {
        this.id = id;
        this.src = src;
    }

    get nodeId() {
        return `category-${this.id}`;
    }
}

export default Category;