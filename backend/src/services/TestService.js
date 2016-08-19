class TestService {
    constructor() {
        console.log("in constructed");
    }

    hello() {
        console.log("saying hello");
    }
};
let service = null;
export function testService(req, res, next) {
    if (service === null) service = new TestService();
    return service;
}