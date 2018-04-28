const isEmpty = (data) => {
    if (null === data || undefined === data || '' === data) {
        return true;
    }
    return false;
};

export {
    isEmpty
};
