import { Image, Link } from "@nextui-org/react";
import "./sobre.css";

export default function Sobre() {
    return (
        <>
            <div className="container mx-auto">
                <div className="box flex px-20 items-center mb-32 mt-10 md:mb-1">
                    <Image
                        isBlurred
                        src="/emote1.png"
                        alt="render"
                        width={200}
                        className="hidden md:flex"
                    ></Image>
                    <div className="box-txt flex-column text-left ml-10 align-middle">
                        <h2 className="uppercase text-xl font-bold">
                            O que é o Coliseu de Clãs?
                        </h2>
                        <p>
                            O coliseu de Clãs é um projeto do{" "}
                            <Link
                                className="text-amber-400 underline"
                                href="https://twitter.com/ThYaksa"
                            >
                                Yaksa
                            </Link>{" "}
                            aonde clãs lutam semanalmente, acumulando pontos
                            numa tabela ao longo de uma season para decidir o
                            vencedor no seu final.
                            <br /> Jogadores ganham premiações simbólicas de
                            acordo com seu desempenho em uma Season.
                        </p>
                    </div>
                </div>
                <div className="box flex px-20 items-center flex-row-reverse">
                    <Image
                        isBlurred
                        src="/emote2.png"
                        alt="render"
                        width={200}
                        className="hidden md:flex"
                    ></Image>
                    <div className="box-txt flex-column text-right  mr-10 align-middle mt-5 md:mt-1">
                        <h2 className="uppercase text-xl font-bold">
                            Quero participar, como faço?
                        </h2>
                        <p>
                            Entre no nosso{" "}
                            <Link
                                href="https://discord.gg/Xa6BaCN8WK"
                                className="text-amber-400 underline"
                            >
                                Discord
                            </Link>{" "}
                            durante um periodo de recrutamento, peça para entrar
                            no mural e aguarde um clã interessado contratar
                            você, mas tenha certeza que você cumpre com os
                            pré-requesitos emfuncionamentoantes!
                            <br />
                            Caso sua intenção seja criar um clã para participar
                            do Coliseu, você primeiro precisa jogar uma season
                            como membro de algum clã.
                        </p>
                    </div>
                </div>
                <div className="box flex px-20 pb-2 items-center">
                    <Image
                        isBlurred
                        src="/emote3.png"
                        alt="render"
                        width={200}
                        className="hidden md:flex"
                    ></Image>
                    <div className="box-txt flex-column text-left ml-10 align-middle mt-32 md:mt-1">
                        <h2 className="uppercase text-xl font-bold">
                            Por onde posso acompanhar as partidas?
                        </h2>
                        <p>
                            Você pode acompanhar as partidas do Coliseu de Clãs
                            na{" "}
                            <Link
                                className="text-amber-400 underline"
                                href="https://twitter.com/ThYaksa"
                            >
                                Twitch
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
