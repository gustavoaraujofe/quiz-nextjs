import { useState } from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoMock = new QuestaoModel(1, "melhor cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelha"),
  RespostaModel.errada("Azul"),
  RespostaModel.certa("Preta"),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice));
  }

  function tempoEsgotado() {
    if (!questao.respondida) {
      setQuestao(questao.responderCom(-1));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao
        valor={questao}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao texto="Próxima" href="/resultado"/>
    </div>
  );
}
