    // Respuestas predefinidas del chatbot
    const responses = {
        "hola": ["¡Hola!", "¡Hola! ¿Cómo estás?", "¡Hola! ¿En qué puedo ayudarte?", "Hola, ¿qué tal?", "¡Saludos!", "¡Hola! ¿Qué tal?", "¡Buen día!", "¡Hola! ¿Qué hay de nuevo?", "¡Hola! ¿Cómo puedo ayudarte?", "Hola, ¿qué necesitas?", "¡Hey!", "¿Qué onda?", "¡Hola! ¿Qué hay?", "¡Hola! ¡Qué bueno verte!", "¡Hola! ¿Qué cuentas?", "¡Hola! ¿Qué pasa?", "¡Hola! ¿Cómo va?", "¡Hola! ¿En qué andas?", "¡Hola! ¿Qué haces?", "¡Hola! ¿Qué te trae por aquí?"],
        "como estas": ["Estoy bien, gracias por preguntar.", "¡Muy bien, gracias!", "Todo bien, ¿y tú?", "¡Genial, gracias!", "Estoy bien, ¿y tú?", "Me encuentro bien, ¿y tú?", "Excelente, gracias.", "Más o menos, gracias por preguntar.", "Bien, gracias.", "Bien, ¿y tú?", "Estoy estupendamente, gracias.", "Muy bien, ¿y tú?", "No me puedo quejar, ¿y tú?", "Estupendamente, gracias.", "Estoy en la gloria, ¿y tú?", "De maravilla, gracias.", "¡Fantástico, gracias!", "No tan bien, gracias.", "Bien, ¿qué hay de nuevo?", "Bien, ¿cómo te va?"],
        "adios": ["¡Hasta luego!", "¡Adiós!", "¡Nos vemos!", "¡Hasta pronto!", "¡Chao!", "¡Adiós! ¡Que tengas un buen día!", "¡Hasta la próxima!", "¡Nos vemos luego!", "¡Adiós! ¡Cuídate!", "¡Hasta la vista!", "¡Hasta pronto! ¡Que tengas un buen día!", "¡Chau!", "¡Adiós! ¡Nos vemos pronto!", "¡Nos vemos más tarde!", "¡Adiós! ¡Que te vaya bien!", "¡Nos vemos pronto! ¡Cuídate!", "¡Hasta luego! ¡Cuídate!", "¡Adiós! ¡Hasta la próxima!", "¡Nos vemos después!", "¡Que tengas un buen día! ¡Adiós!"],
        "fecha del evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "fecha": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "fecha ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando será el evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando será ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando se llevara acabo el evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando se llevara acabo el evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando se llevará acabo el evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando se llevará acabo": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando se llevará acabo ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "me das la fecha del evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "me compartes la fecha del evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "dime la fecha del evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "quiero la fecha del evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "dame la fecha del evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "requiero la fecha del evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "me das la fecha del evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "me compartes la fecha del evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "dime la fecha del evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "quiero la fecha del evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "dame la fecha del evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "requiero la fecha del evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito la fecha del evento ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito la fecha": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito la fecha ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "busco la fecha ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "ando buscando la fecha": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "comparteme la fecha": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "dame la fecha": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "solicito la fecha": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito la fecha ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando es el evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuando sera el evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "me puedes compartir la fecha del evento": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "comparte la fecha ti": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],



        "quiero contactarme con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "quiero hablar con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito contactarme con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito hablar con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuales son los contactos de soporte": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito comunicarme con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "quiero comunicarme con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "requiero comunicarme con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "charlar con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "hablar con alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuales son los numeros de atencion a clientes": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "cuales son los contactos de atencion": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "quiero hablar con un humano": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "quiero hablar con una persona": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "me compartes algun contacto": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito el contacto de alguien": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "necesito hablar con alguna persona": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "atencion a clientes": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],
        "soporte tecnico": [
            "El evento TI ha concluido. ¡Gracias a todos los participantes! Estén atentos para la próxima entrega en 2025.",
            "El evento TI ha finalizado. ¡Agradecemos a todos los asistentes! Los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha concluido. ¡Gracias por ser parte de ello! No se pierdan la próxima oportunidad en 2025.",
            "El evento TI ha terminado. Agradecemos su participación y los invitamos cordialmente a unirse a nosotros nuevamente en 2025.",
            "El evento TI ha llegado a su fin. ¡Gracias a todos por su participación! Esperamos verlos de nuevo en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los participantes y esperamos verlos de nuevo en 2025.",
            "El evento TI ha finalizado. ¡Gracias a todos por hacerlo posible! Los esperamos en nuestro próximo evento en 2025.",
            "El evento TI ha concluido. Agradecemos su participación y los esperamos en nuestra próxima edición en 2025.",
            "El evento TI ha terminado. ¡Gracias por asistir! No se pierdan la próxima entrega en 2025.",
            "El evento TI ha concluido. Agradecemos a todos los que participaron. ¡Nos vemos en 2025!"
        ],



        "necesito el correo de araceli": [
            "Por supuesto, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas comunicarte, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si deseas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Hola! ¿Necesitas contactar a alguien? Puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Claro, el correo de contacto es araceli.hernandez@mundoejecutivo.com.mx si deseas comunicarte",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Por supuesto, si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte",
            "Si necesitas ponerte en contacto, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Necesitas contactar a alguien? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Claro! Si necesitas comunicarte, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si deseas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Por supuesto! Si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda o tienes preguntas, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si necesitas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte"
        ],
        "comparte el correo de araceli": [
            "Por supuesto, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas comunicarte, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si deseas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Hola! ¿Necesitas contactar a alguien? Puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Claro, el correo de contacto es araceli.hernandez@mundoejecutivo.com.mx si deseas comunicarte",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Por supuesto, si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte",
            "Si necesitas ponerte en contacto, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Necesitas contactar a alguien? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Claro! Si necesitas comunicarte, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si deseas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Por supuesto! Si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda o tienes preguntas, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si necesitas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte"
        ],
        "correo de araceli": [
            "Por supuesto, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas comunicarte, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si deseas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Hola! ¿Necesitas contactar a alguien? Puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Claro, el correo de contacto es araceli.hernandez@mundoejecutivo.com.mx si deseas comunicarte",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Por supuesto, si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte",
            "Si necesitas ponerte en contacto, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Necesitas contactar a alguien? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Claro! Si necesitas comunicarte, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si deseas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Por supuesto! Si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda o tienes preguntas, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si necesitas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte"
        ],
        "comparteme el correo de araceli": [
            "Por supuesto, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas comunicarte, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si deseas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Hola! ¿Necesitas contactar a alguien? Puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Claro, el correo de contacto es araceli.hernandez@mundoejecutivo.com.mx si deseas comunicarte",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Por supuesto, si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte",
            "Si necesitas ponerte en contacto, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Necesitas contactar a alguien? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Claro! Si necesitas comunicarte, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si deseas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Por supuesto! Si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda o tienes preguntas, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si necesitas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte"
        ],
        "necesito el correo de araceli": [
            "Por supuesto, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas comunicarte, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si deseas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Hola! ¿Necesitas contactar a alguien? Puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Claro, el correo de contacto es araceli.hernandez@mundoejecutivo.com.mx si deseas comunicarte",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Por supuesto, si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte",
            "Si necesitas ponerte en contacto, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Necesitas contactar a alguien? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Claro! Si necesitas comunicarte, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si deseas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Por supuesto! Si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda o tienes preguntas, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si necesitas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte"
        ],
        "requiero el correo de araceli": [
            "Por supuesto, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas comunicarte, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si deseas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Hola! ¿Necesitas contactar a alguien? Puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Claro, el correo de contacto es araceli.hernandez@mundoejecutivo.com.mx si deseas comunicarte",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Por supuesto, si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte",
            "Si necesitas ponerte en contacto, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Necesitas contactar a alguien? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Claro! Si necesitas comunicarte, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si deseas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Por supuesto! Si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda o tienes preguntas, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si necesitas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte"
        ],
        "contacto de araceli": [
            "Por supuesto, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas comunicarte, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si deseas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Hola! ¿Necesitas contactar a alguien? Puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Claro, el correo de contacto es araceli.hernandez@mundoejecutivo.com.mx si deseas comunicarte",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda, puedes contactar a Araceli Hernández en araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Por supuesto, si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte",
            "Si necesitas ponerte en contacto, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Necesitas contactar a alguien? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Puedes comunicarte con Araceli Hernández enviando un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Claro! Si necesitas comunicarte, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si deseas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¿Quieres ponerte en contacto? El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "¡Por supuesto! Si necesitas contactar a alguien, el correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx",
            "Si necesitas ayuda o tienes preguntas, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "Estoy aquí para ayudarte. Si necesitas contactar a alguien, puedes enviar un correo a araceli.hernandez@mundoejecutivo.com.mx",
            "¡Sin problema! El correo de Araceli Hernández es araceli.hernandez@mundoejecutivo.com.mx si necesitas comunicarte"
        ],
        "default": ["No entendí lo que dijiste. ¿Puedes ser más claro?", "No estoy seguro de entender. ¿Podrías reformular tu pregunta?", "Lo siento, no comprendo. ¿Puedes explicarlo de otra manera?", "Esa pregunta me dejó perplejo. ¿Podrías intentar de nuevo?", "No tengo una respuesta para eso. ¿Puedes preguntar algo diferente?", "Me temo que no entiendo. ¿Podrías decirlo de otra manera?", "No tengo ni idea de lo que estás hablando. ¿Podrías elaborar?", "Eso es un misterio para mí. ¿Puedes ser más específico?", "No tengo una respuesta para eso en este momento. ¿Puedes hacer otra pregunta?", "No logro entender. ¿Podrías ser más claro?"]
    };



    function sendMessage() {
        const userInput = document.getElementById("userInput").value.trim();
        if (userInput === "") {
            document.getElementById("userInput").style.borderColor = "#b92d2d";
            setTimeout(function() {
                document.getElementById("userInput").style.borderColor = "#cccccc";
            }, 4000); // Cambiar el color del borde de vuelta a #ccc después de 5 segundos
            return;
        } else {
            document.getElementById("userInput").style.borderColor = ""; // Restaurar el color de borde predeterminado
            document.getElementById("id_contenedor_imagen_fondo_ia_box").style.display = "none";

        }

        // Obtener el mensaje del usuario y convertirlo a minúsculas, sin acentos y sin caracteres especiales
        let userInputNormalized = normalizeString(userInput);
        // Agregar el mensaje del usuario al chatbox con clase user-message
        appendMessage("Tú: " + userInputNormalized, "user-message");

        // Verificar si hay una respuesta predefinida para el mensaje del usuario
        if (responses[userInputNormalized]) {
            const botResponses = responses[userInputNormalized];
            // Seleccionar una respuesta aleatoria de las respuestas disponibles
            const randomIndex = Math.floor(Math.random() * botResponses.length);
            const botResponse = botResponses[randomIndex];
            // Agregar la respuesta del bot al chatbox con clase bot-message
            appendMessage("Chatbot: " + botResponse, "bot-message");
        } else {
            // Seleccionar una respuesta aleatoria para cuando no se entienda el mensaje del usuario
            const defaultResponses = responses["default"];
            const randomIndex = Math.floor(Math.random() * defaultResponses.length);
            const botResponse = defaultResponses[randomIndex];
            // Agregar la respuesta del bot al chatbox con clase bot-message
            appendMessage("Chatbot: " + botResponse, "bot-message");
        }

        // Limpiar el campo de entrada después de enviar el mensaje
        document.getElementById("userInput").value = "";
    }

    function appendMessage(message, messageClass) {
        const chatbox = document.getElementById("chatbox");
        const newMessage = document.createElement("p");
        newMessage.textContent = message;
        newMessage.classList.add(messageClass); // Agregar la clase correspondiente
        chatbox.appendChild(newMessage);

        // Hacer scroll automáticamente hacia abajo para mostrar el último mensaje
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function normalizeString(str) {
        // Eliminar caracteres especiales, signos de puntuación y convertir a minúsculas
        let normalizedStr = str.normalize("NFD").replace(/[\u0300-\u036f.,\/#!$%\^&\*;:{}=\-_`~()¿¡]/g, "").toLowerCase();
        // Eliminar palabras específicas como "por favor"
        normalizedStr = normalizedStr.replace(/\bpor\s*favor\b/g, "").trim();
        // Retornar el resultado
        return normalizedStr;
    }
