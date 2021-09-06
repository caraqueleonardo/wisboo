const { Router } = require('express');
const router = Router();
const { Preguntas, Encuesta } = require('../db')

router.post('/', async (req, res) => {
  const { name, description } = req.body;
try{
  const a = await Encuesta.create({
    name,
    description,
  })
  return res.json(a);
}catch(error){
  console.log(error)
  }
});

router.post('/:id', async (req, res) => {
  const  encuestumId  = req.params.id
  const { question_type, text, options } = req.body;
try{
  const b = await Preguntas.create({
    encuestumId,
    question_type,
    text,
    options,
  })
res.send(b)
}catch(error){
  console.log(error)
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const encuesta = await Encuesta.findByPk(id);
  const Encuestadb = {
    id: encuesta.id,
    name: encuesta.name,
    description: encuesta.description,
  };
  if (!encuesta) {
    res.send("encuesta no encontrada");
  }
  return res.json(Encuestadb);

})

router.get('/preguntas/:id', async (req, res) => {
  try {
    res.status(201).json(await Preguntas.findAll())
  } catch (error) {
    res.status(404)
  }
})

router.delete('/preguntas/delete/:id', async(req, res)=>{
  try {
    const { id } = req.params;
    await Preguntas.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "pregunta eliminada" });
  } catch (e) {
    console.log(e)
    res.status(500)
  }
})

module.exports = router;
