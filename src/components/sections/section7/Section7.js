import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading } from '@chakra-ui/layout';
import React, { Fragment, useState } from 'react';
import arrowDown from '../../../resources/images/arrow-down.png'
import ContainerInfo from './ContainerInfo';
import ContactForm from './ContactForm'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import Btn from '../../Btn';
import Logo from '../../Logo';

export default function Section7() {

    const user = JSON.parse(localStorage.getItem('form'))

    if (!user) {
        localStorage.setItem('form', JSON.stringify([]))
    }

    const [isOpen, setisOpen] = useState(false)

    function setClose() {
        setisOpen(false)
    }


    const [state, setState] = useState({
        loading: false,
        error: null,
        form: {
            name: "",
            email: "",
            message: "",
        },
    });

    const handleChange = e => {
        setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value
            },
        })
    }


    const handleSubmit = async e => {

        e.preventDefault()


        localStorage.setItem('form', JSON.stringify(state.form))
        if (state.form) {
            setisOpen(true)
        }


    }

    return (
        <Fragment>
            <Flex
                justifyContent="space-between"
                alignItems="flex-start"
                px={['20px', '20px', '160px', '160px', '160px']}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                mb="200px"
            >
                <Center mt={['0px', '0px', '0px', '85px', '85px']} alignItems="flex-start" flexDirection="column" >
                    <Heading as="h3" mb="20px" fontSize="29px" fontFamily="'Montserrat', sans-serif !important" fontWeight="600" >Contact Info</Heading>
                    <ContainerInfo />
                </Center>
                <Center alignItems="flex-start" flexDirection="column" mt="20px">
                    <Heading fontSize={['29px', '29px', '29px', '46px', '46px']} fontFamily="'Montserrat', sans-serif !important" fontWeight="600" position="relative">
                        Contact Hear
                        <Image src={arrowDown} position="absolute" right="-70px" top="0" />
                    </Heading>
                    <ContactForm
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        formValues={state.form}
                    >
                        <Box mt="20px" mx={['auto', 'auto', 'auto', '0px', '0px']} >
                            <Btn
                                title={'send messsage'}
                                bgColor={'transparent'}
                                bgHoverColor={'#ff2600'}
                                textColor={'#ff2600'}
                                textHoverColor={'white'}
                                borderColor={'#ff2600'}
                                modifyBorderColor={'#ff2600'}
                                type={'submit'}
                            />
                        </Box>
                    </ContactForm>

                    <Modal isOpen={isOpen} onClose={setClose} >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader bgColor="#ff2600" >
                                <Logo
                                    wSize={'100px'}
                                    hSize={'50px'}
                                />
                            </ModalHeader>
                            <ModalCloseButton color="white" />
                            <ModalBody textAlign="center" lineHeight="30px" mt="20px">
                                {`Hello ${user.name}, Thank you for sending your request in a few minutes you will be attended`}
                            </ModalBody>

                            <ModalFooter>
                                <Box onClick={setClose}>
                                    <Btn
                                        title={'close'}
                                        bgColor={'white'}
                                        bgHoverColor={'#ff2600'}
                                        textColor={'#ff2600'}
                                        textHoverColor={'white'}
                                        borderColor={'#ff2600'}
                                        modifyBorderColor={'#ff2600'}
                                    />
                                </Box>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </Center>
            </Flex>
        </Fragment>
    );
}
