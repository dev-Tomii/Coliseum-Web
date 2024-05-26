import { Divider, Link } from '@nextui-org/react';
import './funcionamento.css';
var titulos = ['Requisitos para Participar', 'Custos de Jogador','Funcionamento de Clan Battles e Clan Tournaments',
                'Saldo e Elencos', 'Outras informações importantes sobre clãs e batalhas', 'Zona de Rebaixamento',
                'Critérios de desempate', 'DQs', 'Premiações', 'Rematches e Fair Play', 'Banimentos e punições do Coliseu',
                'Conteúdo do Coliseu', 'Períodos de recrutamento e como participar do Coliseu'];

export default function Funcionamento() {
    return (
        <>
            <div className="container mx-auto py-5">
                <h1 className="text-center text-3xl mb-5 font-bold">Regras e Funcionamento do Coliseu</h1>
                <div className="box flex">
                    <div className="item mt-3 mb-5s relative">
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[0]))}>{titulos[0]}</div>
                        <div className="description">
                            <p>
                            • Ter nível 35 na conta do Brawlhalla<br/>
                            • Ter 40h de jogo ativo(não só com o jogo aberto, 40h em partidas mesmo)<br/>
                            • Ter mais de 400 partidas já jogadas<br/>
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[1]))}>{titulos[1]}</div>
                        <div className="description">
                            <p>
                            O que faz o balanceamento do Coliseu são os custos de jogador. Esses custos são definidos por mim, usando vários critérios. Alguns critérios são mais subjetivos, como decisões de jogo, qualidade de spacing, execução mecânica de inputs, dentre outros. Outros, são mais objetivos, como elo, posições em torneios oficiais, e consistência do elo (ficar nos 2000 de elo enquanto joga várias rankeds é diferente de pegar 2000 uma vez e cair várias vezes pra 1800-1900).<br/><br/>
                            De forma geral, a grande maioria das partidas no Coliseu em condições normais(sem alguém ter dado DQ por exemplo) são disputadas, então acredita-se que o balanceamento esteja bom durante todo o tempo que tivemos até agora. É bom notar que:<br/><br/>
                            • Coliseu é diferente de ranked e torneio. Existem jogadores que jogam pior/melhor aqui do que em uma ranked, e jogadores que são piores/melhores em 2v2 do que 1v1.<br/>
                            • Existem jogadores melhores que outros dentro de um mesmo custo. É impossível colocar 100+ jogadores em 10 categorias de custo diferentes perfeitamente, então existem variações pequenas de habilidade dentro de um mesmo custo e isso é normal.<br/><br/>
                            Você pode ter suas discordâncias e pode falar comigo sobre isso. Mas se vc acredita que tem custo errado, isso vai se mostrar naturalmente nas CBs jogadas, e seu custo vai ser alterado se necessário. Mas não te precipita, já vimos mtos casos de jogador dizendo que &quot;ganha de todo mundo do custo dele&quot;, mas na hora da CB não conseguiu.
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[2]))}>{titulos[2]}</div>
                        <div className="description">
                            <p>
                            As CBs podem ser de alguns modos diferentes, definidos naquela semana. Esses são os modos possíveis:<br/><br/>
                            • Crew Battle 4x4: 1v1 entre equipes de 4 jogadores, um de cada vez, com rotação por Player, ou seja, troca de jogador após um jogador perder as 3 stocks<br/>
                            • Crew Battle 3x3: mesma coisa do anterior, mas entre 3 jogadores<br/>
                            • Crew Battle 2x2: mesma coisa do anterior, mas entre 2 jogadores<br/>
                            • 2x2 usual: igual ranked 2v2, mas vc não pode escolher qualquer duo do seu clã pra jogar. Isso é de acordo com o Saldo<br/>
                            • Stock Crew Battle: 1v1 entre equipes com rotação por Stock, ou seja, troca de jogador depois que um jogador perder 1 stock. Nesse modo, a faixa de custo dos jogadores é parecida. Só jogadores dentro dessa faixa de custo podem fazer parte do elenco
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[3]))}>{titulos[3]}</div>
                        <div className="description">
                            <p>
                            Sobre saldos e Elencos, Elenco é o time de jogadores escolhidos pra jogar uma CB. Esse elenco precisa cumprir um saldo que vai estar definido pra semana toda na agenda (em Stock Crew Battle esse saldo é diário em vez de semanal)<br/><br/>
                            Por exemplo, vamos supor q o saldo é 200 pra uma semana de Crew Battle 4v4. O líder do clã vai ter que escolher 4 jogadores do seu clã que os preços somem no máximo 200. Se vc quiser colocar 4 jogadores que valham 80, não vai rolar, pq eles somados dão 80x4=320. Mas o líder poderia colocar um q vale 80, outro 50, e dois que valham 30(totalizando 190). Ou poderia colocar 4 jogadores que valem 50, totalizando 200<br/><br/>
                            Os elencos também precisam cumprir algumas regras gerais:<br/><br/>
                            • Só pode haver no máximo 1 jogador de custo 70 ou maior no elenco escolhido, independente do modo de jogo. Uma exceção disso é que vc pode colocar 2 jogadores de custo exatamente 70. Ignora essa regra no modo STOCK CREW BATTLE<br/>
                            • Os jogadores do elenco precisam jogar numa ordem específica: do menor custo para o maior custo. Caso tenham 2 ou mais jogadores no elenco com mesmo custo, o líder pode escolher quem joga primeiro/segundo entre eles. Também ignore essa regra no modo STOCK CREW BATTLE<br/>
                            • Em cada semana, na agenda do servidor do discord, outras regrinhas aparecem pra diversificar os elencos<br/><br/>
                            Os clãs precisam ser bem diversificados em preços de jogador. Não adianta nada colocar os mais caros possível no clã porque assim não vão conseguir jogar, o saldo em cada CB vai ser sempre extrapolado.
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[4]))}>{titulos[4]}</div>
                        <div className="description">
                            <p>
                            • Um clã pode ter no máximo 19 membros<br/>
                            • O líder é responsável por tomar as decisões do clã: elenco que vai jogar, quem vai recrutar, etc. Mas dentro do clã pode-se fazer a organização que quiser, nomear administradores, ou outras coisas, da forma que quiser. A liberdade é de vcs.<br/>
                            • Todas as partidas de CB ou CT seguem os mesmos padrões de regras de torneios oficiais do Brawlhalla(dentro do aplicável pra uma Crew Battle)<br/>
                            • O elenco escolhido para uma CB deve ser enviado na minha DM pelo menos 1 hora antes da CB acontecer, com jogadores titulares e reservas(a quantidade tá sempre na agenda)<br/>
                            • Na tabela aparece a pontuação atual de cada clã, como também os líderes e recrutadores de cada clã<br/>
                            • As CBs acontecem ao longo de uma Season, que normalmente dura 10 ou mais semanas. O clã com a maior pontuação na tabela após a Season é o vencedor<br/>
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[5]))}>{titulos[5]}</div>
                        <div className="description">
                            <p>
                            Caso o seu clã fique muito abaixo na tabela em comparação ao primeiro clã, você vai entrar no que chamamos de Zona de Rebaixamento(ZR).<br/><br/>
                            Funciona da seguinte forma:<br/><br/>
                            • Você entra na ZR se tiver 8 pontos de diferença com relação ao primeiro lugar. Você sai da ZR se tiver 6 pontos de diferença com relação ao primeiro lugar<br/>
                            • Cada vez que você entrar na ZR será contabilizada, pra ficar na tabela junto aos DQs. Isso vai também ser usado como critério de desempate, depois dos DQs<br/>
                            • Enquanto vc estiver na ZR, seu elenco terá sempre 10 de saldo a mais contra um clã fora da ZR. Isso não vale pra CTs<br/>
                            • O número de pontos que vc ganhar na próxima CT será subtraído do número de vezes que seu clã já esteve na ZR. Por exemplo, se vc ficou top3 numa CT e ganhou +4 pontos, mas já esteve na ZR uma vez, ganhará só +3 pontos. Mas caso não ganhe nenhum ponto na CT, não perderá ponto por isso. Isso só acontece na PRÓXIMA CT, então numa outra futura CT essa subtração não acontece de novo, a menos que seu clã tenha entrado na ZR de novo<br/>
                            • Numa situação em que o clã top1 ganhe um ponto e o seu clã fique com 8 pontos de diferença a partir desse instante, seu clã ainda tem o direito de jogar a próxima CB agendada antes de entrar na ZR. Caso perca, aí sim, vai pra ZR
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[6]))}>{titulos[6]}</div>
                        <div className="description">
                            <p>
                            • Ter nível 35 na conta do Brawlhalla<br/>
                            • Ter 40h de jogo ativo(não só com o jogo aberto, 40h em partidas mesmo)<br/>
                            • Ter mais de 400 partidas já jogadas<br/>
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[7]))}>{titulos[7]}</div>
                        <div className="description">
                            <p>
                            • Ter nível 35 na conta do Brawlhalla<br/>
                            • Ter 40h de jogo ativo(não só com o jogo aberto, 40h em partidas mesmo)<br/>
                            • Ter mais de 400 partidas já jogadas<br/>
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[8]))}>{titulos[8]}</div>
                        <div className="description">
                            <p>
                            • Ter nível 35 na conta do Brawlhalla<br/>
                            • Ter 40h de jogo ativo(não só com o jogo aberto, 40h em partidas mesmo)<br/>
                            • Ter mais de 400 partidas já jogadas<br/>
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[9]))}>{titulos[9]}</div>
                        <div className="description">
                            <p>
                            • Ter nível 35 na conta do Brawlhalla<br/>
                            • Ter 40h de jogo ativo(não só com o jogo aberto, 40h em partidas mesmo)<br/>
                            • Ter mais de 400 partidas já jogadas<br/>
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[10]))}>{titulos[10]}</div>
                        <div className="description">
                            <p>
                            • Ter nível 35 na conta do Brawlhalla<br/>
                            • Ter 40h de jogo ativo(não só com o jogo aberto, 40h em partidas mesmo)<br/>
                            • Ter mais de 400 partidas já jogadas<br/>
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[11]))}>{titulos[11]}</div>
                        <div className="description">
                            <p>
                            • Ter nível 35 na conta do Brawlhalla<br/>
                            • Ter 40h de jogo ativo(não só com o jogo aberto, 40h em partidas mesmo)<br/>
                            • Ter mais de 400 partidas já jogadas<br/>
                            </p>
                        </div>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[12]))}>{titulos[12]}</div>
                        <div className="description">
                            <p>
                            • Ter nível 35 na conta do Brawlhalla<br/>
                            • Ter 40h de jogo ativo(não só com o jogo aberto, 40h em partidas mesmo)<br/>
                            • Ter mais de 400 partidas já jogadas<br/>
                            </p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="guide mt-5 fixed right-0 mr-20">
                        {titulos.map((i) => (
                            <div className="flex-column uppercase text-right py-1 hover:py-3" key={null}><Link className='text-white hover:text-amber-400 text-sm' href={'#' + String(titulos.indexOf(i))}>{i}</Link><Divider className='my-2'></Divider></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}