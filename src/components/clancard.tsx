import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

export default function ClanCard({
    clanname,
    clanleader,
    clancoleader,
}: {
    clanname: string;
    clanleader: string;
    clancoleader: string;
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Card isPressable onPress={onOpen} className="py-4 m-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <p className="text-large uppercase font-bold">{clanname}</p>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Logo"
                        className="object-cover rounded"
                        src={`/Clans/${clanname.toLowerCase()}.png`}
                        width={270}
                        isBlurred
                    />
                </CardBody>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">
                                {clanname}
                            </ModalHeader>
                            <ModalBody>
                                <div className="uppertext flex justify-between">
                                    <div className="flex-col">
                                        <p className="text-tiny uppercase">Lider</p>
                                        <p className="">{clanleader}</p>
                                    </div>
                                    <div className="flex-col">
                                        <p className="text-tiny uppercase text-right">Co-Leader</p>
                                        <p className="text-right">{clancoleader}</p>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
