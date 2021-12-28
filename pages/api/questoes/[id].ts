import questoes from "../bancoDeQuestoes";

export default (req, res) => {
  const idSelecionada = +req.query.id;

  const unicaQuestao = questoes.filter(
    (questao) => questao.id === idSelecionada
  );

  if (unicaQuestao.length === 1) {
    const questaoSelecionada = unicaQuestao[0].embaralharRespostas();
    res.status(200).json(questaoSelecionada.paraObjeto());
  }

  res.status(204).send();
};
