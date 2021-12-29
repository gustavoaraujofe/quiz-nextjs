import styles from "../styles/Questionario.module.css";
import QuestaoModel from "../model/questao";
import Questao from "./Questao";
import Botao from "./Botao";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irPraProximoPasso: () => void;
}

export default function Questionario(props: QuestionarioProps) {
  function respostaFornecida(indice: number) {
    if (!props.questao.respondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <>
          <Questao
            valor={props.questao}
            respostaFornecida={respostaFornecida}
            tempoEsgotado={props.irPraProximoPasso}
          />
          <Botao
            onClick={props.irPraProximoPasso}
            texto={props.ultima ? "Finalizar" : "Próxima"}
          />
        </>
      ) : null}
    </div>
  );
}
