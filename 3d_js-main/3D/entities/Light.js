class Light extends Point {
    constructor(x, y, z, lumen = 10_000) {
        super(x, y, z);
        this.lumen = lumen;
    }
}
