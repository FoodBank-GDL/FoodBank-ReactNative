import {
    View,
    Text
} from "react-native";
import DonationsComponent from "./DonationsComponent";

const data = [
    {
        "user": {
            "email": "donatingUser@user.com",
            "nombre": "Emilio Donador",
            "userId": "zs60hsrlK6TTrTzN7P8wXlKMlUZ2",
            "telefono": "123456789"
        },
        "estado": "pendiente",
        "donaciones": [
            {
                "cantidad": 5,
                "campaignId": "NcbSs5ml72TqTpg26Kzc",
                "userId": "zs60hsrlK6TTrTzN7P8wXlKMlUZ2",
                "medida": "Unidades",
                "producto": "Sobres del Mundial",
                "estado": "completado"
            },
            {
                "estado": "pendiente",
                "campaignId": "NcbSs5ml72TqTpg26Kzc",
                "userId": "zs60hsrlK6TTrTzN7P8wXlKMlUZ2",
                "medida": "Unidades",
                "producto": "Paquetes de botellas de agua",
                "cantidad": 4
            },
            {
                "campaignId": "NcbSs5ml72TqTpg26Kzc",
                "medida": "Kg",
                "cantidad": 2,
                "estado": "pendiente",
                "producto": "Aguacates",
                "userId": "zs60hsrlK6TTrTzN7P8wXlKMlUZ2"
            },
            {
                "campaignId": "NcbSs5ml72TqTpg26Kzc",
                "userId": "zs60hsrlK6TTrTzN7P8wXlKMlUZ2",
                "medida": "Unidades",
                "estado": "pendiente",
                "producto": "Latas de Atun",
                "cantidad": 15
            }
        ]
    },
    {
        "user": {
            "userId": "JhcZP5uKzORJ3x0aKPvNfXO0Qoi1",
            "telefono": "123456789",
            "email": "examplecris@user.com",
            "nombre": "Usuario de Ejemplo"
        },
        "estado": "pendiente",
        "donaciones": [
            {
                "cantidad": 50,
                "userId": "JhcZP5uKzORJ3x0aKPvNfXO0Qoi1",
                "producto": "doritos",
                "medida": "bolsas",
                "estado": "pendiente",
                "campaignId": "NcbSs5ml72TqTpg26Kzc"
            },
            {
                "campaignId": "NcbSs5ml72TqTpg26Kzc",
                "producto": "manzanas",
                "userId": "JhcZP5uKzORJ3x0aKPvNfXO0Qoi1",
                "estado": "pendiente",
                "cantidad": 20,
                "medida": "KG"
            }
        ]
    },
    {
        "user": {
            "email": "donatingUser2@user.com",
            "nombre": "Santiago Donador",
            "telefono": "123456789",
            "userId": "pysiNsIu8vhMeLK96bVTyYOnHNI3"
        },
        "estado": "completado",
        "donaciones": [
            {
                "userId": "pysiNsIu8vhMeLK96bVTyYOnHNI3",
                "medida": "Unidades",
                "producto": "Camisas Polo",
                "campaignId": "NcbSs5ml72TqTpg26Kzc",
                "cantidad": 3,
                "estado": "completado"
            },
            {
                "estado": "completado",
                "producto": "Mangos",
                "campaignId": "NcbSs5ml72TqTpg26Kzc",
                "cantidad": 7,
                "userId": "pysiNsIu8vhMeLK96bVTyYOnHNI3",
                "medida": "Kg"
            },
            {
                "campaignId": "NcbSs5ml72TqTpg26Kzc",
                "userId": "pysiNsIu8vhMeLK96bVTyYOnHNI3",
                "medida": "Unidades",
                "estado": "completado",
                "producto": "Magic keyboards",
                "cantidad": 2
            }
        ]
    }
]

const DonationsContainer = ({ }) => {

    return (
        <DonationsComponent data={data} />
    );
};

export default DonationsContainer
