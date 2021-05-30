import supertest from "supertest";
import { server, app } from "./index";

describe("APP", () => {
    afterAll(() => {
        server.close();
    });

    it("should get status OK", (done) => {
        supertest(app)
            .get("/")
            .expect(200)
            .expect({ message: "OK" })
            .end(done);
    });


    it("should get users", (done) => {
        supertest(app)
            .get("/users")
            .expect(200)
            .field("data", [])
            .end(done);
    });
});