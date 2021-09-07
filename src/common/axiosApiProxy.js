import axios from "axios";

export function get(url, onResponse) {
    axios.get(url)
        .then((response) => {
            onResponse(response);
        })
        .catch(error => {
            console.log("error", error);
        });
}