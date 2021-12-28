import { embaralhar } from "../../../functions/arrays";
import questoes from "../bancoDeQuestoes";

export default (req, res, next) => {
  const ids = questoes.map((questao) => questao.id);

  res.status(200).json(embaralhar(ids));
};
