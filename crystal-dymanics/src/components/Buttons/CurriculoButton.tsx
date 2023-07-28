import {curriculoLink} from '../../data/data'

const CurriculoButton = () => {
  const downloadCurriculo = () => {
    const Link = curriculoLink;
    window.open(Link, '_blank'); // Abre o link em uma nova aba para download
  };

  return (
    <button className="btn btn-primary" onClick={downloadCurriculo}>
      Baixar Currículo
    </button>
  );
};

export default CurriculoButton;
