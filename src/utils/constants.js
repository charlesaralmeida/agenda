export const COLORS = {
    PRIMARY: '#002C52',
    SECONDARY: '#002c5233',
    RED: '#9E2727',
    GREEN: '#499a26',
    WHITE: '#ffffff',
    YELLOW: '#e4df1c',
}

export const ICONS = {
    PERSON: 'fa-person',
    CUBE: 'fa-cube',
    FILE_LINES: 'fa-file-lines',
    PLANE: 'fa-plane',
    CAR: 'fa-car',
    KOMBI: 'fa-truck-field',
    FURGAO: 'fa-truck',
    VAN: 'fa-van-shuttle',
    BUS: 'fa-bus',
    BUS_SIMPLE: 'fa-bus-simples',
    CIRCLE_ARROW_LEFT: 'fa-circle-arrow-left',
    CIRCLE_ARROW_RIGHT: 'fa-circle-arrow-right',
    CIRCLE_X_MARK: 'fa-circle-xmark',
    CIRCLE_PLUS: 'fa-circle-plus',
    SQUARE_CHECK: 'fa-square-check',
}

export const LABELS = {
    TIPO_TRANSPORTE: 'Tipo de Transporte',
    TIPO_VEICULO: 'Tipo de Veículo',
    TIPO_BUS: 'Tipo de Ônibus',
    EMBARQUE: 'Embarque',
    LOCAL_RETIRADA: 'Local de Retirada',
    LOCAL_ENTREGA: 'Local de Entrega',
    FINAL_DESTINATION: 'Destino Final',
    INTERMEDIATE_DESTINATION: 'Destino Intermediário',
    PASSENGERS: 'Passageiros',
    PASSAGEIRO_RESPONSAVEL: 'Passageiro Responsável',
    PASSENGERS_LIST: 'Lista de Passageiros',
    OTHER_INFO: 'Outras Informações',
}

export const SUBLABELS = {
    FINAL_DESTINATION: '(último local antes de retornar)',
    INTERMEDIATE_DESTINATION: '(deixe em branco se nenhum)',
    PASSENGERS: '(adicione todos os passageiros)',
    PASSAGEIRO_RESPONSAVEL: '(um ou mais contato(s) de emergência)',
    BUS: '(mais informações em "Ajuda" acima)',
}

export const LINKS = {
    DGA: 'https://www.dga.unicamp.br/',
    USER: {
        INICIO: '/transportes/agenda',
        AGENDAR: '/transportes/agenda/agendar',
        LOCALIZAR: '/transportes/agenda/localizar',
        AJUDA: '/transportes/agenda/ajuda',
    },
}

export const BUTTONS = {
    LOGIN: 'Conectar',
    LOGOUT: 'Desconectar',
}

export const PAGES = {
    BOARDING_INFO: 'BoardingInfoPage',
    FINAL_DESTINATION_INFO: 'FinalDestinationInfoPage',
    INTERMEDIATE_DESTINATION_INFO: 'IntermediateDestinationInfoPage',
    OTHER_INFORMATIONS: 'OtherInformationsPage',
    PASSENGERS: 'PassengersPage',
    PASSENGERS_SHEET: 'PassengersSheetPage',
    RESPONSAVEL: 'ResponsavelPage',
    TRANSPORT_TYPE: 'TransportTypePage',
    VEHICLE_TYPE: 'VehicleTypePage',
    CONFIRMATION: 'ConfirmationPage',
    BUS_TYPE: 'BusTypePage',
}

export const TRANSPORT_TYPE = {
    PASSAGEIRO: 'Passageiro',
    CARGA: 'Carga',
    DOCUMENTO: 'Documento',
    TRANSLADO: 'Translado Aeroporto',
    EMPRESTIMO: 'Empréstimo de veículo',
}

export const VEHICLE_TYPE = {
    CARRO: 'Carro',
    KOMBI: 'Kombi',
    FURGAO: 'Furgão',
    VAN: 'Van Executiva',
    ONIBUS: 'Ônibus',
}

export const BUS_TYPE = {
    BUS: 'Ônibus Convencional',
    BUS_EXECUTIVE: 'Ônibus Executivo',
    BUS_MICRO: 'Micro-ônibus',
}

export const VINCULO_TYPE = {
    SERVIDOR_UNICAMP: 'Servidor Unicamp',
    SERVIDOR_FUNCAMP: 'Servidor Funcamp',
    PROFESSOR_UNICAMP: 'Professor Unicamp',
    ALUNO_UNICAMP: 'Aluno Unicamp',
    OUTRO: 'Outro',
}

export const VINCULO_TYPE_RESPONSAVEL = {
    SERVIDOR_UNICAMP: 'Servidor Unicamp',
    SERVIDOR_FUNCAMP: 'Servidor Funcamp',
    PROFESSOR_UNICAMP: 'Professor Unicamp',
    ALUNO_UNICAMP: 'Aluno Unicamp',
}

export const TITLES = {}

export const PROGRESS_RATE = 16.7
//numero maximo de contatos de responsaveis
export const MAX_RESPONSAVEL = 5

export const VALID_SHEET_HEADERS = {
    PASSENGERS_SHEET: ['Nome', 'RG', 'Orgao_Emissor_RG'],
}

export const MESSAGES = {
    UPLOAD_LISTA_PASSAGEIROS: {
        TITLE: 'Lista de passageiros',
    },
    DATA_SAVED: {
        TITLE: 'Concluído',
        TEXT: 'Dados salvos com sucesso',
    },
    ERROR: {
        FILE_READ: {
            TITLE: 'Atenção',
            TEXT: 'Erro ao ler arquivo',
        },
        FIELDS_LISTA_PASSAGEIROS: {
            TITLE: 'Atenção',
            TEXT: 'Arquivo inválido. Verifique o preenchimento completo da planilha',
        },
        FILE_UPLOAD_TYPE: {
            TITLE: 'Atenção',
            TEXT: 'Arquivo inválido. Utilize o modelo disponível para download',
        },
        ADRESS_EMPTY: {
            TITLE: 'Atenção',
            TEXT: 'UF, Cidade e Endereço são obrigatórios',
        },
        ESTIMATED_TIME_EMPTY: {
            TITLE: 'Atenção',
            TEXT: 'Deve ser informado o tempo estimado de permanência',
        },
        PASSENGER_FIELD_EMPTY: {
            TITLE: 'Atenção',
            TEXT: 'Todos os campos devem ser preenchidos',
        },
        SAVING_DATA: {
            TITLE: 'Atenção!',
            TEXT: 'Erro ao salvar dados',
        },
        DATA_EMBARQUE: {
            TITLE: 'Atenção',
            TEXT: 'A data de embarque não pode ser anterior à data atual',
        },
        HORA_EMBARQUE: {
            TITLE: 'Atenção',
            TEXT: 'A data e a hora de embarque não podem ser anteriores à data e à hora atuais',
        },
        UF_EMBARQUE: {
            TITLE: 'Atenção',
            TEXT: 'A UF de embarque deve ser selecionada',
        },
        CIDADE_EMBARQUE: {
            TITLE: 'Atenção',
            TEXT: 'A cidade de embarque deve ser selecionada',
        },
        ENDERECO_EMBARQUE: {
            TITLE: 'Atenção',
            TEXT: 'O endereço de embarque deve ser preenchido',
        },
        DATA_RETIRADA: {
            TITLE: 'Atenção',
            TEXT: 'A data de retirada não pode ser anterior à data atual',
        },
        HORA_RETIRADA: {
            TITLE: 'Atenção',
            TEXT: 'A data e a hora de retirada não podem ser anteriores à data e à hora atuais',
        },
        UF_RETIRADA: {
            TITLE: 'Atenção',
            TEXT: 'A UF do local de retirada deve ser selecionada',
        },
        CIDADE_RETIRADA: {
            TITLE: 'Atenção',
            TEXT: 'A cidade do local de retirada deve ser selecionada',
        },
        ENDERECO_RETIRADA: {
            TITLE: 'Atenção',
            TEXT: 'O endereço do local de retirada deve ser preenchido',
        },
        DESTINO_INTERMEDIARIO_CONFIRMACAO: {
            TITLE: 'Atenção',
            TEXT: 'Se deseja incluir o endereço intermediário, deve adicioná-lo clicando no botão "+". Caso negativo, confirme novamente o agendamento',
        },
        UF_FINAL: {
            TITLE: 'Atenção',
            TEXT: 'A UF do destino final deve ser selecionada',
        },
        CIDADE_FINAL: {
            TITLE: 'Atenção',
            TEXT: 'A cidade do destino final deve ser selecionada',
        },
        ENDERECO_FINAL: {
            TITLE: 'Atenção',
            TEXT: 'O endereço do destino final deve ser preenchido',
        },
        UF_ENTREGA: {
            TITLE: 'Atenção',
            TEXT: 'A UF do local de entrega deve ser selecionada',
        },
        CIDADE_ENTREGA: {
            TITLE: 'Atenção',
            TEXT: 'A cidade do local de entrega deve ser selecionada',
        },
        ENDERECO_ENTREGA: {
            TITLE: 'Atenção',
            TEXT: 'O endereço do local de entrega deve ser preenchido',
        },
        PASSAGEIRO_CONFIRMACAO: {
            TITLE: 'Atenção',
            TEXT: 'Se deseja incluir o passageiro, deve adicioná-lo clicando no botão "+". Caso negativo, confirme novamente o agendamento',
        },
        PASSAGEIRO_CONFIRMACAO_NENHUM_PASSAGEIRO: {
            TITLE: 'Atenção',
            TEXT: 'Se deseja incluir o passageiro, deve adicioná-lo clicando no botão "+". É necessario incluir ao menos um passageiro',
        },
        DATA_RETORNO: {
            TITLE: 'Atenção',
            TEXT: 'A data de retorno não pode ser anterior à data de embarque',
        },
        HORA_RETORNO: {
            TITLE: 'Atenção',
            TEXT: 'A data e a hora de retorno não podem ser anteriores à data e à hora de embarque',
        },
        FINALIDADE_VIAGEM: {
            TITLE: 'Atenção',
            TEXT: 'É necessario informar a finalidade da viagem na tela "Outras Informações"',
        },
        DATA_RETORNO_CARGO: {
            TITLE: 'Atenção',
            TEXT: 'A data de retorno não pode ser anterior à data de retirada',
        },
        HORA_RETORNO_CARGO: {
            TITLE: 'Atenção',
            TEXT: 'A data e a hora de retorno não podem ser anteriores à data e à hora de retirada',
        },
        FINALIDADE_VIAGEM_CARGO: {
            TITLE: 'Atenção',
            TEXT: 'É necessario informar a finalidade do transporte na tela "Outras Informações"',
        },
        NENHUM_PASSAGEIRO: {
            TITLE: 'Atenção',
            TEXT: 'É necessario informar ao menos um passageiro',
        },
        RESPONSAVEL_CONFIRMACAO: {
            TITLE: 'Atenção',
            TEXT: 'Se deseja incluir o passageiro responsável, deve adicioná-lo clicando no botão "+". Caso negativo, confirme novamente o agendamento',
        },
        RESPONSAVEL_CONFIRMACAO_NENHUM_RESPONSAVEL: {
            TITLE: 'Atenção',
            TEXT: 'Se deseja incluir o passageiro responsável, deve adicioná-lo clicando no botão "+". É necessario incluir ao menos um passageiro responsável',
        },
        NENHUM_RESPONSAVEL: {
            TITLE: 'Atenção',
            TEXT: 'É necessario informar ao menos um passageiro responsável',
        },
        DATA_DEVOLUCAO_EMPRESTIMO: {
            TITLE: 'Atenção',
            TEXT: 'A data de devolução não pode ser anterior à data de retirada',
        },
        DATA_DEVOLUCAO_EMPRESTIMO_VAZIA: {
            TITLE: 'Atenção',
            TEXT: 'A data de devolução deve ser selecionada',
        },
        DATA_RETIRADA_EMPRESTIMO_VAZIA: {
            TITLE: 'Atenção',
            TEXT: 'A data de retirada deve ser selecionada',
        },
    },
}
