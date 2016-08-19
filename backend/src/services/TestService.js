class TestService {
    constructor() {
        console.log("in constructed");
    }

    hello() {
        console.log("saying hello");
    }
};

module.exports = new TestService();