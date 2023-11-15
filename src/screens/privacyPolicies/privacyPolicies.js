import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const PrivacyPolicies = () => {

        return (
                <View style={styles.container}>
                        <View style={styles.content}>
                                <ScrollView>
                                        <Text style={styles.title}>Politicas de privacidad</Text>
                                        <Text style={styles.textContent}>Xochilcalli, mejor conocido como la casa
                                                de las flores con domicilio en Avenida los
                                                tres Mineros número 16, Colonia Juarez,
                                                Ciudad Municipio de Huautla, municipio
                                                o delegación Huautla, código postal 43050,
                                                en el estado de Hidalgo, es responsable del
                                                uso, tratamiento y protección de aquellos
                                                datos personales a que tuviere acceso para
                                                brindarle algún servicio y/o la venta de
                                                productos (de ahora en adelante y de forma
                                                conjunta "datos personales"), los cuales
                                                serán tratados de forma confidencial de
                                                conformidad con lo señalado en este
                                                Aviso de Privacidad y bajo los principios
                                                señalados en la Ley Federal de Datos
                                                Personales en Posesión de los Particulares
                                                ("LFPDPPPP"), su Reglamento, lineamientos
                                                y disposiciones secundarias.</Text>
                                        <Text style={styles.title}>Uso y fin de la información</Text>
                                        <Text style={styles.textContent}>La Empresa se compromete a no compartir la información confidencial proporcionada por el usuario,
                                                con ningún tercero, excepto que tenga autorización de éste, pues es quien acepta el tratamiento de los mismos y autoriza su uso cuando los proporciona,
                                                a través de los diferentes medios de conformidad con los términos de esta política.</Text>
                                        <View style={{ gap: 10 }}>
                                                <Text style={styles.textContent}>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades, mismas que son necesarias para brindarle algún servicio o la venta de productos:</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Compraventa de productos y/o prestación de servicios.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Envío de publicidad bajo cualquier medio de comunicación.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Implementación de mejoras en productos y servicios.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Procesos administrativos como devoluciones, facturaciones, históricos de compras, procesamiento de solicitudes, cobro, aclaraciones, investigación, órdenes de compra.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Comunicar ofertas y promociones direccionadas.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Invitaciones a eventos especiales y sorteos en redes sociales.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Atención al cliente.</Text>
                                        </View>
                                        <Text style={styles.title}>Datos personales que podemos obtener</Text>
                                        <View style={{ gap: 10 }}>
                                                <Text style={styles.textContent}>{'\u2022'}Datos Generales (Nombre completo, Edad, Fecha de Nacimiento, Sexo, RFC).</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Datos de Domicilio (CP, Estado, Ciudad, Municipio, Colonia, Calle, Número exterior).</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Datos de contacto(Correo electrónico, Teléfono).</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Datos financieros: (Número de Tarjeta bancaria, Vigencia, CVC).</Text>
                                        </View>
                                        <Text style={styles.title}>Derechos de Arco</Text>
                                        <Text style={styles.textContent}>Para el ejercicio de cualquiera de los derechos de Acceso,
                                                Rectificación, Cancelación u Oposición (ARCO), que incluyen revocación o negativa de cualquier consentimiento para el uso,
                                                usted podrá presentar la solicitud respectiva por escrito firmado (1) en el departamento de Atención a Clientes o directamente en las oficinas de El Responsable; o (2) a través del correo electrónico Xochicalliventas@gmail.com
                                                La negativa no podrá ser un motivo para que le neguemos servicios o venta de productos.</Text>
                                        <Text style={[styles.textContent, { marginBottom: 10 }]}>El escrito a que se hace referencia para algún cambio deberá contener e incluir lo siguiente:</Text>
                                        <View style={{ gap: 10 }}>
                                                <Text style={styles.textContent}>{'\u2022'}El nombre completo del titular y su dirección de correo electrónico o domicilio en que desee recibir la respuesta a su solicitud.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Una descripción clara, precisa y específica de los Datos Personales respecto de los que se busca ejercer alguno de los derechos mencionados, así como el detalle de cualquier elemento o documento que facilite la localización de los datos personales.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}Copia legible de una identificación oficial vigente del titular y, tratándose de un trámite llevado a cabo por un representante legal, se deberá adjuntar adicionalmente una carta poder firmada ante 2 testigos o una copia del instrumento público correspondiente, así como una copia de la identificación oficial vigente del representante legal.</Text>
                                                <Text style={styles.textContent}>{'\u2022'}En el caso de un Derecho ARCO de Rectificación de Datos Personales, se deberá adjuntar la documentación que sustente la solicitud.</Text>
                                        </View>
                                        <Text style={[styles.textContent, { marginTop: 10 }]}>Una vez presentada su solicitud en el formato preestablecido, El Responsable, podrá solicitarle en un periodo no mayor a 5 días hábiles, la información o documentación necesaria para su seguimiento,
                                                así como para la acreditación de su identidad, de acuerdo a los términos que marca la Legislación. Por lo que usted contará con 10 días hábiles posteriores a su recepción, para atender este requerimiento. De lo contrario su solicitud se tendrá por no presentada.
                                                En un plazo posterior de 20 días hábiles dicho departamento emitirá una resolución, la cual le será notificada por los medios de contacto que haya establecido en su solicitud. Una vez emitida la resolución y en caso de que la misma sea procedente (parcial o totalmente), El Responsable contará con 15 días hábiles para adoptar dicha resolución. Los términos y plazos indicados en los párrafos anteriores podrán ser ampliados una sola vez en caso de ser necesario y se le deberá notificar a través de los medios de contacto que haya establecido. La revocación y el ejercicio de los Derechos ARCO serán gratuitos, debiendo usted cubrir únicamente los gastos justificados de envío, o el costo de reproducción en copias u otros formatos establecidos en su solicitud. Los Datos Personales
                                                que nos proporcione en su solicitud de Derechos ARCO podrán ser conservados por un período de hasta 5 años en medios físicos y/o electrónicos y posteriormente descartados a efecto de evitar un tratamiento indebido de los mismos.</Text>
                                        <Text style={styles.title}>Consentimiento de tratamiento de datos personales</Text>
                                        <Text style={styles.textContent}>El titular de datos personales manifiesta haber leído y estar de acuerdo con los términos y condiciones del Aviso de Privacidad puesto a su disposición, consintiendo la finalidad de la recolección y tratamiento de sus datos personales, así como el procedimiento para el ejercicio de sus derechos ARCO al proporcionar información a través de cualquier evento, en cualquiera de nuestra tienda, mediante la utilización de nuestros servicios en línea, formularios, correos electrónicos, usted otorga su consentimiento al presente Aviso de Privacidad.</Text>
                                        <Text style={styles.title}>Transferencia de Información</Text>
                                        <Text style={styles.textContent}>El Responsable podrá, para las finalidades citadas, transferir sus datos personales a terceros mexicanos o extranjeros en los que se apoye para su operación, así como sociedades controladoras, controladas, subsidiarias o afiliadas del Responsable, o a una sociedad matriz de conformidad con el Artículo 37 de la LFPDPPP y su Reglamento.</Text>
                                        <Text style={[styles.textContent, { marginTop: 10 }]}>Asimismo, nos autorizas a contactarte a través de medios digitales tales como email, Facebook, mensajes de texto (SMS), o WhatsApp u otras plataformas similares, al número de celular que nos entregues, con el objeto de hacerte llegar información relacionada con las finalidades que</Text>
                                        <Text style={styles.title}>No autorización de Transferencia</Text>
                                        <Text style={styles.textContent}>Si usted no manifiesta su negativa para dichas transferencias en los formatos habilitados en el departamento de Atención a Clientes o directamente en las oficinas de El Responsable o a través del correo electrónico xochilcalliventas@gmail.com, entenderemos que le ha autorizado.</Text>
                                        <Text style={styles.title}>Definición de consulta</Text>
                                        <Text style={styles.textContent}>El usuario puede consultar mediante nuestro correo de la empresa acerca de si puede haber modificaciones acerca de nuestras políticas de privacidad y como se estrían empleando, si llegara a tener algún inconveniente. Estas modificaciones estarán disponibles al público a través de nuestro sitio web o publicidad relacionada hacia nuestros servicios que estamos otorgando a nuestros usuarios.</Text>
                                        <Text style={styles.title}>Tecnologías de Rastreo o cookies</Text>
                                        <Text style={styles.textContent}>En nuestra página de Internet utilizamos cookies a través de las cuales es posible monitorear sus visitas como usuario de Internet, brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página, así como ofrecerle a través de banners promocionales nuevos productos y servicios basados en sus preferencias. Los datos personales que podríamos obtener de estas tecnologías de rastreo son los siguientes: Horario de navegación, tiempo de navegación en nuestra página de Internet, secciones consultadas. Nuestro portal tiene ligas a otros sitios externos, de los cuales el contenido y políticas de privacidad no son responsabilidad del Responsable.</Text>
                                        <Text style={[styles.textContent, { marginTop: 10 }]}>Por si tiene duda de que es una cookie, es un pequeño archivo removible de datos que es guardado por su navegador de internet en su computadora u ordenador. Las cookies le permiten establecer un orden en nuestro sitio de internet y nos permiten personalizar su navegación en línea y su experiencia de compra.</Text>
                                        <Text style={styles.title}>Mención de actualización al Aviso de Privacidad</Text>
                                        <Text style={styles.textContent}>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad o por cambios en nuestro modelo de negocio.</Text>
                                        <Text style={[styles.textContent, { marginTop: 10 }]}>Contamos con controles internos en el manejo de la información y medidas de seguridad, incluyendo herramientas para encriptar y autentificar información que mantienen su información personal a salvo. Sus datos personales se procesan a través de sistemas de redes seguros y solamente puede acceder a ella un número limitado de personas con derechos especiales, a quienes se les exige que mantengan dicha información confidencial. Toda la información que usted proporciona acerca de su tarjeta de crédito se transmite a través de tecnología SSL (Secure Socket Layer) y es encriptada para poder acceder a ella sólo mediante el sistema ya descrito, esto más que nada lo hacemos por protocolos de seguridad.</Text>

                                </ScrollView>
                        </View>
                </View>
        )
}


const styles = StyleSheet.create({
        container: {
                flex: 1,
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 80
        },
        content: {
                width: '90%',
                backgroundColor: 'white',
                borderRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                        width: 0,
                        height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                padding: 10,
                elevation: 5,
                gap: 10,
        },
        textContent: {
                textAlign: 'justify',
                fontSize: 18,
        },
        title: {
                width: '100%',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                textAlign: 'center',
                paddingVertical: 10,
        }
})

export default PrivacyPolicies