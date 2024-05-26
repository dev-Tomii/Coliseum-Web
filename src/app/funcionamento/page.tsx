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
                        <Divider className='mt-4'></Divider>
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
                        <Divider className='mt-4'></Divider>
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
                        <Divider className='mt-4'></Divider>
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
                        <Divider className='mt-4'></Divider>
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
                        <Divider className='mt-4'></Divider>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[5]))}>{titulos[5]}</div>
                        <div className="description">
                            <p>
                            Caso o seu clã fique muito abaixo na tabela em comparação ao primeiro clã, você vai entrar no que chamamos de Zona de Rebaixamento(ZR)<br/><br/>
                            Funciona da seguinte forma:<br/><br/>
                            • Você entra na ZR se tiver 8 pontos de diferença com relação ao primeiro lugar. Você sai da ZR se tiver 6 pontos de diferença com relação ao primeiro lugar<br/>
                            • Cada vez que você entrar na ZR será contabilizada, pra ficar na tabela junto aos DQs. Isso vai também ser usado como critério de desempate, depois dos DQs<br/>
                            • Enquanto vc estiver na ZR, seu elenco terá sempre 10 de saldo a mais contra um clã fora da ZR. Isso não vale pra CTs<br/>
                            • O número de pontos que vc ganhar na próxima CT será subtraído do número de vezes que seu clã já esteve na ZR. Por exemplo, se vc ficou top3 numa CT e ganhou +4 pontos, mas já esteve na ZR uma vez, ganhará só +3 pontos. Mas caso não ganhe nenhum ponto na CT, não perderá ponto por isso. Isso só acontece na PRÓXIMA CT, então numa outra futura CT essa subtração não acontece de novo, a menos que seu clã tenha entrado na ZR de novo<br/>
                            • Numa situação em que o clã top1 ganhe um ponto e o seu clã fique com 8 pontos de diferença a partir desse instante, seu clã ainda tem o direito de jogar a próxima CB agendada antes de entrar na ZR. Caso perca, aí sim, vai pra ZR
                            </p>
                        </div>
                        <Divider className='mt-4'></Divider>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[6]))}>{titulos[6]}</div>
                        <div className="description">
                            <p>
                            • Número de DQs. O clã com menos DQ fica na frente do que tem mais DQs<br/>
                            • Histórico dos 2 clãs empatados. Nas CBs q houveram entre os 2 clãs empatados, quem teve mais vitórias desempata e vence<br/>
                            • Uma CB de desempate entre os dois clãs, com regras definidas no momento da necessidade dessa CB<br/>
                            </p>
                        </div>
                        <Divider className='mt-4'></Divider>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[7]))}>{titulos[7]}</div>
                        <div className="description">
                            <p>
                            DQ(Disqualified) é quando seu clã ou um jogador dele é desqualificado por ter sido colocado no elenco e não veio jogar a CB<br/>
                            Se faltar 1 integrante do seu time e não tiver reserva pra substituir ele, não vai ser DQ imediato para o clã. O seu clã vai poder jogar com 1 a menos, MAS vai ter que usar o elenco titular. Pode usar reserva? SÓ se o custo do reserva e do jogador substituído forem iguais ou menor. Isso faz com que haja uma desvantagem como punição pela ausência do jogador.<br/><br/>
                            Outro detalhe: o jogador que deu DQ no elenco não poderá ser escalado por 1 semana.<br/><br/>
                            Além disso, numa situação de DQ de um clã, jogadores que compareceram para jogar não contam como usados. Portanto, se tiver alguma regra do tipo &quot;jogadores só podem jogar 1 vez nessa semana&quot;, esses jogadores podem ser escalados de novo<br/><br/>
                            Normalmente, eu defino um período de tempo para que todos os clãs joguem contra todos os outros clãs. Na Season 0, em 1 semana isso já acontecia. Na Season 1, variou de 1 a 3 semanas. Caso um clã tenha 80% de DQ nesse período, o clã será removido<br/>
                            Jogadores que derem DQ muitas vezes serão automaticamente retirados do mural
                            </p>
                        </div>
                        <Divider className='mt-4'></Divider>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[8]))}>{titulos[8]}</div>
                        <div className="description">
                            <p>
                            Nós não focamos muito em premiações aqui, por ser um projeto mais voltado pra diversão da galera e trazendo uma competição saudável. Seria interessante trazer premiações boas em dinheiro ou mais coisas, mas a gente também sabe que isso traz mais gente mal-intencionada, e a gente não tem muita paciência com esse tipo de coisa aqui. Honestamente, as punições aqui podem ser bem duras(seção de punição pra vc ler mais abaixo), então anda na linha.<br/><br/>
                            O canal de ⁠premiação no nosso Discord tem todas as premiações, que normalmente se resume mais nas &quot;infantocoins&quot;. Essas moedinhas são da minha live, para usar em uma loja pode acessar <Link href='https://streamelements.com/yaksath/store' className='text-amber-400 font-bold' isExternal>aqui!</Link><br/><br/>
                            </p>
                        </div>
                        <Divider className='mt-4'></Divider>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[9]))}>{titulos[9]}</div>
                        <div className="description">
                            <p>
                            Normalmente, em CBs, temos regras que restringem jogadores ou personagens de serem usados. Como nós seguimos o padrão de regras de torneios oficiais, jogadores tem direito a se matar nos primeiros 10 segundos de jogo para solicitar rematch(mas aqui pode ser até uns 30 segundos que tá de boa)<br/><br/>
                            Entretanto, caso essa rematch seja solicitada dessa forma, os jogadores do clã que pediu a rematch devem manter os mesmos legends, a menos que alguma regra proíba aquele legend de ser usado. Nesse caso, o jogador pode escolher outro legend, mas vai ter que revelar qual legend vai usar antes de iniciar a rematch. O mapa também tem que ser o mesmo. Nenhum jogador pode ser trocado numa rematch<br/><br/>
                            Os jogadores do outro clã, que não pediu a rematch, podem trocar de personagem proporcionalmente a quantos jogadores irão trocar. Por exemplo, se todos os jogadores do clã que pediu a rematch manterem os mesmos picks, o outro clã também terá que manter os mesmos picks. Se 1 trocar o legend(porque alguma regra proíbe o legend dele), 1 jogador do outro clã também poderá trocar, à escolha do próprio clã<br/><br/>
                            Caso algum jogador do clã adversário desconecte no meio da partida e você queira dar uma rematch como FP(Fair Play), os jogadores do seu clã devem se matar para rolar a rematch. Mas perceba que FP não tá nas regras e isso vai da escolha de cada clã. O FP também se limita à organização do projeto, então um FP que cause uma demora muito grande não pode ser feito
                            </p>
                        </div>
                        <Divider className='mt-4'></Divider>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[10]))}>{titulos[10]}</div>
                        <div className="description">
                            <p>
                            Situações que podem causar punições:<br/><br/>
                            • Comportamentais, como discriminação, desrespeito, ofensas, dentre outros<br/>
                            • Trapaças e fraudes<br/>
                            • Atrapalhar propositalmente o andamento do Coliseu. Isso inclui passar a sala da CB pra gente de fora do Coliseu<br/><br/>
                            Mas também tem um motivo possível adicional: jogadores que estão no Coliseu e saem do server de repente, ou somem de repente por semanas/meses, sem nenhum aviso ou justificativa nos dias seguintes a mim ou ao seu líder de clã. Isso traz prejuízo aos clãs envolvidos, que contratam jogadores confiando na presença deles, enquanto esses jogadores não se importam com esse prejuízo. Situações como essa podem ocasionar ban por 1 season inteira a partir do momento que o jogador descobrir que foi banido(ou vir falar comigo sobre isso).<br/><br/>
                            A gente se esforça bastante pra esse projeto ser bacana pra todo mundo, e não tenho muito pavio pra aturar situações de trapaça com gente jogando em conta de outros, ou se fazendo passar por outro. Isso já foi descoberto aqui antes, mais de uma vez, e a punição pode vir de forma sutil de um jeito que possa atrapalhar o clã todo, ou se tiver provas bem claras da trapaça, é um banimento permanente e que dificilmente vou reconsiderar, mesmo que se passem ANOS desde o ocorrido. Zero tolerância com trapaças
                            </p>
                        </div>
                        <Divider className='mt-4'></Divider>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[11]))}>{titulos[11]}</div>
                        <div className="description">
                            <p>
                            Fazemos lives de todas as CBs e CTs em <Link href='https://www.twitch.tv/yaksath' className='text-amber-400 font-bold' isExternal>Twitch</Link><br/>
                            Caso vc queira assistir, veja por lá. Não entre na sala das partidas pra assistir, a live existe exatamente pra isso. Afinal, se for pra assistir na sala, não precisa de live, todos entram na sala e vêem por lá e pronto. Então, por favor, dá esse valor pro trampo!<br/><br/>
                            Andamos também fazendo vídeos eventuais no meu <Link href='https://www.youtube.com/@yaksath' className='text-amber-400 font-bold' isExternal>YouTube</Link> sobre o Coliseu que são bem interessantes de assistir!<br/>
                            Você também pode ver algumas atualizações no meu <Link href='https://twitter.com/ThYaksa' className='text-amber-400 font-bold' isExternal>Twitter</Link>
                            </p>
                        </div>
                        <Divider className='mt-4'></Divider>
                        </div>
                        <div className="item mt-3 mb-5">
                        <div className="title text-2xl uppercase font-bold text-amber-400 " id={String(titulos.indexOf(titulos[12]))}>{titulos[12]}</div>
                        <div className="description">
                            <p>
                            • Períodos de recrutamento<br/><br/>
                            Você só pode entrar no Coliseu e entrar em algum clã durante um período de recrutamento. Esses períodos são alguns dias em que novos jogadores podem entrar, jogadores podem trocar de clã, e clãs podem contratar novos jogadores. Você primeiro precisa entrar no mural-de-jogadores , e de lá você já pode ser visto pelos clãs e recrutado. Membros do clã vão te enviar mensagem na DM pra te recrutar<br/>
                            Eu sempre aviso na canal do discord de anúncios e no Twitter também quando um período de recrutamento começa. Fica atento por lá<br/><br/>
                            • Quero entrar em um clã, o que faço?<br/><br/>
                            Primeiramente, é preciso estarmos em um período de recrutamento, como expliquei. Se estivermos, mande DM pra mim que te colocarei lá no ⁠mural-de-jogadores. De lá, você poderá ser recrutado por outros clãs já existentes. Você também pode ir em ⁠tabela ver quem são os líderes ou recrutadores de cada clã, pra tentar falar com eles e pedir pra entrar em algum clã<br/><br/>
                            •Quero criar um clã, o que faço?<br/><br/>
                            Infelizmente, só pessoas com pelo menos um pouco de confiança minha poderão criar um clã. Tivemos problemas de jogadores mal-intencionados no passado, e tivemos problemas de clãs entrando sem saber direito como o sistema funciona, criando clãs que acabaram naturalmente se dissolvendo sozinhos, e atrapalhando o andamento da Season dessa forma. Além disso, é obrigatório já ter sido membro de um clã antes de poder criar um. Clãs novos só podem ser criados antes do início de uma Season
                            </p>
                        </div>
                        <Divider className='mt-4'></Divider>
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