import * as React from "react";
import Home from "./components/Home/index.jsx";
import Topico from "./components/Topico";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import { ColorModeContext } from "./context/color.js";

const content = [
  {
    title: "O Vicio leva à rua",
    descrition:
      "Certos vícios podem levar o indíviduo a viver na rua. A invisibilidade desses indivíduos perante o governo também é grande fator influente no aumento constante da população de sem-tetos",
    acordion:
      "O Brasil vem enfrentando problemas com os grandes índices de pessoas em situação de rua, em março de 2020, foi divulgado que o número de pessoas morando nas ruas era de 222 mil brasileiros. Segundo uma pesquisa feita pelo Ministério do Desenvolvimento regional entre 2007 e 2008, os principais motivos que levam a pessoa à rua são: Alcoolismo ou uso de drogas (35,5%); Perda de emprego (29,8%); Conflitos familiares (29,1%);",
    modalTitle: "Cracolândia - São Paulo",
    modalText:
      "A Cracôlandia é um local com uma grande população moradora de rua, formada por dependentes químicos, principalmente de crack. Tal ocorreência demostra que o vicío em sertas substâncias pode levar o indivíduo a viver nas ruas.",
    img:"https://uploads.metropoles.com/wp-content/uploads/2021/09/24112452/operacao-policia-civil-cracolandia-centro-sp-trafico-de-drogas-00.jpeg"
    },

  {
    title: "O problema que afeta principalmente negros",
    descrition:
      "Por mais atual que pareça, esta situação vem sendo presenciada desde a abolição da escravatura em 1888, por meio da Lei Áurea, sancionada pela Princesa Isabel, a qual extinguiu a escravidaõ no Brasil, pelo menos no papel. No entanto, o que realmente ocorreu foi o completo abandono dessas pessoas pelo Estado.   Após os negros tornarem-se “iguais” perante a lei, os escravos que adquiriram liberdade não tiveram acesso a nenhum pedaço de terra ou indenização, fazendo com que os casos de moradores de rua aumentassem.",
    acordion:
      "A grande maioria de quem vive nas ruas são homens. Do total dessa população, 82% é masculina e 18% feminina. Quanto à cor de pele de todas as pessoas que vivem nas ruas, 39,1% se autodeclararam pardos na pesquisa; 29,5% se declararam brancos e 27,9% se declararam pretos. Com isso, podemos concluir que cerca de 67% dos moradores de rua são negros.",
    modalTitle: "Fila de famintos esperando por comida - São Paulo",
    modalText:
      "Como podemos ver pela imagem, a fila de famintos é composta principalmente por moradores  de rua. Dessa forma podemos concluir, a partir dos dados mostrados,  que cerca de 67% dos moradores de rua são",
    img:"https://f.i.uol.com.br/fotografia/2020/04/03/15859499245e87ace478af6_1585949924_5x2_md.jpg"  
    },

  {
    title: "Volência nas comunidades negras",
    descrition:
      "À primeira vista, a violência urbana no Brasil atinge principalmente pessoas negras, pardas e indígenas, Pessoas com baixa renda se alocaram em favelas e becos com péssimas condições, estando imersas na violência urbana sobre forma de tráfico de drogas e guerra de facções. Outro ponto que ajuda na expansão dessas práticas é a atuação de governos fracos politicamente, já que prometem durante campanhas melhores condições de vida para essas pessoas, mas na realidade isso nunca ocorre.",
    acordion: "Nos indicadores sociais de violência, em 2018, pretos e pardos foram 75,7% das vítimas de homicídio. Essa assimetria confirma-se também no assassinato de mulheres, pois 68% das mulheres assassinadas no Brasil, em 2018, eram negras.",
    modalTitle: "Chegada de paramilitares na favela da Rocinha - Rio de Janeiro",
    modalText: "Diante essa imagem, o reforço do policiamento em comunidades predominantemente negras, como a Rocinha, reforça a premissa de que os negros sofrem diariamente com a violência presente no seu cootidiano.",
    img:"https://ichef.bbci.co.uk/news/800/cpsprodpb/29C9/production/_97979601_35542839-b359-46f3-b61a-3d5d5d2d9391.jpg.webp"
  },
  {
    title:" Forças policiais em operação em meio a população - Rio de Janeiro",
    descrition:"O Brasil vem numa crescente de violência desde a década de 1970. O auge na taxa de homicídios ocorreu no ano de 2017, quando 65.602 pessoas foram assassinadas no país. A partir de 2018, esse número começou a cair, principalmente porque nesse ano foram adotadas medidas destinadas a combater esse problema Em 2018, foi criado no Ministério de Segurança Pública em que os dados sobre segurança foram reunidos em um sistema único de informações e houve uma política planejada e realizada em cooperação entre os entes federados (governo Federal, estadual e municipal).",
    acordion:"Quanto ao perfil das vítimas, no Brasil os homicídios são a principal causa de morte de jovens do sexo masculino, isto é, da faixa etária entre 15 e 29 anos, grupo que compôs 53,3% do total de homicídios em 2018. Estratificando em dois subgrupos, observa-se que o percentual de assassinatos é maior contra jovens de 20 a 24 anos (52,3%), seguido pelo subgrupo de 25 a 29 anos (43,7%).",
    modalTitle:"Forças policiais em operação em meio a população - Rio de Janeiro",
    modalText:"Diante dessa imagem, policiais fazem uma operação de alto risco em uma favela. É possível ver que no meio do combate entre forças dos estado e criminosos, a população é a quem mais sofre.",
    img:"https://imagens.brasil.elpais.com/resizer/GXNQarbDu6jlmtty-PxdKyZD0Z0=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/R36CQX56H3LQ5LK56W62RVSOP4.jpg"
  }
];

function App() {
  const [mode, setMode] = React.useState("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Home />
        {content.map((e) => (
          <Topico
            title={e.title}
            description={e.descrition}
            acordion={e.acordion}
            modalTitle={e.modalTitle}
            modalText={e.modalText}
            img={e.img}
          />
        ))}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
