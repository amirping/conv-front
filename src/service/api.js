const url_service = 'http://127.0.0.1:3000/'

export const service_1_conv = (q,f,t) => {

    const url_access = `${url_service}service_1?quantity=${q}&fromU=${f}&toU=${t}`
    return fetch(url_access, {
        method: 'GET',
    }).then(
        response => response.json()
    )
}

export const service_2_conv = (q,tm) => {

    const url_access = `${url_service}service_2?quantity=${q}&toMaterial=${tm}`
    return fetch(url_access, {
        method: 'GET',
    }).then(
        response => response.json()
    )
}

export const service_3_conv = (q,f,t) => {

    const url_access = `${url_service}service_3?quantity=${q}&fromU=${f}&toU=${t}`
    return fetch(url_access, {
        method: 'GET',
    }).then(
        response => response.json()
    )
}
