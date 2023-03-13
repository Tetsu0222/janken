import { useParams } from 'react-router-dom';

export default function MyArticle() {
  const params = useParams();
  const hands = [ "グー" , "チョキ" , "パー" ];
  const playerhand = hands[params.id];
  const cpuhandno = getRandomInt(3);
  const cpuhand = hands[cpuhandno];
  const resultno = ( params.id - cpuhandno + 3 ) % 3 ;
  const resultlist = [ "あいこ" , "あなたの負け" , "あなたの勝ち"];
  const result = resultlist[resultno];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return <div>
          <p>あなたの手は{playerhand}</p>
          <p>私の手は{cpuhand}</p>
          <p>{result}</p>
        </div>

}