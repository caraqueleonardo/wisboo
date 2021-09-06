const app = require("../src/app");
const { Preguntas } = require("../src/db");
const supertest = require("supertest");
const req = supertest(app)

describe("Preguntas endpoint", () => {

  beforeAll(async () => {
    await Preguntas.sequelize.authenticate();
    await Preguntas.sequelize.sync({ force: true })
    await Preguntas.create({
        id:1,
        question_type: "texto",
        text: "que edad tienes?",
        options: [],
        createdAt: new Date(),
        updatedAt: new Date()
    });
    await Preguntas.create({
        id:2,
        question_type: "texto",
        text: "como te llamas?",
        options: [],
        createdAt: new Date(),
        updatedAt: new Date()
    });
  })
  it("debe responder con una pregunta eliminada", async () => {
    const id = 1;
    const res = await req.delete(`/preguntas/delete/${id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
  })
  it("debe responder con una pregunta eliminada ", async () => {
    const id = 2;
    const res = await req.delete(`/preguntas/delete/${id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
  })
  afterAll(async () => {
    await Preguntas.sequelize.close()
  })

})