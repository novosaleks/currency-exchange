const sortByFavorite = arr => {
    return arr.sort((prev, cur) => {
        if (prev.favorite !== cur.favorite) {
            return cur.favorite - prev.favorite;
        }
        return prev.idx - cur.idx;
    });
};

export {
    sortByFavorite
};