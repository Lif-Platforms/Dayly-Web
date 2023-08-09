function log_out() {
    document.cookie = `LIF_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `LIF_USERNAME=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default log_out;